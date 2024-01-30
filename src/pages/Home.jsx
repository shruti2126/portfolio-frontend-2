/** @format */

import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact/Contact";
import Experience from "../components/Experience/Experience";
import Blog from "../components/Blog/Blog";
import Education from "../components/Education/Education";
import { Box } from "@chakra-ui/react";
import Skills from "../components/Skills";

// import NavigationBar from "../components/NavigationBar";
import Resume from "../components/Resume";
import Testimonials from "../components/Testimonials/Testimonials";
import NavBar from "../components/NavBar/NavBar";

const Home = () => {
  return (
    <Box id="home" bgGradient="linear(to-l, black, purple.800, yellow.800, purple.800,black)">
      {/* <NavigationBar /> */}
      <NavBar />
      <About />
      <Skills />
      <Resume />
      <Experience />
      <Projects />
      <Education />
      <Blog />
      <Testimonials />
      <Contact />
    </Box>
  );
};

export default Home;
