/** @format */
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Select,
  Text,
  Textarea,
  Box,
  Button,
  SimpleGrid,
  CircularProgress,
} from "@chakra-ui/react";
import { useCallback, useState } from "react";
import "../../styles/styles.css";
import axios from "axios";
import { useReducer } from "react";
import progressReducer from "../../reducers/progressReducer";
import contactFormReducer from "../../reducers/contactFormReducer";
import { initialProgressState } from "../../state/initialProgressState";
import { initialContactFormFieldState } from "../../state/initialContactFormFieldState";
import ContactDetails from "./ContactDetails";
import Title from "../Title";
import { retry } from "../../utils/retry";

const Contact = () => {
  const [formFieldState, dispatch] = useReducer(
    contactFormReducer,
    initialContactFormFieldState
  );
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

  const invalidForm = useCallback(() => {
    let hasErrors = false;
    if (!formFieldState.email) {
      setError((prevError) => ({ ...prevError, emailNeededError: true }));
      hasErrors = true;
    } else {
      setError((prevError) => ({ ...prevError, emailNeededError: false }));
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (formFieldState.email !== "" && !emailRegex.test(formFieldState.email)) {
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
    return hasErrors;
  }, [formFieldState]);

  const sendEmailRequest = async () => {
    return axios.post(process.env.REACT_APP_SEND_EMAIL_RENDER, {
      ...formFieldState,
    });
  };

  // useEffect(() => {
  //   if (progressState.submitting) {
  //     if (validForm()) {
  //       dispatchProgressAction({ type: "SHOW_PROGRESS" });
  //       async function sendEmail() {
  //         try {
  //           await retry(sendEmailRequest, 3, 2000); // 3 retries with a 2-second delay
  //           dispatch({ type: "RESET_FIELDS" });
  //           dispatchProgressAction({ type: "PROMISE_RESOLVED" });
  //         } catch (error) {
  //           console.error("Error sending email after retries: ", error);
  //           dispatchProgressAction({ type: "PROMISE_REJECTED" });
  //         }
  //       }
  //       setTimeout(
  //         async () =>
  //           await sendEmail()
  //             .then((res) => console.log("response from send-email", res))
  //             .catch((err) => console.log(err)),
  //         5000
  //       );
  //     } else {
  //       dispatchProgressAction({ type: "ERRORS" });
  //     }
  //   }
  // }, [progressState.submitting, formFieldState, validForm]);

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

  const handleSubmit = async (e) => {
    dispatchProgressAction({ type: "SUBMIT" });
    e.preventDefault();
    if (!invalidForm()) {
      dispatchProgressAction({ type: "SHOW_PROGRESS" });
      try {
        const response = await retry(sendEmailRequest, 3, 2000); // 3 retries with a 2-second delay
        dispatch({ type: "RESET_FIELDS" });
        console.log(response.status);
        if(response.status === 200) dispatchProgressAction({ type: "PROMISE_RESOLVED" });
      } catch (error) {
        console.error("Error sending email after retries: ", error);
        dispatchProgressAction({ type: "PROMISE_REJECTED" });
      }
    } else {
      dispatchProgressAction({ type: "ERRORS" });
    }
  };

  return (
    <Box
      id="contact"
      minH="100vh"
      minW="100vw"
      // bgGradient={["linear(to-b, purple.100, blue.100)"]}
    >
      <Title heading="Connect With Me" />
      <SimpleGrid minChildWidth="40vw" columns={2} spacing={10} mx={10}>
        {/** Contact Details */}
        <ContactDetails />

        {/** Contact Form */}
        <Box
          border="1px"
          borderColor="black"
          backgroundColor="white"
          borderRadius="md"
          p={15}
          mb={5}
        >
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
              disabled={progressState.showProgress ? true : false}
            >
              Submit
            </Button>
            {progressState.submissionStatus === 1 && (
              <Text textAlign="center" color="green" fontSize={"xl"}>
                Email sent! I will be in touch with you soon!
              </Text>
            )}
            {progressState.submissionStatus === 0 && (
              <Text textAlign="center" color="red" fontSize="xl">
                Oops! There was an error sending the email. Please try again or
                send me a direct message on{" "}
                <a href="mailto:shrutis0698@gmail.com">
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
