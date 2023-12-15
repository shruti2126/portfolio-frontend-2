/** @format */

import { Box } from "@chakra-ui/react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../../styles/styles.css";
import TransferReason from "./TransferReason";
import EducationTimelineElement from "./EducationTimelineElement";
import { educationEntries } from "../../data/educationEntries";
import Title from "../Title";

const Education = () => {
  return (
    <Box
      minH="100vh"
      minW="100vw"
      border="1px solid white"
      id="education"
      // bgGradient={["linear(to-t, pink.100, purple.200, blue.200)"]}
    >
      <Title heading="Education History" />
      <VerticalTimeline>
        {educationEntries.map((entry, index) => {
          if (entry.type === "education") {
            return (
              <EducationTimelineElement
                key={index}
                logo={entry.data.logo}
                alt={entry.data.alt}
                university={entry.data.university}
                major={entry.data.major}
                location={entry.data.location}
                date={entry.data.date}
                list={entry.data.list}
              />
            );
          } else if (entry.type === "transferReason") {
            return <TransferReason key={index} reason={entry.data.reason} />;
          } else {
            return null;
          }
        })}
      </VerticalTimeline>
    </Box>
  );
};

export default Education;
