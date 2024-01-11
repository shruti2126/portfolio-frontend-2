/** @format */
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import {
  HStack,
  VStack,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import "react-vertical-timeline-component/style.min.css";
import "../../styles/scrollbar.css";
import "../../styles/styles.css";
const ExperienceTimelineElement = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: experience.textColor,
        color: "#fff",
      }}
      contentArrowStyle={{ color: experience.textColor }}
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
          <Text color="white" fontSize={["md", "lg", "xl"]} as="h3">
            {experience.title}
          </Text>
          <Text color="white" fontSize={["sm", "md", "lg"]} as="h3">
            {experience.organization}
          </Text>
          {/* add link to related project */}
        </VStack>
        <Text color="darkblue" fontSize={["sm", "md", "lg", "xl"]} as="h3">
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
  );
};
export default ExperienceTimelineElement;
