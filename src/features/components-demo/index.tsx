import React from "react";
import Button, { ButtonProps } from "../../components/common/button";
import PageSeperator from "../../components/icons/page separator";

const ComponentsDemo = () => {
  const btnCont = "click me";
  const primaryBtnList: ButtonProps[] = [
    { children: btnCont, size: "small" },
    { children: btnCont, size: "small", loading: true },
    { children: btnCont },
    { children: btnCont, loading: true },
  ];
  const seconddaryBtnList: ButtonProps[] = [
    { variant: "secondary", children: btnCont, size: "small" },
    { variant: "secondary", children: btnCont, size: "small", loading: true },
    { variant: "secondary", children: btnCont },
    { variant: "secondary", children: btnCont, loading: true },
  ];
  const buttons = (list: ButtonProps[]) => {
    return list.map((b, i) => (
      <div className="inline p-2" key={i}>
        <Button variant={b.variant} size={b.size} loading={b.loading}>
          {b.children}
        </Button>
      </div>
    ));
  };

  return (
    <div className="page-container bg-primary-10">
      <div className="mb-[10%]">
        <div className="w-fit h-fit items-center flex">
          {buttons(primaryBtnList)}
        </div>
        <div className="w-fit h-fit items-center flex bg-primary-10 mt-8">
          {buttons(seconddaryBtnList)}
        </div>
        <div className="flex mt-8">
          <div className="w-20 h-20 bg-primary-0"></div>
          <div className="w-20 h-20 bg-primary-5 inline"></div>
          <div className="w-20 h-20 bg-primary-10"></div>
          <div className="w-20 h-20 bg-primary-15"></div>
          <div className="w-20 h-20 bg-primary-20"></div>
        </div>
        <h1>Header</h1>
        <p className="w-96 flex bg-primary-15">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <PageSeperator className="fill-primary-5" />
    </div>
  );
};
export default ComponentsDemo;
