import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { Button } from "../components/ui/moving-border";
import { useState } from "react";
import emailJs from "emailjs-com";

const Contact = () => {
  const data = { name: "", email: "", message: "" };
  const [input, setInput] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput({ ...input, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailJs
      .sendForm(
        "service_4p6n1py",
        "template_jcs7izh",
        input,
        "LcZbdn0C7NPwluf7K"
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    // Reset form fields
    setInput("");
  };

  return (
    <section id="contact" className="py-20">
      {/* HEADING */}
      <motion.div
        className="flex justify-center w-full pb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-3xl sm:text-4xl">
            <span className="text-red">CON</span>TACT ME
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-full mx-auto" />
          </div>
        </div>
      </motion.div>

      {/* FORM AND IMAGES */}
      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          className="basis-1/2 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img src="../assets/contact-image.jpeg" alt="contact" />
        </motion.div>

        <motion.div
          className="basis-1/2 mt-10 md:mt-0 border rounded-xl md:bg-slate-600 sm:border-hidden pt-10 px-2 py-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form onSubmit={sendEmail}>
            <div className="">
              <Button
                borderRadius="1.5rem"
                className={"w-full border-neutral-600 p-1"}
              >
                <input
                  className="w-full outline-none font-playfair hover:bg-zinc-950 bg-slate-900 text-[18px] rounded-xl placeholder-white px-4 py-3"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={input.name}
                  onChange={handleChange}
                />
              </Button>
            </div>

            <div className="mt-4 pt-5">
              <Button
                borderRadius="1.5rem"
                className={"w-full border-neutral-600 p-1"}
              >
                <input
                  className="w-full outline-none font-playfair hover:bg-zinc-950 bg-slate-900 text-[18px] rounded-xl placeholder-white px-4 py-3"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={input.email}
                  onChange={handleChange}
                />
              </Button>
            </div>

            <div className="mt-4 pt-5">
              <Button
                borderRadius="1.5rem"
                className={"w-full border-neutral-600 p-1"}
              >
                <textarea
                  className="w-full outline-none font-playfair hover:bg-zinc-950 placeholder-white bg-slate-900 text-[18px] rounded-xl px-4 py-5 sm:py-9"
                  name="message"
                  placeholder="Message"
                  value={input.message}
                  onChange={handleChange}
                  type="text"
                />
              </Button>
            </div>

            <div className="flex justify-center w-full items-center mt-5 pt-5">
              <div className="md:w-1/3 sm:w-1/2">
                <Button
                  type="submit"
                  borderRadius="1rem"
                  className="font-playfair hover:bg-zinc-950 bg-slate-900 text-white px-10 py-2 text-xl md:text-2xl border-neutral-600"
                >
                  Send
                </Button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
