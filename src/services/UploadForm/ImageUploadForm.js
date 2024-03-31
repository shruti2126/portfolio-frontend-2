/** @format */

import React, { useState } from "react";
import axios from "axios";

function ImageUploadForm() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      setUploading(true);
      const response = await axios.post(
        "http://localhost:8081/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {}
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit" disabled={uploading}>
        {uploading ? "Uploading..." : "Upload"}
      </button>
    </form>
  );
}

export default ImageUploadForm;