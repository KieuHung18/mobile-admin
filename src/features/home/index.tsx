import React from "react";
import PageSeperator from "../../components/icons/page separator";
import Button from "../../components/common/button";

const Home = () => {
  return (
    <div className="h-fit text-neutral-light flex bg-primary-5 min-h-[100vh] relative ">
      <div className="px-4 m-auto min-w-[75vw]">
        <div className="text-[18px] font tracking-[8px]">
          I Am Kieu Hung Tang
        </div>
        <div className="font-futura text-[100px]">Creative Programer</div>
        <div className="w-44 flex">
          <Button content="Contact Me" variant="secondary" />
        </div>
      </div>

      <PageSeperator className="fill-primary-10" />
    </div>
  );
};

export default Home;
