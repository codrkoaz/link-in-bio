import Image from "next/image";
import React from "react";
import backgroundImage from "../../public/assets/nightviolet.gif";

const Main = () => {
  return (
    
      <main
        className="m-0 h-screen p-0 font-sans"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
        }}
      >
        <header className=" flex flex-col items-center p-8 text-center">
          <Image
            src="/assets/koaz.jpeg"
            alt="joza"
            className="border-grey-300 mb-4 h-40 w-40 rounded-full border-4"
            height={200}
            width={200}
          />

          <h1 className="mb-6 inline-block rounded-full border-2 border-red-800 bg-gray-700  px-2 text-lg font-bold text-white">
            <a href="https://www.instagram.com/koazie_">@koazie_</a>
          </h1>
        </header>
        <ul className="box-sizing m-auto list-none flex flex-col items-center">
          <li>
            <a href="">link 1</a>
          </li>
          <li>
            <a href="">link 2</a>
          </li>
          <li>
            <a href="">link 3</a>
          </li>
          <li>
            <a href="">link 4</a>
          </li>
        </ul>
      </main>
    
  );
};

export default Main;
