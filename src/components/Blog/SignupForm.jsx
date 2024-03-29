/** @format */

import React, { useState } from "react";
import {
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  VStack,
  FormHelperText,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const toast = useToast();

  const validateEmail = (email) => {
    const regex =
      /^[A-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com|[A-Z0-9.-]+\.[A-Z]{2,4})$/i;
    return regex.test(email);
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value) {
      setIsValidEmail(validateEmail(e.target.value));
    }
  };

  const handleSubmit = async () => {
    if (!email || !isValidEmail) {
      toast({
        title: "Invalid or Missing Email",
        description: "Please enter a valid email address to sign up.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }
    setIsSubmitting(true);
    try {
      await axios.post(
        process.env.REACT_APP_BLOG_SIGNUP_RENDER,
        {
          email,
        }
      );
      toast({
        title: "Sign Up Successful!",
        description: "Thank you!",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      setEmail("");
    } catch (error) {
      console.log("Error = ", error);
      let errorMessage = error.response.data.error;
      toast({
        title: "Sign Up Failed",
        description: errorMessage,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <VStack className="signup-container">
      <Heading as="h2" size="lg" mb={4}>
        Sign Up
      </Heading>
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          value={email}
          onChange={handleInputChange}
          style={{ border: "1px solid black" }}
        />
        <FormHelperText color="white">
          Enter the email you'd like to receive the notification on.
        </FormHelperText>
      </FormControl>
      <Button
        type="submit"
        colorScheme="teal"
        mt={4}
        onClick={handleSubmit}
        isLoading={isSubmitting}
        loadingText="Submitting..."
      >
        Submit
      </Button>
    </VStack>
  );
};

export default SignupForm;
