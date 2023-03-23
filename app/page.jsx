import { Inter } from "next/font/google";
import axios from "axios";
import Main from "@/src/components/main/main";
import Header from "@/src/components/header/Header";
import Footer from "@/src/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  console.log(repos);
  return (
    <div>
      <Main />
    </div>
  );
}
