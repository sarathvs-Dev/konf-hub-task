import React from "react";
import { FaVideo } from "react-icons/fa";
import { FaTicketAlt } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { format, parseISO, addMinutes } from "date-fns";
import CountDown from "../components/CountDown";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoMail } from "react-icons/io5";
import { FaSquarePhone } from "react-icons/fa6";

const SideSection = ({ data }) => {
  const formatDate = (dateStr, timeStr) => {
    // Parse the date and time strings
    const date = parseISO(dateStr);
    const [hours, minutes, seconds] = timeStr.split(":").map(Number);

    // Add the time to the date
    const dateTime = new Date(date.setHours(hours, minutes, seconds));

    // Convert UTC to IST (UTC+5:30)
    const ISTDateTime = addMinutes(dateTime, 330);

    // Format the date-time in the desired format
    return format(ISTDateTime, "MMM do, yyyy h:mm a 'IST'");
  };
  const formattedStart = formatDate(data.start_date, data.start_time);
  const formattedEnd = formatDate(data.end_date, data.end_time);

  return (
    <>
      <div className=" flex flex-col ml-5 w-[35%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow max-md:mt-10">
          <div className="flex  flex-col items-start pt-5 pr-16 pb-20 pl-4 w-full text-black bg-white rounded-xl border border-gray-300 border-solid max-md:pr-5">
            <div className="event-details-title mb-3 text-2xl font-bold">
              {data.name}
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <p className="col-span-1 mb-0 flex items-center">
                <i className="fa-solid fa-video me-2"></i>
                <FaVideo className="mr-2" />
                {data.is_virtual ? "Online" : "Offline"}
              </p>

              <p className="col-span-1 mb-0 flex items-center">
                <i className="fa-solid fa-ticket me-2"></i>
                <FaTicketAlt className="mr-2" />
                {data.is_free ? "Paid" : "Free"}
              </p>
            </div>
            <div className="mb-4">
              <p className="mb-1 font-bold">Event Live Link:</p>
              <a
                href={data.event_website}
                target="_blank"
                rel="noopener noreferrer"
                className="min-link-text text-blue-500"
              >
                Open streaming website
              </a>
            </div>
            <div className="mb-2">
              <p className="mb-1 font-bold">Date:</p>
              <p>
                {formattedStart} - {formattedEnd}
              </p>
            </div>
            <div className="-mb-10">
              <p className="mb-1 font-bold">EVENT STARTS IN</p>

              <CountDown
                startDate={data.start_date}
                startTime={data.start_time}
                endDate={data.end_date}
                endTime={data.endtime}
              />
            </div>
          </div>
          <div className="flex flex-col pr-10 pl-4 mt-7 text-sm text-white max-md:pr-5">
            <button
              class="h-10 px-6 font-semibold rounded-md bg-black text-white"
              type="submit"
            >
              Buy now
            </button>

            <a
              href={data.event_website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-10 px-6 mt-4 font-semibold rounded-md border border-slate-200 text-slate-900 bg-white hover:bg-gray-100"
            >
              Official Website <FaExternalLinkAlt className="ml-2" />
            </a>
          </div>
          <div className="mt-9 text-2xl text-black">HOSTED BY</div>
          <div className="flex flex-col px-5 py-4 mt-3.5 w-full bg-white rounded-xl border border-solid border-neutral-300 max-md:pr-5">
            <div className="flex gap-5 text-xl text-black">
              <img
                loading="lazy"
                alt=""
                src={data.organiser_image_url}
                className="shrink-0 rounded-full aspect-square w-[50px]"
              />
              <div className="flex-auto my-auto">{data.organiser_name}</div>
            </div>
            <div className="mt-9 text-xl text-black">
              <div dangerouslySetInnerHTML={{ __html: data.organiser_info }} />
            </div>
            <div className="self-start mt-14 ml-2.5 text-xl text-black max-md:mt-10">
              Contact Us On
            </div>
            <div className="flex gap-3 mt-4 ml-2">
              <a
                href={data.organizer_facebook_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href={data.organizer_twitter_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="w-6 h-6" />
              </a>
              <a
                href={data.organizer_linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href={data.organiser_website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineGlobal className="w-6 h-6" />
              </a>
              <a
                href={data.organiser_email}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoMail className="w-6 h-6" />
              </a>
              <a
                href={`tel:${data.organiser_dial_code}${data.organiser_phone}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquarePhone className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideSection;
