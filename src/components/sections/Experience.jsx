/** @format */

import React, { useEffect } from "react";
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
import { experiences } from "../../data/experiences";
import "../../styles/scrollbar.css";
import "../../styles/descriptionScrollbar.css";
import "../../styles/styles.css";
import scrollToSection from "../../functions/scrollToSection";

const Experience = () => {
  useEffect(() => {
    if (window.location.pathname.includes("experience")) {
      scrollToSection("experience");
    }
  });
  return (
    <Box
      minH="100vh"
      minW="100vw"
      shadow="md"
      borderWidth="1px"
      bgGradient={["linear(to-b, purple.200, pink.100, blue.100)"]}
      id="experience"
    >
      <Heading className="heading">Software Development Experience</Heading>
      {/* <Box maxWidth={["md", "lg", "xl"]} p={[2, 4, 6]}> */}
      <VerticalTimeline>
        {experiences.map((experience, index) => (
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
                fontSize={["md", "lg", "xl"]}
                as="h3"
                style={{ backgroundColor: "yellow" }}
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
