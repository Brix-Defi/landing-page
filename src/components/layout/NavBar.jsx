import { navLinks } from "../../const";
import { twMerge } from "tailwind-merge";
import { useState, useEffect } from "react";
import { logoTextBrix, closeIcon, menuBurgerIcon } from "../../assets";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos;

    setPrevScrollPos(currentScrollPos);
    setVisible(visible);
  };

  return (
    <nav
      className={twMerge(
        "navbar",
        "relative",
        "py-3 sm:py-5",
        "px-6 sm:px-16",
        "w-full flex justify-between items-center",
        "border-b-2 border-blue-950 border-opacity-70",
        `${visible ? "activeNav" : "hiddenNav"}`
      )}
    >
      <a href="#home" className="cursor-pointer z-10">
        <img
          src={logoTextBrix}
          alt="logoBrix"
          className="h-[24px] sm:h-[28px] md:h-[32px]"
          style={{ filter: "grayscale(1) brightness(0) invert(1)" }}
        />
      </a>
      <div
        className={twMerge(
          "absolute z-[0]",
          "w-[17%] h-[34%]",
          "blueNav__gradient",
          "left-[0%] top-[-3%]",
          "rotate-[-17deg]"
        )}
      />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-normal cursor-pointer text-[16px] text-white hover:tracking-wider transition-all duration-300 ease-in-out
            ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? closeIcon : menuBurgerIcon}
          alt="menuBurgerIcon"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={twMerge(
            "p-6",
            "sidebar",
            "mx-4 my-2",
            "rounded-xl",
            "min-w-[140px]",
            "bg-black-gradient",
            "absolute top-12 right-0",
            `${!toggle ? "hidden" : "flex"}`
          )}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] text-white
                 ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
