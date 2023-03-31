import { useQuery } from "@tanstack/react-query";
import axios from "axios";
/**
 * Fetches public repositories for user montenegroPatrick on GitHub using Axios.
 *
 * @returns {Promise<Array>} An array of repository objects containing information such as name, description, and URL.
 */
const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: "Bearer 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",
  },
});
const fetchRepos = async () =>
  await api
    .get("/users/montenegroPatrick/repos?visibility=public")
    .then((res) => res.data);
/**
 * Fetches public repositories for user montenegroPatrick on GitHub using Axios.
 *
 * @returns {Promise<Array>} An array of repository objects containing information such as name, description, and URL.
 */
export const useRepos = () =>
  useQuery({ queryKey: ["repos"], queryFn: fetchRepos });
