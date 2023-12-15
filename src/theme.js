/** @format */

import { extendTheme } from "@chakra-ui/react";

// Define a custom theme for Chakra UI
export const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        color: "purple.700", // Dark purple for text
        fontFamily: "'Nunito', sans-serif",
        lineHeight: "tall",
        backgroundColor: "purple.50", // Light purple for the background
      },
      a: {
        color: "purple.600", // Purple for links
        _hover: {
          textDecoration: "underline",
        },
      },
    },
  },
  colors: {
    purple: {
      50: "#FAF5FF", // Very light purple, for backgrounds
      100: "#E9D8FD", // Light purple, for card backgrounds or secondary elements
      600: "#6B46C1", // Medium purple, for buttons and interactive elements
      700: "#553C9A", // Dark purple, for text
      800: "#44337A", // Darker purple, for headers or important text
    },
  },
  components: {
    Box: {
      baseStyle: {
        padding: 4,
        boxShadow: "sm", // Subtle shadow
        rounded: "md", // Slightly rounded corners for a modern look
      },
    },
    Text: {
      baseStyle: {
        color: "purple.800", // Dark purple for text
        fontSize: "lg", // A larger font size for better readability
      },
    },
    // Define styles for other components if needed
  },
});
