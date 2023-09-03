/*eslint-disable*/
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {HiMenuAlt3} from "react-icons/hi";
// components

import IndexDropdown from "../Dropdowns/IndexDropdown";
import { useSatateContext } from "../../contexts/ContextProvider";
export default function ClientNavbar(props) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { token, role } = useSatateContext();
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();


  // Add an event listener to handle scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const isLoginPage = location.pathname === "/login";
  const isSignupPage = location.pathname === "/signup";

  return (
    <>
      <nav className={`top-0 fixed h-2/8 z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg duration-700 ${scrolling ? "bg-black border-white" : props.class}`}>
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              <img src="../../../public/img/logo/logo.png" width={150} height={75} alt="" />
            </Link>
            <button
              className="cursor-pointer md:hidden "
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <HiMenuAlt3 fontSize={40} color="white"/>
            </button>
          </div>
          <div
            className={`lg:flex flex-grow items-center bg-black lg:bg-opacity-0 lg:shadow-none${navbarOpen ? " block" : " hidden"
              }`}
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto my-0">
              <li className="flex items-center duration-500">
                <Link
                  to="/"
                  className=" px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold "
                >
                  <span className="hover:text-orange-300 text-white hover:border-b hover:border-orange-200">HOME</span>
                </Link>
              </li>
              <li className="flex items-center duration-500">
                <Link
                  to="/nos-massage"
                  className=" px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold "
                >
                  <span className="hover:text-orange-300 text-white hover:border-b hover:border-orange-200">NOS MASSAGES</span>
                </Link>
              </li>
              <li className="flex items-center duration-500">
                <Link
                  to="/"
                  className=" px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold "
                >
                  <span className="hover:text-orange-300 text-white hover:border-b hover:border-orange-200">RÉSERVATIONS</span>
                </Link>
              </li>
              <li className="flex items-center duration-500">
                <Link
                  to="/"
                  className=" px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold "
                >
                  <span className="hover:text-orange-300 text-white hover:border-b hover:border-orange-200">CHÈQUES CADEAUX</span>
                </Link>
              </li>
              <li className="flex items-center duration-500">
                <Link
                  to="/"
                  className=" px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold "
                >
                  <span className="hover:text-orange-300 text-white hover:border-b hover:border-orange-200">CONTACT</span>
                </Link>
              </li>
              <li className="flex items-center duration-500">
                <Link
                  to="/"
                  className=" px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold "
                >
                  <span className="hover:text-orange-300 text-white hover:border-b hover:border-orange-200">TEAM</span>
                </Link>
              </li>

              {
                token && role ? (
                  <>
                    <li className="flex items-center">
                      <button
                        className="bg-orange-300 hover:bg-orange-200 text-black active:bg-orange-300 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                      >
                        LOGOUT
                      </button>
                    </li>
                    {role === 2 ? (
                      <li className="flex items-center">
                        <Link
                          className="bg-orange-300 hover:bg-orange-200 text-black active:bg-orange-300 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                          to="/dashboard"
                        >
                          DASHBOARD
                        </Link>
                      </li>
                    ) : (
                      <li className="flex items-center">
                        <Link
                          className="bg-orange-300 hover:bg-orange-200 text-black active:bg-orange-300 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                          to={role === 0 ? "/profile" : "/colab-profile"}
                        >
                          PROFILE
                        </Link>
                      </li>
                    )}
                  </>
                ) : (
                  <>
                    {
                      isLoginPage ? null : (
                        <li className="flex items-center">
                          <Link
                            className="bg-orange-300 hover:bg-orange-200 text-black active:bg-orange-300 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                            to="/login"
                          >
                            LOGIN
                          </Link>
                        </li>
                      )
                    }
                    {
                      isSignupPage ? null : (
                        <li className="flex items-center">
                          <Link
                            className="bg-orange-300 hover:bg-orange-200 text-black active:bg-orange-300 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                            to="/signup"
                          >
                            SIGN UP
                          </Link>
                        </li>
                      )
                    }
                  </>
                )
              }
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
