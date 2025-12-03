import PropTypes from "prop-types";
import { Children, useState } from "react";
import { styles } from "../../style";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";
import { logoTextMazig, DiscordIcon, TelegramIcon, XIcon } from "../../assets";
import { footerVariants } from "../../utils/motion";

const IconButton = ({ link, ...otherProps }) => {
  return (
    <div className="flex justify-center">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className={twMerge(
          "bg-green-500",
          "rounded-full",
          "inline-block",
          "bg-green-gradient",
          "p-3 hover:p-[10px]",
          "transition-all duration-300 ease-in-out"
        )}
        style={{ width: "50px", height: "50px" }}
        {...otherProps}
      >
        {Children.toArray(otherProps.children)}
      </a>
    </div>
  );
};

IconButton.propTypes = {
  link: PropTypes.string,
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const EmailSignup = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!email) return;
      // Simple client-side feedback; replace with integration later
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
      alert("Thanks! We'll be in touch about early access.");
    };

    return (
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center"
      >
        <input
          type="email"
          required
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 rounded-l-full bg-white/5 text-white placeholder-white/60 focus:outline-none w-60 border border-white/10 shadow-[0_0_20px_rgba(59,130,246,0.08)] focus:shadow-[0_0_30px_rgba(59,130,246,0.22)] transition-shadow duration-300"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-white text-primary font-semibold rounded-r-full shadow-[0_6px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_0_30px_rgba(59,130,246,0.18)] transition-all ml-3"
        >
          Notify Me
        </button>
      </form>
    );
  };
  const socials = [
    // {
    //   id: "discord",
    //   link: "https://discord.com/",
    //   icon: <DiscordIcon />,
    // },
    {
      id: "telegram",
      link: "https://t.me/brixdefi_official",
      icon: <TelegramIcon />,
    },
    {
      id: "twitter",
      link: "https://x.com/BrixDefi",
      icon: <XIcon />,
    },
  ];

  return (
    <section id="contact" className={twMerge("pt-10 sm:pt-12 md:pt-16")}>
      <motion.footer
        variants={footerVariants}
        initial="hidden"
        whileInView="show"
        className={twMerge("p-5")}
      >
        <div className="flex flex-col-reverse xs:flex-row items-center">
          <div className="flex justify-center w-1/2">
            <div className="text-center max-w-md">
              <h3 className={twMerge(styles.heading3, "text-center mb-2")}>
                Join the future of execution.
              </h3>
              <p
                className={twMerge(
                  styles.paragraph,
                  "text-center mb-4 text-white/80"
                )}
              >
                Interested in early access, becoming a Solver, or partnering
                with us? Let's talk!
              </p>

              <EmailSignup />
            </div>
          </div>

          <div className="flex justify-center w-1/2">
            <div className="flex flex-col justify-center ">
              <h3
                className={twMerge(
                  styles.heading3,
                  "text-center",
                  "mb-3 sm:mb-5"
                )}
              >
                Contact Us
              </h3>

              <div className={twMerge("flex flex-row justify-center")}>
                {socials.map((social) => (
                  <div key={social.id} className="mx-6 xs:mx-3 sm:mx-4 md:mx-5">
                    <IconButton link={social.link}>{social.icon}</IconButton>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.footer>
      <div className="mt-12"></div>
    </section>
  );
};

export default Contact;
