/** @format */
import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  AbsoluteCenter,
  CloseButton,
  Flex,
} from "@chakra-ui/react";

import SignupForm from "./SignupForm";
import "../../styles/styles.css"
import Title from "../Title";

const Blog = () => {
  const [showSignup, setShowSignup] = useState(false);
  return (
    <Box
      id="blog"
      borderWidth="1px"
      // bgGradient={["linear(to-b, pink.100, blue.100, purple.100)"]}
      height="100vh"
      width="100vw"
      position="relative"
    >
      <Title heading="Blog" />

      <AbsoluteCenter axis="both">
        {" "}
        {showSignup ? (
          <>
            <Flex flexDir={"row-reverse"}>
              <CloseButton onClick={() => setShowSignup(false)} />
            </Flex>
            <SignupForm />
          </>
        ) : (
          <>
            <Heading as="h2" textAlign="center" color="white">
              Coming Soon!
            </Heading>
            <Text p={3} fontSize="xl" textAlign="center" color="white">
              <Button
                onClick={() => {
                  setShowSignup(true);
                }}
                bgColor="whatsapp.100"
              >
                Sign up
              </Button>{" "}
              for my newsletter notifications if you wish to be alerted once
              it's online!
            </Text>
          </>
        )}
      </AbsoluteCenter>
    </Box>
  );
};

export default Blog;
