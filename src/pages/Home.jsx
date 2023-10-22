/** @format */

import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Blog from "../components/Blog";
import Education from "../components/Education";
import {Box} from "@chakra-ui/react"

const Home = () => {
  return (
    <Box id="home" minWidth='100vw' minHeight='100vh'>
      <Header />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Blog />
      <Contact />
    </Box>
  );
};
export default Home;
