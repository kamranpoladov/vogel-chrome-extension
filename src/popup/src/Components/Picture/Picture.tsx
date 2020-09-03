import React, { useEffect, useState } from "react";
import getPicture from "./utils/getPicture";
import btoa from "btoa";
import moment from "moment";
import checkPictureDate from "./utils/checkPictureDate";

const Picture = () => {
  const [picture, setPicture] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);
  useEffect(() => {
    if (checkPictureDate(localStorage.getItem("vogel-picture"))) {
      (async () => {
        setIsLoading(true);
        const buffer = await getPicture();
        const typedArray = new Uint8Array(buffer);
        const stringChar = typedArray.reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ""
        );
        const base64 = btoa(stringChar);
        localStorage.setItem(
          "vogel-picture",
          JSON.stringify({ time: moment(), img: base64 })
        );
        setPicture(base64);
        setIsLoading(false);
        setHasLoaded(true);
      })();
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("vogel-picture")) {
      const base64 = JSON.parse(localStorage.getItem("vogel-picture") || "")
        .img;
      setPicture(base64);
      setHasLoaded(true);
    }
  }, []);

  return (
    <div className="picture">
      {isLoading && (
        <p className="picture--load">Wait for a new picture to load...</p>
      )}
      {hasLoaded && (
        <img
          className="picture--image"
          src={`data:image/jpeg;base64,${picture}`}
        />
      )}
    </div>
  );
};

export default Picture;
