import React from "react";
import { useNavigate } from "react-router";
const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div className="bg-light-blue-100 py-4">
      <div className="flex justify-between items-center px-7 max-w-7xl m-auto">
        <div>
          <h1 onClick={()=>navigate("/")} className="text-white text-5xl font-bold cursor-pointer">
            BlueTrading
          </h1>
        </div>
        <div>
          <header>
            <ul className="flex text-white  text-3xl space-x-10">
              <li onClick={()=>navigate("/about-us")} className="cursor-pointer">About Us</li>
              <li onClick={()=>navigate("/features")} className="cursor-pointer">Features</li>
              <li onClick={()=>navigate("/latest-news")} className="cursor-pointer">Latest News</li>
              <li onClick={()=>navigate("/contact-us")} className="cursor-pointer">Contact</li>
            </ul>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


