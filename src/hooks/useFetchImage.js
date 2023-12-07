/** @format */

import axios from "axios";

async function useFetchImage(subDir, imgName) {
  const object = await axios.get("http://localhost:8081/getObjectByKey", {
    params: {
      subdirectory: subDir,
      key: imgName,
    },
  });
  return object;
}

export default useFetchImage;
