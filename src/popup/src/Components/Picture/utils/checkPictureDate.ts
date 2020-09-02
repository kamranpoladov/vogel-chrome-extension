import moment from "moment";

const checkPictureDate = (jsonString: string | null): boolean => {
  if (!jsonString) return true;

  const { time } = JSON.parse(jsonString);
  const isSame = moment().isSame(time, "second");

  return !isSame;
};

export default checkPictureDate;
