/** @format */

import {
  Box,
  Button,
  Card,
  Center,
  Container,
  Text,
} from "@chakra-ui/react";
import Title from "../Title";
import SkillLevel from "../SkillLevel";
import { SkillsMap } from "../../data/SkillsMap";

import { useState } from "react";
import "../../styles/styles.css";

const Skills = () => {
  const [showPdf, setShowPdf] = useState(false);

  function toggle() {
    setShowPdf((prevBool) => !prevBool);
  }
  return (
    <Box
      id="skills"
      minH="100vh"
      minW="100vw"
      overflowY="scroll"
      bgGradient={["linear(to-b, purple.200, blue.200, pink.200)"]}
    >
      <Container pb={3}>
        {" "}
        <Title heading="Skills" />
        <Card size="md" p={5} border="2px">
          {SkillsMap.map((obj, index) => (
            <SkillLevel
              key={index}
              skill={obj.skill}
              icon={obj.icon}
              level={obj.level}
              iconColor={obj.color}
            />
          ))}
        </Card>
      </Container>
      <Center m={[4, 5, 6]} p={[3, 4, 5]} flexWrap="wrap">
        {showPdf && (
          <Box className="iframe-container" mb={[4, 5, 6]}>
            <iframe
              title="My Resume"
              className="responsive-iframe"
              src="https://drive.google.com/file/d/1FoDE7rQfdKSXaZV4Sla5HI2J3rwUlPjY/preview"
              width="640"
              height="480"
              allow="autoplay"
            ></iframe>
          </Box>
        )}
        <Button
          maxW="lg"
          borderRadius={3}
          bgColor={showPdf ? "linkedin.300" : "whatsapp.100"}
          onClick={() => toggle()}
        >
          <Text
            as="span"
            fontSize={["md", "lg", "xl"]}
            color="chakra-body-text._light"
          >
            {showPdf ? "Close" : "Show Resume"}
          </Text>
        </Button>
      </Center>
    </Box>
  );
};

export default Skills;
