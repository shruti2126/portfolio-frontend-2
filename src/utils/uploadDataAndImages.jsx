/** @format */

import { uploadImageToS3 } from "../services/POST/uploadImageToS3";
import addDoc from "../services/POST/addDoc";
const uploadDataAndImages = async ({ collection, data, images }) => {
  const folder = collection;
  //iterate over list of images and upload using uploadImageToS3.js
  // save image URL returned from S3
  let imageUrl = "";
  images.foreach((image) => {
    imageUrl = uploadImageToS3({ folder, image });
  });

  //insert url into img field of data
  data.img = imageUrl;

  //upload data to database
  await addDoc({ collection, img: imageUrl, docData: data });
};
export default uploadDataAndImages;
