"use client";
import { Button, Input } from "../../src/components/MTUI";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";

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
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const sujet = formData.get("sujet");
    const text = formData.get("text");

    // send an email with this tree value
  };
  // verif
  return (
    <form
      className="flex flex-col gap-10 text-white w-full p-8"
      action=""
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
        label="votre sujet"
        ref={sujetRef}
        value={sujetValue}
        onChange={(event) => setsujetValue(event.target.value)}
        type="text"
        name="sujet"
        aria-label="votre sujet"
      />
      <Input
        className="text-white"
        variant="standard"
        label="votre message"
        ref={textRef}
        value={textValue}
        onChange={(event) => setTextValue(event.target.value)}
        type="text"
        name="text"
        aria-label="votre message"
      />
      <a
        className=""
        href={`mailto:patrick.montenegro.pro@gmail.com?cc=${emailAdressValue}&subject=${sujetValue}&body=${textValue}`}
      >
        <Button
          className="w-full"
          color={emailAdressValue ? "blue" : "blue-gray"}
          disabled={!emailAdressValue}
          type="submit"
        >
          Envoyer
        </Button>
      </a>
    </form>
  );
}

export default Contact;
