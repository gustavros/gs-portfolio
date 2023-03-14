export default function Footer() {
  const actualYear = new Date().getFullYear();

  return (
    <footer className="px-4 py-8 gap-2 flex flex-col justify-between items-center">
      <div className="flex gap-4 items-center">
        <a href="https://github.com/gustavros/" target={"_blank"}>
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/gustavro/" target={"_blank"}>
          LinkedIn
        </a>
        <a
          target={"_blank"}
          href="https://github.com/gustavros/gs-portfolio"
          className="text-zinc-900 bg-cyan-400 p-1 rounded-lg"
        >
          Repositório do projeto
        </a>
      </div>

      <div className="text-center">
        <p className="text-center">
          © {actualYear} Gustavo Santana. Todos os direitos reservados.{" "}
        </p>
        <p className="text-center">
          Feito com{" "}
          <span role="img" aria-label="coração">
            ❤️
          </span>{" "}
          e{" "}
          <span role="img" aria-label="café">
            ☕.
          </span>
        </p>
      </div>
    </footer>
  );
}
