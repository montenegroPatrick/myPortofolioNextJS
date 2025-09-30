"use client";
import Link from "next/link";
import React from "react";
import { useRepos } from "../query-hooks/FetchRepos";
import { FiGithub, FiExternalLink, FiCalendar } from "react-icons/fi";

function ProjectPrez() {
  const repos = useRepos();

  if (repos.isLoading) {
    return (
      <section id="projects" className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Mes Projets
            </h2>
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (repos.isError) {
    return (
      <section id="projects" className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Mes Projets
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Erreur lors du chargement des projets
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mes Projets
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Découvrez quelques-uns de mes projets récents développés avec passion
          </p>
        </div>

        {repos.isSuccess && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.data.map((repo) => (
              <div
                key={repo.id}
                className="bg-white dark:bg-gray-900 h-90 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group flex flex-col"
              >
                {/* Header section - fixed height */}
                <div className="p-6 flex-shrink-0">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2 flex-1 min-w-0">
                      <FiGithub className="h-5 w-5 text-gray-600 dark:text-gray-400 flex-shrink-0" />
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white truncate">
                        {repo.name}
                      </h3>
                    </div>
                    <Link
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex-shrink-0"
                    >
                      <FiExternalLink className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* Content section - flexible height */}
                <div className="px-6 flex-1 flex flex-col">
                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {repo.description || "Aucune description disponible"}
                  </p>

                  {/* Topics section - fixed height zone */}
                  <div className="mb-4 h-12 flex items-start">
                    {repo.topics && repo.topics.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {repo.topics.slice(0, 3).map((topic) => (
                          <span
                            key={topic}
                            className="px-2 py-1 text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-md"
                          >
                            {topic}
                          </span>
                        ))}
                        {repo.topics.length > 3 && (
                          <span className="px-2 py-1 text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 rounded-md">
                            +{repo.topics.length - 3}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Spacer to push footer to bottom */}
                  <div className="flex-1"></div>

                  {/* Footer info - fixed at bottom */}
                  <div className="flex items-center justify-between pb-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      {repo.language && (
                        <div className="flex items-center space-x-1">
                          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                          <span>{repo.language}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                      <FiCalendar className="h-3 w-3" />
                      <span>
                        {new Date(repo.updated_at).toLocaleDateString('fr-FR', {
                          month: 'short',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Button section - fixed at bottom */}
                <div className="px-6 pb-6 flex-shrink-0">
                  <Link
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                  >
                    Voir sur GitHub
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Link
            href="https://github.com/montenegroPatrick"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <FiGithub className="h-5 w-5" />
            <span>Voir tous mes projets</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectPrez;
