"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

import Card from "@/components/Card";

export default function Projects() {
  const wrapperRef = useRef(null);
  const isInView = useInView(wrapperRef);

  // useEffect(() => {
  //   console.log(isInView);

  //   return () => {};
  // }, [isInView]);

  return (
    <section id="projects-section" className="px-5 pt-5">
      <h1 className="text-5xl font-bold pt-8 mb-4">Projects.</h1>
      <ul>
        {projectData.map((proj, index) => {
          return (
            <Card
              {...proj}
              key={`proejct-${index}`}
              direction={index % 2 === 0 ? "left" : "right"}
            />
          );
        })}
      </ul>
    </section>
  );
}

const projectData: { title: string; description: string; image?: string }[] = [
  {
    title: "Close Knit",
    description:
      "A social media application with a focus on textiles. Allows user to create communites, show off work, get advice, and more.",
  },
  {
    title: "Close Knit",
    description:
      "A social media application with a focus on textiles. Allows user to create communites, show off work, get advice, and more.",
  },
  {
    title: "Close Knit",
    description:
      "A social media application with a focus on textiles. Allows user to create communites, show off work, get advice, and more.",
  },
  {
    title: "Close Knit",
    description:
      "A social media application with a focus on textiles. Allows user to create communites, show off work, get advice, and more.",
  },
];
