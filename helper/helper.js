import carsData from "@/data/carsData";

export const categoryCar = (name) => {
  const category = carsData.filter((car) => car.category === name);
  return category;
};
