"use client";

import usePageTitle from "@/hooks/usePageTitle";
import Link from "next/link";
import { File, GithubLogo, LinkedinLogo } from "phosphor-react";
import { Tooltip } from "react-tooltip";

export default function Home() {
  usePageTitle({ pageTitle: "Portfólio - Gustavo Santana" });

  return (
    <>
      <main>
        <p className="font-poppins pb-4 text-base">
          Gustavo Santana. Desenvolvedor Front-end. Gamer.
        </p>

        <h1 className="font-unbounded text-3xl pb-4 md:text-4xl">
          <span className="font-unbounded text-amber-300 ">
            Olá— Eu sou o Gustavo.
          </span>{" "}
          Desenvolvedor Front-end, apaixonado por tecnologia.
        </h1>

        <div className="text-xl">
          <p>
            Brasileiro, atualmente trabalho com React e
            Next.js no desenvolvimento de aplicações web.
          </p>

          <p>
            Eu amo jogar, e sou um grande fã do jogo{" "}
            <span className="text-red-400">Red Dead Redemption 2</span>.
          </p>
        </div>

        <div className="flex gap-4 pt-4 mt-8">
          <a
            data-tooltip-id="tooltip"
            data-tooltip-content="Baixar CV"
            data-tooltip-place="bottom"
            className="cursor-pointer"
            href="CV - Gustavo Santana.pdf"
            download
          >
            <File size={32} />
          </a>
          <a
            data-tooltip-id="tooltip"
            data-tooltip-content="Github"
            data-tooltip-place="bottom"
            className="cursor-pointer"
            href="
            https://github.com/gustavros"
            target={"_blank"}
          >
            <GithubLogo size={32} weight="light" />
          </a>
          <a
            data-tooltip-id="tooltip"
            data-tooltip-content="Linkedin"
            data-tooltip-place="bottom"
            className="cursor-pointer"
            href="https://www.linkedin.com/in/gustavo-santana-9b1b3a1b0/"
            target={"_blank"}
          >
            <LinkedinLogo size={32} weight="light" />
          </a>

          <Tooltip id="tooltip" />
        </div>
      </main>
    </>
  );
}
