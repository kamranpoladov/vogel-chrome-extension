import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import appeals from "./utils/appeals";
import getTimeOfTheDay from "./utils/getTimeOfTheDay";
import moment from "moment";

const Greeting = () => {
  const [appeal, setAppeal] = useState<string>();
  const [timeOfTheDay, setTimeOfTheDay] = useState<string>();

  useEffect(() => {
    const randomAppeal = appeals[Math.floor(Math.random() * appeals.length)];
    setAppeal(randomAppeal);
    setTimeOfTheDay(getTimeOfTheDay(moment()));
  }, []);
  return (
    <div className="greeting">
      <p className="greeting--text">
        Good {timeOfTheDay}, {appeal}
      </p>
    </div>
  );
};

export default Greeting;
