"use client";
import { Button, Input } from "../../src/components/MTUI";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import BookAnimation from "@/src/components/animations/bookAnimation";
import { Alert } from "@material-tailwind/react";

function Contact() {
  const router = useRouter();
  const emailRef = useRef(null);
  const sujetRef = useRef(null);
  const textRef = useRef(null);
  const [boolFocus, setBoolFocus] = useState(false);
  const [emailAdressValue, setEmailAdressValue] = useState("");
  const [sujetValue, setsujetValue] = useState("");
  const [textValue, setTextValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    /* if we want to be serious we need to sent the email on serverside unfortunualy for this moment is not set up maybe for the V2
     const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
     const sujet = formData.get("subject");
     const text = formData.get("text");
     */
  };

  return (
    <BookAnimation classes="w-full">
      <form
        className="flex flex-col gap-10 text-white w-full p-8"
        onSubmit={handleSubmit}
      >
        <Input
          className="text-white"
          variant="standard"
          label="email adress"
          ref={emailRef}
          value={emailAdressValue}
          onChange={(event) => setEmailAdressValue(event.target.value)}
          type="email"
          name="email"
          aria-label="votre email"
        />
        <Input
          className="text-white"
          variant="standard"
          label="subject"
          ref={sujetRef}
          value={sujetValue}
          onChange={(event) => setsujetValue(event.target.value)}
          type="text"
          name="subject"
          aria-label="subject"
        />
        <Input
          className="text-white"
          variant="standard"
          label="text"
          ref={textRef}
          value={textValue}
          onChange={(event) => setTextValue(event.target.value)}
          type="text"
          name="text"
          aria-label="text"
        />
        <a
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-blue-500 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          href={`mailto:patrick.montenegro.pro@gmail.com?cc=${emailAdressValue}&subject=${sujetValue}&body=${textValue}`}
        >
          {" "}
          Send
        </a>
      </form>
    </BookAnimation>
  );
}

export default Contact;
