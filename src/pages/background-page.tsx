import Reveal from "@/components/reveal";
import Typewriter from "@/components/typewiter-text";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const BackgroundPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative snap-start h-screen bg-main px-60 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-text flex justify-center items-center flex-col gap-7 h-full w-full"
      >
        <Reveal>
          <Typewriter
            label="{ BACKGROUND }"
            shouldType={isInView}
            className="text-5xl flex justify-center items-center font-bold"
          />
        </Reveal>
        <div className="flex flex-1 flex-col h-full w-[60rem] justify-center gap-12">
          <div className="flex flex-row justify-between w-full ">
            <div className="flex-1 flex items-center">
              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-5">
                  <Reveal>
                    <h1 className="text-2xl font-bold">EDUCATION: </h1>
                  </Reveal>
                  <div className="flex gap-3 flex-col">
                    <div className="leading-tight">
                      <Reveal>
                        <p className="text-justify font-bold">
                          Senior Highschool - Makato Integrated School
                        </p>
                        <p className="text-justify ">
                          Science, Technology, Engineering, Mathematices
                        </p>
                        <p className="text-justify font-semibold">
                          2019 - 2021
                        </p>
                      </Reveal>
                    </div>
                    <div className="leading-tight">
                      <Reveal>
                        <p className="text-justify font-bold">
                          College - Aklan State University
                        </p>
                        <p className="text-justify ">
                          Bachelor of Science in Information Technology -
                          Software Engineering
                        </p>
                        <p className="text-justify font-semibold">
                          2021 - 2025
                        </p>
                      </Reveal>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-4 p-4 border-text shadow-shadow bg-[#50A99A] rounded-base h-[264px] aspect-square"></div>
          </div>
          <div className="flex flex-row gap-2 justify-between w-full ">
            <div className="border-4 p-4 border-text bg-[#50A99A] shadow-shadow rounded-base h-full aspect-square"></div>
            <div className="flex-1 px-12 flex items-center">
              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-5">
                  <Reveal>
                    <h1 className="text-2xl font-bold">Experience:</h1>
                  </Reveal>
                  <div className="flex flex-col gap-5">
                    <div>
                      <Reveal>
                        <p className="text-justify font-bold">
                          Asia Pacific Medical Center - Aklan
                        </p>
                      </Reveal>
                      <Reveal>
                        <p className="text-justify">Internship Trainee</p>
                      </Reveal>
                      <Reveal>
                        <p className="text-justify font-bold">
                          February 2025 - April 2025 (3 months)
                        </p>
                      </Reveal>
                      <Reveal>
                        <p className="text-justify">
                          Aklan, Western Visayas, Philippines
                        </p>
                      </Reveal>
                    </div>
                    <div>
                      <Reveal>
                        <p className="text-justify font-bold">Resposibility:</p>
                      </Reveal>
                      <Reveal>
                        <p className="text-justify">
                          (UAT) User Acceptance Testing of MEDtrix (HIS)
                          Hospital Information System.
                        </p>
                      </Reveal>
                      <Reveal>
                        <p className="text-justify">
                          (UAT) User Acceptance Testing of MEDtrix (MMS)
                          Material Management System.
                        </p>
                      </Reveal>
                      <Reveal>
                        <p className="text-justify">
                          (UAT) User Acceptance Testing of MEDtrix (RIS)
                          Radiology Intigration System.
                        </p>
                      </Reveal>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BackgroundPage;
