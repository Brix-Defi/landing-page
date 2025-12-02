import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { useState, useEffect } from "react";
import { logoTextMazig } from "../../assets";

const NavBar2 = () => {
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
      <Link to="/" className="cursor-pointer z-10">
        <img
          src={logoTextMazig}
          alt="logoMazig"
          className="h-[24px] sm:h-[28px] md:h-[32px]"
        />
      </Link>
      <div
        className={twMerge(
          "absolute z-[0]",
          "w-[17%] h-[34%]",
          "blueNav__gradient",
          "left-[0%] top-[-3%]",
          "rotate-[-17deg]"
        )}
      />
    </nav>
  );
};

export default NavBar2;
