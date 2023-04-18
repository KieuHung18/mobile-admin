import React from "react";
import clsx from "clsx";

const PageSeperator = (props: { className?: string } = { className: "" }) => {
  return (
    <svg
      x="0px"
      y="0px"
      viewBox="0 186.5 1920 113.5"
      className={clsx("absolute left-0 bottom-0 w-full", props.className)}
    >
      <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300"></polygon>
    </svg>
  );
};

export default PageSeperator;
