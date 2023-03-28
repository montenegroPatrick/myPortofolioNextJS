import BackgroundImagePrez from "@/src/components/presentation/image";
import ProjectPrez from "@/src/components/project/projectSlider";
import BookAnimation from "@/src/components/animations/bookAnimation";

export default function Home() {
  return (
    <BookAnimation>
      <BackgroundImagePrez />
      <ProjectPrez />
    </BookAnimation>
  );
}
