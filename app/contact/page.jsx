"use client";
import { Button, Input } from "../../src/components/MTUI";
import React from "react";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const sujet = formData.get("sujet");
    const text = formData.get("text");
    console.log(email);
    // send an email with this tree value
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <Input type="text" name="email" />
      <Input type="text" name="sujet" />
      <Input type="text" name="text" />
      <Button type="submit">Envoyer</Button>
    </form>
  );
}

export default Contact;
