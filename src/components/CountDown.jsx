import React, { useState, useEffect } from "react";

const CountDown = ({ startDate, startTime, endDate, endTime }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const startDateTime = new Date(`${startDate}T${startTime}`);
    const endDateTime = new Date(`${endDate}T${endTime}`);

    const calculateTimeLeft = () => {
      const now = new Date();
      let targetDateTime = startDateTime > now ? startDateTime : endDateTime;

      const difference = targetDateTime - now;

      let timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };

      return timeLeft;
    };

    const updateCountdown = () => {
      setTimeLeft(calculateTimeLeft());
    };

    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, [startDate, startTime, endDate, endTime]);



  return (
    <div>
      <div>
        <div className="flex font-bold text-2xl">
          <span className="mr-2">{timeLeft.days}D</span>
          <span className="mr-2">{timeLeft.hours}H</span>
          <span className="mr-2">{timeLeft.minutes}M</span>
          <span>{timeLeft.seconds}S</span>
        </div>
      </div>{" "}
    </div>
  );
};

export default CountDown;
