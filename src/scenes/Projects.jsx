import React from "react";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { BackgroundGradient } from "../components/ui/background-gradient";
import UseMediaQuary from "../hooks/UseMediaQuary";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";

function Projects() {
  const isAboveMediumScreens = UseMediaQuary("(min-width: 768px)");

  return (
    <section id="projects" className="mt-5 pt-18 pb-20">
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
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">Pro</span>ject
          </p>
          <div className="flex justify-center mt-3">
            <LineGradient width="w-1/2" />
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
                    <Link
                      to={
                        "https://pandit-jajkq08tn-shivansh13579s-projects.vercel.app/"
                      }
                    >
                      <img
                        className="w-full h-[320px] rounded-[22px]"
                        src="../assets/img5.jpg"
                        alt="Air Jordan 4 Retro Reimagined"
                      />
                    </Link>
                  </motion.div>
                </div>
                <div className="flex-1 flex flex-col items-start pl-10 w-full">
                  <p className="dark:text-neutral-200 font-bold sm:text-3xl md:text-5xl  text-black text-3xl">
                    Ecommerce-Project
                  </p>
                  <p className="text-xl font-semibold pt-4 text-neutral-600 dark:text-neutral-400">
                    This Project have made by ReactJs and appwrite server is use
                    for backend.I use Redux-toolkit to maintainable state.
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
                        src="../assets/img4.jpg"
                        alt="Air Jordan 4 Retro Reimagined"
                      />
                    </motion.div>
                  </div>
                  <div className="basis-1/3 flex flex-col items-start w-full py-2">
                    <p className="dark:text-neutral-200 font-bold sm:text-xl md:text-2xl  text-black">
                      Portfolio Project
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
                        <button className="rounded-lg py-1 pb-2 px-3 text-white text-[16px] font-sans bg-black dark:bg-zinc-800">
                          <Link
                            to={
                              "https://shivansh13579.github.io/First-Portfolio-website/"
                            }
                          >
                            Visit Project
                          </Link>
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
                        src="../assets/img3.jpg"
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
                        <button className="rounded-lg py-1 pb-2 px-3 text-white text-[16px] font-sans bg-black hover:bg-slate-800 dark:bg-zinc-800">
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
                      src="../assets/img2.jpg"
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
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
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
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://shivansh13579.github.io/First-Portfolio-website/"
                      >
                        <img
                          className="w-full h-[150px] rounded-[12px]"
                          src="../assets/img5.jpg"
                          alt="Air Jordan 4 Retro Reimagined"
                        />
                      </a>
                    </motion.div>
                  </div>
                  <div className="basis-2/3 flex flex-col items-start w-full py-2">
                    <p className="dark:text-neutral-200 font-bold sm:text-xl md:text-2xl  text-black">
                      Ecommerce-Project
                    </p>
                    <p className="text-[14px] font-semibold pt-1 text-black dark:text-neutral-400">
                      This Project have made by ReactJs and appwrite server is
                      use for backend.I use Redux-toolkit to maintainable state.
                    </p>
                    <div className="flex justify-start gap-5 items-center w-full pt-2">
                      <div className="">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://github.com/shivansh13579/First-Portfolio-website"
                        >
                          <FaGithub className="bg-black rounded-full text-2xl" />
                        </a>
                      </div>
                      <div className="">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://shivansh13579.github.io/First-Portfolio-website/"
                        >
                          <button className="rounded-lg py-1 px-2 text-white text-[16px] font-sans bg-black dark:bg-zinc-800">
                            Visit Project
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </BackgroundGradient>
              </motion.div>
            </div>
            <div className="mt-3">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
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
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/shivansh13579/ReactBlog-Project"
                      >
                        <img
                          className="w-full h-[150px] rounded-[12px]"
                          src="../assets/img4.jpg"
                          alt="Air Jordan 4 Retro Reimagined"
                        />
                      </a>
                    </motion.div>
                  </div>
                  <div className="basis-2/3 flex flex-col items-start w-full py-2">
                    <p className="dark:text-neutral-200 font-bold sm:text-xl md:text-2xl  text-black">
                      React Blog Project
                    </p>
                    <p className="text-[14px] font-semibold pt-1 text-black dark:text-neutral-400">
                      This is a blog project.I think, it is a best project for
                      me to learm React and also redux toolkit.I think it is my
                      best project for learning purpose.
                    </p>
                    <div className="flex justify-start gap-5 items-center w-full pt-2">
                      <div className="">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://github.com/shivansh13579/ReactBlog-Project"
                        >
                          <FaGithub className="bg-black rounded-full text-2xl" />
                        </a>
                      </div>
                      <div className="">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://github.com/shivansh13579/ReactBlog-Project"
                        >
                          <button className="rounded-lg py-1 px-2 text-white text-[16px] font-sans bg-black dark:bg-zinc-800">
                            Visit Project
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </BackgroundGradient>
              </motion.div>
            </div>
            <div className="mt-3">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
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
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/shivansh13579/Coach_Pro_project"
                      >
                        <img
                          className="w-full h-[150px] rounded-[12px]"
                          src="../assets/img3.jpg"
                          alt="Air Jordan 4 Retro Reimagined"
                        />
                      </a>
                    </motion.div>
                  </div>
                  <div className="basis-2/3 flex flex-col items-start w-full py-2">
                    <p className="dark:text-neutral-200 font-bold sm:text-xl md:text-2xl  text-black">
                      Coaching Managment Project
                    </p>
                    <p className="text-[14px] font-semibold pt-1 text-black dark:text-neutral-400">
                      This is a Coaching managment project.It is a backend
                      project and i created this project by using nodejs and
                      there are so many framwork like Joi for error validation
                      and jwt validation and also send email for emailsender and
                      so on.
                    </p>
                    <div className="flex justify-start gap-5 items-center w-full pt-2">
                      <div className="">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://github.com/shivansh13579/Coach_Pro_project"
                        >
                          <FaGithub className="bg-black rounded-full text-2xl" />
                        </a>
                      </div>
                      <div className="">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://github.com/shivansh13579/Coach_Pro_project"
                        >
                          <button className="rounded-lg py-1 px-2 text-white text-[16px] font-sans bg-black dark:bg-zinc-800">
                            Visit Project
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </BackgroundGradient>
              </motion.div>
            </div>
            <div className="mt-3">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
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
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/shivansh13579/font-codeScroller/tree/main/src"
                      >
                        <img
                          className="w-full h-[150px] rounded-[12px]"
                          src="../assets/img2.jpg"
                          alt="Air Jordan 4 Retro Reimagined"
                        />
                      </a>
                    </motion.div>
                  </div>
                  <div className="basis-2/3 flex flex-col items-start w-full py-2">
                    <p className="dark:text-neutral-200 font-bold sm:text-xl md:text-2xl  text-black">
                      Ecommerce Project
                    </p>
                    <p className="text-[14px] font-semibold pt-1 text-black dark:text-neutral-400">
                      It is a Ecommerce Project and this project is created by
                      using react for frontend and api for nodeJs.
                    </p>
                    <div className="flex justify-start gap-5 items-center w-full pt-2">
                      <div className="">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://github.com/shivansh13579/font-codeScroller/tree/main/src"
                        >
                          <FaGithub className="bg-black rounded-full text-2xl" />
                        </a>
                      </div>
                      <div className="">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://github.com/shivansh13579/font-codeScroller/tree/main/src"
                        >
                          <button className="rounded-lg py-1 px-2 text-white text-[16px] font-sans bg-black dark:bg-zinc-800">
                            Visit Project
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </BackgroundGradient>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
