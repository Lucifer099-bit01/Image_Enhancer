import React, { useState } from "react";
import Uploadimage from "./uploadimage";
import Previewimg from "./previewimg";
import { enhancedImageAPI } from "../Services/enhancer";

const home = () => {
  const [uploadImage, setuplaodImage] = useState(null);
  const [enhancedImage, setenhancedImage] = useState(null);
  const [loading, setloader] = useState(false);

  const uploadImageHandler = async (file) => {
    const uploaded = URL.createObjectURL(file);
    setuplaodImage(uploaded);
    setloader(true);
    try {
      const enhancedURL = await enhancedImageAPI(file);
      setenhancedImage(enhancedURL.image);
      setloader(false);
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <>
      <Uploadimage uploadImageHandler={uploadImageHandler} />
      <Previewimg
        loading={loading}
        uploaded={uploadImage}
        enhanced={enhancedImage}
      />
    </>
  );
};

export default home;
