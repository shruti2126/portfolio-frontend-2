/** @format */

import {
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  HStack,
  VStack,
} from "@chakra-ui/react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../../styles/scrollbar.css";
import "../../styles/styles.css";
import { experienceData } from "../../data/experienceData.jsx";

const Experience = () => {
  return (
    <Box
      minH="100vh"
      minW="100vw"
      shadow="md"
      borderWidth="1px"
      bgGradient={["linear(to-b, pink.200, purple.100, blue.100)"]}
      id="experience"
    >
      <Heading className="heading">Software Development Experience</Heading>

      <VerticalTimeline>
        {experienceData.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              // background: "#F4F5F5",
              color: "#000",
            }}
            contentArrowStyle={{ color: "#F4F5F5" }}
            className="vertical-timeline-element--experience"
            date={experience.date}
            iconStyle={{
              background: "#fff",
              color: "#fff",
              height: "min-content",
            }}
            icon={experience.icon}
            style={{ maxWidth: "90vw" }}
          >
            <HStack justifyContent="space-between">
              <VStack align="left">
                {" "}
                <Text
                  color={experience.textColor}
                  fontSize={["md", "lg", "xl"]}
                  as="h3"
                >
                  {experience.title}
                </Text>
                <Text
                  color={experience.textColor}
                  fontSize={["sm", "md", "lg"]}
                  as="h3"
                >
                  {experience.organization}
                </Text>
                {/* add link to related project */}
              </VStack>
              <Text
                color="darkblue"
                fontSize={["sm", "md", "lg", "xl"]}
                as="h3"
              >
                {experience.type}
              </Text>
            </HStack>

            <Accordion
              allowToggle
              borderTopWidth="1px"
              borderTopColor="bisque"
              borderBottomColor={"blackAlpha.100"}
            >
              <AccordionItem>
                <h3>
                  <AccordionButton _expanded={{ bg: "teal.500" }}>
                    Description
                    <AccordionIcon />
                  </AccordionButton>
                </h3>
                <AccordionPanel>
                  {experience.description.length > 0 && (
                    <ul>
                      {experience.description.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                  )}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Box>
  );
};

export default Experience;
