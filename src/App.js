import React, { useState } from "react";
import "./styles.css";
import AngleDown from "./AngleDown";
import Home from "./Home";

export default function App() {
  const [drop, setDrop] = useState(false);

  const click = () => setDrop((prevState) => !prevState);

  return (
    <div className="App">
      <div className="">
        <nav className="flex justify-between m-4 p-2 shadow border border-white-100 rounded-full">
          <div className=" flex justify-between items-center ml-2">
            <Home />
            <h1 className="ml-2">Dashboard</h1>
          </div>
          <ul className="flex">
            <img
              className="inline object-cover w-8 h-8 mr-2 rounded-full"
              src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Profile"
            />
            <h2 className="flex font-bold text-sm items-center mr-4">
              Justiminao Alves
            </h2>
            <li className="flex items-center mr-4">
              <AngleDown onClick={click} />
            </li>
            {drop && (
              <div className="text-sm text-left  dropdown font-bold text-white rounded absolute bg-purple-900  top-14 right-1 ">
                <ul className="p-2">
                  <li className="p-2">Profile</li>
                  <li className="p-2">Signout</li>
                </ul>
              </div>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}
