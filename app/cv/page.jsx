import Image from "next/image";
import cvDev from "../../public/cvDev.jpeg";

function Cv() {
  return (
    <div className="flex justify-center shadowBox py-32">
      <Image
        className="shadowBox"
        src={cvDev}
        width="100vw"
        alt="cvMontenegroPatrick"
      />
    </div>
  );
}

export default Cv;
