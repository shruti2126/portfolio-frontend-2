/** @format */

import artPlayer from "../assets/gallifyFigmaScreenshots/art-player.png";
import liked from "../assets/gallifyFigmaScreenshots/liked.png";
import login from "../assets/gallifyFigmaScreenshots/login.png";
import profilePage from "../assets/gallifyFigmaScreenshots/profile-page.png";
import reelPage from "../assets/gallifyFigmaScreenshots/reel-page.png";
// import getMedia from "../aws-s3/getMedia";
import "../styles/projects.css";


export const ArtPlayerPage = () => {
  return (
    // <Box boxSize='sm' m={2}>
    <img src={artPlayer} alt="art player" />
    // </Box>
  );
};

export const LikedPage = () => {
  return (
    /*<Box boxSize="sm" m={2}>*/
    <img src={liked} alt="liked page" />
    /*</Box>*/
  );
};

export const LoginPage = () => {
  return (
    /*<Box boxSize="sm" m={2}>*/
    <img src={login} alt="Login page" />
    /*</Box>*/
  );
};

export const ProfilePage = () => {
  return (
    /*<Box boxSize="sm" m={2}>*/
    <img src={profilePage} alt="profile page" />
    /*</Box>*/
  );
};

export const ReelPage = () => {
  return (
    /*<Box boxSize="sm" m={2}>*/
    <img src={reelPage} alt="Reel page" />
    /*</Box>*/
  );
};
