import React from "react";
import Logo from "../../components/icons/logo";
import SideBarLink from "./side-bar-link";
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
    <div className="min-h-[100vh] 2xl:w-[350px] w-[300px] bg-primary-0 text-neutral-light text-[16px] font-normal float-left px-14 flex items-center relative z-10 transition-all duration-300">
      <div className=" w-fit">
        <Logo className="mb-8 mt-auto fill-neutral-light w-16 h-16" />
        <ul>{links}</ul>
      </div>
    </div>
  );
};
export default SideBar;
