import { GITHUB_TOKEN, GITHUB_USERNAME } from "@/lib/env"

interface RepositoryContribution {
  name: string
  commits: number
  lastContribution: Date
}

interface CommitStats {
  additions: number
  deletions: number
  total: number
}

interface GitHubContributions {
  totalCommits: number
  restrictedContributions: number
  issues: number
  pullRequests: number
  pullRequestReviews: number
  linesChanged: {
    additions: number
    deletions: number
    total: number
  }
  repositories: RepositoryContribution[]
}

async function getCommitStats(owner: string, repo: string, token: string): Promise<CommitStats> {
  const query = `{
    repository(owner: "${owner}", name: "${repo}") {
      defaultBranchRef {
        target {
          ... on Commit {
            history(since: "${new Date(new Date().setFullYear(new Date().getFullYear() - 1)).toISOString()}") {
              totalCount
              nodes {
                additions
                deletions
              }
            }
          }
        }
      }
    }
  }`

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  })

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.statusText}`)
  }

  const { data, errors } = await response.json()

  if (errors) {
    throw new Error(`GitHub API error: ${errors[0].message}`)
  }

  const history = data.repository?.defaultBranchRef?.target?.history
  if (!history) {
    return { additions: 0, deletions: 0, total: 0 }
  }

  return history.nodes.reduce(
    (acc: CommitStats, node: any) => ({
      additions: acc.additions + node.additions,
      deletions: acc.deletions + node.deletions,
      total: acc.total + node.additions - node.deletions,
    }),
    { additions: 0, deletions: 0, total: 0 }
  )
}

export async function getGitHubContributions(
  fromDate: Date = new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
  toDate: Date = new Date()
): Promise<GitHubContributions> {
  if (!GITHUB_USERNAME) {
    throw new Error("GitHub username is not configured.")
  }
  if (!GITHUB_TOKEN) {
    throw new Error("GitHub token is not configured. Please set GITHUB_TOKEN in your .env file.")
  }

  const query = `{
    user(login: "${GITHUB_USERNAME}") {
      contributionsCollection(from: "${fromDate.toISOString()}", to: "${toDate.toISOString()}") {
        totalCommitContributions
        restrictedContributionsCount
        totalIssueContributions
        totalPullRequestContributions
        totalPullRequestReviewContributions
        commitContributionsByRepository(maxRepositories: 100) {
          repository {
            nameWithOwner
          }
          contributions(first: 100) {
            totalCount
            nodes {
              occurredAt
              commitCount
              repository {
                nameWithOwner
              }
            }
          }
        }
      }
    }
  }`

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `bearer ${GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    })

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`)
    }

    const { data, errors } = await response.json()

    if (errors) {
      throw new Error(`GitHub API error: ${errors[0].message}`)
    }

    if (!data?.user?.contributionsCollection?.commitContributionsByRepository) {
      throw new Error("No contribution data found")
    }

    const collection = data.user.contributionsCollection
    const repositories = collection.commitContributionsByRepository

    // Get commit stats for each repository
    const repoStats = await Promise.all(
      repositories.map(async (repo: any) => {
        const [owner, repoName] = repo.repository.nameWithOwner.split("/")
        try {
          const stats = await getCommitStats(owner, repoName, GITHUB_TOKEN)
          return {
            name: repo.repository.nameWithOwner,
            commits: repo.contributions.totalCount,
            lastContribution: new Date(
              Math.max(...repo.contributions.nodes.map((n: any) => new Date(n.occurredAt).getTime()))
            ),
            stats,
          }
        } catch (error) {
          console.error(`Error fetching stats for ${owner}/${repoName}:`, error)
          return {
            name: repo.repository.nameWithOwner,
            commits: repo.contributions.totalCount,
            lastContribution: new Date(),
            stats: { additions: 0, deletions: 0, total: 0 },
          }
        }
      })
    )

    // Calculate totals
    const totals = repoStats.reduce(
      (acc, repo) => ({
        additions: acc.additions + repo.stats.additions,
        deletions: acc.deletions + repo.stats.deletions,
        total: acc.total + repo.stats.total,
      }),
      { additions: 0, deletions: 0, total: 0 }
    )

    const stats = {
      totalCommits: collection.totalCommitContributions,
      restrictedContributions: collection.restrictedContributionsCount,
      issues: collection.totalIssueContributions,
      pullRequests: collection.totalPullRequestContributions,
      pullRequestReviews: collection.totalPullRequestReviewContributions,
      linesChanged: totals,
      repositories: repoStats,
    }

    return stats
  } catch (error) {
    console.error("Error fetching GitHub contributions:", error)
    throw error
  }
}

export async function getFormattedContributions(): Promise<string> {
  try {
    if (!GITHUB_USERNAME) {
      throw new Error("GITHUB_USERNAME is not set in .env file")
    }

    const stats = await getGitHubContributions()
    const totalRepos = stats.repositories.length
    const totalCommits = stats.repositories.reduce((sum: number, repo: any) => sum + repo.commits, 0)

    // Format lines with colors
    const formattedAdditions = `\x1b[32m+${stats.linesChanged.additions.toLocaleString()}\x1b[0m`
    const formattedDeletions = `\x1b[31m-${stats.linesChanged.deletions.toLocaleString()}\x1b[0m`
    const formattedTotal =
      stats.linesChanged.total >= 0
        ? `\x1b[32m+${stats.linesChanged.total.toLocaleString()}\x1b[0m`
        : `\x1b[31m${stats.linesChanged.total.toLocaleString()}\x1b[0m`

    return (
      `GitHub Contributions (last 12 months):\n` +
      `Repositories: ${totalRepos} active\n` +
      `Commits: ${totalCommits} total\n` +
      `Issues: ${stats.issues} | ` +
      `PRs: ${stats.pullRequests} | ` +
      `PR Reviews: ${stats.pullRequestReviews}\n` +
      `Lines of Code: ${formattedTotal} (${formattedAdditions} / ${formattedDeletions})`
    )
  } catch (error) {
    console.error("Failed to get GitHub contributions:", error)
    return "❌ Unable to fetch GitHub contribution statistics"
  }
}
