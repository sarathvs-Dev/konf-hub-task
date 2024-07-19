import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const TicketCard = ({
  title,
  description,
  location,
  map_address,
  date,
  ticket_type,
  id,
}) => {
  return (
    <div>
      <div class="max-w-4xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5">
        <p href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <p class="mb-3 font-normal text-blue-700 dark:text-gray-400">
          <span class="inline-flex items-center">
            <FaLocationDot class="mr-2" />
            {location}
          </span>
        </p>

        <p class="mb-3 font-light text-gray-700 dark:text-gray-400">
          This is additional venue details.
        </p>
        <span class="bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
          {date}
        </span>
        <div class="flex justify-between items-center mb-3 mt-5">
          <p class="font-thin text-2xl text-gray-700 dark:text-gray-400 ml-10">
            {ticket_type}
          </p>
          <p
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register
          </p>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
