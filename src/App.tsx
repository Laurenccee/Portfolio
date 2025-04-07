import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import PortfolioApp from "./pages/portfolio";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Navigate to="/portfolio" />} />
				<Route path="/portfolio" element={<PortfolioApp />} />
			</Routes>
		</Router>
	);
};

export default App;
