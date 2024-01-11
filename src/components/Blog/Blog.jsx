/** @format */
import React, { Suspense, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  AbsoluteCenter,
  CloseButton,
  Flex,
} from "@chakra-ui/react";
import "../../styles/styles.css";
import Title from "../Title";
import LazyLoadingFallback from "../LazyLoadingFallback";

const SignupForm = React.lazy(() => import("./SignupForm"));

const Blog = () => {
  const [showSignup, setShowSignup] = useState(false);
  return (
    <Box
      id="blog"
      borderBottomWidth="1px"
      height="100vh"
      width="100vw"
      position="relative"
    >
      <Title heading="Blog" />

      <AbsoluteCenter axis="both">
        {" "}
        {showSignup ? (
          <Suspense fallback={<LazyLoadingFallback />}>
            <Flex flexDir={"row-reverse"}>
              <CloseButton color="white" onClick={() => setShowSignup(false)} />
            </Flex>
            <SignupForm />
          </Suspense>
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
