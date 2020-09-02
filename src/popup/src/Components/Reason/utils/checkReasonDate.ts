import moment from "moment";

export const checkReasonDate = (jsonString: string | null): boolean => {
  if (!jsonString) return true;

  const reasonObj = JSON.parse(jsonString);
  const isSame = moment().isSame(reasonObj.time, "date");
  return !isSame;
};
