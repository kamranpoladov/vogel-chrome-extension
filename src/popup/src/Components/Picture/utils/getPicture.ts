import Axios from "axios";
import API from "../../../utils/api";

const getPicture = async (): Promise<Buffer> => {
  const { picture } = await (
    await Axios.get(`${API}/pictures`, {
      headers: {
        "Vogel-Secret": localStorage.getItem("vogel-secret"),
      },
    })
  ).data;
  const buffer = picture.img.data.data;
  return buffer;
};

export default getPicture;
