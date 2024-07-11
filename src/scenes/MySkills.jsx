import LineGradient from "../components/LineGradient";
import UseMediaQuary from "../hooks/UseMediaQuary";
import { motion } from "framer-motion";
import { BsStopCircle } from "react-icons/bs";
import { BackgroundGradient } from "../components/ui/background-gradient";
import { Meteors } from "../components/ui/meteors";

function MySkills() {
  const isAboveMediumScreens = UseMediaQuary("(min-width: 768px)");

  return (
    <section
      id="skills"
      className="pt-5 mb-[25px] md:mb-[10px] h-full md:h-fit"
    >
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

      {/* <div className="w-full md:flex md:justify-between md:items-center md:h-fit md:gap-24 pt-10"> */}
      {/* <div className="basis-1/3 mt-2 md:mt-5 flex justify-center md:order-2">
          {isAboveMediumScreens ? (
            <BackgroundGradient className=" rounded-[22px] p-4 bg-white dark:bg-zinc-900">
              <div className="w-full overflow-hidden rounded-[22px]">
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
                    className="h-[400px] w-[400px] rounded-xl"
                    src="../assets/singh.jpg"
                    alt="Air Jordan 4 Retro Reimagined"
                  />
                </motion.div>
              </div>
            </BackgroundGradient>
          ) : (
            <div className="border p-5 w-full rounded-xl shadow-right-bottom shadow-pink-600">
              <motion.div
                initial={{ opacity: 0.6 }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.5 },
                }}
                whileTap={{ scale: 0.9 }}
                whileInView={{ opacity: 1 }}
              >
                <img
                  className="h-[250px] w-full rounded-xl"
                  src="../assets/singh.jpg"
                  alt=""
                />
              </motion.div>
            </div>
          )}
        </div> */}

      {/* Main Section  */}
      {/* <div className="z-30 basis-1/3 mt-10 md:mt-5">
          <h1 className="font-playfair text-3xl text-center md:text-start">
            {" "}
            <span className="text-red">BIO</span>GRAPHY
          </h1>
          <div className="md:flex md:justify-start flex justify-center mt-1 mb-1">
            <LineGradient width="w-2/5" />
          </div>
          <p className="font-sans text-[16px] text-start md:text-start">
            Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion
            for creating beautiful, functional, and user-centered digital
            experiences. With 4 years of experience in the field. I am always
            looking for new and innovative ways to bring my clients' visions to
            life.
            <br /> I believe that design is about more than just making things
            look pretty – it's about solving problems and creating intuitive,
            enjoyable experiences for users.
            <br />
            Whether I'm working on a website, mobile app, or other digital
            product, I bring my commitment to design excellence and
            user-centered thinking to every project I work on. I look forward to
            the opportunity to bring my skills and passion to your next project.
          </p>
        </div> */}

      {/* skills */}
      {/* <div className="basis-1/3 md:order-3 mt-2 md:mt-5">
          <h1 className="font-playfair text-3xl text-center md:text-start">
            <span className="text-red">MY</span>SKILLS
          </h1>
          <div className="flex md:flex md:justify-start justify-center mt-1">
            <LineGradient width="w-2/5" />
          </div>
          <div>
            {isAboveMediumScreens ? (
              <>
                <div className="w-full flex flex-col mt-2">
                  <div className="flex justify-start mt-1">
                    <p className="w-full flex items-center gap-3 text-xl">
                      <span>
                        <BsStopCircle className="w-6 h-6 bg-red rounded-full" />
                      </span>
                      HTML 90%
                    </p>
                  </div>
                  <div className="mt-3">
                    <div className="h-2 w-full bg-white rounded-l-2xl rounded-full">
                      <motion.div
                        animate={{
                          width: "90%",
                        }}
                        transition={{
                          duration: 10,
                        }}
                        className="w-1/12 h-full bg-red"
                      ></motion.div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col mt-1">
                  <div className="flex justify-start mt-1">
                    <p className="w-full flex items-center gap-3 text-xl">
                      <span>
                        <BsStopCircle className="w-6 h-6 bg-red rounded-full" />
                      </span>
                      CSS 80%
                    </p>
                  </div>
                  <div className="mt-3">
                    <div className="h-2 w-full bg-white rounded-l-2xl rounded-full">
                      <motion.div
                        animate={{
                          width: "80%",
                        }}
                        transition={{
                          duration: 10,
                        }}
                        className="w-1/12 h-full bg-red"
                      ></motion.div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col mt-1">
                  <div className="flex justify-start mt-1">
                    <p className="w-full flex items-center gap-3 text-xl">
                      <span>
                        <BsStopCircle className="w-6 h-6 bg-red rounded-full" />
                      </span>
                      JAVASCRIPT 85%
                    </p>
                  </div>
                  <div className="mt-3">
                    <div className="h-2 w-full bg-white rounded-l-2xl rounded-full">
                      <motion.div
                        animate={{
                          width: "85%",
                        }}
                        transition={{
                          duration: 10,
                        }}
                        className="w-1/12 h-full bg-red"
                      ></motion.div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col mt-1">
                  <div className="flex justify-start mt-1">
                    <p className="w-full flex items-center gap-3 text-xl">
                      <span>
                        <BsStopCircle className="w-6 h-6 bg-red rounded-full" />
                      </span>
                      REACT 90%
                    </p>
                  </div>
                  <div className="mt-3">
                    <div className="h-2 w-full bg-white rounded-l-2xl rounded-full">
                      <motion.div
                        animate={{
                          width: "90%",
                        }}
                        transition={{
                          duration: 10,
                        }}
                        className="w-1/12 h-full bg-red"
                      ></motion.div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col mt-1">
                  <div className="flex justify-start mt-1">
                    <p className="w-full flex items-center gap-3 text-xl">
                      <span>
                        <BsStopCircle className="w-6 h-6 bg-red rounded-full" />
                      </span>
                      NODEJS 80%
                    </p>
                  </div>
                  <div className="mt-3">
                    <div className="h-2 w-full bg-white rounded-l-2xl rounded-full">
                      <motion.div
                        animate={{
                          width: "90%",
                        }}
                        transition={{
                          duration: 10,
                        }}
                        className="w-1/12 h-full bg-red"
                      ></motion.div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col mt-1">
                  <div className="flex justify-start mt-1">
                    <p className="w-full flex items-center gap-3 text-xl">
                      <span>
                        <BsStopCircle className="w-6 h-6 bg-red rounded-full" />
                      </span>
                      TAILWIND CSS 95%
                    </p>
                  </div>
                  <div className="mt-3">
                    <div className="h-2 w-full bg-white rounded-l-2xl rounded-full">
                      <motion.div
                        animate={{
                          width: "95%",
                        }}
                        transition={{
                          duration: 10,
                        }}
                        className="w-1/12 h-full bg-red"
                      ></motion.div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col mt-1">
                  <div className="flex justify-start mt-1">
                    <p className="w-full flex items-center gap-3 text-xl">
                      <span>
                        <BsStopCircle className="w-6 h-6 bg-red rounded-full" />
                      </span>
                      MONGODB 89%
                    </p>
                  </div>
                  <div className="mt-3">
                    <div className="h-2 w-full bg-white rounded-l-2xl rounded-full">
                      <motion.div
                        animate={{
                          width: "89%",
                        }}
                        transition={{
                          duration: 10,
                        }}
                        className="w-1/12 h-full bg-red"
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="w-full flex flex-col mt-2">
                  <div className="flex justify-start mt-1">
                    <p className="w-full flex items-center gap-3 text-xl">
                      <span>
                        <BsStopCircle className="w-6 h-6 bg-red rounded-full" />
                      </span>
                      HTML 90%
                    </p>
                  </div>
                  <div className="mt-3">
                    <div className="h-2 w-full bg-white rounded-l-2xl rounded-full">
                      <motion.div
                        animate={{
                          width: "90%",
                        }}
                        transition={{
                          duration: 10,
                        }}
                        className="w-1/12 h-full bg-red"
                      ></motion.div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col mt-1">
                  <div className="flex justify-start mt-1">
                    <p className="w-full flex items-center gap-3 text-xl">
                      <span>
                        <BsStopCircle className="w-6 h-6 bg-red rounded-full" />
                      </span>
                      CSS 80%
                    </p>
                  </div>
                  <div className="mt-3">
                    <div className="h-2 w-full bg-white rounded-l-2xl rounded-full">
                      <motion.div
                        animate={{
                          width: "80%",
                        }}
                        transition={{
                          duration: 10,
                        }}
                        className="w-1/12 h-full bg-red"
                      ></motion.div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col mt-1">
                  <div className="flex justify-start mt-1">
                    <p className="w-full flex items-center gap-3 text-xl">
                      <span>
                        <BsStopCircle className="w-6 h-6 bg-red rounded-full" />
                      </span>
                      JAVASCRIPT 85%
                    </p>
                  </div>
                  <div className="mt-3">
                    <div className="h-2 w-full bg-white rounded-l-2xl rounded-full">
                      <motion.div
                        animate={{
                          width: "85%",
                        }}
                        transition={{
                          duration: 10,
                        }}
                        className="w-1/12 h-full bg-red"
                      ></motion.div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col mt-1">
                  <div className="flex justify-start mt-1">
                    <p className="w-full flex items-center gap-3 text-xl">
                      <span>
                        <BsStopCircle className="w-6 h-6 bg-red rounded-full" />
                      </span>
                      REACT 90%
                    </p>
                  </div>
                  <div className="mt-3">
                    <div className="h-2 w-full bg-white rounded-l-2xl rounded-full">
                      <motion.div
                        animate={{
                          width: "90%",
                        }}
                        transition={{
                          duration: 10,
                        }}
                        className="w-1/12 h-full bg-red"
                      ></motion.div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col mt-1">
                  <div className="flex justify-start mt-1">
                    <p className="w-full flex items-center gap-3 text-xl">
                      <span>
                        <BsStopCircle className="w-6 h-6 bg-red rounded-full" />
                      </span>
                      NODEJS 80%
                    </p>
                  </div>
                  <div className="mt-3">
                    <div className="h-2 w-full bg-white rounded-l-2xl rounded-full">
                      <motion.div
                        animate={{
                          width: "90%",
                        }}
                        transition={{
                          duration: 10,
                        }}
                        className="w-1/12 h-full bg-red"
                      ></motion.div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col mt-1">
                  <div className="flex justify-start mt-1">
                    <p className="w-full flex items-center gap-3 text-xl">
                      <span>
                        <BsStopCircle className="w-6 h-6 bg-red rounded-full" />
                      </span>
                      TAILWIND CSS 95%
                    </p>
                  </div>
                  <div className="mt-3">
                    <div className="h-2 w-full bg-white rounded-l-2xl rounded-full">
                      <motion.div
                        animate={{
                          width: "95%",
                        }}
                        transition={{
                          duration: 10,
                        }}
                        className="w-1/12 h-full bg-red"
                      ></motion.div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col mt-1">
                  <div className="flex justify-start mt-1">
                    <p className="w-full flex items-center gap-3 text-xl">
                      <span>
                        <BsStopCircle className="w-6 h-6 bg-red rounded-full" />
                      </span>
                      MONGODB 89%
                    </p>
                  </div>
                  <div className="mt-3">
                    <div className="h-2 w-full bg-white rounded-l-2xl rounded-full">
                      <motion.div
                        animate={{
                          width: "89%",
                        }}
                        transition={{
                          duration: 10,
                        }}
                        className="w-1/12 h-full bg-red"
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div> */}
      {/* </div> */}

      {/* <div className="flex items-start justify-center  rounded-2xl w-full">
        <TextRevealCard
          text="You know the business"
          revealText="I know the chemistry "
          className={"text-xs"}
        >
          <TextRevealCardTitle>
            Sometimes, you just need to see it.
          </TextRevealCardTitle>
          <TextRevealCardDescription>
            This is a text reveal card. Hover over the card to reveal the hidden
            text.
          </TextRevealCardDescription>
        </TextRevealCard>
      </div> */}
      {/* Education */}
      <h1 className="font-playfair text-5xl md:text-3xl text-center md:text-start">
        {" "}
        <span className="text-red">Edu</span>cation
      </h1>
      <div className="md:flex md:justify-start flex justify-center mt-2 mb-1">
        <LineGradient width="md:w-[140px] w-[200px]" />
      </div>
      <div className="md:flex gap-6 w-full mt-3">
        <div className="basis-1/4 mt-2">
          <BackgroundGradient className="bg-white rounded-[22px] p-2 h-[280px] dark:bg-zinc-900">
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
        </div>
        <div className="basis-1/4 mt-2">
          <BackgroundGradient className="bg-white rounded-[22px] p-2 h-[280px] dark:bg-zinc-900">
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
        </div>
        <div className="basis-1/4 mt-2">
          <BackgroundGradient className="bg-white rounded-[22px] p-2 h-[280px] dark:bg-zinc-900">
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
        </div>
        <div className="basis-1/4 mt-2">
          <BackgroundGradient className="bg-white rounded-[22px] p-2 h-[280px] dark:bg-zinc-900">
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
        </div>
      </div>
      {/* skills */}
      <div className="w-full mt-5 md:mt-10 md:pb-10 pb-10">
        <h1 className="font-playfair text-3xl md:text-4xl text-center">
          <span className="text-red">My</span>Skills
        </h1>
        <div className="flex md:flex justify-center mt-1">
          <LineGradient width="md:w-[120px] w-[150px]" />
        </div>
        <div className="md:pt-10 pt-5">
          {isAboveMediumScreens ? (
            <>
              <div className="w-full flex flex-col mt-2">
                <div className="flex justify-start mt-1">
                  <p className="w-full flex items-center gap-3 text-xl">
                    <span>
                      <BsStopCircle className="w-6 h-6 bg-red rounded-full" />
                    </span>
                    HTML 90%
                  </p>
                </div>
                <div className="mt-3">
                  <div className="h-2 w-full bg-white rounded-l-2xl rounded-full">
                    <motion.div
                      animate={{
                        width: "90%",
                      }}
                      transition={{
                        duration: 10,
                      }}
                      className="w-1/12 h-full bg-red"
                    ></motion.div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col mt-1">
                <div className="flex justify-start mt-1">
                  <p className="w-full flex items-center gap-3 text-xl">
                    <span>
                      <BsStopCircle className="w-6 h-6 bg-red rounded-full" />
                    </span>
                    CSS 80%
                  </p>
                </div>
                <div className="mt-3">
                  <div className="h-2 w-full bg-white rounded-l-2xl rounded-full">
                    <motion.div
                      animate={{
                        width: "80%",
                      }}
                      transition={{
                        duration: 10,
                      }}
                      className="w-1/12 h-full bg-red"
                    ></motion.div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col mt-1">
                <div className="flex justify-start mt-1">
                  <p className="w-full flex items-center gap-3 text-xl">
                    <span>
                      <BsStopCircle className="w-6 h-6 bg-red rounded-full" />
                    </span>
                    JAVASCRIPT 85%
                  </p>
                </div>
                <div className="mt-3">
                  <div className="h-2 w-full bg-white rounded-l-2xl rounded-full">
                    <motion.div
                      animate={{
                        width: "85%",
                      }}
                      transition={{
                        duration: 10,
                      }}
                      className="w-1/12 h-full bg-red"
                    ></motion.div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col mt-1">
                <div className="flex justify-start mt-1">
                  <p className="w-full flex items-center gap-3 text-xl">
                    <span>
                      <BsStopCircle className="w-6 h-6 bg-red rounded-full" />
                    </span>
                    REACT 90%
                  </p>
                </div>
                <div className="mt-3">
                  <div className="h-2 w-full bg-white rounded-l-2xl rounded-full">
                    <motion.div
                      animate={{
                        width: "90%",
                      }}
                      transition={{
                        duration: 10,
                      }}
                      className="w-1/12 h-full bg-red"
                    ></motion.div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col mt-1">
                <div className="flex justify-start mt-1">
                  <p className="w-full flex items-center gap-3 text-xl">
                    <span>
                      <BsStopCircle className="w-6 h-6 bg-red rounded-full" />
                    </span>
                    NODEJS 80%
                  </p>
                </div>
                <div className="mt-3">
                  <div className="h-2 w-full bg-white rounded-l-2xl rounded-full">
                    <motion.div
                      animate={{
                        width: "90%",
                      }}
                      transition={{
                        duration: 10,
                      }}
                      className="w-1/12 h-full bg-red"
                    ></motion.div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col mt-1">
                <div className="flex justify-start mt-1">
                  <p className="w-full flex items-center gap-3 text-xl">
                    <span>
                      <BsStopCircle className="w-6 h-6 bg-red rounded-full" />
                    </span>
                    TAILWIND CSS 95%
                  </p>
                </div>
                <div className="mt-3">
                  <div className="h-2 w-full bg-white rounded-l-2xl rounded-full">
                    <motion.div
                      animate={{
                        width: "95%",
                      }}
                      transition={{
                        duration: 10,
                      }}
                      className="w-1/12 h-full bg-red"
                    ></motion.div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col mt-1">
                <div className="flex justify-start mt-1">
                  <p className="w-full flex items-center gap-3 text-xl">
                    <span>
                      <BsStopCircle className="w-6 h-6 bg-red rounded-full" />
                    </span>
                    MONGODB 89%
                  </p>
                </div>
                <div className="mt-3">
                  <div className="h-2 w-full bg-white rounded-l-2xl rounded-full">
                    <motion.div
                      animate={{
                        width: "89%",
                      }}
                      transition={{
                        duration: 10,
                      }}
                      className="w-1/12 h-full bg-red"
                    ></motion.div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="w-full flex flex-col mt-2">
                <div className="flex justify-start mt-1">
                  <p className="w-full flex items-center gap-3 text-xl">
                    <span>
                      <BsStopCircle className="w-6 h-6 bg-red rounded-full" />
                    </span>
                    HTML 90%
                  </p>
                </div>
                <div className="mt-3">
                  <div className="h-2 w-full bg-white rounded-l-2xl rounded-full">
                    <motion.div
                      animate={{
                        width: "90%",
                      }}
                      transition={{
                        duration: 10,
                      }}
                      className="w-1/12 h-full bg-red"
                    ></motion.div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col mt-1">
                <div className="flex justify-start mt-1">
                  <p className="w-full flex items-center gap-3 text-xl">
                    <span>
                      <BsStopCircle className="w-6 h-6 bg-red rounded-full" />
                    </span>
                    CSS 80%
                  </p>
                </div>
                <div className="mt-3">
                  <div className="h-2 w-full bg-white rounded-l-2xl rounded-full">
                    <motion.div
                      animate={{
                        width: "80%",
                      }}
                      transition={{
                        duration: 10,
                      }}
                      className="w-1/12 h-full bg-red"
                    ></motion.div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col mt-1">
                <div className="flex justify-start mt-1">
                  <p className="w-full flex items-center gap-3 text-xl">
                    <span>
                      <BsStopCircle className="w-6 h-6 bg-red rounded-full" />
                    </span>
                    JAVASCRIPT 85%
                  </p>
                </div>
                <div className="mt-3">
                  <div className="h-2 w-full bg-white rounded-l-2xl rounded-full">
                    <motion.div
                      animate={{
                        width: "85%",
                      }}
                      transition={{
                        duration: 10,
                      }}
                      className="w-1/12 h-full bg-red"
                    ></motion.div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col mt-1">
                <div className="flex justify-start mt-1">
                  <p className="w-full flex items-center gap-3 text-xl">
                    <span>
                      <BsStopCircle className="w-6 h-6 bg-red rounded-full" />
                    </span>
                    REACT 90%
                  </p>
                </div>
                <div className="mt-3">
                  <div className="h-2 w-full bg-white rounded-l-2xl rounded-full">
                    <motion.div
                      animate={{
                        width: "90%",
                      }}
                      transition={{
                        duration: 10,
                      }}
                      className="w-1/12 h-full bg-red"
                    ></motion.div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col mt-1">
                <div className="flex justify-start mt-1">
                  <p className="w-full flex items-center gap-3 text-xl">
                    <span>
                      <BsStopCircle className="w-6 h-6 bg-red rounded-full" />
                    </span>
                    NODEJS 80%
                  </p>
                </div>
                <div className="mt-3">
                  <div className="h-2 w-full bg-white rounded-l-2xl rounded-full">
                    <motion.div
                      animate={{
                        width: "90%",
                      }}
                      transition={{
                        duration: 10,
                      }}
                      className="w-1/12 h-full bg-red"
                    ></motion.div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col mt-1">
                <div className="flex justify-start mt-1">
                  <p className="w-full flex items-center gap-3 text-xl">
                    <span>
                      <BsStopCircle className="w-6 h-6 bg-red rounded-full" />
                    </span>
                    TAILWIND CSS 95%
                  </p>
                </div>
                <div className="mt-3">
                  <div className="h-2 w-full bg-white rounded-l-2xl rounded-full">
                    <motion.div
                      animate={{
                        width: "95%",
                      }}
                      transition={{
                        duration: 10,
                      }}
                      className="w-1/12 h-full bg-red"
                    ></motion.div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col mt-1">
                <div className="flex justify-start mt-1">
                  <p className="w-full flex items-center gap-3 text-xl">
                    <span>
                      <BsStopCircle className="w-6 h-6 bg-red rounded-full" />
                    </span>
                    MONGODB 89%
                  </p>
                </div>
                <div className="mt-3">
                  <div className="h-2 w-full bg-white rounded-l-2xl rounded-full">
                    <motion.div
                      animate={{
                        width: "89%",
                      }}
                      transition={{
                        duration: 10,
                      }}
                      className="w-1/12 h-full bg-red"
                    ></motion.div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default MySkills;
