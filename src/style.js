import { twMerge } from "tailwind-merge";

export const styles = {
  boxWidth: "w-full xl:max-w-[1280px]",

  heading2: twMerge(
    "text-white",
    "leading-[76.8px]",
    "font-poppins font-semibold",
    "text-[32px] xs:text-[40px] md:text-[48px]"
  ),
  heading3: twMerge(
    "text-white",
    "leading-[30.8px]",
    "font-poppins font-semibold",
    "text-[17px] xs:text-[28px] md:text-[32px]"
  ),
  heading4: twMerge(
    "text-white",
    "leading-[30.8px]",
    "font-poppins font-semibold",
    "text-[14px] xs:text-[16px] md:text-[18px]"
  ),
  paragraph: twMerge(
    "text-dimWhite",
    "leading-[30.8px]",
    "font-poppins font-normal",
    "text-[10px] xs:text-[14px] md:text-[18px]"
  ),
  paragraph2: twMerge(
    "text-dimWhite",
    "leading-[30.8px]",
    "font-poppins font-normal ",
    "text-[8px] xs:text-[12px] md:text-[14px]"
  ),

  flexCenter: "flex flex-col justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "px-6 sm:px-12 md:px-16",
  paddingY: "pt-10 sm:py-12 md:py-16",
};

export const layout = {
  section: `flex md:flex-row flex-col h-fit ${styles.paddingY}`,
};
