/** @format */

import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Experience from "../components/sections/Experience";
import Blog from "../components/sections/Blog";
import Education from "../components/sections/Education";
import { Box } from "@chakra-ui/react";
import Skills from "../components/sections/Skills";

import NavigationBar from "../components/NavigationBar";
import Resume from "../components/sections/Resume";

const Home = () => {
  return (
    <Box id="home" minW="100vw" minH="100vh">
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
