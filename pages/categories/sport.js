import CarList from "@/components/template/CarList";
import { categoryCar } from "@/helper/helper";

export default function Sport() {
  const cars = categoryCar("sport");
  return <CarList data={cars} />;
}
