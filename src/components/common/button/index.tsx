import React from "react";
import clsx from "clsx";

const Button = (props: { bar: boolean }) => {
  const variantClassname = clsx({ foo: true, bar: props.bar });
  return <button className={clsx("btn", variantClassname)}>click me!</button>;
};
export default Button;
