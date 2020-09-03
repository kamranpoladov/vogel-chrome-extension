import axios from "axios";

(() => {
  if (localStorage.getItem("vogel-secret")) {
    axios.defaults.headers.common["Vogel-Secret"] = localStorage.getItem(
      "vogel-secret"
    );
  } else {
    const secret = prompt("Enter the secret word") || "none";
    localStorage.setItem("vogel-secret", secret);
    axios.defaults.headers.common["vogel-secret"] = secret;
  }
})();

export default {};
