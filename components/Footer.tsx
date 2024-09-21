import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-full px-4 sm:px-6">
      {/* <hr className="w-full h-0.5 bg-neutral-200 border-0"></hr> */}
      <div className="flex flex-col items-center text-center text-neutral-900 py-4 md:flex-row md:justify-between">
        <div className="text-neutral-500 ">
          © 2023 Rebecca Bretzinger
        </div>
        <div className="flex items-center justify-center space-x-2 mt-4 md:mt-0">
          <a
            href="https://www.linkedin.com/in/rebeccabretzinger/"
            aria-label="LinkedIn"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-100 transition-transform cursor-pointer"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
