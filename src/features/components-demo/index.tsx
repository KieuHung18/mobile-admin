import React from "react";
import Button, { ButtonProps } from "../../components/common/button";

const ComponentsDemo = () => {
  const btnCont = "click me";
  const primaryBtnList: ButtonProps[] = [
    { content: btnCont, size: "small" },
    { content: btnCont, size: "small", loading: true },
    { content: btnCont },
    { content: btnCont, loading: true },
  ];
  const seconddaryBtnList: ButtonProps[] = [
    { variant: "secondary", content: btnCont, size: "small" },
    { variant: "secondary", content: btnCont, size: "small", loading: true },
    { variant: "secondary", content: btnCont },
    { variant: "secondary", content: btnCont, loading: true },
  ];
  const buttons = (list: ButtonProps[]) => {
    return list.map((b, i) => (
      <div className="inline p-2" key={i}>
        <Button
          content={b.content}
          variant={b.variant}
          size={b.size}
          loading={b.loading}
        />
      </div>
    ));
  };

  return (
    <div className="p-4">
      <div className="w-fit items-center flex">{buttons(primaryBtnList)}</div>
      <div className="w-fit items-center flex bg-primary-10 mt-8">
        {buttons(seconddaryBtnList)}
      </div>
      <div className="flex mt-8">
        <div className="w-20 h-20 bg-primary-0"></div>
        <div className="w-20 h-20 bg-primary-5 inline"></div>
        <div className="w-20 h-20 bg-primary-10"></div>
        <div className="w-20 h-20 bg-primary-15"></div>
        <div className="w-20 h-20 bg-primary-20"></div>
      </div>
    </div>
  );
};
export default ComponentsDemo;
