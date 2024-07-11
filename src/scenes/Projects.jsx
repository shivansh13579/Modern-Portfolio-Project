import React from "react";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { BackgroundGradient } from "../components/ui/background-gradient";
import UseMediaQuary from "../hooks/UseMediaQuary";
import { FaGithub } from "react-icons/fa";

function Projects() {
  const isAboveMediumScreens = UseMediaQuary("(min-width: 768px)");

  return (
    <section id="projects" className="mt-5 pt-18 pb-48">
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-5xl">
            <span className="text-red">Pro</span>ject
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/4" />
          </div>
        </div>
      </motion.div>

      <div className="mt-5">
        {isAboveMediumScreens ? (
          <div className="flex flex-col">
            <div className="mt-6">
              <BackgroundGradient className="flex items-center justify-between rounded-[22px] w-full h-[350px] p-4 bg-white dark:bg-zinc-900">
                <div className="flex-1 overflow-hidden rounded-[22px]">
                  <motion.div
                    initial={{ opacity: 0.6 }}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    whileInView={{ opacity: 1 }}
                  >
                    <img
                      className="w-full h-[320px] rounded-[22px]"
                      src="../assets/img5.jpg"
                      alt="Air Jordan 4 Retro Reimagined"
                    />
                  </motion.div>
                </div>
                <div className="flex-1 flex flex-col items-start pl-10 w-full">
                  <p className="dark:text-neutral-200 font-bold sm:text-3xl md:text-5xl  text-black text-3xl">
                    React Blog Project
                  </p>
                  <p className="text-xl font-semibold pt-4 text-neutral-600 dark:text-neutral-400">
                    Blog Project making to use ReactJs framwork and I use
                    appwrite service as for backend also used many npm like as
                    redux ,redux-toolkit and react-hook-form.
                  </p>
                  <div className="flex items-center gap-6 pt-6">
                    <FaGithub className="bg-black rounded-full text-5xl" />
                    <button className="rounded-lg py-3 px-7 text-white sm:text-xl md:text-2xl font-sans flex items-center bg-black dark:bg-zinc-800">
                      Visit Project
                    </button>
                  </div>
                </div>
              </BackgroundGradient>
            </div>

            <div className="flex justify-between mt-6 gap-10">
              <div>
                <BackgroundGradient className="flex flex-col items-start rounded-[22px] p-4 bg-white dark:bg-zinc-900">
                  <div className="basis-2/3 w-full overflow-hidden rounded-[22px]">
                    <motion.div
                      initial={{ opacity: 0.6 }}
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.9 }}
                      whileInView={{ opacity: 1 }}
                    >
                      <img
                        className="w-full h-[250px] rounded-[22px]"
                        src="../assets/img5.jpg"
                        alt="Air Jordan 4 Retro Reimagined"
                      />
                    </motion.div>
                  </div>
                  <div className="basis-1/3 flex flex-col items-start w-full py-2">
                    <p className="dark:text-neutral-200 font-bold sm:text-xl md:text-2xl  text-black">
                      React Blog Project
                    </p>
                    <p className="text-[16px] font-semibold pt-1 text-neutral-600 dark:text-neutral-400">
                      Blog Project making to use ReactJs framwork and I use
                      appwrite service as for backend also used many npm like as
                      redux ,redux-toolkit and react-hook-form.
                    </p>
                    <div className="flex justify-between items-center w-full pt-2">
                      <div className="">
                        <FaGithub className="bg-black rounded-full text-3xl" />
                      </div>
                      <div className="">
                        <button className="rounded-lg py-1 px-3 text-white text-[16px] font-sans bg-black dark:bg-zinc-800">
                          Visit Project
                        </button>
                      </div>
                    </div>
                  </div>
                </BackgroundGradient>
              </div>

              <div>
                <BackgroundGradient className="flex flex-col items-start rounded-[22px] p-4 bg-white dark:bg-zinc-900">
                  <div className="basis-2/3 w-full overflow-hidden rounded-[22px]">
                    <motion.div
                      initial={{ opacity: 0.6 }}
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.9 }}
                      whileInView={{ opacity: 1 }}
                    >
                      <img
                        className="w-full h-[250px] rounded-[22px]"
                        src="../assets/img5.jpg"
                        alt="Air Jordan 4 Retro Reimagined"
                      />
                    </motion.div>
                  </div>
                  <div className="basis-1/3 flex flex-col items-start w-full py-2">
                    <p className="dark:text-neutral-200 font-bold sm:text-xl md:text-2xl  text-black">
                      React Blog Project
                    </p>
                    <p className="text-[16px] font-semibold pt-1 text-neutral-600 dark:text-neutral-400">
                      Blog Project making to use ReactJs framwork and I use
                      appwrite service as for backend also used many npm like as
                      redux ,redux-toolkit and react-hook-form.
                    </p>
                    <div className="flex justify-between items-center w-full pt-2">
                      <div className="">
                        <FaGithub className="bg-black rounded-full text-3xl" />
                      </div>
                      <div className="">
                        <button className="rounded-lg py-1 px-3 text-white text-[16px] font-sans bg-black dark:bg-zinc-800">
                          Visit Project
                        </button>
                      </div>
                    </div>
                  </div>
                </BackgroundGradient>
              </div>
            </div>
            <div className="mt-6">
              <BackgroundGradient className="flex items-center justify-between rounded-[22px] w-full h-[350px] p-4 bg-white dark:bg-zinc-900">
                <div className="flex-1">
                  <img
                    className="w-full h-[320px] rounded-[22px]"
                    src="../assets/img5.jpg"
                    alt="Air Jordan 4 Retro Reimagined"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start pl-10 w-full">
                  <p className="dark:text-neutral-200 font-bold sm:text-3xl md:text-5xl  text-black text-3xl">
                    React Blog Project
                  </p>
                  <p className="text-xl font-semibold pt-4 text-neutral-600 dark:text-neutral-400">
                    Blog Project making to use ReactJs framwork and I use
                    appwrite service as for backend also used many npm like as
                    redux ,redux-toolkit and react-hook-form.
                  </p>
                  <div className="flex items-center gap-6 pt-6">
                    <FaGithub className="bg-black rounded-full text-5xl" />
                    <button className="rounded-lg py-3 px-7 text-white sm:text-xl text-2xl font-sans flex items-center bg-black dark:bg-zinc-800">
                      Visit Project
                    </button>
                  </div>
                </div>
              </BackgroundGradient>
            </div>
          </div>
        ) : (
          <div>
            <div className="mt-2">
              <BackgroundGradient className="flex flex-col items-start rounded-[22px] p-2 bg-white dark:bg-zinc-900">
                <div className="basis-1/3 w-full overflow-hidden rounded-[22px]">
                  <motion.div
                    initial={{ opacity: 0.6 }}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    whileInView={{ opacity: 1 }}
                  >
                    <img
                      className="w-full h-[150px] rounded-[12px]"
                      src="../assets/img5.jpg"
                      alt="Air Jordan 4 Retro Reimagined"
                    />
                  </motion.div>
                </div>
                <div className="basis-2/3 flex flex-col items-start w-full py-2">
                  <p className="dark:text-neutral-200 font-bold sm:text-xl md:text-2xl  text-black">
                    React Blog Project
                  </p>
                  <p className="text-[14px] font-semibold pt-1 text-neutral-600 dark:text-neutral-400">
                    Blog Project making to use ReactJs framwork and I use
                    appwrite service as for backend also used many npm like as
                    redux ,redux-toolkit and react-hook-form.
                  </p>
                  <div className="flex justify-start gap-5 items-center w-full pt-2">
                    <div className="">
                      <FaGithub className="bg-black rounded-full text-2xl" />
                    </div>
                    <div className="">
                      <button className="rounded-lg py-1 px-2 text-white text-[16px] font-sans bg-black dark:bg-zinc-800">
                        Visit Project
                      </button>
                    </div>
                  </div>
                </div>
              </BackgroundGradient>
            </div>
            <div className="mt-3">
              <BackgroundGradient className="flex flex-col items-start rounded-[22px] p-2 bg-white dark:bg-zinc-900">
                <div className="basis-1/3 w-full overflow-hidden rounded-[22px]">
                  <motion.div
                    initial={{ opacity: 0.6 }}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    whileInView={{ opacity: 1 }}
                  >
                    <img
                      className="w-full h-[150px] rounded-[12px]"
                      src="../assets/img5.jpg"
                      alt="Air Jordan 4 Retro Reimagined"
                    />
                  </motion.div>
                </div>
                <div className="basis-2/3 flex flex-col items-start w-full py-2">
                  <p className="dark:text-neutral-200 font-bold sm:text-xl md:text-2xl  text-black">
                    React Blog Project
                  </p>
                  <p className="text-[14px] font-semibold pt-1 text-neutral-600 dark:text-neutral-400">
                    Blog Project making to use ReactJs framwork and I use
                    appwrite service as for backend also used many npm like as
                    redux ,redux-toolkit and react-hook-form.
                  </p>
                  <div className="flex justify-start gap-5 items-center w-full pt-2">
                    <div className="">
                      <FaGithub className="bg-black rounded-full text-2xl" />
                    </div>
                    <div className="">
                      <button className="rounded-lg py-1 px-2 text-white text-[16px] font-sans bg-black dark:bg-zinc-800">
                        Visit Project
                      </button>
                    </div>
                  </div>
                </div>
              </BackgroundGradient>
            </div>
            <div className="mt-3">
              <BackgroundGradient className="flex flex-col items-start rounded-[22px] p-2 bg-white dark:bg-zinc-900">
                <div className="basis-1/3 w-full overflow-hidden rounded-[22px]">
                  <motion.div
                    initial={{ opacity: 0.6 }}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    whileInView={{ opacity: 1 }}
                  >
                    <img
                      className="w-full h-[150px] rounded-[12px]"
                      src="../assets/img5.jpg"
                      alt="Air Jordan 4 Retro Reimagined"
                    />
                  </motion.div>
                </div>
                <div className="basis-2/3 flex flex-col items-start w-full py-2">
                  <p className="dark:text-neutral-200 font-bold sm:text-xl md:text-2xl  text-black">
                    React Blog Project
                  </p>
                  <p className="text-[14px] font-semibold pt-1 text-neutral-600 dark:text-neutral-400">
                    Blog Project making to use ReactJs framwork and I use
                    appwrite service as for backend also used many npm like as
                    redux ,redux-toolkit and react-hook-form.
                  </p>
                  <div className="flex justify-start gap-5 items-center w-full pt-2">
                    <div className="">
                      <FaGithub className="bg-black rounded-full text-2xl" />
                    </div>
                    <div className="">
                      <button className="rounded-lg py-1 px-2 text-white text-[16px] font-sans bg-black dark:bg-zinc-800">
                        Visit Project
                      </button>
                    </div>
                  </div>
                </div>
              </BackgroundGradient>
            </div>
            <div className="mt-3">
              <BackgroundGradient className="flex flex-col items-start rounded-[22px] p-2 bg-white dark:bg-zinc-900">
                <div className="basis-1/3 w-full overflow-hidden rounded-[22px]">
                  <motion.div
                    initial={{ opacity: 0.6 }}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    whileInView={{ opacity: 1 }}
                  >
                    <img
                      className="w-full h-[150px] rounded-[12px]"
                      src="../assets/img5.jpg"
                      alt="Air Jordan 4 Retro Reimagined"
                    />
                  </motion.div>
                </div>
                <div className="basis-2/3 flex flex-col items-start w-full py-2">
                  <p className="dark:text-neutral-200 font-bold sm:text-xl md:text-2xl  text-black">
                    React Blog Project
                  </p>
                  <p className="text-[14px] font-semibold pt-1 text-neutral-600 dark:text-neutral-400">
                    Blog Project making to use ReactJs framwork and I use
                    appwrite service as for backend also used many npm like as
                    redux ,redux-toolkit and react-hook-form.
                  </p>
                  <div className="flex justify-start gap-5 items-center w-full pt-2">
                    <div className="">
                      <FaGithub className="bg-black rounded-full text-2xl" />
                    </div>
                    <div className="">
                      <button className="rounded-lg py-1 px-2 text-white text-[16px] font-sans bg-black dark:bg-zinc-800">
                        Visit Project
                      </button>
                    </div>
                  </div>
                </div>
              </BackgroundGradient>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
