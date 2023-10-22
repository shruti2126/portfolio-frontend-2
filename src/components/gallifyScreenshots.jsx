/** @format */

import artPlayer from "../assets/gallifyFigmaScreenshots/art-player.png";
import liked from "../assets/gallifyFigmaScreenshots/liked.png";
import login from "../assets/gallifyFigmaScreenshots/login.png";
import profilePage from "../assets/gallifyFigmaScreenshots/profile-page.png";
import reelPage from "../assets/gallifyFigmaScreenshots/reel-page.png";
// import getMedia from "../aws-s3/getMedia";
import "../styles/projects.css";
import { Image, Box } from "@chakra-ui/react";

export const ArtPlayerPage = () => {
  return (
    <Box boxSize={["md", "md", "lg"]} m={2}>
      <Image p={2} src={artPlayer} alt="art player" />
    </Box>
  );
};

export const LikedPage = () => {
  return (
    <Box boxSize={["md", "md", "lg"]} m={2}>
      <Image p={2} src={liked} alt="liked page" />;
    </Box>
  );
};

export const LoginPage = () => {
  return (
    <Box boxSize={["md", "md", "lg"]} m={2}>
      <Image p={2} src={login} alt="Login page" />;
    </Box>
  );
};

export const ProfilePage = () => {
  return (
    <Box boxSize={["md", "md", "lg"]} m={2}>
      <Image p={2} src={profilePage} alt="profike page" />
    </Box>
  );
};

export const ReelPage = () => {
  return (
    <Box boxSize={["md", "md", "lg"]} m={2}>
      <Image p={2} src={reelPage} alt="Reel page" />;
    </Box>
  );
};
