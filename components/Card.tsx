"use client";

type CardProps = {
  title: string;
  description: string;
  image?: string;
  direction: "left" | "right";
};
import { motion, useInView, useScroll, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Card(props: CardProps) {
  const { title, description, image, direction } = props;
  const startingPosition = direction === "right" ? "200%" : "-200%";
  const motionRef = useRef(null);
  const isInView = useInView(motionRef);
  const controls = useAnimation();
  const { scrollYProgress } = useScroll();
  const wrapperVariants = {
    initial: {
      translateX: startingPosition,
    },
    animate: {
      translateX: "0%",
      transition: {
        delay: 0.25,
        duration: 0.5,
      },
    },
  };

  useEffect(() => {
    console.log(isInView);
    if (isInView) {
      controls.start("animate");
    }
  }, [isInView]);

  return (
    <>
      <motion.div className="h-0" ref={motionRef}></motion.div>
      <motion.li
        variants={wrapperVariants}
        initial="initial"
        animate={controls}
        className="max-w-sm bg-white border-2 border-gray-400 rounded-lg shadow my-6"
      >
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>

          <div>Image goes Here</div>
          <p className="mb-3 font-normal text-gray-700 ">{description}</p>
        </div>
      </motion.li>
    </>
  );
}
