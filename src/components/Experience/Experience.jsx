/** @format */

import { Box } from "@chakra-ui/react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experienceData } from "../../data/experienceData.jsx";
import Title from "../Title.jsx";
import ExperienceTimelineElement from "./ExperienceTimelineElement.jsx";

const Experience = () => {
  return (
    <Box className="component" id="experience">
      <Title heading="Software Development Experience" />
      <VerticalTimeline>
        {experienceData.map((experience, index) => (
          <ExperienceTimelineElement key={index} experience={experience} />
        ))}
      </VerticalTimeline>
    </Box>
  );
};

export default Experience;
