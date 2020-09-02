import React, { useState, useEffect } from "react";
import { getReason } from "./utils/getReason";
import moment from "moment";
import { checkReasonDate } from "./utils/checkReasonDate";

const Reason = () => {
  const [reason, setReason] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (checkReasonDate(localStorage.getItem("vogel-reason"))) {
      (async () => {
        setIsLoading(true);
        const fetchedReason = await getReason();
        localStorage.setItem(
          "vogel-reason",
          JSON.stringify({ reason: fetchedReason, time: moment() })
        );
        setReason(fetchedReason);
        setIsLoading(false);
      })();
    } else {
      const reasonJson = JSON.parse(localStorage.getItem("vogel-reason") || "");
      setReason(reasonJson.reason);
    }
  }, []);
  return (
    <div className="reason">
      {isLoading ? (
        <p className="reason--text">Hold on &#10084;&#65039;</p>
      ) : (
        <p className="reason--text">I love you {reason}&#10084;&#65039;</p>
      )}
    </div>
  );
};

export default Reason;
