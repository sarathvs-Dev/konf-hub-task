import React from "react";

const HeroSection = ({ data }) => {
  return (
    <div className="flex flex-col max-md:ml-0 max-md:w-full">
      <div className="shadow-xl flex flex-col justify-center px-4 py-3.5 w-full bg-white rounded-xl border  max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          alt=""
          src={data.poster_thumbnail}
          className="w-full aspect-[1.89] max-md:max-w-full rounded-xl"
        />
      </div>
    </div>
  );
};

export default HeroSection;
