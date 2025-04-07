import { motion } from "framer-motion";

const Loading = () => {
	const text = "<Loading...>";
	const letters = text.split("");

	return (
		<main className="h-screen overflow-y-scroll snap-y snap-mandatory">
			<section className="bg-main flex justify-center items-center py-8 gap-5 h-full px-60">
				<h1>
					{letters.map((letter, index) => (
						<motion.span
							key={index}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{
								delay: index * 0.1,
								duration: 0.2,
							}}
						>
							{letter}
						</motion.span>
					))}
					<span className="typing-cursor"></span> {/* Add cursor */}
				</h1>
			</section>
		</main>
	);
};

export default Loading;
