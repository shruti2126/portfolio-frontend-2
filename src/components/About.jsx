/** @format */
import React, { useState } from "react";
import {
  Box,
  Image,
  Text,
  Link,
  Icon,
  HStack,
  VStack,
  Button,
} from "@chakra-ui/react";
import Popover from "./Popover";
import { FaLinkedin, FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";
import pic from "../assets/profile.jpg";
import "../styles/styles.css";
import Fade from "react-awesome-reveal";
import Title from "./Title";

// Component function for the About section
const About = () => {
  const [popoverVisible, setPopoverVisible] = useState(false);
  console.log("snskdfgsfjb");
  return (
    <Box id="about" className="component">
      <Title heading="About Me" />
      <VStack spacing={["4", "6"]}>
        {/* Adjust spacing between elements */}
        <Box>
          <Image
            src={pic}
            borderRadius="full"
            alt="Shruti"
            boxSize={"xs"}
            objectPosition="center"
            objectFit="cover"
            shadow="md"
          />{" "}
        </Box>
        {/* VStack for vertical stacking of elements with responsive padding and spacing */}
        <VStack>
          <Text
            color="white"
            fontSize={["sm", "md", "lg"]} // Adjust font size for different screen sizes
            textAlign="center"
            fontFamily="sans-serif"
            flex="1"
            width={["90%", "90%"]} // Adjust width for different screen sizes
          >
            Hi! My name is Shruti. I am a Software Developer with professional experience in
            Full Stack Web Development using MERN stack. I have significant academic/part-time/internship experience in
            other technologies like Java, SpringBoot Swift and ReactNative. I hold a Bachelor of
            Science in Computer Science degree from the University of
            Wisconsin-Madison. Through this portfolio, I hope to give you an insight
            into my skills and abilities as a software developer and what value
            I bring to a team.
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
              <div className="popover-container">
                {" "}
                <Link onClick={() => setPopoverVisible(true)}>
                  {" "}
                  <Icon
                    as={FaWhatsapp}
                    boxSize={["6", "8", "10"]}
                    color="green.300"
                  />
                </Link>
                {popoverVisible && (
                  <Popover
                    title="Phone"
                    content="+91828720988"
                    open={setPopoverVisible}
                  />
                )}
              </div>
              {/* Github */}
              <Link href="https://github.com/shruti2126" isExternal>
                <Icon
                  as={FaGithub}
                  boxSize={["6", "8", "10"]}
                  color="gray.300"
                />{" "}
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
                  Website Source
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
