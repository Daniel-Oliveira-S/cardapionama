import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export function HeroForm() {
  const form = useRef<HTMLFormElement | null>(null);
  // redirecionar para o site do e

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(e.currentTarget);

    emailjs
      .sendForm("service_6619ras", "template_ov3ovcb", e.currentTarget, {
        publicKey: "ewS7sfVbmRQKUx7vZ",
      })
      .then(
        () => {
          // redirect to the thank you page
          alert("Email enviado com sucesso!");
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.message);
        }
      );
  }
  return (
    <form ref={form} onSubmit={sendEmail}  className="hero-form">
      <label htmlFor="">
        Nome*
        <input type="text" name="user_name" required />
      </label>
      <label htmlFor="">
        Email*
        <input type="email" name="user_email" required />
      </label>
      <label htmlFor="">
        Telefone*
        <input type="tel" name="user_phone" required />
      </label>

      <button type="submit">Enviar</button>
    </form>
  );
}

export function CalculatorForm() {
  const form = useRef<HTMLFormElement | null>(null);
  // redirecionar para o site do e

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(e.currentTarget);

    emailjs
      .sendForm("service_6619ras", "template_bw9pjcv", e.currentTarget, {
        publicKey: "ewS7sfVbmRQKUx7vZ",
      })
      .then(
        () => {
          alert("Email enviado com sucesso!");
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.message);
        }
      );
  }
  return (
    <form ref={form} onSubmit={sendEmail} className="hero-form">


<div className="calc">
  
  <label htmlFor="">
          Quanto quer investir?*
          <select name="amount" id="">
            <option value="0 a 100 mil"> 0 a 100 mil</option>
            <option value="100 a 200 mil">100 a 200 mil</option>
            <option value="200 a 300 mil"> 200 a 300 mil</option>
            <option value="300 a 400 mil"> 300 a 400 mil</option>
            <option value="400 a 500 mil"> 400 a 500 mil</option>
          </select>
        </label>
        <label htmlFor="">
          Quanto tempo quer investir?*
          <select name="time" id="time">
            <option value="1 ano">1 ano</option>
            <option value="2 anos">2 anos</option>
            <option value="3 anos">3 anos</option>
            <option value="4 anos">4 anos</option>
            <option value="5 anos">5 anos</option>
          </select>
        </label>
        <label htmlFor="">
          Perfil de investimento
          <select name="profile" id="">
            <option value="conservador">Conservador</option>
            <option value="moderado">Moderado</option>
            <option value="agressivo">Agressivo</option>
          </select>
        </label>
        <button type="submit">Enviar</button>
  
  </div>
      <div className="contact">
      <label htmlFor="">
        Nome*
        <input type="text" name="user_name" required />
      </label>
      <label htmlFor="">
        Email*
        <input type="email" name="user_email" required />
      </label>
      <label htmlFor="">
        Telefone*
        <input type="tel" name="user_phone" required />
      </label>
      </div>


    </form>
  );
}
