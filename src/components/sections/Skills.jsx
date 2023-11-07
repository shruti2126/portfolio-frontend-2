/** @format */

import {
  Box,
  Button,
  Card,
  Center,
  CloseButton,
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
        {showPdf ? (
          <CloseButton onClick={() => toggle()} />
        ) : (
          <Button
            maxW="lg"
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
        )}
        {showPdf && (
          <Box className="iframe-container" mb={[4, 5, 6]}>
            <iframe
              title="my resume"
              className="responsive-iframe"
              src="https://drive.google.com/file/d/1jZAJUFYgAV9vem_D4vfcWEe5wWkDw4Ii/preview"
              width="640"
              height="480"
              allow="autoplay"
            ></iframe>
          </Box>
        )}
      </Center>
    </Box>
  );
};

export default Skills;
