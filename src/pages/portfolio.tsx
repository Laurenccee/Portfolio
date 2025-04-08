import { NButton } from "@/components/button";
import StaggeredText from "@/components/staggered-text";
import transition from "@/components/transitions/transition";
import { Link } from "react-router-dom";

import { Download, Github, Linkedin, Instagram, Copy, Mail } from "lucide-react";

const PortfolioApp = () => {
	return (
		<main className="h-screen overflow-y-scroll snap-y snap-mandatory">
			<section className="bg-main flex flex-col py-8 gap-5 px-60 h-screen snap-start">
				<div className="flex h-[2.75rem] flex-row items-center justify-between">
					<div className="h-full  flex flex-row gap-2">
						<div className="flex flex-row items-center px-[.75rem] py-[.5rem] gap-2.5 bg-main border-2 border-border shadow-shadow h-full">
							<Mail />
							<div className="w-[2px] h-9 bg-black"></div>
							<input
								type="text"
								className="h-full text-sm w-[13.75rem]"
								value="tejadarevertlaurence@gmail.com"
								disabled
							/>
						</div>
						<NButton className="w-[2.75rem] h-[2.75]" size="icon" variant="default">
							<Copy style={{ width: "1.375rem", height: "1.375rem" }} />
						</NButton>
					</div>

					<div className="flex flex-row gap-5 h-full">
						<div className="flex flex-row gap-2 h-full ">
							<NButton className="h-full w-[2.75rem]" size="icon" variant="default">
								<Github style={{ width: "1.5rem", height: "1.5rem" }} />
							</NButton>
							<NButton className="h-full w-[2.75rem]" size="icon" variant="default">
								<Linkedin style={{ width: "1.5rem", height: "1.5rem" }} />
							</NButton>
							<NButton className="h-full w-[2.75rem]" size="icon" variant="default">
								<Instagram style={{ width: "1.5rem", height: "1.5rem" }} />
							</NButton>
						</div>

						<NButton className="h-full " variant="default">
							Resume <Download />
						</NButton>
					</div>
				</div>

				<div className="flex flex-col flex-1 items-center justify-center">
					<span className="text-3xl">Hello World!</span>
					<h1 className="text-9xl leading-none font-black text-center m-0">
						I'M{" "}
						<Link to="/next">
							<StaggeredText href="/next">JOHNDOE</StaggeredText>
						</Link>
					</h1>
					<span className="text-3xl font-semibold">
						An Aspiring Front-End Developer & UI/UX Designer
					</span>
				</div>
			</section>
			<section className="">
				<div className="h-screen bg-black"></div>
			</section>
		</main>
	);
};

export default transition(PortfolioApp);
