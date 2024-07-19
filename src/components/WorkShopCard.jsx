import React from "react";

const WorkShopCard = ({ id, title, image, date, user }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3">
      <div className="max-w-[20rem] h-[30rem] overflow-hidden bg-white shadow-md rounded-lg flex flex-col">
        <div className="flex-shrink-0">
          <img
            src={image}
            alt="ui/ux review check"
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="p-6 flex-grow">
          <h4 className="text-blue-gray-900 text-2xl font-bold">{title}</h4>
          <p className="text-gray-600 mt-3 font-normal">{date}</p>
        </div>
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center -space-x-3">
            {user.map((item) => (
              <div className="relative" key={item.id}>
                <img
                  className="border-2 border-white hover:z-10 w-10 h-10 rounded-full"
                  src={item.image}
                  alt={item.name}
                  title={item.name}
                />
              </div>
            ))}
          </div>
          <button
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkShopCard;
