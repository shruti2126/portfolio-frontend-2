/** @format */

import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Blog from "../components/Blog";
import Education from "../components/Education";

const Home = () => {
  return (
    <div id="home">
      <Header />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Blog />
      <Contact />
    </div>
  );
};
export default Home;
