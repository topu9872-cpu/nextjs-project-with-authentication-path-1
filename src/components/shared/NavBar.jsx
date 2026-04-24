import Image from "next/image";
import React from "react";
import userAvatar from "@/assets/user.png";
import Link from "next/link";
import NavLink from "./NavLink";
const NavBar = () => {
  return (
    <div className="flex justify-between container mx-auto gap-6 mt-6">
      <div></div>
      <ul className="flex gap-6 text-gray-700">
        <li>
          <NavLink href={"/"}> Home</NavLink>
        </li>
        <li>
          <NavLink href={"/about"}> About </NavLink>
        </li>
        <li>
          <NavLink href={"/career"}> Career </NavLink>
        </li>
      </ul>
      <div className="flex gap-2">
        <Image src={userAvatar} alt="User Avatar" width={40} height={40} />
        <button className="btn btn-accent">
          <NavLink href={"/login"}>Login</NavLink>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
