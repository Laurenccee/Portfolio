import Layout from "@/components/transitions/stair-transition";
import AboutMePage from "./about-me";
import LandingPage from "./landing-page";
import BackgroundPage from "./background-page";
import Skills from "./my-skills";
import ContactMe from "./contact-me";
import Projects from "./projects";

const PortfolioApp = () => {
  return (
    <main className="h-screen relative overflow-y-scroll scroll-smooth snap-y snap-mandatory">
      <LandingPage />
      <AboutMePage />
      <BackgroundPage />
      <Projects />
      <Skills />
      <ContactMe />
    </main>
  );
};

export default Layout(PortfolioApp);
