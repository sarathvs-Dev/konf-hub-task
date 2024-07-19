import React from "react";

const AboutSection = ({ data }) => {
  return (
    <>
      <div className=" " id="about">
        <div className=" flex justify-center items-center backdrop-blur-xl py-12 sm:py-0  mt-10">
          <div
            data-aos="slide-up"
            data-aos-duration="300"
            className="container"
          >
            <div>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1 className="text-3xl sm:text-2xl font-bold">ABOUT EVENT</h1>
                <p className="text-sm text-gray-500 tracking-wide leading-5">
                  <div dangerouslySetInnerHTML={{ __html: data.description }} />
                </p>
                <div className="flex gap-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
