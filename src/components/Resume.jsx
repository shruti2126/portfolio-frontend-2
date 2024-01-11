/** @format */

import {
  Box,
  CloseButton,
  Button,
  Text,
  AbsoluteCenter,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";
import "../styles/styles.css";
import Title from "./Title";
const Resume = () => {
  const [showPdf, setShowPdf] = useState(false);
  function toggle() {
    setShowPdf((prevBool) => !prevBool);
  }
  return (
    <Box
      id="resume"
      className="component"
      position="relative"
      minH="100vh"
      minW="100vw"
    >
      <Title heading="Resume" />
      {showPdf ? (
        <Center>
          <CloseButton
            color="white"
            maxInlineSize="10"
            onClick={() => toggle()}
          />
        </Center>
      ) : (
        <AbsoluteCenter axis="both">
          <Button
            maxW="2xl"
            borderRadius={3}
            bgColor="whatsapp.100"
            onClick={() => toggle()}
          >
            <Text
              as="span"
              fontSize={["md", "lg", "xl"]}
              color="chakra-body-text._light"
            >
              Show Resume
            </Text>
          </Button>
        </AbsoluteCenter>
      )}

      {showPdf && (
        <Box className="iframe-container">
          <iframe
            title="my resume"
            className="responsive-iframe"
            src="https://drive.google.com/file/d/1ANx3pLRuWxtDpvFpgjM-ppjaJ02Wh3TH/preview"
            width="640"
            height="480"
            allow="autoplay"
          ></iframe>
        </Box>
      )}
    </Box>
  );
};

export default Resume;
