import React from "react";
import lamp from "../assets/lamp.png";
const Features = () => {
  return (
    <div className=" text-center bg-gray-300 mb-5">
      <div className="container px-5 lg:p-40 text-center py-10 m-auto">
        <h1 className="text-center relative text-5xl font-bold text-light-blue-100 mb-10">
          Features
        </h1>
        <div className="p-10 lg:flex gap-x-5">
          <div className="block lg:flex-1 lg:flex justify-center items-center flex-col">
            <div className="bg-light-blue-100 p-10">
              <img src={lamp} alt="" />
            </div>
            <p className="text-3xl mt-5 text-gray-500 p-2 text-justify">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor{" "}
            </p>
          </div>
          <div className="block lg:flex-1 lg:flex justify-center items-center flex-col">
            <div className="bg-light-blue-100 p-10">
              <img src={lamp} alt="" />
            </div>
            <p className="text-3xl mt-5 text-gray-500 p-2 text-justify">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor{" "}
            </p>
          </div>
          <div className="block lg:flex-1 lg:flex justify-center items-center flex-col">
            <div className="bg-light-blue-100 p-10">
              <img src={lamp} alt="" />
            </div>
            <p className="text-3xl mt-5 text-gray-500 p-2 text-justify">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
