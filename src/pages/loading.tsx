import { AnimatedLoadingSequence } from "@/components/loading-text-anim";
import Layout from "@/components/transitions/stair-transition";

const Loading = () => {
	return (
		<main className="h-screen overflow-y-scroll snap-y snap-mandatory">
			<section className="bg-white flex justify-center items-center py-8 gap-5 h-full px-60">
				<AnimatedLoadingSequence />
			</section>
		</main>
	);
};

export default Layout(Loading);
