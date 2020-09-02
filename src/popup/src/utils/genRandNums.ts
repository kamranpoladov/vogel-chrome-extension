export const genRandNums = (limit: number): number[] => {
  const rand1 = Math.floor(Math.random() * limit);
  let rand2 = Math.floor(Math.random() * limit);
  while (rand2 == rand1) {
    rand2 = Math.floor(Math.random() * limit);
  }
  let rand3 = Math.floor(Math.random() * limit);
  while (rand3 == rand1 || rand3 == rand2) {
    rand3 = Math.floor(Math.random() * limit);
  }

  return [rand1, rand2, rand3];
};
