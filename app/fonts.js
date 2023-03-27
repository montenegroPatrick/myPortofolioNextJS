import {
  Cantarell,
  Roboto_Mono,
  Delius_Unicase,
  Kanit,
  Titillium_Web,
} from "next/font/google";
export const cantarell = Cantarell({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cantarell",
});
export const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--roboto-mono",
});
export const deliciousHandrawn = Delius_Unicase({
  weight: "400",
  subsets: ["latin"],
  variable: "--delicious-handrawn",
});
export const kanit = Kanit({
  weight: "400",
  subsets: ["latin"],
  variable: "--kanit",
});
export const TitilliumWeb = Titillium_Web({
  weight: ["200", "300", "400", "600", "700", "900"],
  subsets: ["latin"],
  variable: "--titillium-web",
});
