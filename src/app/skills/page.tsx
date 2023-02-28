import CardTechs from "@/components/CardTechs";

import NextLogo from "../../assets/nextjs.svg";
import ReactLogo from "../../assets/reactjs.svg";
import TypeScriptLogo from "../../assets/typescript.svg";
import TailwindLogo from "../../assets/tailwindcss.svg";
import StyledComponentsLogo from "../../assets/styled-components.svg";
import SassLogo from "../../assets/sass.svg";

export default function Skills() {
  return (
    <main className="flex flex-col gap-12 py-10">
      <div>
        <h1 className="font-unbounded text-4xl">Skills</h1>
        <p className="text-lg font-light">
          I have experience with the following <strong>technologies</strong>:
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 mx-auto">
        <CardTechs
          techonology="React"
          image={{
            src: ReactLogo.src,
          }}
        />

        <CardTechs
          techonology="Next.js"
          image={{
            src: NextLogo.src,
          }}
        />

        <CardTechs
          techonology="TypeScript"
          image={{ src: TypeScriptLogo.src }}
        />

        <CardTechs
          techonology="Tailwind CSS"
          image={{ src: TailwindLogo.src }}
        />

        <CardTechs
          techonology="Styled Components"
          image={{
            src: StyledComponentsLogo.src,
            width: 90,
            height: 90,
          }}
        />

        <CardTechs techonology="Sass" image={{ src: SassLogo.src }} />
      </div>
    </main>
  );
}
