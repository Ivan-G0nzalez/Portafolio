import { INav } from "~/interfaces/nav";
import { createElement, useState } from "react";
import { content } from "~/constant/Content";

interface IProps {
  nav: INav[];
}

function NavBar({ changeStateNavbar }: any) {
  const { nav }: IProps = content;
  const [active, setActive] = useState<number>(0);
  return (
    <nav
      className={`fixed z-[999] lg:hidden bottom-10 flex items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-full text-dark_primary duration-300 ${
        changeStateNavbar ? "bottom-10" : "bottom-[-100%]"
      }`}
    >
      {nav.map((item, index) => (
        <a
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          href={item.link}
          onClick={() => setActive(index)}
          className={`text-xl p-2.5 rounded-full sm:cursor-pointer ${
            index === active && "bg-dark_primary text-white"
          }`}
        >
          {createElement(item.icon)}
        </a>
      ))}
    </nav>
  );
}

export default NavBar;
