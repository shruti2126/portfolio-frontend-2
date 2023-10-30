/** @format */

import {
  Box,
  Button,
  Card,
  Center,
  Container,
  HStack,
  Link,
  Text,
} from "@chakra-ui/react";
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
      </Container>
      <Center>
        <HStack mb={10}>
          <Link href="https://acrobat.adobe.com/id/urn:aaid:sc:EU:38c2774f-af7f-4a6e-8f4d-0eef9ff64e69"
          isExternal>
            {" "}
            <Button
              mt={[4, 5, 6]}
              p={[4, 4, 5]}
              maxW="lg"
              borderRadius={3}
              bgColor="whatsapp.100"
            >
              <LinkIcon />
              <Text
                as="span"
                ml={2}
                fontSize={["md", "lg", "xl"]}
                color="chakra-body-text._light"
              >
                My Resume
              </Text>
            </Button>
          </Link>
        </HStack>
      </Center>
    </Box>
  );
};

export default Skills;
