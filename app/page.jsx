"use client";
import { useState, useEffect } from "react";
import ProjectPrez from "@/src/components/project/projectSlider";
import Presentation from "@/src/components/presentation/presentation";
import Header from "@/src/components/header/Header";

export default function Home() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDark(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const setDarkMode = (isDark) => {
    setDark(isDark);
    localStorage.setItem('darkMode', isDark.toString());
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="min-h-screen">
      <Header dark={dark} setDarkMode={setDarkMode} />
      <main>
        <Presentation />
        <ProjectPrez />
      </main>
    </div>
  );
}
