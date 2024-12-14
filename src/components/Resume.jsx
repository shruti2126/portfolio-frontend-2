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
  const [resumeLink, setResumeLink] = useState("");

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const response = await fetch("http://localhost:5000/resume"); // Replace with your backend URL
        const data = await response.json();
        if (data.link) {
          setResumeLink(data.link);
        }
      } catch (error) {
        console.error("Error fetching resume:", error);
      }
    };

    fetchResume();
  }, []);

  function toggle() {
    setShowPdf((prevBool) => !prevBool);
  }
  return (
    <Box id="resume" className="component" position="relative">
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
            // src={`${resumeLink}&embedded=true`}
            src="https://drive.google.com/file/d/116mSPtpkSBEG_g4AECaSvK5C5c6mlq6C/preview"
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
