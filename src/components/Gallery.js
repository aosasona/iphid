import React, { Component } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import img6 from "../assets/img/6.JPG";
import img7 from "../assets/img/7.JPG";
import img8 from "../assets/img/8.JPG";
import img9 from "../assets/img/9.JPG";
import img10 from "../assets/img/10.JPG";
import img11 from "../assets/img/11.JPG";
import img12 from "../assets/img/12.JPG";

export default class Gallery extends Component {
  render() {
    return (
      <div>
        <Nav />
        <h1 className="text-purple-300 p-6 text-3xl sm:text-5xl">Gallery</h1>
        <div className="px-5 sm:px-20 mt-7 mb-10">
          <div className="grid grid-cols-2 gap-5 sm:gap-4 sm:grid-cols-3 xl:grid-cols-4">
            <img src={img6} className="rounded-2xl w-full" alt="" />
            <img src={img8} className="rounded-2xl w-full" alt="" />
            <img src={img9} className="rounded-2xl w-full" alt="" />
            <img src={img10} className="rounded-2xl w-full" alt="" />
            <img src={img11} className="rounded-2xl w-full" alt="" />
            <img src={img7} className="rounded-2xl w-full" alt="" />
            <img src={img12} className="rounded-2xl w-full" alt="" />
          </div>
        </div>

        <div className="mb-4 p-4 w-full lg:w-3/5 mx-auto">
          {" "}
          <Footer />
        </div>
      </div>
    );
  }
}
