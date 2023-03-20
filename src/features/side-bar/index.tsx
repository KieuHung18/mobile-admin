import React from "react";
import Logo from "../../components/icons/logo";
import SideBarLink from "./side-bar-link/inedx";

const SideBar = () => {
  const linkList: { title: string; path: string }[] = [
    { title: "Home", path: "/" },
    { title: "Components Demo", path: "/components-demo" },
  ];
  const links = linkList.map((l, i) => {
    return (
      <li key={i}>
        <SideBarLink title={l.title} path={l.path} />
      </li>
    );
  });
  return (
    <div className="min-h-[100vh] w-[350px] bg-primary-0 text-neutral-light text-[16px] font-normal float-left px-14 flex items-center">
      <div className=" w-fit">
        <Logo size="60" color="white" className="mb-8 mt-auto" />
        <ul>{links}</ul>
      </div>
    </div>
  );
};
export default SideBar;
