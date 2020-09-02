import React, { useEffect } from "react";
import Clock from "./Components/Clock";
import Reason from "./Components/Reason";
import Picture from "./Components/Picture";
import Greeting from "./Components/Greeting";
import Axios from "axios";
import { useState } from "react";

const App = () => {
  // useEffect(() => {
  //   if (!localStorage.getItem("vogel-secret")) {
  //     setIsLoading(true);
  //     const secret = prompt("Please, enter a secrect pharase") || "";
  //     localStorage.setItem("vogel-secret", secret);
  //     console.log(localStorage.getItem("vogel-secret"));
  //     setIsLoading(false);
  //   } else {
  //     setIsLoading(false);
  //   }
  // }, []);

  return (
    <div className="center">
      <Clock />
      <Greeting />
      <Picture />
      <Reason />
    </div>
  );
};

export default App;
