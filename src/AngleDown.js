import React from "react";

function AngleDown({ onClick }) {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      className="bg-purpl h-4 flex items-center cursor-pointer"
      enableBackground="new 0 0 240.811 240.811"
      version="1.1"
      viewBox="0 0 240.811 240.811"
      xmlSpace="preserve"
    >
      <path d="M220.088 57.667l-99.671 99.695-99.671-99.707a12.147 12.147 0 00-17.191 0c-4.74 4.752-4.74 12.451 0 17.203l108.261 108.297c4.74 4.752 12.439 4.752 17.179 0L237.256 74.859c4.74-4.752 4.74-12.463 0-17.215-4.728-4.729-12.428-4.729-17.168.023z"></path>
    </svg>
  );
}

export default AngleDown;
