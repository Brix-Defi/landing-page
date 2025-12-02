import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { layout, styles } from "../../style";
import {
  GateIcon,
  MexcIcon,
  BitgetIcon,
  KuCoinIcon,
  BitmartIcon,
  CryptoComIcon,
  volumeArchivement,
} from "../../assets";
import {
  fadeIn,
  slideIn,
  staggerContainer,
  textVariant,
} from "../../utils/motion";

const Archivements = () => {
  const icons = [
    { component: <KuCoinIcon />, name: "KuCoin" },
    { component: <BitgetIcon />, name: "Bitget" },
    { component: <GateIcon />, name: "Gate.io" },
    { component: <MexcIcon />, name: "MEXC" },
    { component: <BitmartIcon />, name: "Bitmart" },
    { component: <CryptoComIcon />, name: "Crypto.com" },
  ];

  return (
    <section id="archivements" className={layout.section}>
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
            "flex justify-start",
            "pb-3 sm:pb-6 md:pb-9"
          )}
        >
          <div>
            <motion.h2 variants={textVariant(0.25)} className={styles.heading2}>
              Archivements
            </motion.h2>
          </div>
        </div>
        <motion.div
          variants={fadeIn("down", "tween", 2.75, 2.5)}
          className={twMerge(
            "cyan__gradient",
            "absolute z-[0]",
            "w-[20%] h-[27%]",
            "right-[15%] top-[43%]"
          )}
        />
        <motion.div
          variants={fadeIn("up", "tween", 0.75, 2.5)}
          className={twMerge(
            "absolute z-[0]",
            "green__gradient",
            "w-[20%] h-[27%]",
            "left-[5%] bottom-[5%]"
          )}
        />

        <div
          className={twMerge("grid sm:grid-cols-2", "relative z-10", "gap-8")}
        >
          <div className={twMerge(`${styles.flexCenter}`)}>
            <motion.div
              variants={slideIn("donw", "tween", 0.75, 1)}
              className={twMerge(
                `${styles.heading4}`,
                "mb-1 xs:mb-5 sm:mb-8 md:mb-12"
              )}
            >
              Support Market Making for all tokens on
            </motion.div>

            <motion.div
              variants={slideIn("down", "tween", 1, 1)}
              className={twMerge(
                "w-full",
                "gap-y-6",
                "grid grid-cols-3",
                "gap-x-6 sm:gap-x-1 md:gap-x-5",
                "max-w-[75%] xs:max-w-[70%] sm:max-w-[80%]"
              )}
            >
              {icons.map((item, index) => (
                <div
                  key={index}
                  className={twMerge(
                    `${styles.flexCenter}`,
                    "w-full",
                    "p-2 xs:p-4 sm:p-5",
                    "xs:hover:p-3 sm:hover:p-4",
                    "h-[100px] sm:h-[110px] md:h-[120px]",
                    "transition-all duration-300 ease-in-out"
                  )}
                >
                  {item.component}
                </div>
              ))}
            </motion.div>
            <motion.p
              variants={slideIn("down", "tween", 1.25, 1)}
              className={twMerge(
                styles.paragraph2,
                "text-center",
                "mt-1 sm:mt-2"
              )}
            >
              and more
            </motion.p>
          </div>

          <div className={twMerge(`${styles.flexCenter}`)}>
            <motion.img
              variants={slideIn("up", "tween", 2.5, 1)}
              src={volumeArchivement}
              alt="volumeArchivement"
              className="w-[65%] xs:w-[50%] sm:w-[70%]"
            />
            <motion.div
              variants={slideIn("up", "tween", 2.75, 1)}
              className={twMerge(styles.heading2, "text-gradient")}
            >
              $200M+
            </motion.div>
            <motion.p
              variants={slideIn("up", "tween", 3, 1)}
              className={twMerge(`${styles.paragraph}`)}
            >
              Total trading volume since inception
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Archivements;
