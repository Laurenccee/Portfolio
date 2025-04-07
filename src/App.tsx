import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import PortfolioApp from "./pages/portfolio";
import Loading from "./pages/loading";
import { AnimatePresence } from "framer-motion";

const App = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	if (loading) {
		return <Loading />;
	}
	return (
		<Router basename="/Portfolio/">
			<AnimatePresence mode="wait">
				<Routes>
					<Route path="/" element={<Navigate to="/portfolio" />} />
					<Route path="/portfolio" element={<PortfolioApp />} />
				</Routes>
			</AnimatePresence>
		</Router>
	);
};

export default App;
