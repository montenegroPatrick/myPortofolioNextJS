"use client";
import Footer from "@/src/components/footer/footer";
import Header from "@/src/components/header/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, useEffect } from "react";

const queryClient = new QueryClient();

export default function ReactQueryWrapper({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Récupère la préférence du localStorage, par défaut true (dark mode)
    const storedDarkMode = localStorage.getItem('darkMode');
    const isDark = storedDarkMode !== null ? storedDarkMode === 'true' : true;
    
    setDarkMode(isDark);
    
    // Si c'est la première visite, sauvegarde la préférence par défaut
    if (storedDarkMode === null) {
      localStorage.setItem('darkMode', 'true');
    }
    
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const handleSetDarkMode = (isDark) => {
    setDarkMode(isDark);
    localStorage.setItem('darkMode', isDark.toString());
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <body className={`${darkMode ? "dark" : ""}`}>
        <section className="flex flex-col gap-10 bg-white dark:bg-gradient-to-tl dark:from-black dark:to-blue-gray-900">
          <Header dark={darkMode} setDarkMode={handleSetDarkMode} />
          {children}
          <Footer />
        </section>
      </body>
    </QueryClientProvider>
  );
}
