import Image from "next/image";
import React from "react";

// import backgroundImage from "../../public/assets/nightviolet.gif";

const Main = () => {
  

  return (
    <main>
      <header className=" flex flex-col items-center p-8 text-center">
        <Image
          src="/assets/koaz.jpeg"
          alt="joza"
          className="border-grey-300 z-0 mb-4 h-40 w-40 rounded-full border-4"
          height={200}
          width={200}
        />

        <h1 className="mb-6 inline-block rounded-full border-2 border-gray-400 bg-black bg-opacity-50 px-2 text-lg font-bold text-white backdrop-blur-md backdrop-saturate-150">
          <a href="https://www.instagram.com/koazie_">@koazie_</a>
        </h1>
      </header>
      <ul className="box-sizing m-2 flex list-disc flex-col items-center justify-center space-y-6 p-2 text-left">
        <a href="#">
          <li className="text-primary-600 flex w-60 cursor-pointer items-center justify-center rounded-full bg-white bg-opacity-50 p-4 backdrop-blur-md backdrop-saturate-150">
            Honey
          </li>
        </a>
        <a href="">
          <li className="text-primary-600 flex w-60 cursor-pointer items-center justify-center rounded-full bg-white bg-opacity-50 p-4 backdrop-blur-md backdrop-saturate-150">
            Spotify
          </li>
        </a>
        <a href="">
          <li className="text-primary-600 flex w-60 cursor-pointer items-center justify-center rounded-full bg-white bg-opacity-50 p-4 backdrop-blur-md backdrop-saturate-150">
            $10 from Stock 
          </li>
        </a>
        <a href="">
          <li className="text-primary-600 flex w-60 cursor-pointer items-center justify-center rounded-full bg-white bg-opacity-50 p-4 backdrop-blur-md backdrop-saturate-150">
            link 4
          </li>
        </a>
      </ul>
    </main>
  );
};

export default Main;
