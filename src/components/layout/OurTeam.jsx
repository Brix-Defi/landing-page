import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { ourTeam } from "../../const";
import { twMerge } from "tailwind-merge";
import { layout, styles } from "../../style";
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion";

const OurTeamCard = ({ header, content, isLeft = true, ...otherProps }) => {
  return (
    <motion.div
      variants={fadeIn(isLeft ? "left" : "right", "tween", 0.75, 1)}
      className={twMerge("xs:w-[85%] sm:w-[75%] md:w-[65%]")}
    >
      <div
        className={twMerge(
          "p-6 md:p-8",
          "bg-green-gradient",
          "mb-[35px] sm:mb-[50px]",
          "hover:p-8 md:hover:p-10",
          "rounded-xl md:hover:rounded-3xl",
          "transition-all duration-300 ease-in-out",
          otherProps.className
        )}
      >
        {header && (
          <div className="mb-4">
            <div
              className={twMerge(
                "inline-block px-3 py-1 rounded-full",
                "bg-white bg-opacity-10 text-white",
                "text-sm font-semibold"
              )}
            >
              {header}
            </div>
          </div>
        )}
        <div
          className={twMerge(
            "text-white",
            "text-[16px] sm:text-[18px] md:text-[20px]"
          )}
        >
          {content}
        </div>
      </div>
    </motion.div>
  );
};

OurTeamCard.propTypes = {
  content: PropTypes.string.isRequired,
  isLeft: PropTypes.bool,
};

const OurTeam = () => {
  return (
    <section id="our-team" className={layout.section}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="w-full relative"
      >
        <div
          className={twMerge(
            "pt-10",
            "flex justify-center",
            "pb-3 sm:pb-6 md:pb-9"
          )}
        >
          <div>
            <motion.h2 variants={textVariant(0.25)} className={styles.heading2}>
              Our Services
            </motion.h2>
          </div>

          <motion.div
            variants={fadeIn("up", "tween", 0.5, 1)}
            className={twMerge(
              "absolute z-[0]",
              "green__gradient",
              "w-[27%] h-[40%]",
              "left-[5%] bottom-[10%]"
            )}
          />
        </div>

        <div className={`${styles.flexCenter}`}>
          <div className={twMerge("sm:max-w-[90%] md:max-w-[70%]", "relative")}>
            <OurTeamCard
              header={ourTeam[0].header}
              content={ourTeam[0].content}
              className={twMerge("rounded-lg rounded-br-[50px]")}
            />

            <div className="flex justify-end">
              <OurTeamCard
                header={ourTeam[1].header}
                content={ourTeam[1].content}
                isLeft={false}
                className={twMerge(
                  "text-right",
                  "rounded-lg rounded-tl-[50px]"
                )}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default OurTeam;
