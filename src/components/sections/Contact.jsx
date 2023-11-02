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
  Container,
  CircularProgress,
} from "@chakra-ui/react";
import { useState } from "react";
import "../../styles/styles.css";
import axios from "axios";
import { useEffect, useReducer } from "react";

const initialFieldState = {
  firstname: "",
  lastname: "",
  email: "",
  reason: "",
  message: "",
};

const formReducer = (formFieldState, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...formFieldState, [action.field]: action.value };
    case "RESET_FIELDS":
      return initialFieldState;
    default:
      return formFieldState;
  }
};

const initialProgressState = {
  submitting: false,
  showProgress: false,
  submissionStatus: -1,
};
const progressReducer = (progressState, action) => {
  switch (action.type) {
    case "SUBMIT":
      return { ...initialProgressState, submitting: true };
    case "ERRORS":
      return { ...initialProgressState };
    case "SHOW_PROGRESS":
      return { ...initialProgressState, submitting: true, showProgress: true };
    case "PROMISE_RESOLVED":
      return { ...initialProgressState, submissionStatus: 1 };
    case "PROMISE_REJECTED":
      return { ...initialProgressState, submissionStatus: 0 };
    default:
      return progressState;
  }
};

const Contact = () => {
  const [formFieldState, dispatch] = useReducer(formReducer, initialFieldState);
  const [error, setError] = useState({
    emailInvalidError: false,
    emailNeededError: false,
    firstnameError: false,
    reasonError: false,
  });
  const [progressState, dispatchProgressAction] = useReducer(
    progressReducer,
    initialProgressState
  );

  // const validateForm = useCallback(() => {
  //   let hasErrors = false;
  //   const newError = { ...error };

  //   if (!formFieldState.email) {
  //     newError.emailNeededError = true;
  //     hasErrors = true;
  //   } else {
  //     newError.emailNeededError = false;
  //   }

  //   const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  //   if (formFieldState.email && !emailRegex.test(formFieldState.email)) {
  //     newError.emailInvalidError = true;
  //     hasErrors = true;
  //   } else {
  //     newError.emailInvalidError = false;
  //   }

  //   if (!formFieldState.firstname) {
  //     newError.firstnameError = true;
  //     hasErrors = true;
  //   } else {
  //     newError.firstnameError = false;
  //   }

  //   if (!formFieldState.reason) {
  //     newError.reasonError = true;
  //     hasErrors = true;
  //   } else {
  //     newError.reasonError = false;
  //   }

  //   setError(newError);

  //   return hasErrors;
  // }, [formFieldState, error]);

  useEffect(() => {
    if (progressState.submitting) {
      let hasErrors = false;

      if (!formFieldState.email) {
        setError((prevError) => ({ ...prevError, emailNeededError: true }));
        hasErrors = true;
      } else {
        setError((prevError) => ({ ...prevError, emailNeededError: false }));
      }

      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (
        formFieldState.email !== "" &&
        !emailRegex.test(formFieldState.email)
      ) {
        setError((prevError) => ({ ...prevError, emailInvalidError: true }));
        hasErrors = true;
      } else {
        setError((prevError) => ({
          ...prevError,
          emailInvalidError: false,
        }));
      }

      if (!formFieldState.firstname) {
        setError((prevError) => ({ ...prevError, firstnameError: true }));
        hasErrors = true;
      } else {
        setError((prevError) => ({ ...prevError, firstnameError: false }));
      }

      if (!formFieldState.reason) {
        setError((prevError) => ({ ...prevError, reasonError: true }));
        hasErrors = true;
      } else {
        setError((prevError) => ({ ...prevError, reasonError: false }));
      }
   
      if (!hasErrors) {
        dispatchProgressAction({ type: "SHOW_PROGRESS" });
        axios
          .post("https://shrutis-io-backend.onrender.com/send-email", {
            ...formFieldState,
          })
          .then((response) => {
            //Reset form
            dispatch({ type: "RESET_FIELDS" });
            dispatchProgressAction({ type: "PROMISE_RESOLVED" });
            console.log(response);
          })
          .catch((error) => {
            console.error("Error sending email: ", error);
            dispatchProgressAction({ type: "PROMISE_REJECTED" });
          });
      } else {
        dispatchProgressAction({type: "ERRORS"})
      }
    }
  }, [progressState.submitting, formFieldState]);

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
    dispatchProgressAction({ type: "SUBMIT" });
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
        {/** Contact Details */}
        <Container borderRadius="2%" bgColor="orange.100" height="fit-content">
          <Box p={5} overflowWrap="wrap" textAlign="center">
            {" "}
            <Text as="h3">Contact Details</Text>
            <Text as="h4" fontSize={["sm", "md", "lg"]}>
              <span style={{ fontWeight: "bold" }}>Name</span>: Shruti Sharma
            </Text>
            <Text as="h4" fontSize={["sm", "md", "lg"]}>
              <span style={{ fontWeight: "bold" }}>Email</span>:
              ss.sharma1826@gmail.com, sharma224@wisc.edu
            </Text>
            <Text as="h4" fontSize={["sm", "md", "lg"]}>
              <span style={{ fontWeight: "bold" }}>Mobile</span>: +1 (206) 889
              7848
            </Text>
          </Box>
        </Container>

        {/** Contact Form */}
        <Box backgroundColor="white" borderRadius="md" p={15} mb={5}>
          <FormControl display="flex" flexDirection="column" p={4} gap={2}>
            <FormControl isRequired isInvalid={error.firstnameError}>
              {" "}
              <FormLabel>First Name</FormLabel>
              <Input
                placeholder="First Name"
                name="firstname"
                value={formFieldState.firstname}
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
                value={formFieldState.lastname}
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
                value={formFieldState.email}
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
                value={formFieldState.reason}
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
                value={formFieldState.message}
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
            {progressState.submissionStatus === 1 && (
              <Text textAlign="center" color="green" fontSize={"xl"}>
                Email sent successfully! I will be in touch with you soon.
              </Text>
            )}
            {progressState.submissionStatus === 0 && (
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
            {progressState.showProgress && (
              <CircularProgress
                alignSelf="center"
                isIndeterminate
                color="green.300"
              />
            )}
          </FormControl>
        </Box>
      </SimpleGrid>
    </Box>
  );
};
export default Contact;
