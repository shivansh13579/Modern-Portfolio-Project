import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { BackgroundGradient } from "../components/ui/background-gradient";
import { Meteors } from "../components/ui/meteors";
import { HoverEffect } from "../components/ui/card-hover-effect";

function MySkills() {
  const projects = [
    {
      title: (
        <img className="w-[80px] h-[60px]" src="../assets/html.png" alt="" />
      ),
      description: <h2 className="text-2xl font-semibold">HTML</h2>,
    },
    {
      title: (
        <img className="w-[80px] h-[60px]" src="../assets/css3.png" alt="" />
      ),
      description: <h2 className="text-2xl font-semibold">CSS</h2>,
    },
    {
      title: (
        <img
          className="w-[80px] h-[60px]"
          src="../assets/tailwind.png"
          alt=""
        />
      ),
      description: <h2 className="text-2xl font-semibold">TAILWIND CSS</h2>,
    },
    {
      title: (
        <img
          className="w-[80px] h-[60px]"
          src="../assets/javascript.png"
          alt=""
        />
      ),
      description: <h2 className="text-2xl font-semibold">JAVASCRIPT</h2>,
    },
    {
      title: (
        <img className="w-[80px] h-[60px]" src="../assets/react.png" alt="" />
      ),
      description: <h2 className="text-2xl font-semibold">REACT</h2>,
    },
    {
      title: (
        <img
          className="w-[80px] h-[60px]"
          src="../assets/mongo-db.png"
          alt=""
        />
      ),
      description: <h2 className="text-2xl font-semibold">MONGO-DB</h2>,
    },
    {
      title: (
        <img className="w-[80px] h-[60px]" src="../assets/express.png" alt="" />
      ),
      description: <h2 className="text-2xl font-semibold">NodeJs</h2>,
    },
    {
      title: (
        <img className="w-[80px] h-[60px]" src="../assets/boot.png" alt="" />
      ),
      description: <h2 className="text-2xl font-semibold">BOOTSTRAP</h2>,
    },
  ];

  return (
    <section id="skills" className="pt-5 mb-[25px] md:mb-[10px] h-fit">
      {/* *****************************About********************************* */}
      {/* About SECTION */}
      <motion.div
        className="md:w-2/4 mx-auto text-center hidden md:block"
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
            <span className="text-red">Ab</span>out
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/4" />
          </div>
        </div>
      </motion.div>

      {/* Education */}
      <h1 className="font-playfair text-4xl md:text-3xl text-center md:text-start">
        {" "}
        <span className="text-red">Edu</span>cation
      </h1>
      <div className="md:flex md:justify-start flex justify-center mt-2 mb-1">
        <LineGradient width="md:w-[140px] w-[150px]" />
      </div>
      <div className="md:flex gap-6 w-full mt-5">
        <div className="basis-1/4 mt-2">
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
            <BackgroundGradient className="bg-white rounded-[22px] p-2 h-[275px] dark:bg-zinc-900">
              <div className="">
                <div className=" relative w-full">
                  <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                  <div className="relative shadow-xl bg-gray-900  px-2 py-8 h-full overflow-hidden rounded-[22px] flex flex-col justify-end items-center">
                    <h1 className="font-bold text-3xl text-white mb-4 relative z-50">
                      2019
                    </h1>
                    <p className="font-medium font-bold text-2xl text-slate-500 mb-4 relative z-50">
                      Secondary School
                    </p>
                    <p className="font-medium font-bold text-2xl text-slate-500 mb-4 relative z-50">
                      Indian Public School
                    </p>
                    <p className="font-medium text-2xl text-slate-500 mb-4 relative z-50">
                      Grade:- [ 92% ]
                    </p>

                    {/* Meaty part - Meteor effect */}
                    <Meteors number={50} />
                  </div>
                </div>
              </div>
            </BackgroundGradient>
          </motion.div>
        </div>
        <div className="basis-1/4 mt-2">
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
            <BackgroundGradient className="bg-white rounded-[22px] p-2 h-[275px] dark:bg-zinc-900">
              <div className="">
                <div className=" relative w-full">
                  <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                  <div className="relative shadow-xl bg-gray-900  px-2 py-8 h-full overflow-hidden rounded-[22px] flex flex-col justify-end items-center">
                    <h1 className="font-bold text-3xl text-white mb-4 relative z-50">
                      2019-2021
                    </h1>
                    <p className="font-medium font-bold text-2xl text-slate-500 mb-4 relative z-50">
                      Intermediate
                    </p>
                    <p className="font-medium font-bold text-xl xs:text-2xl text-slate-500 mb-4 relative z-50">
                      Millia Convent School
                    </p>
                    <p className="font-medium text-2xl text-slate-500 mb-4 relative z-50">
                      Grade:- [ 75% ]
                    </p>

                    {/* Meaty part - Meteor effect */}
                    <Meteors number={50} />
                  </div>
                </div>
              </div>
            </BackgroundGradient>
          </motion.div>
        </div>
        <div className="basis-1/4 mt-2">
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
            <BackgroundGradient className="bg-white rounded-[22px] p-2 h-[275px] dark:bg-zinc-900">
              <div className="">
                <div className=" relative w-full">
                  <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                  <div className="relative shadow-xl bg-gray-900  px-2 py-8 h-full overflow-hidden rounded-[22px] flex flex-col justify-end items-center">
                    <h1 className="font-bold text-3xl text-white mb-4 relative z-50">
                      2022-2025
                    </h1>
                    <p className="font-medium font-bold text-xl xs:text-2xl text-slate-500 mb-4 relative z-50">
                      Bsc(Chemistry Hons.)
                    </p>
                    <p className="font-medium font-bold text-2xl text-slate-500 mb-4 relative z-50">
                      Purnea University
                    </p>
                    <p className="font-medium text-2xl text-slate-500 mb-4 relative z-50">
                      3rd Year Student.
                    </p>

                    {/* Meaty part - Meteor effect */}
                    <Meteors number={50} />
                  </div>
                </div>
              </div>
            </BackgroundGradient>
          </motion.div>
        </div>
        <div className="basis-1/4 mt-2">
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
            <BackgroundGradient className="bg-white rounded-[22px] p-2 h-[275px] dark:bg-zinc-900">
              <div className="">
                <div className=" relative w-full">
                  <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                  <div className="relative shadow-xl bg-gray-900  px-2 py-8 h-full overflow-hidden rounded-[22px] flex flex-col justify-end items-center">
                    <h1 className="font-bold text-3xl text-white mb-4 relative z-50">
                      2024-Present
                    </h1>
                    <p className="font-medium font-bold text-2xl text-slate-500 mb-4 relative z-50">
                      Web Developer
                    </p>
                    <p className="font-medium font-bold text-2xl text-slate-500 mb-4 relative z-50">
                      Fresher
                    </p>
                    <p className="font-medium text-2xl text-slate-500 mb-4 relative z-50">
                      Doing Internship
                    </p>

                    {/* Meaty part - Meteor effect */}
                    <Meteors number={50} />
                  </div>
                </div>
              </div>
            </BackgroundGradient>
          </motion.div>
        </div>
      </div>
      {/* skills */}
      <div className="w-full mt-5 md:mt-10 md:pb-10 pb-10">
        <h1 className="font-playfair pt-4 text-3xl md:text-4xl text-center">
          My {"   "}
          <span className="text-red"> Skills </span>
        </h1>
        <div className="flex md:flex justify-center mt-1">
          <LineGradient width="md:w-[120px] w-[110px]" />
        </div>
        <div className="w-full mb-4 md:my-3 md:py-5">
          <HoverEffect items={projects} />
        </div>
      </div>

      {/* card  */}
    </section>
  );
}

export default MySkills;
