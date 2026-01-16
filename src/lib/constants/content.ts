import { COLORS } from "@/lib/constants/ansi"
import type { Art, Info } from "@/types/content"
import { calculateAge } from "@/utils/age"
import { bold, normal } from "@/utils/ansi"

// Art data
export const INFO: Info = [
  [bold("sergei", COLORS.BRIGHT_WHITE), normal("@"), bold("mazhuga", COLORS.BRIGHT_WHITE)],
  [normal("--------------------")],
  [bold("OS", COLORS.BRIGHT_WHITE), normal(": Debian GNU/Linux 13 (trixie) x86_64")],
  [bold("Host", COLORS.BRIGHT_WHITE), normal(": Cleopatra Trading Co.")],
  [bold("Kernel", COLORS.BRIGHT_WHITE), normal(": Software Development")],
  [bold("Uptime", COLORS.BRIGHT_WHITE), normal(`: ${calculateAge("2002-07-23")}`)],
  [bold("Shell", COLORS.BRIGHT_WHITE), normal(": zsh 5.9")],
  [bold("Locales", COLORS.BRIGHT_WHITE), normal(": English, Russian")],
  [normal("")],
  [bold("Email", COLORS.BRIGHT_WHITE), normal(": ghbdtnghbdtn8@gmail.com")],
  [bold("Discord", COLORS.BRIGHT_WHITE), normal(": notohmm")],
]

// ASCII Art
export const ART: Art = [
  [normal("                  .::-+*++++=-:.                 ", COLORS.BRIGHT_WHITE)],
  [normal("             .:+###*####**####*+*#*-:            ", COLORS.BRIGHT_WHITE)],
  [normal("          +-########*=#####**+-++*=:===.         ", COLORS.BRIGHT_WHITE)],
  [normal("         .-*..-=##+*+*###**#*=::.:=:-...:-.      ", COLORS.BRIGHT_WHITE)],
  [normal("          .+#####**+-:..:-:====::-:..: :==.      ", COLORS.BRIGHT_WHITE)],
  [normal("         +##############+++:.            :-      ", COLORS.BRIGHT_WHITE)],
  [normal("       .*####################*=+-..        .     ", COLORS.BRIGHT_WHITE)],
  [normal("      .##########################=.= .     .     ", COLORS.BRIGHT_WHITE)],
  [normal("      =############################- .           ", COLORS.BRIGHT_WHITE)],
  [normal("      *############################-*+           ", COLORS.BRIGHT_WHITE)],
  [normal("      ###############################+           ", COLORS.BRIGHT_WHITE)],
  [normal("     .####*=     .-+########+:                   ", COLORS.BRIGHT_WHITE)],
  [normal("      ####+####*+  .=#####*.   .+**=             ", COLORS.BRIGHT_WHITE)],
  [normal("    ::*###=.   .   :.=###*  . .:           ..    ", COLORS.BRIGHT_WHITE)],
  [normal("   .+*####++-+*++..*######.  ..=+=-    .         ", COLORS.BRIGHT_WHITE)],
  [normal("    #####################+   :-+*#*+===    ::    ", COLORS.BRIGHT_WHITE)],
  [normal("    =+=###################-  =#########.  . :    ", COLORS.BRIGHT_WHITE)],
  [normal("    -######################:. *#######=   .+.    ", COLORS.BRIGHT_WHITE)],
  [normal("    .###############*+=*..     *######=   -#     ", COLORS.BRIGHT_WHITE)],
  [normal("     :**#############**#**:  .*#######:   .      ", COLORS.BRIGHT_WHITE)],
  [normal("        *##################*=--=#####-           ", COLORS.BRIGHT_WHITE)],
  [normal("        :#######+--==--:*-      .*##*            ", COLORS.BRIGHT_WHITE)],
  [normal("         .+################-:. +###*.            ", COLORS.BRIGHT_WHITE)],
  [normal("           --#############**#*##*#*              ", COLORS.BRIGHT_WHITE)],
  [normal("           #*-:##################-               ", COLORS.BRIGHT_WHITE)],
  [normal("           =###=:*############=-                 ", COLORS.BRIGHT_WHITE)],
  [normal("           :#####*--==++=*#=:                    ", COLORS.BRIGHT_WHITE)],
  [normal("           ##########+:.                         ", COLORS.BRIGHT_WHITE)],
  [normal("          .##############=                       ", COLORS.BRIGHT_WHITE)],
  [normal("           =################.   -+:              ", COLORS.BRIGHT_WHITE)],
  [normal("            .*############*.  -*#+.:-            ", COLORS.BRIGHT_WHITE)],
  [normal("              .-*#########*++*###+.              ", COLORS.BRIGHT_WHITE)],
  [normal("                   .:=+**+=+++-.                 ", COLORS.BRIGHT_WHITE)],
]
