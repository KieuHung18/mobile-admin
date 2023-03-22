import React from "react";
import Button from "../../components/common/button";

const AboutMe = () => {
  return (
    <div className="page-container bg-primary-10">
      <div className="reponsive-container">
        <div className="lg:flex">
          <div className="max-w-[550px] px-4">
            <img
              src="https://res.cloudinary.com/dlljuyhvh/image/upload/v1679484107/IMG_20221006_110814_hnhlcj.jpg"
              className=""
            ></img>
          </div>

          <div className="px-4 2xl:px-16">
            <h2 className="text-[35px] xl:text[40px] 2xl:text-[50px] font-light">
              Hard-working And Dedicated Developer
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div>
              <img src="https://res.cloudinary.com/dlljuyhvh/image/upload/v1679485078/image_2023-03-22_183755428.png"></img>
            </div>
            <p className="text-[17px]">Student At Nong Lam University</p>
            <div className="w-44">
              <Button content="MORE ABOUT" variant="secondary"></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
