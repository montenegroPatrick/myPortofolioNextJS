import React from "react";
import logo from "../../../public/logo.png";
import "./styles.css";
import bureau from "../../../public/bureau.jpeg";
import patrickTrafiquey from "../../../public/patrick-trafiquey.png";
import "./styles.css";
function BackgroundImagePrez() {
  return (
    <div className="persentation bg-fixed h-screen  border-white-200 border-2 flex p-10 justify-left">
      <section className="flex w-50 px-5 py-5 lg:w-3/6 justify-center flex-col gap-4  text-white ">
        <h1 className="font-bold text-5xl md:text-7xl lg:text-9xl mb-10">
          Montenegro Patrick
        </h1>
        <p className="w-10/12 pb-5 ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem animi
          provident nostrum quas maxime laborum omnis nisi, voluptas quasi.
          Exercitationem eum blanditiis libero delectus nam temporibus quia ab
          autem repellendus?
        </p>
        <div className="border-b-4 border-b-white w-full" />
      </section>
    </div>
  );
}

export default BackgroundImagePrez;
