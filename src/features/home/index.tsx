import React from "react";
import PageSeperator from "../../components/icons/page separator";
import Button from "../../components/common/button";

const Home = () => {
  return (
    <div className="text-neutral-light flex bg-primary-5 min-h-[100vh] relative">
      <div className="px-4 m-auto min-w-[75vw]">
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

      <PageSeperator className="fill-primary-10" />
    </div>
  );
};

export default Home;
