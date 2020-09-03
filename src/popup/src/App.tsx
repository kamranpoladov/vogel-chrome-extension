import React from "react";
import { Clock, Reason, Picture, Greeting } from "./Components";

const App = () => {
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
