/** @format */

import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Education from "./components/Education";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="experience" element={<Experience />} />
        <Route path="projects" element={<Projects />} />
        <Route path="education" element={<Education />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="projects/:projectId" element={<ProjectPage />} />
    </Routes>
  );
}

export default App;
