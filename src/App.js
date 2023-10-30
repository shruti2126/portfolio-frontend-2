/** @format */

import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";
import Projects from "./components/sections/Projects";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Blog from "./components/sections/Blog";
import Contact from "./components/sections/Contact";
import Education from "./components/sections/Education";
import Skills from "./components/sections/Skills";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WhatsappDetails from "./pages/WhatsappDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="whatsapp" element={<WhatsappDetails />} />
        </Route>
        <Route path="experience" element={<Experience />} />
        <Route path="projects" element={<Projects />} />
        <Route path="education" element={<Education />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="skills" element={<Skills />} />
      </Route>
      <Route path="projects/:projectId" element={<ProjectPage />} />
    </Routes>
  );
}

export default App;
