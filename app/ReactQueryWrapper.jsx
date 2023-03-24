"use client";
import Footer from "@/src/components/footer/footer";
import Header from "@/src/components/header/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

const queryClient = new QueryClient();

export default function ReactQueryWrapper({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <QueryClientProvider client={queryClient}>
      <main className={`${darkMode ? "dark" : ""} `}>
        <div className="flex flex-col gap-5 rounded-xl bg-gradient-to-tl from-yellow-800/ to-gray-200 dark:bg-gradient-to-tl dark:from-black dark:to-blue-gray-900">
          <Header dark={darkMode} setDarkMode={setDarkMode} />
          {children}
          <Footer />
        </div>
      </main>
    </QueryClientProvider>
  );
}
