import CarList from "@/components/template/CarList";
import { categoryCar } from "@/helper/helper";

export default function Hatchback() {
  const cars = categoryCar("hatchback");
  return <CarList data={cars} />;
}
