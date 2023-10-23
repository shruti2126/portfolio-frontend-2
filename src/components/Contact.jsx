/** @format */
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Heading,
  Select,
  Text,
  Textarea,
  Box,
  Button,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";
import "../styles/styles.css";
import axios from "axios";
import { useEffect, useReducer } from "react";
import scrollToSection from "../functions/scrollToSection";

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  reason: "",
  message: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};
const Contact = () => {
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [error, setError] = useState({
    emailError: false,
    firstnameError: false,
    reasonError: false,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  useEffect(() => {
    if (window.location.pathname.includes("contact")) {
      scrollToSection("contact");
    }
  });
  useEffect(() => {
    if (formSubmitted) {
      // Check form validation
      let hasErrors = false;

      if (!state.email) {
        setError((prevError) => ({ ...prevError, emailError: true }));
        hasErrors = true;
      } else {
        setError((prevError) => ({ ...prevError, emailError: false }));
      }

      if (!state.firstname) {
        setError((prevError) => ({ ...prevError, firstnameError: true }));
        hasErrors = true;
      } else {
        setError((prevError) => ({ ...prevError, firstnameError: false }));
      }

      if (!state.reason) {
        setError((prevError) => ({ ...prevError, reasonError: true }));
        hasErrors = true;
      } else {
        setError((prevError) => ({ ...prevError, reasonError: false }));
      }

      // Check if there are any errors before form submission
      if (!hasErrors) {
        axios
          .post("https://shrutis-io-backend.onrender.com/send-email", {
            ...state,
          })
          .then((response) => {
            console.log(response);
            setSubmissionStatus("success");
          })
          .catch((error) => {
            console.error("Error sending email: ", error);
            setSubmissionStatus("error");
          });
      }

      // Reset formSubmitted
      setFormSubmitted(false);
    }
  }, [formSubmitted, state]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };
  return (
    <Box
      height="100vh"
      w="100vw"
      bgGradient={["linear(to-b, purple.100, blue.100)"]}
    >
      <Center>
        {" "}
        <Heading className="heading" as="h3" size="lg">
          Connect with me!
        </Heading>
      </Center>

      <VStack id="contact" spacing={4}>
        <Box
          backgroundColor="white"
          borderRadius="md"
          p={15}
          width={["sm", "md", "lg"]}
        >
          <FormControl display="flex" flexDirection="column" p={4} gap={2}>
            <FormControl isRequired isInvalid={error.firstnameError}>
              {" "}
              <FormLabel>First Name</FormLabel>
              <Input
                placeholder="First Name"
                name="firstname"
                value={state.firstname}
                onChange={handleInputChange}
              />
              {error.firstnameError && (
                <FormErrorMessage>First Name is required.</FormErrorMessage>
              )}
            </FormControl>
            <FormControl>
              {" "}
              <FormLabel>Last Name</FormLabel>
              <Input
                placeholder="Last Name"
                name="lastname"
                value={state.lastname}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl isRequired isInvalid={error.emailError}>
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                placeholder="Email"
                type="email"
                value={state.email}
                onChange={handleInputChange}
              />
              {error.emailError && (
                <FormErrorMessage>Email is required!</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isRequired isInvalid={error.reasonError}>
              <FormLabel mt={2}>Reason for Contact</FormLabel>
              <Select
                name="reason"
                value={state.reason}
                placeholder="Select Reason"
                onChange={handleInputChange}
              >
                <option>Chat about a job opportunity</option>
                <option>Get to know me personally</option>
                <option>Get to know me professionally</option>
                <option>Other</option>
              </Select>
              {error.reasonError && (
                <FormErrorMessage>reason is required!</FormErrorMessage>
              )}
            </FormControl>
            <>
              <Text mb={2} mt={2}>
                If you selected Other, please specify below.
              </Text>
              <Textarea
                name="message"
                value={state.message}
                onChange={handleInputChange}
                placeholder="Enter Reason"
                size="md"
              />
            </>
            <Button
              mt={4}
              colorScheme="teal"
              variant="outline"
              onClick={handleSubmit}
            >
              Submit
            </Button>
            {submissionStatus === "success" && (
              <Text textAlign="center" color="green" fontSize={"xl"}>
                Email sent successfully! I will be in touch with you soon.
              </Text>
            )}
            {submissionStatus === "error" && (
              <Text textAlign="center" color="red" fontSize="xl">
                Oops! There was an error sending the email. Please try again or
                send me a direct message on{" "}
                <a href="mailto:ss.sharma182@gmail.com">
                  <span style={{ color: "blue", textDecoration: "underline" }}>
                    <i>ss.sharma1826@gmail.com</i>
                  </span>
                </a>
                .
              </Text>
            )}
          </FormControl>
        </Box>
      </VStack>
    </Box>
  );
};
export default Contact;
