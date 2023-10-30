/** @format */

import React, { useState } from "react";
import {
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  VStack,
  FormErrorMessage,
  FormHelperText,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  // const [successMsg, setSuccessMsg] = useState("");

  const toast = useToast();
  const isValid = (email) => {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      return false;
    }
    return true;
  };

  const emailReqErr = email === "";
  const emailInvalidErr = !isValid(email); // Check if the email address is valid

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle form submission
  // function handleSubmit() {
  //   const errText = document.getElementById("invalidEmail");
  //   const sucessText = document.getElementById("signupSucess");
  //   if (!emailInvalidErr) {
  //     errText.style.display = "none";
  //     try {
  //       axios
  //         .post("https://shrutis-io-backend.onrender.com/addUser", { email })
  //         .then((response) => {
  //           setSuccessMsg("Sign up successful!");
  //           sucessText.style.display = "block";
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //           errText.innerHTML = (
  //             <p style={{ color: "red" }}>
  //               There was en error! :(. Please try again!{" "}
  //             </p>
  //           );
  //         });
  //     } catch (error) {
  //       console.log("Couldn't create new user: ", error.message);
  //     }
  //   } else {
  //     errText.style.display = "block";
  //   }
  // }

  return (
    <VStack>
      <Heading as="h2" size="lg" mb={4}>
        Sign Up
      </Heading>

      <FormControl
        id="email"
        isRequired
        isInvalid={emailInvalidErr || emailReqErr}
      >
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          value={email}
          onChange={handleInputChange}
          style={{ border: "1px solid black" }}
        />
        <FormHelperText>
          Enter the email you'd like to receive the notification on.
        </FormHelperText>
        {emailInvalidErr && (
          <FormErrorMessage>
            Email is Invalid! Please provide valid email address like
            username@something.com.
          </FormErrorMessage>
        )}
        {emailReqErr && <FormErrorMessage>Email is required.</FormErrorMessage>}
      </FormControl>
      {/* <Text id="invalidEmail" style={{ display: "none", color: "red" }}>
        Please provide valid email address like username@something.com.
      </Text>
      <Text
        id="signupSucess"
        style={{ display: "none", color: "green", fontSize: "20px" }}
      >
        {successMsg}
      </Text> */}
      <Button
        type="submit"
        colorScheme="teal"
        mt={4}
        onClick={() => {
          // setLoading(true);
          // handleSubmit();
          if (!emailInvalidErr && !emailReqErr) {
            const signupPromise = axios.post(
              "https://shrutis-io-backend.onrender.com/addUser",
              { email }
            );

            toast.promise(signupPromise, {
              success: {
                title: "Sign Up Successful!",
                description: "Thank you!",
              },
              error: {
                title: "Sign Up unsuccessful",
                description: signupPromise.catch((err) => err),
              },
              loading: { title: "Processing", description: "Please wait" },
            });
            setEmail("");
          }
        }}
      >
        Submit
      </Button>
    </VStack>
  );
};

export default SignupForm;
