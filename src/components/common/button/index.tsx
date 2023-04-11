import React, { ReactNode } from "react";
import clsx from "clsx";
import Spinner from "../../advance/spinner";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  loading?: boolean;
  size?: "small" | "normal";
  children?: ReactNode | undefined;
}

const Button = (props: ButtonProps) => {
  const variantClassname = clsx({
    ["text-neutral-light/[0.6] bg-primary-10 bg-none hover:bg-primary-15 hover:text-neutral-light"]:
      !props.variant || props.variant === "primary",
    ["border border-primary-15/[0.8] text-neutral-light hover:bg-primary-20 hover:text-primary-5"]:
      props.variant === "secondary",
  });

  const size = clsx({
    ["px-6 py-2 text-[13px]"]: props.size === "small",
    ["px-8 py-3 font-muli text-[16px]"]: !props.size || props.size === "normal",
  });

  return (
    <button
      data-te-ripple-init
      data-te-ripple-color="light"
      className={clsx(
        "rounded-full h-full w-full duration-300 flex items-center justify-center",
        variantClassname,
        size
      )}
      disabled={props.loading}
      {...props}
    >
      {props.loading ? <Spinner></Spinner> : props.children}
    </button>
  );
};

export default Button;
