import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Reveal from "@/components/reveal";
import { Icon } from "@iconify/react/dist/iconify.js";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative snap-start h-screen bg-black px-60 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-white flex justify-center items-center flex-col gap-7 h-full w-full"
      >
        <Reveal background="white">
          <h1 className="text-5xl flex justify-center items-center font-bold">
            {"{ PROJECTS }"}
          </h1>
        </Reveal>
        <div className="flex flex-row gap-5 h-full w-[60rem] justify-center items-center ">
          <img
            src="public/AlertMate.svg"
            alt="AlertMate"
            className="max-h-[32rem] object-contain flex-1"
          />
          <div className="flex-1 items-center px-8 h-[26.75rem]">
            <div className="flex flex-col gap-7">
              <div className="flex flex-col gap-2">
                <Reveal background="white">
                  <h1 className="text-2xl font-bold">
                    AlertMate: A Personal Alert System Application for the
                    Elderly
                  </h1>
                </Reveal>
                <Reveal background="white">
                  <h1 className="text-md font-bold">
                    Role: Project Developer & UI/UX Lead
                  </h1>
                </Reveal>
                <Reveal background="white">
                  <h1 className="text-justify">
                    AlertMate is a simple, reliable mobile app that helps
                    elderly users manage medication, health appointments, and
                    daily routines with ease. Featuring customizable reminders
                    and one-tap emergency alerts, AlertMate promotes
                    independence, safety, and peace of mind — all in one
                    accessible tool.
                  </h1>
                </Reveal>
              </div>
              <div className="flex flex-col gap-5">
                <Reveal background="white">
                  <h1 className="text-2xl font-bold">TECH STACK:</h1>
                </Reveal>
                <Reveal background="white">
                  <div className="flex flex-row gap-2.5">
                    <div className="border-white text-white border-4 shadow-shadow rounded-base w-[4rem] aspect-square flex items-center justify-center">
                      <Icon icon="simple-icons:figma" width="32" />
                    </div>
                    <div className="border-white border-4 shadow-shadow rounded-base w-[4rem] aspect-square flex items-center justify-center">
                      <Icon icon="simple-icons:flutter" width="32" />
                    </div>
                    <div className="border-white border-4 shadow-shadow rounded-base w-[4rem] aspect-square flex items-center justify-center">
                      <Icon icon="simple-icons:dart" width="32" />
                    </div>
                    <div className="border-white border-4 shadow-shadow rounded-base w-[4rem] aspect-square flex items-center justify-center">
                      <Icon icon="simple-icons:firebase" width="32" />
                    </div>
                    <div className="border-white border-4 shadow-shadow rounded-base w-[4rem] aspect-square flex items-center justify-center">
                      <Icon icon="simple-icons:github" width="32" />
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
