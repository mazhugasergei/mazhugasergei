import type { Art, Info } from "@/types/content"
import { calculateAge } from "@/utils/age"
import { bold, normal } from "@/utils/ansi"

const USERNAME = "sergei"
const HOSTNAME = "mazhuga"

// Art data
export const INFO: Info = [
  [bold(USERNAME, "brightWhite"), normal("@"), bold(HOSTNAME, "brightWhite")],
  [normal("-".repeat(USERNAME.length + 1 + HOSTNAME.length))],
  [bold("OS", "brightWhite"), normal(": Debian GNU/Linux 13 (trixie) x86_64")],
  [bold("Host", "brightWhite"), normal(": Software Development")],
  [bold("Kernel", "brightWhite"), normal(": BSc Information Systems and Technologies")],
  [bold("Uptime", "brightWhite"), normal(`: ${calculateAge("2002-07-23")}`)],
  [bold("Locale", "brightWhite"), normal(": English, Russian")],
  [normal("")],
  [bold("Website", "brightWhite"), normal(": mazhugasergei.github.io")],
  [bold("Hobbies", "brightWhite"), normal(": cleopatrading.com")],
  [normal("")],
  [bold("Email", "brightWhite"), normal(": ghbdtnghbdtn8@gmail.com")],
  [bold("Discord", "brightWhite"), normal(": _msergios")],
]

// ASCII Art
export const ART: Art = [
  "                  .::-+*++++=-:.                 ",
  "             .:+###*####**####*+*#*-:            ",
  "          +-########*=#####**+-++*=:===.         ",
  "         .-*..-=##+*+*###**#*=::.:=:-...:-.      ",
  "          .+#####**+-:..:-:====::-:..: :==.      ",
  "         +##############+++:.            :-      ",
  "       .*####################*=+-..        .     ",
  "      .##########################=.= .     .     ",
  "      =############################- .           ",
  "      *############################-*+           ",
  "      ###############################+           ",
  "     .####*=     .-+########+:                   ",
  "      ####+####*+  .=#####*.   .+**=             ",
  "    ::*###=.   .   :.=###*  . .:           ..    ",
  "   .+*####++-+*++..*######.  ..=+=-    .         ",
  "    #####################+   :-+*#*+===    ::    ",
  "    =+=###################-  =#########.  . :    ",
  "    -######################:. *#######=   .+.    ",
  "    .###############*+=*..     *######=   -#     ",
  "     :**#############**#**:  .*#######:   .      ",
  "        *##################*=--=#####-           ",
  "        :#######+--==--:*-      .*##*            ",
  "         .+################-:. +###*.            ",
  "           --#############**#*##*#*              ",
  "           #*-:##################-               ",
  "           =###=:*############=-                 ",
  "           :#####*--==++=*#=:                    ",
  "           ##########+:.                         ",
  "          .##############=                       ",
  "           =################.   -+:              ",
  "            .*############*.  -*#+.:-            ",
  "              .-*#########*++*###+.              ",
  "                   .:=+**+=+++-.                 ",
].map((row) => [normal(row, "brightWhite")])
