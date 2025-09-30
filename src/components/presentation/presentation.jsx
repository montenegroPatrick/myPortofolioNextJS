"use client";
import React from "react";
import Image from "next/image";


export default function Presentation() {
const photo = "/patrick.jpg";
  return (
    <section className=" pt-16 h-full bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full  ">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                  Salut, je suis{" "}
                  <span className="text-blue-500">
                    Patrick
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-light">
                  Développeur Web Full Stack
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                J’aime transformer les idées en expériences digitales. En tant que développeur full-stack, je crée des outils élégants, intuitifs et puissants, où chaque détail compte pour offrir la meilleure expérience.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                  >
                    Voir mes projets
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    Me contacter
                  </a>
                </div>
              </div>

              {/* Skills pills */}
              <div className="flex flex-wrap gap-2">
                {[ "NEXT.JS", "ANGULAR", "FLUTTER", "TYPESCRIPT", "TAILWIND", "NODE.JS", "SQL", "PRISMA", "FIREBASE",].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Photo */}
            <div className="flex justify-center items-end lg:justify-end flex-grow">
              <div className="relative ">
                <div className="rounded-full">
                  <div className="rounded-full bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden">
                    {/* Placeholder for photo - replace with actual image */}
                   
                   <Image src={photo} alt="photo" width={400} height={100} />
                   
                  </div>
                </div>
                {/* Decorative elements */}
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


