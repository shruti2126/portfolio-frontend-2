/** @format */

// /** @format */

import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact/Contact";
import Experience from "../components/Experience";
import Blog from "../components/Blog/Blog";
import Education from "../components/Education/Education";
import { Box } from "@chakra-ui/react";
import Skills from "../components/Skills";

import NavigationBar from "../components/NavigationBar";
import Resume from "../components/Resume";

const Home = () => {
  return (
    <Box
      id="home"
      minW="100vw"
      minH="100vh"
      bgGradient="linear(to-l, black, purple.700, pink.800, purple.700, black)"
    >
      <NavigationBar />
      <About />
      <Skills />
      <Resume />
      <Experience />
      <Projects />
      <Education />
      <Blog />
      <Contact />
    </Box>
  );
};

export default Home;
