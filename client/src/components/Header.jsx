import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import ProfileImage from "../img/user_profile_image.png";
import DownArrow from "../img/down_arrow.svg";
import icon from "../img/favicon.ico";
import { AiOutlineMenu } from "react-icons/ai";

const Header = (account) => {
  const [isMenu, setIsMenu] = useState(false);
  const [visible] = useState(true);
  const navigate = useNavigate();
  const headerClasses = `z-50 bg-darkBg w-screen p-3 px-4 md:p-6 md:px-16  ${
    visible ? "" : "hidden"
  }`;

  const activeStyles =
    "text-lightPrimary after:block after:content-[''] after:absolute after:h-[2px] after:bg-lightPrimary after:w-full after:scale-x-100 after:transition after:duration-500";

  return (
    <header className={headerClasses}>
      {/* desktop & tablet */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={icon} width="30px" alt="Icon" />
          <Link to="/">
            <p className="text-lightModeTextColor text-2xl ">
              <span className="font-semibold  text-lightPrimary">Relief</span>
              DAO
            </p>
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-10">
            <NavLink
              className={({ isActive }) =>
                `text-lg relative block text-lightModeTextColor hover:text-lightPrimary cursor-pointer after:scale-x-0 ${
                  isActive ? activeStyles : " "
                }`
              }
              to="/"
            >
              <span className="relative">Home</span>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `text-lg relative block text-lightModeTextColor hover:text-lightPrimary cursor-pointer after:scale-x-0 ${
                  isActive ? activeStyles : " "
                }`
              }
              to="/tfl"
            >
              <span className="relative">TFL</span>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `text-lg relative block text-lightModeTextColor hover:text-lightPrimary cursor-pointer after:scale-x-0 ${
                  isActive ? activeStyles : " "
                }`
              }
              to="/token"
            >
              <span className="relative">Token</span>
            </NavLink>
          </ul>
        </div>

        <div>
          <ul>
            {account.account ? (
              <li className="rounded-full border border-lightPrimary py-3 px-9 text-lg text-lightModeTextColor hover:shadow-lg duration-100 transition-all ease-in-out cursor-pointer">
                {account.account.substring(0, 10) + "..."}
              </li>
            ) : (
              <li className="rounded-full border border-lightPrimary py-3 px-9 text-lg text-lightModeTextColor hover:shadow-lg duration-100 transition-all ease-in-out cursor-pointer">
                Connect Wallet
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* mobile */}
      <div className="z-50 md:hidden flex items-center justify-between w-full h-full ">
        <div className="flex items-center w-full justify-center">
          <img src={icon} width="30px" alt="Icon" />

          <NavLink to={"/"}>
            <p className="text-lightModeTextColor text-xl ">
              <span className="font-semibold">Relief</span>DAO
            </p>
          </NavLink>
        </div>
        <AiOutlineMenu className=" text-lightModeTextColor " />
        <div className="relative z-50">
          {isMenu && (
            <div className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0 z-50">
              <ul className="flex flex-col ">
                <li
                  className="text-base text-lightModeTextColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li
                  className="text-base text-lightModeTextColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                  <NavLink to={"/resources"}>Resources</NavLink>
                </li>
                <li
                  className="text-base text-lightModeTextColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                  <NavLink to={"findjob"}>Find Job</NavLink>
                </li>
              </ul>

              <p
                className="m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-lightPrimary gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-lightCard text-base"
                onClick={() => setIsMenu(false)}
              ></p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;