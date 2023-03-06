export default function Footer() {
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

      <div>
        <p>© 2022 Gustavo Santana. Todos os direitos reservados. </p>
      </div>
    </footer>
  );
}
