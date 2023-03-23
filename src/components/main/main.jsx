"use client";
import BackgroundImagePrez from "@/src/components/presentation/image";
import ProjectSlider from "@/src/components/project/projectSlider";
import ProjectPrez from "@/src/components/project/projectSlider";
import { useState } from "react";
import Footer from "../footer/footer";
import Header from "../header/Header";

function Main({ repos }) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="m-5 flex flex-col gap-5 rounded-xl bg-gradient-to-tl from-blue-gray-700/[0.2] to-blue-gray-100 dark:bg-gradient-to-tl dark:from-black dark:to-blue-gray-900 dark:bg-black">
        <Header dark={darkMode} setDarkMode={setDarkMode} />
        <BackgroundImagePrez dark={darkMode} />
        <ProjectPrez repos={repos} />
        <Footer />
      </main>
    </div>
  );
}
import { QueryCache } from "@tanstack/react-query";

const queryCache = new QueryCache({
  onError: (error) => {},
  onSuccess: (data) => {},
  onSettled: (data, error) => {},
});

const query = queryCache.find({ queryKey: ["dark"] });

export default Main;
