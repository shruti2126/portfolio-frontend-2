/** @format */

import {
  Box,
  Image,
  Text,
  Link,
  Icon,
  HStack,
  VStack,
  Heading,
  Center,
} from "@chakra-ui/react";
import { FaLinkedin, FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";
import pic from "../assets/pic2.jpg";
import "../styles/styles.css";
import Fade from "react-awesome-reveal";
import { useEffect } from "react";
import scrollToSection from "../functions/scrollToSection";

const About = () => {
  useEffect(() => {
    if (window.location.pathname.includes("about")) {
      scrollToSection("about");
    }
  }, []);
  return (
    <Box
      bgGradient={["linear(to-b, blue.100, pink.100, purple.200)"]}
      id="about"
      minH="100vh" // Use minH to ensure the background covers the entire screen
      minW="100vw"
      shadow="md"
      borderWidth="1px"
      p={["2", "4", "6"]} // Adjust padding for different screen sizes
    >
      <Center className="heading">
        <Heading as="h3" size="lg">
          About
        </Heading>
      </Center>
      <VStack spacing={["4", "8"]} align="center">
        {" "}
        {/* Adjust spacing between elements */}
        <Box>
          <Image
            borderRadius="full"
            src={pic}
            alt="Shruti"
            boxSize={["250px", "300px", "400px"]} // Adjust image size
            objectFit="cover"
            shadow="md"
          />
        </Box>
        <VStack>
          <Text
            color="blackAlpha.800"
            fontSize={["md", "lg", "xl"]} // Adjust font size for different screen sizes
            textAlign="center"
            fontFamily="sans-serif"
            flex="1"
            width={["90%", "90%"]} // Adjust width for different screen sizes
          >
            Hey! My name is Shruti. I am pursuing a career in tech as a Software
            Engineer with a Bachelor of Science degree in Computer Science from
            UW-Madison. This portfolio hopefully gives you better insight into my technical skills and abilities!{" "}
            I am also working on a blog called {" "}
            <Link href="/" color="blue.500">
              Connecting the Dots
            </Link>{" "}
            , where I will talk extensively about I am finally able to
            answer some of the burning questions about myself and my place in the world,
            and how I am grapling with this new found "wisdom".
          </Text>
          <HStack spacing={["4", "8"]}>
            {" "}
            {/* Adjust spacing between social icons */}
            <Fade>
              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/in/shrutisharma26/"
                isExternal
              >
                <Icon
                  as={FaLinkedin}
                  boxSize={["6", "8", "10"]}
                  color="blue.600"
                />{" "}
                {/* Adjust icon size */}
              </Link>
              {/* Instagram */}
              <Link href="https://www.instagram.com/iamshru__" isExternal>
                <Icon
                  as={FaInstagram}
                  boxSize={["6", "8", "10"]}
                  color="pink.600"
                />{" "}
                {/* Adjust icon size */}
              </Link>
              {/* WhatsApp */}
              <Link to="/whatsapp">
                <Icon
                  as={FaWhatsapp}
                  boxSize={["6", "8", "10"]}
                  color="green.600"
                />{" "}
                {/* Adjust icon size */}
              </Link>
              <Link href="https://github.com/shruti2126" isExternal>
                <Icon
                  as={FaGithub}
                  boxSize={["6", "8", "10"]}
                  color="gray.600"
                />{" "}
                {/* Adjust icon size */}
              </Link>
            </Fade>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default About;
