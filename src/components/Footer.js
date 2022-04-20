import React, { Component } from "react";

const dy = new Date();
const thisYear = dy.getFullYear();

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="flex justify-between items-center bg-white shadow-lg w-full p-3 px-4 sm:px-6 mb-0 h-auto rounded-3xl">
          <a
            href="https://twitter.com/hiphedhayor"
            target="_blank"
            rel="noreferrer"
            title="Follow Us on Twitter"
            className="text-xs sm:text-sm bg-purple-200 text-purple-600 w-auto p-1 px-3 sm:p-3 sm:px-5 rounded-3xl sm:rounded-2xl font-medium  hover:text-purple-200 hover:bg-purple-600"
          >
            <i className="fab fa-twitter sm:text-lg text-sm"></i> Follow Us
          </a>

          <span className="text-xs text-purple-700 font-medium">
            &copy; {thisYear}
          </span>

          <span className="text-xs sm:text-sm font-light">
            Built by{" "}
            <a
              href="https://linktr.ee/realao"
              target="_blank"
              rel="noreferrer"
              className="text-purple-500 underline font-normal"
            >
              Ayodeji
            </a>
          </span>
        </div>
      </div>
    );
  }
}
