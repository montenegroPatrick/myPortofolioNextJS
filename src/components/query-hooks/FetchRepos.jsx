import { useQuery } from "@tanstack/react-query";
import axios from "axios";
/**
 * Fetches public repositories for user montenegroPatrick on GitHub using Axios.
 *
 * @returns {Promise<Array>} An array of repository objects containing information such as name, description, and URL.
 */
const api = axios.create({
  baseURL: "https://api.github.com",
});
const fetchRepos = async () =>
  await api
    .get("/users/montenegroPatrick/repos?visibility=public")
    .then((res) =>
    {
      console.log(res.data);
      return res.data;
    })
    .then((data) =>
      data.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      )
    );
/**
 * Fetches public repositories for user montenegroPatrick on GitHub using Axios.
 *
 * @returns {Promise<Array>} An array of repository objects containing information such as name, description, and URL.
 */
export const useRepos = () =>
  useQuery({ queryKey: ["repos"], queryFn: fetchRepos });
