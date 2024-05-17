import Image from "next/image";
import React from "react";
import login_illustrator from "../images/LoginIllustrator.png";

export const LoginIllustrator = ({ size = 1000 }) => {
  return (
    <Image
      src={login_illustrator} // Replace this with the path to your image
      alt="Login Illustration"
      width={size}
      height={size}
    />
  );
};
