/** @format */

import { Container, Box, Text } from "@chakra-ui/react";
import "../../styles/styles.css";
const ContactDetails = () => {
  return (
    <Container
      border="1px"
      borderColor="black"
      borderRadius="2%"
      p={3}
      height="fit-content"
    >
      <Box id="contact-details" overflowWrap="wrap" textAlign="center">
        {" "}
        <Text as="h3">Contact Details</Text>
        <Text fontSize={["sm", "md", "lg"]}>Shruti Sharma</Text>
        <Text fontSize={["sm", "md", "lg"]}>
          shrutis0698@gmail.com, ss.sharma1826@gmail.com
        </Text>
        <Text fontSize={["sm", "md", "lg"]}>+1 (206) 889 7848</Text>
      </Box>
    </Container>
  );
};

export default ContactDetails;
