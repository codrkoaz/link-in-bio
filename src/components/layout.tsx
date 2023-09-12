import React from "react";
import Footer from "./Footer";
import Video from "./Video";
// import Vanta from "./Vanta";

interface Props {
  children: React.ReactNode;
}

const layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div>
        <Video />
        {/* <Vanta /> */}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default layout;
