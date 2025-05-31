import { NButton } from "@/components/button";
import GlitchyText from "@/components/mix-text";
import Reveal from "@/components/reveal";
import {
  Copy,
  Download,
  Github,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";
import { useRef } from "react";

const LandingPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCopy = () => {
    if (inputRef.current) {
      navigator.clipboard.writeText(inputRef.current.value).then(() => {
        console.log("Copied to clipboard!");
      });
    }
  };
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Portfolio/resume.pdf";
    link.download = "Laurence_Tejada_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="bg-white snap-start flex flex-col py-8 gap-5 px-60 h-screen">
      <div className="flex h-[2.75rem] flex-row items-center justify-between">
        <div className="h-full  flex flex-row gap-2">
          <div className="flex flex-row items-center bg-main px-[.75rem] py-[.5rem] gap-2.5  rounded-base border-4 border-border shadow-shadow h-full">
            <Mail
              style={{
                width: "1.5rem",
                height: "1.5rem",
                stroke: "#000",
                strokeWidth: 2.5,
                strokeDasharray: "4,4",
              }}
            />
            <div className="w-[2px] rounded-base h-5 bg-black"></div>
            <input
              ref={inputRef}
              type="text"
              className="h-full text-md font-normal w-[13.75rem]"
              value="tejadarevertlaurence@gmail.com"
              disabled
            />
          </div>
          <NButton
            onClick={handleCopy}
            className="w-[2.75rem] h-[2.75] "
            size="icon"
            variant="default"
          >
            <Copy
              style={{
                width: "1.5rem",
                height: "1.5rem",
                stroke: "#000",
                strokeWidth: 2.5,
                strokeDasharray: "3,3",
              }}
            />
          </NButton>
        </div>

        <div className="flex flex-row gap-5 h-full">
          <div className="flex flex-row gap-2 h-full ">
            <a
              href="github.com/Laurenccee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <NButton
                className="h-full w-[2.75rem]"
                size="icon"
                variant="default"
              >
                <Github
                  style={{
                    width: "1.5rem",
                    height: "1.5rem",
                    stroke: "#000",
                    strokeWidth: 2.5,
                    strokeDasharray: "3,3",
                  }}
                />
              </NButton>
            </a>

            <a
              href="linkedin.com/in/laurence-tejada"
              target="_blank"
              rel="noopener noreferrer"
            >
              <NButton
                className="h-full  w-[2.75rem]"
                size="icon"
                variant="default"
              >
                <Linkedin
                  style={{
                    width: "1.5rem",
                    height: "1.5rem",
                    stroke: "#000",
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
            >
              <NButton
                className="h-full  w-[2.75rem]"
                size="icon"
                variant="default"
              >
                <Instagram
                  style={{
                    width: "1.5rem",
                    height: "1.5rem",
                    stroke: "#000",
                    strokeWidth: 2.5,
                    strokeDasharray: "3,3",
                  }}
                />
              </NButton>
            </a>
          </div>

          <NButton
            onClick={handleDownload}
            className="h-full "
            variant="default"
          >
            RESUME{" "}
            <Download
              style={{
                width: "1.5rem",
                height: "1.5rem",
                stroke: "#000",
                strokeWidth: 2.5,
                strokeDasharray: "3,3",
              }}
            />
          </NButton>
        </div>
      </div>

      <div className="flex flex-col flex-1 items-center justify-center">
        <Reveal>
          <GlitchyText
            randomGlitchInterval={3000}
            initialLabel="{ HELLO WORLD }"
            finalLabel="{ I'M LAURENCE }"
            className="text-9xl font-normal"
          />
        </Reveal>
        <Reveal>
          <GlitchyText
            initialLabel="An Aspiring Front-End Developer & UI/UX Designer"
            finalLabel="An Aspiring Front-End Developer & UI/UX Designer"
            className="text-2xl font-normal"
          />
        </Reveal>
      </div>
    </section>
  );
};

export default LandingPage;
