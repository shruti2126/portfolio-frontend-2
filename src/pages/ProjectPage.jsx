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
} from "@chakra-ui/react";
import CIcon from "@coreui/icons-react";

import { projectData } from "../data/projectData";
import { useParams } from "react-router-dom";
import "../styles/styles.css";
import "../styles/projects.css";

const ProjectPage = () => {
  // const navigate = useNavigate();
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
    <Box minH="100vh" minW="100vw" bg="white">
      <Heading as="h2" size="xl" mb="4" textAlign={"center"} pt={4}>
        {project.title}
      </Heading>
      {/* <IconButton
        icon={<FaArrowLeft />}
        colorScheme="teal"
        aria-label="Go Back"
        to="projects"
        position="fixed"
        top="5"
        left="4"
        onClick={() => navigate("../projects")}
      /> */}

      <Center mb={4}>{project.demoUrl}</Center>
      <Box minW={["sm", "md"]}>
        {" "}
        <VStack spacing="4">
          <a href={project.githubLink} color="teal">
            <span
              style={{
                ...(project.githubLink !== "N/A"
                  ? { textDecorationLine: "underline", color: "Highlight" }
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
          <Text fontSize="md" color="gray.600" textAlign={"center"}>
            {project.description}
          </Text>
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
            <>
              <VStack key={index}>
                <Text
                  fontSize={["md", "lg", "lg"]}
                  style={{ textAlign: "center", fontWeight: "bold" }}
                >
                  {media.title}
                </Text>
              </VStack>
              <HStack spacing={3} key={index} overflowX="auto">
                {media.data}
              </HStack>
            </>
          ))}

          <Heading as="h3" size="lg">
            Bugs and Improvements Required
          </Heading>
          <ul>
            {project.CurrentIssues.map((issue, index) => (
              <Center mt={4}>
                <li key={index}>{issue}</li>
              </Center>
            ))}
          </ul>
        </VStack>
      </Box>
    </Box>
  );
};

export default ProjectPage;
