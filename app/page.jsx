import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Header from "../src/components/header/Header";
import BackgroundImagePrez from "@/src/components/presentation/image";
import ProjectSlider from "@/src/components/project/projectSlider";
import ProjectPrez from "@/src/components/project/projectSlider";
import Footer from "@/src/components/footer/footer";
import axios from "axios";
import { create } from "axios";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  let repos;
  const api = axios.create({
    baseURL: "https://api.github.com",
    headers: {
      Authorization: "Bearer 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",
    },
  });
  await api
    .get("/users/montenegroPatrick/repos?visibility=public")
    .then((res) => console.log(res)((repos = res.data)))
    .catch((err) => Error());
  return (
    <main className="">
      <section className="h-full">
        <BackgroundImagePrez />
      </section>
      <ProjectPrez className="dark:bg-black" repos={repos} />
    </main>
  );
}
