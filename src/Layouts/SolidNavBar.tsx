import { Link } from "react-router-dom";

import { content } from "~/constant/Content";
import { moon, sun } from "~/assets/icons/Darkmode";
import { INav } from "~/interfaces/nav";

interface IProps {
  nav: INav[];
}

interface IProp2 {
  handleTheme: any;
  theme: string | null;
}

function SolidNavBar({ handleTheme, theme }: IProp2) {
  const { nav }: IProps = content;
  return (
    <>
      <div className="sticky top-0 w-full lg:h-[4.5rem]" />
      <nav className="dark:bg-sky-900 z-[999] fixed dark:border dark:border-b-white w-full flex-wrap hidden lg:block items-center justify-between px-2 py-3 bg-slate-200/90 ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
            <a
              className="text-sm title font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-gray"
              href={nav[0].link}
            >
              <span className="dark:text-black text-grey">Ivan</span> Gonzalez
            </a>
          </div>
          <div className="lg:flex flex-grow items-center">
            <ul className="flex flex-col lg:flex-row list-none ml-auto">
              <Link
                to="/home"
                className="px-3 font-Paprika dark:text-white font-bold text-[#253D57] leading-8 py-1 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
              >
                Home
              </Link>
              {nav.map((item, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <li className="nav-item" key={index}>
                  <a
                    className="px-3 font-Paprika dark:text-white font-bold text-[#253D57] leading-8 py-1 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                    href={item.link}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
              <Link
                to="/blogs"
                className="px-3 font-Paprika dark:text-white font-bold text-[#253D57] leading-8 py-1 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
              >
                blog
              </Link>
              <button
                type="button"
                onClick={handleTheme}
                className="sm:cursor-pointer top-10 right-10 z-[999] px-2 font-extrabold rounded-lg bg-slate-300/20 dark:text-sky-500"
              >
                {theme === "dark" ? sun : moon}
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default SolidNavBar;
