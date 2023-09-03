import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillPhone } from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-orange-300 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-orange-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                From Monday till Sunday from 09:30-20:00 Our Therapists are at your disposal 7 days a week on appointment
              </h5>
              <div className="mt-6 lg:mb-0 mb-6 flex flex-row items-center justify-center">
                <Link
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:scale-105 duration-500"
                  to="https://www.facebook.com/egyptamassage/"
                >
                  <FaFacebook
                    fontSize={24}
                    color="black"
                  />
                </Link>
                <Link
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:scale-105 duration-500"
                  to="https://www.instagram.com/egypta_massage/"
                >
                  <FaInstagram
                    fontSize={24}
                    color="black"
                  />
                </Link>
                <Link
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:scale-105 duration-500"
                  tp="https://twitter.com/EgyptaMassage"
                >
                  <FaTwitter
                    fontSize={24}
                    color="black"
                  />
                </Link>
                <Link
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:scale-105 duration-500"
                  to="whatsapp://send?phone=+352671107278/"
                >
                  <FaWhatsapp
                    fontSize={24}
                    color="black"
                  />
                </Link>
                <Link
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:scale-105 duration-500"
                  to="https://www.youtube.com/channel/UCspYFFphGmeaK7fXvDbgU-Q"
                >
                  <FaYoutube
                    fontSize={24}
                    color="black"
                  />
                </Link>
                <Link
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:scale-105 duration-500"
                  to="https://www.linkedin.com/in/egypta-massage-a805491a8/"
                >
                  <FaLinkedin
                    fontSize={24}
                    color="black"
                  />
                </Link>
                <Link
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:scale-105 duration-500"
                  to="mailto:egypta.masssage@gmail.com" // Replace with the recipient's email address
                >
                  <HiOutlineMailOpen fontSize={24} color="black" />
                </Link>

                <Link
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:scale-105 duration-500"
                  to="tel:+352671107278"
                >
                  <AiFillPhone
                    fontSize={24}
                    color="black"
                  />
                </Link>

              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        to="/about-us"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        to="/nos-massages"
                      >
                        Nos Massages
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        to="/reservation"
                      >
                        Booking
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        to="/"
                      >
                        Contact Us
                      </Link>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-black" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © {new Date().getFullYear()} Design by {" "}
                <Link
                  to="https://www.instagram.com/marouanedbibih_/"
                  className="text-blueGray-500 hover:text-blueGray-800"
                >
                  Marouane Dbibih
                </Link>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
