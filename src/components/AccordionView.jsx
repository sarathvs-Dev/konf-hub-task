import React, { useState } from "react";
import TicketCard from "./TicketCard";

const AccordionView = ({ id, title, description, tickets }) => {
  const [isOpen, setIsOpen] = useState({
    section1: false,
  });

  const toggleAccordion = (section) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="mt-10">
      <div id="accordion-collapse" data-accordion="collapse">
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium text-gray-500 border  border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            onClick={() => toggleAccordion("section1")}
            aria-expanded={isOpen.section1}
            aria-controls="accordion-collapse-body-1"
          >
            <span>{title}</span>
            <svg
              className={`w-3 h-3 ${
                isOpen.section1 ? "rotate-180" : ""
              } shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        {isOpen.section1 && (
          <div
            id="accordion-collapse-body-1"
            className="p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900"
          >
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              {description}
            </p>
            {tickets.map((item) => (
              <TicketCard key={item.id} {...item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AccordionView;
