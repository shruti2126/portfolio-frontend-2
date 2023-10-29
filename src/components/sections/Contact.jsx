/** @format */
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Heading,
  Select,
  Text,
  Textarea,
  Box,
  Button,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import "../../styles/styles.css";
import axios from "axios";
import { useEffect, useReducer } from "react";
import scrollToSection from "../../functions/scrollToSection";

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
  const [state, dispatch] = useReducer(reducer, initialState);
  const [error, setError] = useState({
    emailInvalidError: false,
    emailNeededError: false,
    firstnameError: false,
    reasonError: false,
  });
  const [submissionStatus, setStatus] = useState(-1); //1 = success, 0 = failure
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (window.location.pathname.includes("contact")) {
      scrollToSection("contact");
    }
  });
  useEffect(() => {
    if (formSubmitted) {
      let hasErrors = false;

      if (!state.email) {
        setError((prevError) => ({ ...prevError, emailNeededError: true }));
        hasErrors = true;
      } else {
        setError((prevError) => ({ ...prevError, emailNeededError: false }));
      }

      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (state.email !== "" && !emailRegex.test(state.email)) {
        setError((prevError) => ({ ...prevError, emailInvalidError: true }));
        hasErrors = true;
      } else {
        setError((prevError) => ({
          ...prevError,
          emailInvalidError: false,
        }));
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
      if (!hasErrors) {
        setSubmitting(true);
        axios
          .post("https://shrutis-io-backend.onrender.com/send-email", {
            ...state,
          })
          .then((response) => {
            console.log(response);
            setStatus(1);
          })
          .catch((error) => {
            console.error("Error sending email: ", error);
            setStatus(0);
            setSubmitting(false);
          });
      }
      //Reset Form
      setFormSubmitted(false);
      setSubmitting(false);
    }
  }, [formSubmitted, state]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setError((prevError) => ({
        ...prevError,
        emailNeededError: false,
        emailInvalidError: false,
      }));
    } else {
      // Clear specific error messages when the corresponding field is corrected
      setError((prevError) => ({
        ...prevError,
        [`${name}Error`]: false,
      }));
    }

    dispatch({ type: "SET_FIELD", field: name, value });
  };

  const handleSubmit = (e) => {
    setFormSubmitted(true);
  };

  return (
    <Box
      id="contact"
      minH="100vh"
      minW="100vw"
      bgGradient={["linear(to-b, purple.100, blue.100)"]}
    >
      <Heading className="heading">Connect with me!</Heading>
      <SimpleGrid minChildWidth="40vw" columns={2} spacing={10} mx={10}>
        <Box backgroundColor="white" borderRadius="md" p={15}>
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
            <FormControl
              isRequired
              isInvalid={error.emailInvalidError || error.emailNeededError}
            >
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                placeholder="Email"
                type="email"
                value={state.email}
                onChange={handleInputChange}
              />
              {error.emailNeededError && (
                <FormErrorMessage>Email is required!</FormErrorMessage>
              )}
              {error.emailInvalidError && (
                <FormErrorMessage>
                  Email is Invalid! Please provide a valid email address.{" "}
                </FormErrorMessage>
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
              isDisabled={isSubmitting}
            >
              Submit
            </Button>
            {submissionStatus === 1 && (
              <Text textAlign="center" color="green" fontSize={"xl"}>
                Email sent successfully! I will be in touch with you soon.
              </Text>
            )}
            {submissionStatus === 0 && (
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
        <Box maxH="30vh" mb={5} className="contact-details">
          <VStack p={5} overflowWrap="wrap">
            {" "}
            <Text as="h3">Contact Details</Text>
            <Text as="h4" fontSize={["sm", "md", "lg", "xl"]}>
              <span style={{ fontWeight: "bold" }}>Name</span>: Shruti Sharma
            </Text>
            <Text as="h4" fontSize={["sm", "md", "lg", "xl"]}>
              <span style={{ fontWeight: "bold" }}>Email</span>:
              ss.sharma1826@gmail.com
            </Text>
            <Text as="h4" fontSize={["sm", "md", "lg", "xl"]}>
              <span style={{ fontWeight: "bold" }}>Mobile</span>: +1 (206) 889
              7848
            </Text>
          </VStack>
        </Box>
      </SimpleGrid>
    </Box>
  );
};
export default Contact;
