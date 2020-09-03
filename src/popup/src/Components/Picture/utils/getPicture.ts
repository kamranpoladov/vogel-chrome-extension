import axios from "axios";
import API from "../../../utils/api";

const getPicture = async (): Promise<Buffer> => {
  const response = await axios.get(`${API}/pictures`);
  if (response.status === 205) {
    await axios.put(`${API}/pictures`);
    const { picture } = await (await axios.get(`${API}/pictures`)).data;
    const buffer = picture.img.data.data;
    return buffer;
  } else {
    return response.data.picture.img.data.data;
  }
};

export default getPicture;
