/** @format */

import React from "react";
import {
  Box,
  Center,
  Heading,
  VStack,
  HStack,
  Divider,
  Text,
  IconButton,
} from "@chakra-ui/react";
import CIcon from "@coreui/icons-react";
import { FaArrowLeft } from "react-icons/fa";
import { projectData } from "../projects/projectData";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const ProjectPage = () => {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const project = projectData[projectId - 1];
  // const [mediaUrl, setMediaUrl] = useState(""); // State to store media URL

  // useEffect(() => {
  //   async function fetchMedia() {
  //     if (project.demoUrl.key !== "") {
  //       const url = await getMedia(project.demoUrl.type, project.demoUrl.key);
  //       setMediaUrl(url); // Set the media URL once it's fetched
  //     }
  //   }

  //   fetchMedia();
  // }, [project.demoUrl.key]);

  return (
    <Box p="4" bg="white" borderRadius="md" boxShadow="md" overflow="hidden">
      <Heading as="h2" size="xl" mb="4" textAlign={"center"} pt={4}>
        {project.title}
      </Heading>
      <IconButton
        icon={<FaArrowLeft />}
        colorScheme="teal"
        aria-label="Go Back"
        to="projects"
        position="absolute"
        top="12"
        left="4"
        zIndex="2"
        onClick={() => navigate("../projects")}
      />

      <Center mb={4}>{project.demoUrl}</Center>

      <VStack spacing="4">
        <Link href={project.githubLink} target="_blank" color="teal">
          <span
            style={{
              ...(project.githubLink !== "N/A"
                ? { textDecorationLine: "underline", color: "Highlight" }
                : { color: "black" }),
            }}
          >
            <b>GitHub Repository</b>
          </span>
        </Link>
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

        <Divider />
        <Heading as="h3" size="lg">
          Description
        </Heading>
        <Text fontSize="md" color="gray.600" textAlign={"center"}>
          {project.description}
        </Text>
        <Divider />
        <Heading as="h3" size="lg">
          Project Building Insights
        </Heading>
        <HStack>
          <Text fontWeight="bold">Role:</Text>
          <Text>{project.Role}</Text>
        </HStack>
        <HStack>
          <Text fontWeight="bold">Team Size: </Text>
          <Text>{project.teamSize}</Text>
        </HStack>
        <VStack>
          <Heading as="h3" size="lg">
            Other Media
          </Heading>
          {project.otherMedia.map((media, index) => (
            <VStack key={index}>
              <Text
                fontSize={["md", "lg", "lg"]}
                style={{ textAlign: "center", fontWeight: "bold" }}
              >
                {media.title}
              </Text>
              {/* <div key={index}>{media.data}</div> */}
              <Box
                display="flex"
                justifyContent="space-between"
                overflowX="auto"
                key={index}
                mx={5}
              >
                {media.data}
              </Box>
            </VStack>
          ))}
        </VStack>
        <VStack>
          <Heading as="h3" size="lg">
            Bugs
          </Heading>
          <Box>
            {project.CurrentIssues.map((issue, index) => (
              <div key={index}>{issue}</div>
            ))}
          </Box>
        </VStack>
        {/* Add more insights as needed */}
      </VStack>
    </Box>
  );
};

export default ProjectPage;
