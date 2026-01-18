export interface GitHubStats {
  formatted: string
  raw: {
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
    repositories: Array<{
      name: string
      commits: number
      lastContribution: Date
    }>
  } | null
}
