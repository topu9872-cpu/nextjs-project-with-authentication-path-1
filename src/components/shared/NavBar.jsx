"use client";
import Image from "next/image";

import userAvatar from "@/assets/user.png";

import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
const NavBar = () => {
  const { data: session,isPending } = authClient.useSession();
  console.log(session);
  const users = session?.user;
  
 
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
       {isPending?<h2>Loding.........</h2>
     :  users ?(
      <div className="flex gap-2">
       
        <h2>Hello, {users?.name}</h2>
        <Image src={users.image || userAvatar} alt="User Avatar" width={40} height={40} className="rounded-full"/>
        
      <button className="btn btn-error" onClick={async()=>await authClient.signOut()} >
          <NavLink href={"/"}>Logout</NavLink>
        </button>
      </div>
       ) : ( <button className="btn btn-accent">
          <NavLink href={"/login"}>Login</NavLink>
        </button>)}
    </div>
  );
};

export default NavBar;
