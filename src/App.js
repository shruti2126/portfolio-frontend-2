/** @format */
import React, { Suspense } from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience/Experience";
import Blog from "./components/Blog/Blog";
import Education from "./components/Education/Education";
import Skills from "./components/Skills";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LazyLoadingFallback from "./components/LazyLoadingFallback";

const ProjectPage = React.lazy(() => import("./pages/ProjectPage"));
const Contact = React.lazy(() => import("./components/Contact/Contact"));

function App() {
  return (
    <Suspense fallback={<LazyLoadingFallback />}>
      {" "}
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<Projects />} />
          <Route path="education" element={<Education />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="skills" element={<Skills />} />
        </Route>
        <Route path="projects/:projectId" element={<ProjectPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
