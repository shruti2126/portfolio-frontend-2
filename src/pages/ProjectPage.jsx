/** @format */

import React from "react";
import {
  Box,
  Heading,
  VStack,
  HStack,
  Divider,
  Text,
  Container,
} from "@chakra-ui/react";
import CIcon from "@coreui/icons-react";

import { projectData } from "../data/projectData";
import { useParams } from "react-router-dom";
import "../styles/styles.css";
import "../styles/projects.css";
import { RenderImages, RenderVideos } from "../components/RenderMedia";

const ProjectPage = () => {
  const { projectId } = useParams();
  const project = projectData[projectId - 1];

  // USE MEMOIZATION FOR DEMO VIDS and other media

  return (
    <Box minH="100vh" minW="100vw" bg="white" id="project-page">
      <Heading as="h2" size="xl" mb="4" textAlign="center" pt={5}>
        {project.title}
      </Heading>

      <Container maxW="80%">
        {" "}
        <VStack spacing="4">
          <Box mb={4} className="iframe-container">
            {project.demoUrl}
          </Box>
          <a href={project.githubLink} color="teal">
            <span
              style={{
                ...(project.githubLink !== "N/A"
                  ? { textDecorationLine: "underline", color: "darkturquoise" }
                  : { color: "black" }),
              }}
            >
              <b>GitHub Repository</b>
            </span>
          </a>
          <Text fontSize="lg" fontWeight="bold">
            {project.techStack}
          </Text>
          <HStack spacing={["2", "4"]}>
            {" "}
            {project.techStackIcons.map((icon, index) => (
              <CIcon
                key={index}
                icon={icon}
                size="sm"
                width={40}
                style={{ color: project.iconsColor[index] }}
              />
            ))}
          </HStack>
          <HStack pt={4}>
            <Text fontSize="md" fontWeight="bold">
              Role:
            </Text>
            <Text fontSize="md">{project.Role}</Text>
          </HStack>
          <HStack>
            <Text fontSize="md" fontWeight="bold">
              Team Size:{" "}
            </Text>
            <Text fontSize="md">{project.teamSize}</Text>
          </HStack>
          <Divider />
          <Heading as="h3" size="lg">
            Description
          </Heading>
          <Box width="80%">
            <Text fontSize={["sm", "md"]} color="gray.600" textAlign={"center"}>
              {project.description}
            </Text>
          </Box>
          <Divider />
          <Heading as="h3" size="lg">
            Project Building Insights
          </Heading>
          {project.insights.map((insight, index) => (
            <Box
              width="80vw"
              display="flex"
              flexDirection="column"
              flexWrap="wrap"
            >
              <Box key={index}>
                <Text
                  fontWeight="semibold"
                  fontSize={["md", "lg", "lg"]}
                  mt={4}
                >
                  {insight.category}
                </Text>
              </Box>
              <Box mt={3}>
                {Array.isArray(insight.data) ? (
                  <ul style={{ listStyle: "none" }}>
                    {insight.data.map((str, strIndex) => (
                      <li key={strIndex}>
                        <Box px={4}>
                          <Text fontSize={["sm", "sm", "md"]}>{str}</Text>
                        </Box>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul style={{ listStyle: "none" }}>
                    <li>
                      <Text px={4} fontSize={["sm", "sm", "md"]}>
                        {insight.data}
                      </Text>
                    </li>
                  </ul>
                )}
              </Box>
            </Box>
          ))}
          <Heading as="h3" size="lg">
            Other Media
          </Heading>
          {project.otherMedia.map((media, index) => (
            <VStack key={index} mx={10}>
              <Text
                fontSize={["md", "lg", "lg"]}
                style={{ textAlign: "center", fontWeight: "bold" }}
              >
                {media.title}
              </Text>
              {media.type === "video" ? (
                <RenderVideos videos={media.data} />
              ) : (
                <RenderImages images={media.data} />
              )}
            </VStack>
          ))}
          <Heading as="h3" size="lg">
            Bugs and Improvements Required
          </Heading>{" "}
          <ul>
            {project.CurrentIssues.map((issue, index) => (
              <li key={index}>{issue}</li>
            ))}
          </ul>
        </VStack>
      </Container>
    </Box>
  );
};

export default ProjectPage;
