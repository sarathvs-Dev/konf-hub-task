import React from "react";

const SponsorCategory = () => {
  return (
    <div>
      {" "}
      <div>
        {" "}
        <div className="mt-10">
          <h1 className="text-3xl sm:text-2xl font-bold">SPONSOR CATEGORY</h1>

          <div className="mt-8 flex  gap-4">
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <div className="max-w-[20rem]  overflow-hidden bg-white shadow-md rounded-lg flex flex-col">
                <div className="flex-shrink-0">
                  <img src="https://dev-media.konfhub.com/sponsors/2024/June/10/1717977635909-75bb1d01-51a2-4af1-82cd-72d587192692.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorCategory;
