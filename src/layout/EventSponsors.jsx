import React from "react";

const EventSponsors = ({ data }) => {
  return (
    <div>
      {" "}
      <div className="mt-10">
        <h1 className="text-3xl sm:text-2xl font-bold">
          {data.sponsor_section_title}
        </h1>
        <p className="text-gray-600 mt-3 font-normal">
          Because it&apos;s about motivating the doers. Because I&apos;m here to
          follow my dreams and inspire others.
        </p>
        <div className="mt-8 flex  gap-4">
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <div className="max-w-[20rem]  overflow-hidden bg-white shadow-md rounded-lg flex flex-col">
              <div className="flex-shrink-0">
                <img
                  src="https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F09%2F1717977584480-2a58c92e-ac5f-4ebd-9570-d6bcfc792dc2.png&w=1920&q=75"
                  alt="ui/ux review check"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSponsors;
