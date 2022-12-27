import React from "react";
import temple from "../assets/temple.png";
import { useNavigate } from "react-router";
const LatestNews = () => {
  const navigate = useNavigate();
  return (
    <div className="py-10">
      <h1 className="text-center relative text-5xl font-bold text-light-blue-100 mb-10">
          Latest News
        </h1>
      <div className=" container m-auto lg:flex gap-x-24 p-5">
      <div className="flex-1 m-2 relative border border-gray-500 shadow-md shadow-gray-500">
          <div>
            <img src={temple} alt="" />
          </div>
          <p className="p-10">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod
          </p>
          <button onClick={()=>navigate("/latest-news/read-more")} className="absolute right-2 bottom-2 border border-gray-600 bg-light-blue-100 text-white p-2 rounded-md">Read More</button>
        </div>

        <div className="flex-1 m-2 relative border border-gray-500 shadow-md shadow-gray-500">
          <div>
            <img src={temple} alt="" />
          </div>
          <p className="p-10">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod
          </p>
          <button onClick={()=>navigate("/latest-news/read-more")} className="absolute right-2 bottom-2 border border-gray-600 bg-light-blue-100 text-white p-2 rounded-md">Read More</button>
        </div>

        <div className="flex-1 m-2 relative border border-gray-500 shadow-md shadow-gray-500">
          <div>
            <img src={temple} alt="" />
          </div>
          <p className="p-10">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod
          </p>
          <button onClick={()=>navigate("/latest-news/read-more")} className="absolute right-2 bottom-2 border border-gray-600 bg-light-blue-100 text-white p-2 rounded-md">Read More </button>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
