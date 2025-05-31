import { useEffect, useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import PortfolioApp from "./pages/portfolio";
import BackgroundPage from "./pages/background-page";
import START from "./pages/press-start";
import {
  AnimatedLoadingSequence,
  loadingMessages,
  MESSAGE_DELAY,
} from "@/components/loading-text-anim";

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/start" element={<START />} />
        <Route path="/home" element={<PortfolioApp />} />
        <Route path="/background" element={<BackgroundPage />} />
      </Routes>
    </AnimatePresence>
  );
};

const AppContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(location.pathname === "/");

  useEffect(() => {
    if (location.pathname === "/") {
      const TOTAL_LOADING_TIME = loadingMessages.length * MESSAGE_DELAY;
      const timer = setTimeout(() => {
        setLoading(false);
        navigate("/start", { replace: true }); // Redirect to /start after loading
      }, TOTAL_LOADING_TIME);

      return () => clearTimeout(timer);
    }
  }, [location.pathname, navigate]);

  if (loading) {
    return (
      <main className="h-screen bg-black flex justify-center items-center px-10">
        <AnimatedLoadingSequence />
      </main>
    );
  }

  return <AppRoutes />;
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
