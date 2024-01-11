/** @format */
import React from "react";
import {
  Box,
  Image,
  Text,
  Heading,
  Link,
  Icon,
  HStack,
  VStack,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
} from "@chakra-ui/react";

import { FaLinkedin, FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";
import pic from "../assets/pic4.webp";
import "../styles/styles.css";
import Fade from "react-awesome-reveal";

const About = () => {
  return (
    <Box id="about" className="component" minH="100vh" minW="100vw" >
      <Heading
        mt="1em"
        className="heading"
        as="h3"
        size="lg"
        textAlign={"center"}
      >
        About Me
      </Heading>
      <VStack mb="2em" px={[3, 4, 5]} spacing={["4", "6"]} align="center">
        {" "}
        {/* Adjust spacing between elements */}
        <Box>
          <Image
            src={pic}
            borderRadius="full"
            alt="Shruti"
            boxSize={["xs", "sm", "md"]} // Adjust image size
            objectFit="cover"
            shadow="md"
          />
        </Box>
        <VStack>
          <Text
            color="white"
            fontSize={["md", "lg", "xl"]} // Adjust font size for different screen sizes
            textAlign="center"
            fontFamily="sans-serif"
            flex="1"
            width={["90%", "90%"]} // Adjust width for different screen sizes
          >
            Hey! My name is Shruti. I am pursuing a career in tech as a Software
            Developer/Engineer. I graduated with a Bachelor of Science in
            Computer Science from UW-Madison last year. This portfolio hopefully
            gives you an insight into my skills and abilities and my unique
            journey to obtaining this milestone!
            {/* I am also working on a blog
            {/* called{" "}
            <Link href="/" color="blue.500">
              Connecting the Dots
            </Link>{" "}
            ,
            where I plan to talk extensively about how I am finally able to
            answer some of the burning questions I often asked myself trying to
            figure out my place in the world. */}
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
                  color="blue.400"
                />{" "}
                {/* Adjust icon size */}
              </Link>
              {/* Instagram */}
              <Link href="https://www.instagram.com/iamshru__" isExternal>
                <Icon
                  as={FaInstagram}
                  boxSize={["6", "8", "10"]}
                  color="pink.300"
                />{" "}
                {/* Adjust icon size */}
              </Link>
              {/* WhatsApp */}
              <Popover placement="top-start">
                <PopoverTrigger>
                  <Link>
                    <Icon
                      as={FaWhatsapp}
                      boxSize={["6", "8", "10"]}
                      color="green.300"
                    />{" "}
                    {/* Adjust icon size */}
                  </Link>
                </PopoverTrigger>
                <PopoverContent bg="whatsapp.700" color="white">
                  <PopoverHeader fontWeight="semibold">Phone</PopoverHeader>
                  <PopoverArrow bg="pink.500" />
                  <PopoverCloseButton bg="purple.500" />
                  <PopoverBody>+12068897848</PopoverBody>
                </PopoverContent>
              </Popover>

              <Link href="https://github.com/shruti2126" isExternal>
                <Icon
                  as={FaGithub}
                  boxSize={["6", "8", "10"]}
                  color="gray.300"
                />{" "}
                {/* Adjust icon size */}
              </Link>
            </Fade>
          </HStack>
          <Fade>
            <Link
              href="https://github.com/shruti2126/portfolio-frontend-2/tree/master"
              isExternal
            >
              <Button
                mt={[4, 5, 6]}
                p={[4, 4, 5]}
                maxW="sm"
                borderRadius={3}
                bgColor="whatsapp.100"
              >
                <Icon
                  as={FaGithub}
                  boxSize={["4", "6", "8"]}
                  color="gray.900"
                />{" "}
                <Text
                  ml={2}
                  as="span"
                  fontSize={["sm", "md", "lg"]}
                  color="chakra-subtle-text._light"
                >
                  Portfolio Source
                </Text>
              </Button>
            </Link>
          </Fade>
        </VStack>
      </VStack>
    </Box>
  );
};

export default About;
