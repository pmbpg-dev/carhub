import Categories from "@/components/modules/Categories";
import CarsPage from "@/components/template/CarsPage";
import MainPage from "@/components/template/MainPage";

export default function Home() {
  return (
    <div>
      <MainPage />
      <CarsPage />
      <Categories />
    </div>
  );
}
