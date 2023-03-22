import React, { MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/common/button";
import Logo from "../../components/icons/logo";
import SideBarLink from "./side-bar-link";
import clsx from "clsx";
import { useState } from "react";

const SideBar = (
  props: {
    handleTransition?: MouseEventHandler<HTMLAnchorElement> | undefined;
  } = {
    handleTransition: () => {
      return "";
    },
  }
) => {
  const linkList: { title: string; path: string }[] = [
    { title: "Home", path: "/" },
    { title: "About Me", path: "/about-me" },
    { title: "Components Demo", path: "/components-demo" },
  ];
  const [hidden, setHidden] = useState(window.innerWidth > 1280 ? false : true);
  const links = linkList.map((l, i) => {
    return (
      <li key={i}>
        <SideBarLink
          onClick={props.handleTransition}
          title={l.title}
          path={l.path}
        />
      </li>
    );
  });
  const handleShowMenu = () => {
    setHidden(!hidden);
  };
  return (
    <>
      <div className="fixed w-full h-20 md:h-24 top-0 left-0 bg-primary-10 flex items-center xl:invisible px-4 z-10">
        <Link onClick={props.handleTransition} to={"/"}>
          <Logo className="fill-neutral-light w-12 h-12 lg:w-16 lg:h-16" />
        </Link>
        <div className="w-20 h-8 ml-auto">
          <Button
            content={<div>Menu</div>}
            variant="secondary"
            onClick={handleShowMenu}
          />
        </div>
      </div>
      <div
        id="sidenav"
        className={clsx(
          "bg-primary-0 font-normal fixed float-left top-0 px-14 flex items-center z-20 duration-300",
          "min-h-[100vh] 2xl:w-[350px] w-[300px] xl:relative xl:translate-x-0",
          { "-translate-x-full": hidden }
        )}
      >
        <nav className="w-fit">
          <Link onClick={props.handleTransition} to={"/"}>
            <Logo className="mb-8 fill-neutral-light w-16 h-16" />
          </Link>
          <ul>{links}</ul>
        </nav>
      </div>
    </>
  );
};
export default SideBar;
