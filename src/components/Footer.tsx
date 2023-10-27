import React from "react";

const Footer = () => {
  return (
    <div className=" absolute inset-x-0 bottom-0 flex items-center justify-center pt-60 text-sm text-white opacity-50">
      © {new Date().getFullYear()} codrkoaz. All Rights Reserved.
    </div>
  );
};

export default Footer;
