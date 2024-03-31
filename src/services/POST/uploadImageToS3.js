/** @format */

import axios from "axios";

export const uploadImageToS3 = async ({ folder, image }) => {
  const formData = new FormData();
  formData.append("image", image);

  try {
    const response = await axios.post(
      `/addImageInFolder?folder=${folder}`,
      formData
    );
    console.log("Image uploaded successfully:", response.data.fileLocation);
    return response.data.fileLocation;
  } catch (error) {
    console.error("Error uploading image:", error);
  }
};
