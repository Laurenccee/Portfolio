import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Reveal from "@/components/reveal";
import Skills from "@/components/skill";
import { Icon } from "@iconify/react";

const MySkills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative snap-start h-screen bg-main px-60 py-40"
    >
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-black flex justify-center items-center flex-col gap-7 h-full w-full"
      >
        <Reveal background="black">
          <h1 className="text-5xl flex justify-center items-center font-bold">
            {"{ SKILLS }"}
          </h1>
        </Reveal>
        <div className="flex flex-col h-full gap-2 w-[65rem] justify-center items-center ">
          <div className="flex w-full gap-5 flex-row">
            <div className="flex-1 flex flex-col gap-5 px-12 py-8">
              <Skills
                percentage={75}
                skill={"Figma"}
                icon={<Icon icon="simple-icons:figma" width="32" />}
              />
              <Skills
                percentage={60}
                skill={"Vue.js"}
                icon={<Icon icon="simple-icons:vuedotjs" width="32" />}
              />
              <Skills
                percentage={65}
                skill={"React.js"}
                icon={<Icon icon="simple-icons:react" width="32" />}
              />
              <Skills
                percentage={35}
                skill={"JavaScript"}
                icon={<Icon icon="simple-icons:javascript" width="32" />}
              />
            </div>
            <div className="flex-1 flex flex-col gap-5 px-12 py-8">
              <Skills
                percentage={75}
                skill={"Tailwind"}
                icon={<Icon icon="simple-icons:tailwindcss" width="32" />}
              />
              <Skills
                percentage={70}
                skill={"HTML"}
                icon={<Icon icon="simple-icons:html5" width="32" />}
              />
              <Skills
                percentage={75}
                skill={"CSS"}
                icon={<Icon icon="simple-icons:css3" width="32" />}
              />

              <Skills
                percentage={60}
                skill={"Flutter"}
                icon={<Icon icon="simple-icons:flutter" width="32" />}
              />
            </div>
          </div>
          <div className="w-[25.875rem]">
            <Skills
              percentage={20}
              skill={"Jira"}
              icon={<Icon icon="simple-icons:jira" width="32" />}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MySkills;
