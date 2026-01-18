import { COLORS } from "@/lib/constants/ansi"
import type { Art, Info } from "@/types/content"
import { calculateAge } from "@/utils/age"
import { bold, normal } from "@/utils/ansi"

// Art data
export const INFO: Info = [
  [bold("sergei", COLORS.BRIGHT_WHITE), normal("@"), bold("mazhuga", COLORS.BRIGHT_WHITE)],
  [normal("--------------------")],
  [bold("OS", COLORS.BRIGHT_WHITE), normal(": Debian GNU/Linux 13 (trixie) x86_64")],
  [bold("Host", COLORS.BRIGHT_WHITE), normal(": Software Development")],
  [bold("Kernel", COLORS.BRIGHT_WHITE), normal(": BSc Information Systems and Technologies")],
  [bold("Uptime", COLORS.BRIGHT_WHITE), normal(`: ${calculateAge("2002-07-23")}`)],
  [bold("Locale", COLORS.BRIGHT_WHITE), normal(": English, Russian")],
  [normal("")],
  [bold("Mood", COLORS.BRIGHT_WHITE), normal(": Shipping")],
  [bold("Coffee", COLORS.BRIGHT_WHITE), normal(": ☕ Optional")],
  [bold("Hobbies", COLORS.BRIGHT_WHITE), normal(": cleopatrading.com")],
  [normal("")],
  [bold("Website", COLORS.BRIGHT_WHITE), normal(": https://mazhugasergei.github.io")],
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
