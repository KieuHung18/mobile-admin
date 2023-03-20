import React from "react";
import { NavLink } from "react-router-dom";

const SideBarLink = (props: { title: string; path: string }) => {
  return (
    <NavLink
      className={({ isActive }) => {
        return isActive
          ? "[&>*]:visible [&>*]: flex items-center"
          : "[&>*]:invisible [&>*]:translate-x-7 flex items-center";
      }}
      to={props.path}
    >
      {props.title}
      <div className="w-[20px] h-[2px] transition-all duration-250 bg-neutral-light inline-block ml-3"></div>
    </NavLink>
  );
};

export default SideBarLink;
