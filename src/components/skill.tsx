import NProgress from "./progress";
import Reveal from "./reveal";

type SkillProps = {
  skill: string;
  percentage: number;
  icon: React.ReactNode;
};

const getSkillLevel = (
  percentage: number
): "Beginner" | "Intermediate" | "Proficient" | "Advanced" => {
  if (percentage <= 40) return "Beginner";
  if (percentage <= 60) return "Intermediate";
  if (percentage <= 80) return "Proficient";
  return "Advanced";
};

const Skills = ({ skill, percentage, icon }: SkillProps) => {
  const level = getSkillLevel(percentage);

  return (
    <div className="text-black gap-2.5 flex flex-row items-start">
      <div className="border-black border-4 shadow-shadow rounded-base w-[4rem] aspect-square flex items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col flex-grow gap-1">
        <div className="flex flex-row justify-between items-center">
          <Reveal background="black">
            <div className="flex flex-row gap-2">
              <h1 className="text-2xl font-bold">{skill}</h1>
              <h1 className="text-lg">( {level} )</h1>
            </div>
          </Reveal>
          <span className="">{percentage}%</span>
        </div>
        <NProgress value={percentage} />
      </div>
    </div>
  );
};

export default Skills;
