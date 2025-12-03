import PropTypes from "prop-types";
import { styles } from "../../style";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { useTypewriter } from "react-simple-typewriter";
import { home1, home2, logoBrix } from "../../assets";
import { textVariant, staggerContainer } from "../../utils/motion";

const HomeButton = ({ content, link }) => {
  return (
    <motion.a variants={textVariant(0.7)} href={link} target="_blank">
      <div
        className={twMerge(
          "w-fit",
          "rounded-xl",
          "relative z-10",
          "bg-green-gradient",
          "py-2 sm:py-3 md:py-4",
          "px-8 sm:px-8 md:px-12",
          "sm:hover:px-12 md:hover:px-16",
          "transition-all duration-300 ease-in-out"
        )}
      >
        <div className={twMerge(`${styles.heading4}`)}>{content}</div>
      </div>
    </motion.a>
  );
};

HomeButton.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  link: PropTypes.string,
};

const Home = () => {
  const [text] = useTypewriter({
    words: ["Minimize Risk", "Maximize Returns"],
    loop: 0,
    typeSpeed: 130,
    deleteSpeed: 70,
    delaySpeed: 2750,
  });

  return (
    <section id="home">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={twMerge(
          "h-screen",
          "min-h-[-webkit-fill-available]", /* Safari iOS fix */
          "relative",
          "flex justify-start items-center"
        )}
      >
        <div className="z-10">
          <motion.div
            variants={textVariant(0.5)}
            className={twMerge(
              styles.heading2,
              "pt-2 sm:pt-6 md:pt-9 lg:pt-12"
            )}
          >
            Strategy on <span className="text-gradient">Autopilot</span>:<br />{" "}
            <span>{text}</span>
          </motion.div>

          <div className="flex flex-col xs:flex-row items-center">
            <div>
              <motion.div
                variants={textVariant(0.6)}
                className={twMerge(styles.paragraph, "py-8 sm:pb-12 md:pb-16")}
              >
                Brix automates your on-chain trading strategies – eliminating
                manual work and market pressure so you can capture every
                opportunity efficiently.
                <br />
              </motion.div>
              <div
                className={twMerge(
                  "space-y-4 md:space-y-6", /* Safari-friendly alternative to gap */
                  "pt-2 sm:pt-4 md:pt-6",
                  "flex flex-row xs:flex-col sm:flex-row",
                  "[&>*+*]:ml-4 [&>*+*]:md:ml-6 xs:[&>*+*]:ml-0 sm:[&>*+*]:ml-4 sm:[&>*+*]:md:ml-6" /* gap fallback */
                )}
              >
                <HomeButton
                  content="Launch App"
                  link="https://brix.mazig.io/"
                />
              </div>
            </div>

            <motion.div
              variants={textVariant(0.7)}
              className={twMerge("block sm:hidden", "max-w-[70%]")}
            >
              <img src={logoBrix} alt="logoBrix" />
            </motion.div>
          </div>
        </div>

        <motion.div
          variants={textVariant(0.7)}
          className={twMerge(
            "pl-4",
            "z-10",
            "sm:max-w-[43%]",
            "hidden sm:block"
          )}
        >
          <img src={logoBrix} alt="logoBrix" />
        </motion.div>

        <motion.div
          variants={textVariant(0.8)}
          className={twMerge(
            "absolute z-[0]",
            "cyan__gradient",
            "w-[17%] h-[34%]",
            "right-[10%] top-[25%]"
          )}
        />
        <motion.div
          variants={textVariant(0.7)}
          className={twMerge(
            "absolute z-[0]",
            "green__gradient",
            "w-[27%] h-[27%]",
            "right-[25%] top-[50%]"
          )}
        />
      </motion.div>
    </section>
  );
};

export default Home;
