import Categories from "@/components/modules/Categories";
import CarsPage from "@/components/template/CarsPage";
import carsData from "@/data/carsData";

function Cars() {
  return (
    <div>
      <Categories />
      <CarsPage data={carsData} />
    </div>
  );
}

export default Cars;
