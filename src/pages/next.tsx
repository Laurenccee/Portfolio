import transition from "@/components/transitions/transition";

const next = () => {
	return <main className="h-screen overflow-y-scroll snap-y snap-mandatory">Hi</main>;
};

export default transition(next);
