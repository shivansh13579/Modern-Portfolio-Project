import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import UseMediaQuary from "../hooks/UseMediaQuary";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import SocialMediaIcons from "../components/SocialMediaIcons";
import { motion } from "framer-motion";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-yellow" : ""}
    hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

function Navbar({ isTopOfPage, selectedPage, setSelectedPage }) {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = UseMediaQuary("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-blac";

  return (
    <nav className={`${navbarBackground}  z-40 w-full fixed top-0 py-6`}>
      <div className="relative flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">『S𝕤』</h4>

        {/* DESKTOP NAV */}
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <button
            className="rounded-full bg-red p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <IoMdMenu className="text-3xl" />
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className="absolute right-0 left-0 top-20 bg-slate-400  h-[465px] shadow-sm shadow-zinc-500 rounded-lg w-full">
            <div className=" ">
              {/* CLOSE ICON  */}
              <div className="flex justify-end p-4">
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  <IoClose className="text-3xl" />
                </button>
              </div>

              {/* MENU ITEMS */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.9 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <div className="flex flex-col items-center gap-7 text-2xl text-deep-blue">
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />

                  <Link
                    page="Skills"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Projects"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.9 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <div className="mt-4 pt-7">
                  <SocialMediaIcons />
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
