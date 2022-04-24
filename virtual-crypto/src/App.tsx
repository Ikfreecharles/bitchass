import styled from "styled-components";
import "./App.css";
import { MenuComponent } from "./components/Menu.component";
import { NavbarComponent } from "./components/Navbar.component";
import { AboutSection } from "./sections/About.section";
import { AboutProjectSection } from "./sections/AboutProject.section";
import { FaqSection } from "./sections/Faq.section";
import { FeaturesSection } from "./sections/Features.section";
import { Footer } from "./sections/Footer";
import { HeroSection } from "./sections/Hero.section";
import { HowToMintSection } from "./sections/HowToMint.section";
import { IdoLaunchSection } from "./sections/IdoLaunch.section";
import { RoadmapSection } from "./sections/Roadmap.section";
import { RoadmapTreeSection } from "./sections/RoadmapTree.section";
import { TeamSection } from "./sections/Team.section";
import { TokenSection } from "./sections/Token.section";
import { VizionTokenSection } from "./sections/VizionToken.section";
import { WhatIsVizionSection } from "./sections/WhatIsVizion.section";
import { WhitepaperSection } from "./sections/Whitepaper.section";

function App() {
  return (
    <CustomMain>
      <NavbarComponent />
      <MenuComponent />
      <HeroSection />
      <AboutProjectSection />
      <AboutSection />
      <WhatIsVizionSection />

      <FeaturesSection />
      <IdoLaunchSection />
      <VizionTokenSection />
      <HowToMintSection />
      <RoadmapSection />
      <RoadmapTreeSection />
      <WhitepaperSection />
      <FaqSection />
      <TeamSection />
      <Footer />
    </CustomMain>
  );
}

export default App;

const CustomMain = styled.main`
  positon: relative;
`;
