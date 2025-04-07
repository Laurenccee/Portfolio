import * as React from "react";
import { NButton } from "@/components/button";
import { NInput } from "@/components/input";
import { NProgress } from "@/components/progress";
import { MixText } from "@/components/mix-text";
import { Download, Instagram, Linkedin, Github, Mail } from "lucide-react";

const PortfolioApp = () => {
	return (
		<main className="h-screen overflow-y-scroll snap-y snap-mandatory">
			<section className="flex flex-col py-8 gap-5 px-60 h-screen snap-start">
				<div className="flex h-[2.75rem] flex-row justify-between">
					<div className="flex gap-2 flex-row">
						<NInput leftIcon={<Mail />} value="tejadarevertlaurence" disabled />
						<NButton className="h-full w-[2.75rem]" variant="default">
							<Download />
						</NButton>
					</div>
					<NButton className="w-40" variant="default">
						RESUME <Download />
					</NButton>
				</div>
				<div className="flex flex-col gap-4 flex-1 items-center justify-center">
					<span className="text-2xl">HELLO WORLD!</span>
					<h1 className="text-7xl text-center">
						I'M{" "}
						<span className="inline-block">
							<MixText label="LAURENCE" />
						</span>
					</h1>
					<span className="text-2xl">An Aspiring Front-End Developer & UI/UX Designer</span>
				</div>
			</section>

			<section className="py-5 gap-5 px-40 h-screen snap-start">
				<main className="flex flex-col gap-5 h-full w-full"></main>
			</section>

			<section className="h-screen bg-black snap-start"></section>
		</main>
	);
};

export default PortfolioApp;
