import type { Art, Info } from "@/types/content"
import { calculateAge } from "@/utils/age"
import { bold, normal } from "@/utils/ansi"

// Art data
export const INFO: Info = [
  [bold("sergei", "brightWhite"), normal("@"), bold("mazhuga", "brightWhite")],
  [normal("--------------------")],
  [bold("OS", "brightWhite"), normal(": Debian GNU/Linux 13 (trixie) x86_64")],
  [bold("Host", "brightWhite"), normal(": Software Development")],
  [bold("Kernel", "brightWhite"), normal(": BSc Information Systems and Technologies")],
  [bold("Uptime", "brightWhite"), normal(`: ${calculateAge("2002-07-23")}`)],
  [bold("Locale", "brightWhite"), normal(": English, Russian")],
  [normal("")],
  [bold("Mood", "brightWhite"), normal(": Shipping")],
  [bold("Coffee", "brightWhite"), normal(": ☕ Optional")],
  [bold("Hobbies", "brightWhite"), normal(": cleopatrading.com")],
  [normal("")],
  [bold("Website", "brightWhite"), normal(": mazhugasergei.github.io")],
  [bold("Email", "brightWhite"), normal(": ghbdtnghbdtn8@gmail.com")],
  [bold("Discord", "brightWhite"), normal(": _msergios")],
]

// ASCII Art
export const ART: Art = [
  [normal("                  .::-+*++++=-:.                 ", "brightWhite")],
  [normal("             .:+###*####**####*+*#*-:            ", "brightWhite")],
  [normal("          +-########*=#####**+-++*=:===.         ", "brightWhite")],
  [normal("         .-*..-=##+*+*###**#*=::.:=:-...:-.      ", "brightWhite")],
  [normal("          .+#####**+-:..:-:====::-:..: :==.      ", "brightWhite")],
  [normal("         +##############+++:.            :-      ", "brightWhite")],
  [normal("       .*####################*=+-..        .     ", "brightWhite")],
  [normal("      .##########################=.= .     .     ", "brightWhite")],
  [normal("      =############################- .           ", "brightWhite")],
  [normal("      *############################-*+           ", "brightWhite")],
  [normal("      ###############################+           ", "brightWhite")],
  [normal("     .####*=     .-+########+:                   ", "brightWhite")],
  [normal("      ####+####*+  .=#####*.   .+**=             ", "brightWhite")],
  [normal("    ::*###=.   .   :.=###*  . .:           ..    ", "brightWhite")],
  [normal("   .+*####++-+*++..*######.  ..=+=-    .         ", "brightWhite")],
  [normal("    #####################+   :-+*#*+===    ::    ", "brightWhite")],
  [normal("    =+=###################-  =#########.  . :    ", "brightWhite")],
  [normal("    -######################:. *#######=   .+.    ", "brightWhite")],
  [normal("    .###############*+=*..     *######=   -#     ", "brightWhite")],
  [normal("     :**#############**#**:  .*#######:   .      ", "brightWhite")],
  [normal("        *##################*=--=#####-           ", "brightWhite")],
  [normal("        :#######+--==--:*-      .*##*            ", "brightWhite")],
  [normal("         .+################-:. +###*.            ", "brightWhite")],
  [normal("           --#############**#*##*#*              ", "brightWhite")],
  [normal("           #*-:##################-               ", "brightWhite")],
  [normal("           =###=:*############=-                 ", "brightWhite")],
  [normal("           :#####*--==++=*#=:                    ", "brightWhite")],
  [normal("           ##########+:.                         ", "brightWhite")],
  [normal("          .##############=                       ", "brightWhite")],
  [normal("           =################.   -+:              ", "brightWhite")],
  [normal("            .*############*.  -*#+.:-            ", "brightWhite")],
  [normal("              .-*#########*++*###+.              ", "brightWhite")],
  [normal("                   .:=+**+=+++-.                 ", "brightWhite")],
]
