import React from "react";
import Button from "../../components/common/button";

const AboutMe = () => {
  return (
    <div className="page-container bg-primary-10">
      <div className="reponsive-container">
        <div className="grid lg:grid-flow-col 2xl:max-w-[72vw]">
          <div className="mb-10 px-4">
            <img src="https://res.cloudinary.com/dlljuyhvh/image/upload/v1679484107/IMG_20221006_110814_hnhlcj.jpg"></img>
          </div>
          <div className="px-4 pb-16 2xl:p-16">
            <h2 className="text-[35px] xl:text[40px] 2xl:text-[50px] font-light leading-[60px] my-9">
              Hard-working And Dedicated Developer
            </h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <span className="font-mrsSaint text-[90px]">hung</span>
            <p className="text-[17px] mb-4">Student At Nong Lam University</p>
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
