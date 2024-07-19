import React, { useEffect, useState } from "react";
import axios from "axios";
import HeroSection from "../layout/HeroSection";
import SideSection from "../layout/SideSection";
import NavBar from "../components/NavBar";
import AboutSection from "../layout/AboutSection";
import TicketSection from "../layout/TicketSection";
import WorkShopSelection from "../layout/WorkShopSelection";
import SpeackersSection from "../layout/SpeackersSection";
import EventSponsors from "../layout/EventSponsors";
import SponsorCategory from "../layout/SponsorCategory";

const MainPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://dev-api.konfhub.com/event/public/konfhub-frontend-evaluation-task"
      ) 
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <>
      <NavBar />
      <div className="px-10 pb-7 bg-white max-md:px-5 ml-8">
        <div className="flex max-md:flex-col max-md:gap-0">
          <div className="flex-col mr-8">
            <HeroSection data={data} />
            <AboutSection data={data} />
            <TicketSection data={data} />
            <SpeackersSection data={data} />
            <WorkShopSelection data={data} />
            <EventSponsors data={data} />
            <SponsorCategory />
          </div>
          <SideSection data={data} />
        </div>
      </div>
    </>
  );
};

export default MainPage;
