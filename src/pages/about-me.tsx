import { NButton } from "@/components/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Instagram, Linkedin } from "lucide-react";
import Reveal from "@/components/reveal";

const AboutMe = () => {
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
            {"{ PROFILE }"}
          </h1>
        </Reveal>
        <div className="flex flex-row h-full gap-5 w-[60rem] justify-center items-center ">
          <div className="flex border-4 text-white shadow-shadow border-white w-[26.75rem] aspect-square">
            <img
              src="src\assets\profile.png"
              alt="Profile"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="flex-1 py-12 px-8 h-[26.75rem]">
            <div className="flex flex-col gap-7">
              <div className="flex flex-col gap-5">
                <Reveal background="white">
                  <h1 className="text-2xl font-bold">ABOUT ME:</h1>
                </Reveal>
                <Reveal background="white">
                  <h1 className="text-justify">
                    I'm Laurence, a front-end developer and UI/UX designer
                    passionate about crafting sleek, user-friendly experiences
                    with Vue.js, React.js, and Flutter. Always learning, always
                    creating!
                  </h1>
                </Reveal>
              </div>
              <div className="flex flex-col gap-5">
                <Reveal background="white">
                  <h1 className="text-2xl font-bold">PERSONAL INFORMATION:</h1>
                </Reveal>

                <div className="flex flex-col">
                  <Reveal background="white">
                    <p className="">Revert Laurence G. Tejada</p>
                  </Reveal>
                  <Reveal background="white">
                    <p className="">November 27, 2002</p>
                  </Reveal>

                  <Reveal background="white">
                    <p className="">Aklan, Western Visayas, Philippines</p>
                  </Reveal>
                </div>
              </div>
              <Reveal background="white">
                <div className="flex flex-row gap-2 h-[2.5rem] ">
                  <a
                    href="https://github.com/Laurenccee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <NButton
                      className="h-full w-[2.5rem] bg-black border-white hover:bg-white"
                      size="icon"
                      variant="noShadow"
                    >
                      <Github
                        className="stroke-white group-hover:stroke-black transition-all duration-200"
                        style={{
                          width: "1.25rem",
                          height: "1.25rem",
                          strokeWidth: 2.5,
                          strokeDasharray: "3,3",
                        }}
                      />
                    </NButton>
                  </a>

                  <a
                    href="https://linkedin.com/in/laurence-tejada"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <NButton
                      className="h-full w-[2.5rem] bg-black border-white hover:bg-white"
                      size="icon"
                      variant="noShadow"
                    >
                      <Linkedin
                        className="stroke-white group-hover:stroke-black transition-all duration-200"
                        style={{
                          width: "1.25rem",
                          height: "1.25rem",
                          strokeWidth: 2.5,
                          strokeDasharray: "3,3",
                        }}
                      />
                    </NButton>
                  </a>

                  <a
                    href="https://instagram.com/_lawrensss"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <NButton
                      className="h-full w-[2.5rem] bg-black border-white hover:bg-white"
                      size="icon"
                      variant="noShadow"
                    >
                      <Instagram
                        className="stroke-white group-hover:stroke-black transition-all duration-200"
                        style={{
                          width: "1.25rem",
                          height: "1.25rem",
                          strokeWidth: 2.5,
                          strokeDasharray: "3,3",
                        }}
                      />
                    </NButton>
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
