import { HiMenuAlt2 } from "react-icons/hi";
import { useState, useEffect } from "react";
import { moon, sun } from "../assets/icons/Darkmode";
import NavBar from "./NavBar";
import SolidNavBar from "./SolidNavBar";

function Nav() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const [theme, setTheme] = useState<string | null>(null);

  const handleThemeSwitch = (): void => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="w-full flex justify-center">
      <SolidNavBar handleTheme={handleThemeSwitch} theme={theme} />
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="sm:cursor-pointer lg:hidden fixed top-10 right-10 z-[999] rounded-lg bg-white/10 text-sky-900 dark:text-white p-2"
      >
        {theme === "dark" ? sun : moon}
      </button>

      <button
        type="button"
        className="sm:cursor-pointer lg:hidden fixed top-10 left-10 z-[999] rounded-lg bg-white/10 p-2 dark:text-slate-200"
        onClick={() => setShowMenu(!showMenu)}
      >
        <HiMenuAlt2 size={34} />
      </button>
      <NavBar changeStateNavbar={showMenu} />
    </div>
  );
}

export default Nav;
