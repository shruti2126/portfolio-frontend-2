/** @format */
import {Box} from "@chakra-ui/react";

export const RenderImages = ({ images }) => {
  return images.map((img, index) => (
    <Box key={index} className="image-container">
      {img}
    </Box>
  ));
};

export const RenderVideos = ({ videos }) => {
  return videos.map((vid, index) => (
    <Box key={index} className="iframe-container">
      {vid}
    </Box>
  ));
};
