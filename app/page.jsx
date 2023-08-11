import ProjectPrez from "@/src/components/project/projectSlider";
import BookAnimation from "@/src/components/animations/bookAnimation";
import Presentation from "@/src/components/presentation/presentation";

export default function Home() {
  return (
    <BookAnimation>
      <Presentation />
      <ProjectPrez />
    </BookAnimation>
  );
}
