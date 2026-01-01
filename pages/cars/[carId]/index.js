import { useRouter } from "next/router";
import carsData from "@/data/carsData";
import Image from "next/image";
import styles from "./details.module.css";
import Company from "@/components/icons/Company";
import CarDetails from "@/components/template/CarDetails";

function Details() {
  const router = useRouter();
  const { carId } = router.query;
  const data = carsData[carId - 1];
  return <CarDetails {...data} />;
}

export default Details;
