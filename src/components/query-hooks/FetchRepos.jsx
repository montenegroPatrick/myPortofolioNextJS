"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
const fetchRepos = async () =>
  await api
    .get("/users/montenegroPatrick/repos?visibility=public")
    .then((res) => res.data);

export const useRepos = () =>
  useQuery({ queryKey: ["repos"], queryFn: fetchRepos });
