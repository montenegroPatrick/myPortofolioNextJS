import React from "react";
import logo from "../../../public/logo.png";
import "./styles.css";
function BackgroundImagePrez() {
  return (
    <div
      className="bg-fixed w-full h-96 flex items-center justify-center flex-col gap-2"
      style={{
        backgroundImage: `url(${logo.src})`,
      }}
    >
      <h1 className="block font-bold text-9xl">Montenegro Patrick</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem animi
        provident nostrum quas maxime laborum omnis nisi, voluptas quasi.
        Exercitationem eum blanditiis libero delectus nam temporibus quia ab
        autem repellendus?
      </p>
    </div>
  );
}

export default BackgroundImagePrez;
