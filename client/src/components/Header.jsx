import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import ProfileImage from "../img/user_profile_image.png";
import DownArrow from "../img/down_arrow.svg";
import icon from "../img/favicon.ico"

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [visible] = useState(true);
  const navigate = useNavigate();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const headerClasses = `bg-darkBg w-screen p-3 px-4 md:p-6 md:px-16  ${
    visible ? "" : "hidden"
  }`;

  // const dropDownHandle = () => {
  //   setIsMenu(!isMenu);
  // };

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
              <span className="font-semibold  text-lightPrimary">Relief</span>DAO
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
              // onClick={() => handleItemClick(1)}
              to="/tfl"
            >
              <span className="relative">
                TFL
                {/* {selectedItem === 1 && (
                                        <span className="border-b-2 ease-in-out border-lightPrimary animate-border-animation"></span>
                                    )} */}
              </span>
            </NavLink>
            {/* <>
              <li
                className="flex gap-3 text-sm text-lightModeTextColor hover:text-lightPrimary cursor-pointer"
                onClick={dropDownHandle}
              >
                <img
                    src={ProfileImage}
                    className="w-12 min-w-[40px] h-12 min-h-[40px] cursor-pointer rounded-full"
                    alt="profile_picture"
                  />
                <div className="flex flex-col justify-center">
                  <div>vwakesahu</div>
                  <div className="text-lighttextGray text-sm -mt-1">
                    Ui/Ux Designer
                  </div>
                </div>
                <img src={DownArrow} alt="drop_down_menu" />
              </li>
            </> */}

            {/* <li
              className="flex gap-3 text-sm text-lightModeTextColor hover:text-lightPrimary cursor-pointer"
              onClick={dropDownHandle}
            >
              <img src={DownArrow} alt="drop_down_menu" />
            </li> */}
            {/* <div className="">
              {isMenu && (
                <div className=" w-[200px] bg-lightCard drop-shadow-lg rounded-lg flex flex-col absolute top-20 right-14 py-2">
                  <div className="flex px-4 py-2 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-lightModeTextColor">
                    
                    <Link
                      to="/user/info"
                      className="w-full flex items-center justify-center gap-3"
                      onClick={() => setIsMenu(false)}
                    >
                      Connect Wallet
                    </Link>
                  </div>

                  <div className="flex px-4 py-2 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-lightModeTextColor">
            
                    <p
                      className="w-full flex items-center justify-center gap-3"
                      onClick={() => setIsMenu(false)}
                    >
                      <Link to="/user/dashboard">User DashBoard</Link>
                    </p>
                  </div>

                  <Link to="/policy">
                    <div className="flex px-4 py-2 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-lightModeTextColor">
      
                      <p
                        className="w-full flex items-center justify-center gap-3"
                        onClick={() => setIsMenu(false)}
                      >
                        Privacy Policy
                      </p>
                    </div>
                  </Link>
                  <Link to="/">
                    <div className="flex px-4 py-2 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-lightModeTextColor">
                 

                      <p
                        className="w-full flex items-center justify-center gap-3 text-red-600"
                        onClick={() => setIsMenu(false)}
                      >
                        Log out
                      </p>
                    </div>
                  </Link>
                </div>
              )}
            </div> */}
            <NavLink
              className={({ isActive }) =>
                `text-lg relative block text-lightModeTextColor hover:text-lightPrimary cursor-pointer after:scale-x-0 ${
                  isActive ? activeStyles : " "
                }`
              }
              // onClick={() => handleItemClick(1)}
              to="/token"
            >
              <span className="relative">
                Token
                {/* {selectedItem === 1 && (
                                        <span className="border-b-2 ease-in-out border-lightPrimary animate-border-animation"></span>
                                    )} */}
              </span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `text-lg relative block text-lightModeTextColor hover:text-lightPrimary cursor-pointer after:scale-x-0 ${
                  isActive ? activeStyles : " "
                }`
              }
              // onClick={() => handleItemClick(1)}
              to="/contact-us"
            >
              <span className="relative">
                Contact Us
                {/* {selectedItem === 1 && (
                                        <span className="border-b-2 ease-in-out border-lightPrimary animate-border-animation"></span>
                                    )} */}
              </span>
            </NavLink>
          </ul>
        </div>
        <div>
          <ul>
            <NavLink to="/secure-yourself">
              <li className="rounded-full border border-lightPrimary py-3 px-9 text-lg text-lightModeTextColor hover:shadow-lg duration-100 transition-all ease-in-out cursor-pointer">
                Secure Yourself
              </li>
            </NavLink>
          </ul>
        </div>
      </div>

      {/* mobile */}
      <div className="z-50 md:hidden flex items-center justify-between w-full h-full ">
        <div className="flex items-center w-full justify-center">
          {/* <img src={Logo} width="25px" className="mx-1" alt="logo" /> */}
          <NavLink to={"/"}>
            <p className="text-lightModeTextColor text-xl ">
              <span className="font-semibold">Relief</span>DAO
            </p>
          </NavLink>
        </div>

        <div className="relative z-50">
          {/* {isLoggedIn ? (
            <img
              src={ProfileImage}
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
              alt="userprofile"
              onClick={dropDownHandle}
            />
          ) : (
            <img
              src={MenuIcon}
              className="w-10 h-10 drop-shadow-xl cursor-pointer"
              alt="menu"
              onClick={dropDownHandle}
            />
          )} */}

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
