import React from "react";
import WorkShopCard from "../components/WorkShopCard";
import workShopData from "../JSONDATA/workShopData.json";

function WorkShopSelection() {
  return (
    <div>
      <div className="mt-10">
        <h1 className="text-3xl sm:text-2xl font-bold">
          THIS IS WORKSHOP SECTION
        </h1>
        <p className="text-gray-600 mt-3 font-normal">
          Because it&apos;s about motivating the doers. Because I&apos;m here to
          follow my dreams and inspire others.
        </p>
        <div className="mt-8 flex  gap-4">
          {workShopData.map((item) => (
            <WorkShopCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkShopSelection;
