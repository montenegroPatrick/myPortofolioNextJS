import { Cantarell, Roboto_Mono, Delius_Unicase } from "next/font/google";
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
