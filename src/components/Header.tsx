import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { List, Moon, Sun } from "phosphor-react";
import ActiveLinks from "./ActiveLinks";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <Sun
          size={32}
          className="text-zinc-900 bg-cyan-400 p-1 rounded-lg"
          role={"button"}
          onClick={() => {
            setTheme("light");
          }}
        />
      );
    } else {
      return (
        <Moon
          size={32}
          className="text-zinc-900 bg-cyan-400 p-1 rounded-lg"
          role={"button"}
          onClick={() => {
            setTheme("dark");
          }}
        />
      );
    }
  };

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  return (
    <>
      <header className="flex items-center justify-between py-10 px-4 ">
        <h1 className="font-bold text-3xl uppercase text-cyan-400">
          <a href="/">
            GUSTAVO
            <br />
            SANTANA
          </a>
        </h1>

        {isMobile ? (
          <List size={32} className="text-cyan-400" />
        ) : (
          <nav className="flex gap-4 items-end">
            <ul className="flex gap-4 text-lg">
              <li>
                <ActiveLinks href={"/"}>Início</ActiveLinks>
              </li>
              <li>
                <ActiveLinks href="/skills">Habilidades</ActiveLinks>
              </li>
              <li>
                <ActiveLinks href="/projects">Projetos</ActiveLinks>
              </li>
              <li className="cursor-not-allowed text-zinc-700 pointer-events-none select-none dark:text-zinc-200">
                <ActiveLinks href="/contact">Contato</ActiveLinks>
              </li>
            </ul>

            {renderThemeChanger()}
          </nav>
        )}
      </header>
    </>
  );
}
