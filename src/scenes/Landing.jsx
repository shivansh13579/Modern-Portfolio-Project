import React from "react";
import SocialMediaIcons from "../components/SocialMediaIcons";
import UseMediaQuary from "../hooks/UseMediaQuary";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Landing({ setSelectedPage }) {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  const isAboveMediumScreens = UseMediaQuary("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveMediumScreens ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              className="hover:filter hover:saturate-200 rounded-t-[400px] transition duration-500 z-10 w-full max-w-[400px] md:max-w-[350px]"
              src="../../assets/rk.jpg"
              alt="profile"
            />
          </div>
        ) : (
          <img
            className="hover:filter hover:saturate-200 rounded-t-[400px] transition duration-500 z-10 w-full max-w-[600px] md:max-w-[400px]"
            src="../../assets/rk.jpg"
            alt="profile"
          />
        )}
      </div>

      {/* Main Section  */}
      <div className="z-30 basis-2/5 mt-10 md:mt-32">
        {/* Heading  */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-3xl xs:text-6xl font-playfair z-10 text-center md:text-start">
            Shivam{" "}
            <span className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush before:absolute before:-left-[27px] before:-top-[70px] before:z-[-1]">
              Singh
            </span>
          </p>

          <p className="mt-10 mb-7 text-2xl xs:text-4xl font-semibold  text-center md:text-start font-playfair">
            {text}
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#DC4492"
            />
          </p>
        </motion.div>

        {/* CALL TO ACTIONS  */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-1 px-2 xs:py-3 xs:px-7 font-semibold hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>

          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-playfair px-8">
              Let's talk
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
}

export default Landing;
