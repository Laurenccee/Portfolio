import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PortfolioApp from "./pages/portfolio";
import NextPage from "./pages/next";
import { useEffect, useState } from "react";
import Loading from "./pages/loading";

const AppRoutes = () => {
	const location = useLocation();

	return (
		<AnimatePresence mode="wait">
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Navigate to="/portfolio" />} />
				<Route path="/portfolio" element={<PortfolioApp />} />
				<Route path="/next" element={<NextPage />} />
			</Routes>
		</AnimatePresence>
	);
};

const App = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 2000);
	}, []);

	if (loading) return <Loading />;

	return (
		<Router basename="/Portfolio/">
			<AppRoutes />
		</Router>
	);
};

export default App;
