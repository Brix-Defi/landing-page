import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { whyMazig } from "../../const";
import { twMerge } from "tailwind-merge";
import { layout, styles } from "../../style";
import { WhyMazig1, WhyMazig2, WhyMazig3 } from "../../assets";
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion";

const WhyMazigCard = ({ title, content, icon, ...props }) => {
  return (
    <motion.div
      variants={textVariant(0.5)}
      className={twMerge(
        "py-4",
        "relative",
        "mt-4 sm:mt-6 md:mt-8",
        "sm:w-[85%] md:w-[70%]",
        "flex justify-start items-center",
        props.className
      )}
    >
      <div
        className={twMerge(
          "flex-shrink-0",
          "hidden xs:block",
          "hover:p-1 sm:hover:p-2",
          "w-[80px] sm:w-[100px] md:w-[120px]",
          "transition-all duration-300 ease-in-out"
        )}
      >
        {icon}
      </div>
      <div>
        <h3 className={styles.heading3}>{title}</h3>
        <p className={styles.paragraph}>{content}</p>
      </div>
    </motion.div>
  );
};

WhyMazigCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  className: PropTypes.string,
};

const WhyMazig = () => {
  return (
    <section id="why-mazig" className={`${layout.section}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="w-full relative pt-10"
      >
        <div className="flex justify-end">
          <div className="z-10">
            <motion.h2 variants={textVariant(0.25)} className={styles.heading2}>
              Why Brix?
            </motion.h2>
          </div>

          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className={twMerge(
              "absolute z-[0]",
              "green__gradient",
              "w-[17%] h-[34%]",
              "bottom-[-20%] right-[5%]"
            )}
          />
          <motion.div
            variants={fadeIn("up", "tween", 0.5, 1)}
            className={twMerge(
              "absolute z-[0]",
              "green__gradient",
              "w-[27%] h-[40%]",
              "left-[3%] top-[-5%]"
            )}
          />
        </div>

        <WhyMazigCard
          title={whyMazig[0].title}
          content={whyMazig[0].content}
          icon={<WhyMazig1 />}
        />

        <WhyMazigCard
          title={whyMazig[1].title}
          content={whyMazig[1].content}
          icon={<WhyMazig2 />}
          className="sm:ml-[50px] md:ml-[170px]"
        />

        <WhyMazigCard
          title={whyMazig[2].title}
          content={whyMazig[2].content}
          icon={<WhyMazig3 />}
          className="sm:ml-[100px] md:ml-[340px]"
        />
      </motion.div>
    </section>
  );
};

export default WhyMazig;
