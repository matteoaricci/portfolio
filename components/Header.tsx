"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <header className="z-[10] relative">
      <div className=" fixed top-0 h-[4rem] w-full">
        <nav className="h-full flex justify-between px-4 py-2 border-b-[1px] border-b-black">
          <section className="hidden md:flex flex-1 gap-3">
            <button>About</button>
            <button>Experience</button>
            <button>Projects</button>
            <button>Contact</button>
          </section>
          <button className="font-bold uppercase text-lg">Matteo Ricci</button>
          <button onClick={toggleOpen} className="text-right flex-1">
            Menu
          </button>
        </nav>
      </div>
      <AnimatePresence>
        {open && <PulloverMenu toggleMenu={toggleOpen} />}
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
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.25,
      },
      originY: 0,
    },
    exit: {
      scaleY: 0,
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
      className="fixed h-screen w-full bg-white uppercase z-[11]"
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