/** @format */

import React from "react";


const ImageToSvg = ({ png, alt }) => {
//   const png = require("./image.png");
  const svg = `
    <svg viewBox="0 0 100 100">
      <image xlink:href="${png}" width="100%" height="100%"/>
    </svg>
  `;

  return (
    <div>
      <img src={png} alt={alt} />
      <div dangerouslySetInnerHTML={{ __html: svg }} />
    </div>
  );
};

export default ImageToSvg;
