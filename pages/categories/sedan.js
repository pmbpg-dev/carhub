import CarList from "@/components/template/CarList";
import { categoryCar } from "@/helper/helper";

export default function Sedan() {
  const cars = categoryCar("sedan");
  return <CarList data={cars} />;
}
