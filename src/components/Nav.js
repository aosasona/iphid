import { Link } from "react-router-dom";
import React, { Component } from "react";
import Logo from "../assets/img/logo.png";
import "../assets/style.css";

export default class nav extends Component {
  render() {
    return (
      <div className="sticky top-0 z-[99]">
        <div className="w-full bg-purple-200 py-3 px-6 xl:px-8">
          <div className="flex w-full lg:w-4/5 mx-auto justify-between items-center">
            <img
              src={Logo}
              className="max-h-10 bg-white rounded-full p-2"
              alt="Logo"
            />

            <Link
              to="/"
              className="text-sm text-purple-500 hover:text-purple-700"
            >
              Home
            </Link>
            <Link
              to="/gallery"
              className="text-sm text-purple-500 hover:text-purple-700"
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="text-sm text-purple-500 hover:text-purple-700"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
