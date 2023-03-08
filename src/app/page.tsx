import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <p className="font-poppins pb-4 text-base">
          Gustavo Santana. Desenvolvedor Front-end. Gamer.
        </p>

        <h1 className="font-unbounded text-4xl pb-4 md:text-5xl">
          <span className="font-unbounded text-cyan-300 ">
            Olá— Eu sou o Gustavo.
          </span>{" "}
          Criando sonhos atráves da programação.
        </h1>

        <div className="text-xl">
          <p>
            Brasileiro, desenvolvedor front-end. Atualmente trabalho com React e
            Next.js.
          </p>

          <p>
            Eu amo jogar, e sou um grande fã do jogo{" "}
            <span className="text-red-400">Red Dead Redemption 2</span>.
          </p>
        </div>

        <p className="mt-8 ">
          Gostaria de trabalharmos juntos?{" "}
          <Link href="/contact">
            <span className="text-cyan-400">Entre em contato</span>
          </Link>
        </p>
      </main>
    </>
  );
}
