import CarsPage from "@/components/template/CarsPage";
import carsData from "@/data/carsData";

function Cars() {
  return (
    <div>
      <CarsPage data={carsData} />
    </div>
  );
}

export default Cars;
