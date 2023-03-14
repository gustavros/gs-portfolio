"use client";

import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const messageToWhatsapp = `Olá, meu nome é ${name} e meu e-mail é ${email}. ${message}`;

    window.open(
      `https://api.whatsapp.com/send?phone=5581983704666&text=${messageToWhatsapp}`
    );

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <main className="flex items-center justify-center">
        <h1 className="font-unbounded text-4xl p-6 relative text-center">
          Entre em contato comigo
        </h1>

        <form className="bg-transparent rounded-lg p-6 w-96">
          <div className="mb-4">
            <label
              className="text-cyan-400 font-bold block mb-2"
              htmlFor="name"
            >
              Nome
            </label>
            <input
              className="resize-none
              appearance-none border rounded w-full py-2 px-3 text-zinc-300 bg-transparent leading-tight focus:outline-none focus:shadow-outline dark:text-zinc-800 "
              id="name"
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="text-cyan-400 font-bold block mb-2 bg-transparent"
              htmlFor="email"
            >
              Seu e-mail
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-zinc-300 leading-tight focus:outline-none focus:shadow-outline bg-transparent dark:text-zinc-800"
              id="email"
              type="email"
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="text-cyan-400 font-bold block mb-2"
              htmlFor="message"
            >
              Sua mensagem
            </label>
            <textarea
              className="appearance-none border rounded w-full py-2 px-3 text-zinc-300 bg-transparent leading-tight focus:outline-none focus:shadow-outline dark:text-zinc-800"
              id="message"
              placeholder="Sua mensagem"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-cyan-400  text-zinc-900 hover:bg-cyan-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            >
              Enviar
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
