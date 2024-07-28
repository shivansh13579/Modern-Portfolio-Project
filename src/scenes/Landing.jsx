import React from "react";
import SocialMediaIcons from "../components/SocialMediaIcons";
import UseMediaQuary from "../hooks/UseMediaQuary";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { IoMdDownload } from "react-icons/io";
import { BackgroundGradient } from "../components/ui/background-gradient";

function Landing({ setSelectedPage }) {
  const [text] = useTypewriter({
    words: ["UI/UX/Designer.", "Web Developer."],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 40,
    delaySpeed: 1000,
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
              className="hover:filter hover:saturate-150 rounded-t-[400px] transition duration-500 z-10 w-full max-w-[400px] md:max-w-[350px]"
              src="../../assets/rk.jpg"
              alt="profile"
            />
          </div>
        ) : (
          <img
            className="hover:filter hover:saturate-50 rounded-t-[400px] transition duration-500 z-10 w-full max-w-[600px] md:max-w-[400px]"
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
            <span className="xs:relative xs:text-white xs:font-semibold z-20 xs:before:content-brush before:absolute before:-left-[20px] before:-top-[80px] before:z-[-1]">
              Singh
            </span>
          </p>

          <p className="mt-7 mb-7  text-2xl xs:text-4xl font-semibold  text-center md:text-start font-playfair">
            I am a <span className="text-red">{text}</span>
            <span className="text-3xl font-extrabold">
              <Cursor
                cursorBlinking="false"
                cursorStyle="|"
                cursorColor="#DC4492"
              />
            </span>
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
          <p className="flex w-1/2 md:w-1/3  text-xl bg-gradient-rainblue text-deep-blue rounded-[10px] py-2 px-4 xs:py-3 xs:px-7 font-semibold hover:bg-blue hover:text-white transition duration-500">
            <a
              href="../../assets/resume.pdf"
              download
              className="w-full flex justify-center  md:flex md:justify-center md:items-center gap-2"
            >
              Resume{" "}
              <span className="text-black text-center pt-1">
                <IoMdDownload className="text-xl" />
              </span>
            </a>
          </p>
        </motion.div>

        <motion.div
          className="flex mt-3 text-2xl justify-center md:justify-start"
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
