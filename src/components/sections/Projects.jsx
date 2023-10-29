/** @format */

import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Center,
  CardBody,
} from "@chakra-ui/react";
import { projectData } from "../../data/projectData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../../styles/styles.css";
import { useNavigate } from "react-router-dom";
import scrollToSection from "../../functions/scrollToSection";
// import getMedia from "../aws-s3/getMedia";

const Projects = () => {
  const chunkSize = 1; // Number of cards to display in each slide
  const [activeIndex, setActiveIndex] = useState(0);
  const totalChunks = Math.ceil(projectData.length / chunkSize);
  const [isExpanded, setIsExpanded] = useState(false);

  const navigate = useNavigate();

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? totalChunks - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === totalChunks - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (window.location.pathname.includes("projects")) {
      scrollToSection("projects");
    }
  }, []);

  return (
    <Box
      bgGradient={["linear(to-b, blue.100, purple.200, blue.200)"]}
      id="projects"
      position="relative"
      border="1px solid white"
      minH="100vh"
      minW="100vw"
    >
      <Heading className="heading">Projects & Demos</Heading>
      <Center mx={10} mb={10} transition="all 1s ease-out">
        {projectData
          .slice(activeIndex * chunkSize, activeIndex * chunkSize + chunkSize)
          .map((project, index) => (
            <Card key={index} maxW="md">
              <CardHeader>
                <Flex flex="1" gap="1" alignItems="center" flexWrap="wrap">
                  <Box>
                    <Heading size="sm">{project.purpose}</Heading>
                    <Text font={["sm", "md", "lg"]}>
                      <span style={{ fontWeight: "bold" }}>Role : </span>
                      Software Developer
                    </Text>
                  </Box>
                  <Text
                    maxH={isExpanded ? "lg" : "sm"} // maximum height for the description
                    overflow={isExpanded ? "visible" : "hidden"}
                    whiteSpace={isExpanded ? "wrap" : "nowrap"}
                    textOverflow="ellipsis"
                  >
                    {project.description}
                  </Text>
                  {!isExpanded && (
                    <p
                      style={{ color: "teal", cursor: "pointer" }}
                      onClick={() => setIsExpanded(true)}
                    >
                      Read More{" "}
                    </p>
                  )}

                  {isExpanded && (
                    <span
                      style={{ color: "teal", cursor: "pointer" }}
                      onClick={() => setIsExpanded(false)}
                    >
                      Read Less{" "}
                    </span>
                  )}
                </Flex>
              </CardHeader>
              <CardBody>
                <Image
                  borderRadius="lg"
                  objectFit="cover"
                  src={project.thumbnail}
                  alt={project.title}
                />
              </CardBody>
              <Button
                colorScheme="teal"
                variant='outline'
                m={4}
                p={4}
                onClick={() => {
                  navigate(`projects/${project.id}`);
                }}
              >
                Check it out
              </Button>
            </Card>
          ))}
      </Center>

      <Button
        onClick={handlePrev}
        position="absolute"
        left={10}
        top="50%"
        bgColor="white"
        borderRadius="50%"
        p={2}
        zIndex="1"
      >
        <FaChevronLeft />
      </Button>
      <Button
        onClick={handleNext}
        position="absolute"
        right={10}
        top="50%"
        bgColor="white"
        borderRadius="50%"
        p={2}
        zIndex="1"
      >
        <FaChevronRight />
      </Button>
    </Box>
  );
};

export default Projects;
