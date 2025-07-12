import React from "react";
import banner from "../assets/banner.webp"; 
function Banner() {
  return (
    <section className=" relative w-full h-[73vh] md:h[80vh] bg-blue-100 flex flex-col items-center justify-center text-white">
      <img
        src={banner}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-contain opacity-70"
      />
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative flex flex-col gap-4 items-center justify-center">
        <h1 className=" font-bold text-4xl md:text-5xl drop-shadow-lg">
          {" "}
          Bienvenue à Elkala
        </h1>
        <p className="text-lg max-w-xl drop-shadow-md">
          {" "}
          Une perle cachée entre mer et nature
        </p>
        <button className=" mt-6 bg-blue-500 py-3 px-6 rounded-md hover:bg-blue-600">
          Explorer
        </button>
      </div>
    </section>
  );
}

export default Banner;
