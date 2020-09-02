import React, { useEffect, useState } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import getPicture from "./utils/getPicture";
import btoa from "btoa";
import moment from "moment";
import checkPictureDate from "./utils/checkPictureDate";

const Picture = () => {
  const [picture, setPicture] = useState<string>("");

  useEffect(() => {
    if (checkPictureDate(localStorage.getItem("vogel-picture"))) {
      (async () => {
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
      })();
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("vogel-picture")) {
      const base64 = JSON.parse(localStorage.getItem("vogel-picture") || "")
        .img;
      setPicture(base64);
    }
  }, []);

  return (
    <div className="picture">
      <img
        className="picture--image"
        src={`data:image/jpeg;base64,${picture}`}
      />
    </div>
  );
};

export default Picture;
