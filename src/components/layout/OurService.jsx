import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { services } from "../../const";
import { twMerge } from "tailwind-merge";
import { layout, styles } from "../../style";
import {
  fadeIn,
  zoomIn,
  textVariant,
  staggerContainer,
} from "../../utils/motion";

const FeatureCard = ({ title, content }) => {
  return (
    <motion.div variants={zoomIn(0.5, 0.5)}>
      <div
        className={twMerge(
          "rounded-3xl",
          "relative z-10",
          "bg-gradient-to-r from-[#364b44] via-[#3eb699] to-[#2f4858]",
          "p-6 sm:p-8 md:p-12",
          "shadow-lg",
          // "border border-white border-opacity-1",
          "transition-all duration-300 ease-in-out"
        )}
      >
        <div className="mb-4 flex items-center gap-3">
          <motion.h3
            variants={zoomIn(0.5, 0.6)}
            className={twMerge(styles.heading3, "text-white")}
          >
            {title}
          </motion.h3>
        </div>

        <motion.p
          variants={zoomIn(0.5, 0.8)}
          className={twMerge(styles.paragraph, "text-white/90")}
        >
          {content}
        </motion.p>
      </div>
    </motion.div>
  );
};

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

const OurService = () => {
  return (
    <section id="our-services" className={layout.section}>
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
              Our Team
            </motion.h2>
          </div>
          <motion.div
            variants={fadeIn("up", "tween", 0.5, 1)}
            className={twMerge(
              "absolute z-[0]",
              "cyan__gradient",
              "w-[50%] h-[50%]",
              "bottom-[30%] left-[70%]"
            )}
          />
        </div>

        <div className="flex justify-center">
          <div className="w-full sm:w-3/4 md:w-2/3">
            <FeatureCard
              title={services[0].title}
              content={services[0].content}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default OurService;
