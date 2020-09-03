import axios from "axios";
import API from "../../../utils/api";

export const getReason = async () => {
  const response = await axios.get(`${API}/reasons`);
  if (response.status === 205) {
    await axios.put(`${API}/reasons`);
    const { reason } = await (await axios.get(`${API}/reasons`)).data;
    return reason.text;
  } else {
    return response.data.reason.text;
  }
};
