/** @format */

import { Heading } from "@chakra-ui/react";
import "../styles/styles.css";

const Title = ({ heading }) => {
  return (
    <Heading className="heading" as="h3" size="lg" textAlign={"center"}>
      {heading}
    </Heading>
  );
};
export default Title;
