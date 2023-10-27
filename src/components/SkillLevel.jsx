/** @format */

import { CardBody, Text, Center, Box } from "@chakra-ui/react";
import CIcon from "@coreui/icons-react";

const SkillLevel = ({ skill, level, icon, iconColor }) => {
  return (
    <CardBody>
      <Center mb={4}>
        <Text mx={3} fontWeight="bold" fontSize={["lg", "xl", "2xl"]} as="span">
          {skill}
        </Text>{" "}
        <CIcon style={{ color: iconColor }} icon={icon} size="sm" width={40} />
      </Center>
      <Box border="1px" borderRadius={10}>
        <Box
          width={`${level}%`}
          height={["2", "3", "3.5"]}
          bgColor={iconColor}
          borderRadius={10}
        ></Box>
      </Box>
    </CardBody>
  );
};

export default SkillLevel;
