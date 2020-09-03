import moment from "moment";

const checkPictureDate = (jsonString: string | null): boolean => {
  if (!jsonString) return true;

  const { time } = JSON.parse(jsonString);
  return moment.duration(moment().diff(time)).asHours() >= 6;
};

export default checkPictureDate;
