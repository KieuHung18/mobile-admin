import React, { MouseEventHandler, ReactNode } from "react";
import { NavLink } from "react-router-dom";

const SideBarLink = (props: {
  path: string;
  children?: ReactNode | undefined;
  onClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
}) => {
  return (
    <NavLink
      onClick={props.onClick}
      className={({ isActive }) => {
        return isActive
          ? "[&>*]:visible [&>*]: flex items-center"
          : "[&>*]:invisible [&>*]:translate-x-7 flex items-center";
      }}
      to={props.path}
    >
      {props.children}
      <div className="w-[20px] h-[2px] duration-200 bg-neutral-light inline-block ml-3"></div>
    </NavLink>
  );
};

export default SideBarLink;
