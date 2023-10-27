/** @format */

import { Box, Card, Container } from "@chakra-ui/react";
import Title from "../Title";
import SkillLevel from "../SkillLevel";
import { SkillsMap } from "../../data/SkillsMap";

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
      </Container>
    </Box>
  );
};

export default Skills;
