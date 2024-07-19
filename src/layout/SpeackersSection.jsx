import React from "react";
import SpeakersData from "../JSONDATA/SpeakersData.json";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";


const SpeackersSection = ({ data }) => {
  return (
    <div className="mt-10">
      <h1 className="text-3xl sm:text-2xl font-bold">
        {data.speaker_section_title}
      </h1>
      <div className=" mt-8 flex space-x-4">
      {SpeakersData.map((item) => (
          
        

        <p
         
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={item.image}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.Name}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {item.post}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {item.company}
            </p>



            <div className="flex gap-3 mt-4 ml-2">
              <a
                href={data.organizer_facebook_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="w-4 h-4" />
              </a>
              <a
                href={data.organizer_twitter_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="w-4 h-4" />
              </a>
              <a
                href={data.organizer_linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-4 h-4"/>
              </a>
              <a
                href={data.organiser_website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineGlobal className="w-4 h-4" />
              </a>
              
             
            </div>
          </div>

          



        </p>
  ))}

       
      </div>
    </div>
  );
};

export default SpeackersSection;
