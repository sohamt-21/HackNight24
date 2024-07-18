import { Button, buttonVariants } from "../../ui/button";
import React, { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Logo from "../../../assets/Logo.png";
import { SignInButton } from '@clerk/clerk-react';

const Navbar = () => {
  const [isHidden, setisHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const diff = y - lastYRef.current;
    if (Math.abs(diff) > 50) {
      setisHidden(diff > 0);
      lastYRef.current = y;
    }
  });

  return (
    <motion.nav
      className="navbar-container flex justify-around items-center w-full h-24 bg-transparent"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ ease: "easeOut", duration: 0.8 }}
    >
      <motion.div
        animate={isHidden ? "hidden" : "visible"}
        onFocusCapture={() => setisHidden(false)}
        whileHover="visible"
        variants={{
          hidden: {
            y: "-100%",
          },
          visible: {
            y: "0%",
          },
        }}
        transition={{ duration: 0.3 }}
        className="nav-list w-fit h-16 z-20 px-8 list-none flex flex-row justify-center items-center fixed rounded-full border border-neutral-700 bg-gray-900 text-white dark:border-slate-200 dark:bg-slate-100 dark:text-black"
      >
        <img src={Logo} alt="" className=" h-16" />
        <a href="#home"><Button variant="ghost">Home</Button></a>
        <a href="#about"><Button variant="ghost">About</Button></a>
        <a href="#course"><Button variant="ghost">Courses</Button></a>
        <a href="#footer"><Button variant="ghost">Contact</Button></a>
        <Button variant="ghost"><SignInButton id='navbarbutton'/></Button>
        {/* <ModeToggle /> */}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
