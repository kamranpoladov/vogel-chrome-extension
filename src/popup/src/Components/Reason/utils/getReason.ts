import axios from "axios";
import API from "../../../utils/api";

export const getReason = async () => {
  const { data } = await axios.get(`${API}/reasons`);
  return data.reason.text;
};
