import React from "react";
import Footer from "./Footer";
import Video from "./Video";

interface Props {
  children: React.ReactNode;
}

const layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div>
        <Video />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default layout;
