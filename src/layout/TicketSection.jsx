import React from "react";
import AccordionView from "../components/AccordionView";
import TicketCard from "../components/TicketCard";
import ticketData from "../JSONDATA/ticket.json";
import AccrodianData from "../JSONDATA/AccrodianData.json";

function TicketSection() {
  return (
    <div>
      <div className="mt-10">
        <h1 className="text-3xl sm:text-2xl font-bold">TICKETS</h1>
        <div className="mt-8">
          {ticketData.map((item) => (
            <TicketCard key={item.id} {...item} />
          ))}

          {AccrodianData.map((item) => (
            <AccordionView key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TicketSection;
