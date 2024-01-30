/** @format */

import { Box, Card, Container } from "@chakra-ui/react";
import Title from "./Title";
import SkillLevel from "./SkillLevel";
import { SkillsMap } from "../data/SkillsMap";
import "../styles/styles.css";

const Skills = () => {
  return (
    <Box id="skills" className="component" >
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
      {/* <Center id="resume" m={[4, 5, 6]} p={[3, 4, 5]} flexWrap="wrap">
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
              src="https://drive.google.com/file/d/1a0Zg7v9i4DEqkOZfM1QvthkX4VwucuC6/preview"
              width="640"
              height="480"
              allow="autoplay"
            ></iframe>
          </Box>
        )}
      </Center> */}
    </Box>
  );
};

export default Skills;
