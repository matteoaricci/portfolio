"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };
  return (
    <header className="z-[10] relative">
      <div className=" fixed top-0 h-[4rem] w-full bg-white">
        <nav className="h-full flex justify-between px-4 py-2 border-b-[1px] border-b-black">
          <section className="hidden md:flex flex-1 gap-3">
            <button>About</button>
            <button>Experience</button>
            <button>Projects</button>
            <button>Contact</button>
          </section>
          <button className="font-bold uppercase text-lg">Matteo Ricci</button>
          <button onClick={toggleMenu} className="text-right flex-1">
            Menu
          </button>
        </nav>
      </div>
      <AnimatePresence mode="wait" initial={false}>
        {open && <PulloverMenu key="menu" toggleMenu={toggleMenu} />}
      </AnimatePresence>
    </header>
  );
}

type PulloverMenuProps = {
  toggleMenu: () => void;
};

function PulloverMenu(props: PulloverMenuProps) {
  const { toggleMenu } = props;
  const wrapperVariants = {
    initial: {
      translateY: "-100%",
    },
    animate: {
      translateY: "0%",
      transition: {
        duration: 0.25,
      },
      originY: 0,
    },
    exit: {
      translateY: "-100%",
      transition: {
        duration: 0.25,
      },
    },
  };

  return (
    <motion.section
      variants={wrapperVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed h-screen w-full bg-white uppercase"
    >
      <section className="fixed content-center top-0 h-[4rem] flex w-full justify-between px-4 py-2 border-b-[1px] border-b-black">
        <button className="font-bold uppercase text-lg">Matteo Ricci</button>
        <button onClick={toggleMenu}>Close</button>
      </section>
      <div className="flex gap-3 h-full flex-col justify-center font-bold content-center text-3xl">
        <button className="uppercase">About</button>
        <button className="uppercase">Experience</button>
        <button className="uppercase">Projects</button>
        <button className="uppercase">Contact</button>
      </div>
    </motion.section>
  );
}
