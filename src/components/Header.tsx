import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { List, Moon, Sun, X } from "phosphor-react";
import ActiveLinks from "./ActiveLinks";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
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
          className="text-zinc-900 bg-amber-400 p-1 rounded-lg"
          role={"button"}
          onClick={() => {
            setTheme("light");
            setIsMenuOpen(false);
          }}
        />
      );
    } else {
      return (
        <Moon
          size={32}
          className="text-zinc-900 bg-amber-400 p-1 rounded-lg"
          role={"button"}
          onClick={() => {
            setTheme("dark");
            setIsMenuOpen(false);
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
      {isMobile ? (
        <header className="flex items-center justify-between py-10 px-4">
          <h1 className="font-bold text-3xl uppercase text-amber-400">
            <a href="/">
              GUSTAVO
              <br />
              SANTANA
            </a>
          </h1>

          {isMenuOpen ? (
            <div className="absolute top-0 right-0 w-full h-screen bg-zinc-50 bg-opacity-95 z-10 animate-slide-in-right overflow-auto dark:bg-zinc-900 dark:bg-opacity-90">
              <nav className="flex flex-col gap-6 items-center justify-center h-full ">
                <ul className="flex flex-col gap-8 items-center text-lg">
                  <li>
                    <ActiveLinks
                      onClick={() => {
                        setIsMenuOpen(false);
                      }}
                      href={"/"}
                    >
                      Início
                    </ActiveLinks>
                  </li>
                  <li>
                    <ActiveLinks
                      onClick={() => {
                        setIsMenuOpen(false);
                      }}
                      href="/skills"
                    >
                      Habilidades
                    </ActiveLinks>
                  </li>
                  <li>
                    <ActiveLinks
                      onClick={() => {
                        setIsMenuOpen(false);
                      }}
                      href="/projects"
                    >
                      Projetos
                    </ActiveLinks>
                  </li>
                  <li>
                    <ActiveLinks
                      onClick={() => {
                        setIsMenuOpen(false);
                      }}
                      href="/contact"
                    >
                      Contato
                    </ActiveLinks>
                  </li>
                </ul>

                {renderThemeChanger()}

                <button
                  className="absolute top-11 right-0 p-4"
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                >
                  <X
                    size={32}
                    className="text-amber-400"
                    role={"button"}
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                  />
                </button>
              </nav>
            </div>
          ) : (
            <List
              size={32}
              className="text-zinc-900 bg-amber-400 p-1 rounded-lg"
              role={"button"}
              onClick={() => {
                setIsMenuOpen(true);
              }}
            />
          )}
        </header>
      ) : (
        <header className="flex items-center justify-between py-10 px-4 ">
          <h1 className="font-bold text-3xl uppercase text-amber-400">
            <a href="/">
              GUSTAVO
              <br />
              SANTANA
            </a>
          </h1>

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
              <li>
                <ActiveLinks href="/contact">Contato</ActiveLinks>
              </li>
            </ul>

            {renderThemeChanger()}
          </nav>
        </header>
      )}
    </>
  );
}
