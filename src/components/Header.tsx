import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "phosphor-react";
import ActiveLinks from "./ActiveLinks";

export default function Header() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

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

  return (
    <>
      <header className="flex items-center justify-between py-10 px-4 ">
        <h1 className="font-bold text-3xl uppercase text-cyan-400">
          <a href="/">GUSTAVO SANTANA</a>
        </h1>

        <nav className="flex items-end">
          <ul className="flex gap-4 text-lg">
            <li>
              <ActiveLinks href={"/"}>Home</ActiveLinks>
            </li>
            <li>
              <ActiveLinks href="/techs">Techs</ActiveLinks>
            </li>
            <li>
              <ActiveLinks href="/projects">Projects</ActiveLinks>
            </li>
            <li>
              <ActiveLinks href="/contact">Contact</ActiveLinks>
            </li>
          </ul>
        </nav>

        {renderThemeChanger()}
      </header>
    </>
  );
}
