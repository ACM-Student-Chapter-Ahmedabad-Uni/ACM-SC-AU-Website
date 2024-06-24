import React from "react";
import Header from "./Header";
import acm_log from "../assets/acm_rgb_grad_pos.png";
import au_logo from "../assets/au_logo.jpg";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center flex-wrap mt-32 w-full">
      <div className="flex justify-around items-center w-full h-3/4 ">
        <img src={acm_log} className="h-auto w-22 "></img>
        <img src={au_logo} className="h-28 mr-10"></img>
      </div>
      <div className="flex justify-center items-center w-full">
        <h1 className="ml-26 font-serif text-4xl text-slate-600">
          ACM Student Chapter Ahmedadbad University
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-center w-3/4 ml-10 mt-8">
        <p className="text-2xl font-serif">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
          aut voluptatum dignissimos sed odio natus ea expedita voluptate quos
          velit debitis ipsa deleniti aperiam dolores aliquam officia soluta, ab
          quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptas sequi illo possimus est itaque? Est autem pariatur dolorum
          doloribus facere recusandae perspiciatis sint aliquam iure incidunt
          unde, culpa animi aut! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. 
        </p>
      </div>
    </div>
  );
};

export default HomePage;
