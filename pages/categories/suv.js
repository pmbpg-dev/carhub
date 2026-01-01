import CarList from "@/components/template/CarList";
import { categoryCar } from "@/helper/helper";

export default function Suv() {
  const cars = categoryCar("suv");
  return <CarList data={cars} />;
}
