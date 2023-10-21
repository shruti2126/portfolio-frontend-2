/** @format */

import artPlayer from "../assets/gallifyFigmaScreenshots/art-player.png";
import liked from "../assets/gallifyFigmaScreenshots/liked.png";
import login from "../assets/gallifyFigmaScreenshots/login.png";
import profilePage from "../assets/gallifyFigmaScreenshots/profile-page.png";
import reelPage from "../assets/gallifyFigmaScreenshots/reel-page.png";
// import getMedia from "../aws-s3/getMedia";
import "../styles/projects.css";

// const artPlayer = getMedia("image", "gallifyFigmaScreenshots.art-player.png");
// const liked = getMedia("image", "gallifyFigmaScreenshots.liked.png");
// const login = getMedia("image", "gallifyFigmaScreenshots.login.png");
// const profilePage = getMedia(
//   "image",
//   "gallifyFigmaScreenshots.profile-page.png"
// );
// const reelPage = getMedia("image", "gallifyFigmaScreenshots.reel-page.png");

export const ArtPlayerPage = () => {
  return <img src={artPlayer} alt="art player" className="screenshots" />;
};

export const LikedPage = () => {
  return <img src={liked} alt="liked page" className="screenshots" />;
};

export const LoginPage = () => {
  return <img src={login} alt="Login page" className="screenshots" />;
};

export const ProfilePage = () => {
  return <img src={profilePage} alt="profike page" className="screenshots" />;
};

export const ReelPage = () => {
  return <img src={reelPage} alt="Reel page" className="screenshots" />;
};
