import React from "react";
import GalleryCarasoul from "./GalleryCarasoul";

const Gallery = () => {
  return (
    <div class="bg-[#f3eeea] h-screen w-full flex justify-between items-center">
      <div className="flex justify-end items-center flex-wrap w-1/2">
        <h1 class="font-bold text-2xl pl-20 w-full">Gallery</h1>
        <p class="font-light text-base pl-20 mt-4 w-full">
          Glance through some of our most memorable events
        </p>
      </div>
      <div className="w-1/2 flex justify-center">
        <GalleryCarasoul/>
      </div>
    </div>
  );
};

export default Gallery;
