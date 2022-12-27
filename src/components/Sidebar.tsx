import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HiLogout, HiOutlineMenu } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";

import { logo } from "../assets";
import { loggedInLinks, loggedOutLinks } from "../assets";
import { useAppDispatch } from "../app/hooks";
import { authenticate } from "../features/authentication/authenticationSlice";

export interface NavLinks {
  handleClick?: () => void;
}

const NavLinks = ({ handleClick }: NavLinks) => {
  const loggedIn = localStorage.getItem("auth");
  const dispatch = useAppDispatch();
  if (loggedIn !== null) {
    return (
      <div className="mt-10">
        {loggedInLinks.map((item) => (
          <NavLink
            key={item.name}
            to={item.to}
            className={({ isActive }) =>
              isActive
                ? "flex flex-row justify-start items-center my-8 text-sm font-medium text-lightYellow"
                : "flex flex-row justify-start items-center my-8 text-sm font-medium text-brandPink hover:text-lightYellow"
            }
            onClick={() => handleClick && handleClick()}
          >
            <item.icon className="w-6 h-6 mr-2" />
            {item.name}
          </NavLink>
        ))}
        <NavLink
          key="logout"
          to="/"
          className={({ isActive }) =>
            isActive
              ? "flex flex-row justify-start items-center my-8 text-sm font-medium text-lightYellow"
              : "flex flex-row justify-start items-center my-8 text-sm font-medium text-brandPink hover:text-lightYellow"
          }
          onClick={() => {
            dispatch(authenticate({ type: "logout" }))
            useNavigate()("/")
          }}
        >
          <HiLogout className="w-6 h-6 mr-2" />
          Logout
        </NavLink>
      </div>
    );
  } else {
    return (
      <div className="mt-10">
        {loggedOutLinks.map((item) => (
          <NavLink
            key={item.name}
            to={item.to}
            className={({ isActive }) =>
              isActive
                ? "flex flex-row justify-start items-center my-8 text-sm font-medium text-lightYellow"
                : "flex flex-row justify-start items-center my-8 text-sm font-medium text-brandPink hover:text-lightYellow"
            }
            onClick={() => handleClick && handleClick()}
          >
            <item.icon className="w-6 h-6 mr-2" />
            {item.name}
          </NavLink>
        ))}
      </div>
    );
  }
};

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-rose">
        <img src={logo} alt="logo" className="w-full h-28 object-contain" />
        <NavLinks />
      </div>

      {/* Mobile Sidebar */}
      <div className="absolute md:hidden block top-6 right-3">
        {mobileMenuOpen ? (
          <RiCloseLine
            className="w-6 h-6 text-white mr-2"
            onClick={() => setMobileMenuOpen(false)}
          />
        ) : (
          <HiOutlineMenu
            className="w-6 h-6 text-white mr-2"
            onClick={() => setMobileMenuOpen(true)}
          />
        )}
      </div>
      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-r from-rose/80 to-deepPink backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
          mobileMenuOpen ? "left-0" : "-left-full"
        }`}
      >
        <img src={logo} alt="logo" className="w-full h-28 object-contain" />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
