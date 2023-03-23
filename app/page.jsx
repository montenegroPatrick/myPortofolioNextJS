"use client";
import { useQuery } from "@tanstack/react-query";
import BackgroundImagePrez from "@/src/components/presentation/image";
import ProjectPrez from "@/src/components/project/projectSlider";
import axios from "axios";

export default function Home() {
  return (
    <>
      <BackgroundImagePrez />
      <ProjectPrez />
    </>
  );
}
