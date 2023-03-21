import Image from "next/image";
import cvDev from "../../public/cvDev.jpeg";

function Cv() {
  return (
    <div className="flex justify-center z-10 py-32">
      <Image src={cvDev} width="100vw" alt="cvMontenegroPatrick" />
    </div>
  );
}

export default Cv;
