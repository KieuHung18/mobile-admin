import React from "react";
import PageSeperator from "../../components/icons/page separator";
import Button from "../../components/common/button";

const Home = () => {
  return (
    <div className="page-container bg-primary-5">
      <div className="reponsive-container flex">
        <div className="px-4 pb-16">
          <h2 className="text-[14px] tracking-[4px] md:text-[16px] md:tracking-[8px] lg:text-[18px] font-sans">
            I Am Kieu Hung Tang
          </h2>
          <h2 className="text-[35px] sm:[text-50px] md:text-[60px] lg:text-[90px] xl:text-[100px]">
            Creative Programer
          </h2>
          <div className="w-44 flex">
            <Button content="Contact Me" variant="secondary" />
          </div>
        </div>
      </div>
      <PageSeperator className="fill-primary-10" />
    </div>
  );
};

export default Home;
