"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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

export const useRepos = () =>
  useQuery({ queryKey: ["repos"], queryFn: fetchRepos });
