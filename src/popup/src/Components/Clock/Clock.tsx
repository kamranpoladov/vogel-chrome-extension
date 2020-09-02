import React, { useState, useEffect } from "react";
import moment, { Moment } from "moment";

const Clock = () => {
  const [time, setTime] = useState<Moment>(moment());

  useEffect(() => {
    setTimeout(() => {
      setTime(moment());
    }, 1000);
  });

  return (
    <div className="clock">
      <div className="clock__time">{time.format("HH:mm")}</div>
      <div className="break"></div>
      <div className="clock__date">{time.format("dd, DD MMM")}</div>
    </div>
  );
};

export default Clock;
