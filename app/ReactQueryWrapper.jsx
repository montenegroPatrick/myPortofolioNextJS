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
      <body className={`${darkMode ? "dark" : ""}`}>
        <section className="flex flex-col gap-10 bg-white dark:bg-gradient-to-tl dark:from-black dark:to-blue-gray-900">
          <Header dark={darkMode} setDarkMode={setDarkMode} />
          {children}
          <Footer />
        </section>
      </body>
    </QueryClientProvider>
  );
}
