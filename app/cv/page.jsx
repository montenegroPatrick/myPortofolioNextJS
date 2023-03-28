import BookAnimation from "@/src/components/animations/bookAnimation";
import Image from "next/image";
import cvDev from "../../public/cvDev.jpeg";

function Cv() {
  return (
    <BookAnimation>
      <div className="flex justify-center shadowBox py-32">
        <Image
          className="shadowBox"
          src={cvDev}
          width="100vw"
          alt="cvMontenegroPatrick"
        />
      </div>
    </BookAnimation>
  );
}

export default Cv;
