/** @format */

import { Box, Button, Card, Container, HStack } from "@chakra-ui/react";
import Title from "../Title";
import SkillLevel from "../SkillLevel";
import { SkillsMap } from "../../data/SkillsMap";
import { LinkIcon } from "@chakra-ui/icons";

const Skills = () => {
  return (
    <Box
      id="skills"
      minH="100vh"
      minW="100vw"
      overflowY="scroll"
      bgGradient={["linear(to-b, purple.200, blue.200, pink.200)"]}
    >
      <Container pb={5}>
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
        <HStack>
          <LinkIcon />
          <Button
            mt={[4, 5, 6]}
            p={[4, 4, 5]}
            maxW="sm"
            borderRadius={3}
            bgColor="linkedin.200"
          >
            Resume
          </Button>
        </HStack>
      </Container>
    </Box>
  );
};

export default Skills;
