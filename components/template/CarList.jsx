import css from "@/components/template/CarList.module.css";
import { useRouter } from "next/router";
import Back from "../icons/Back";
import { Button } from "@heroui/react";
import CardBox from "../modules/Card";
export default function CarList({ data }) {
  const router = useRouter();
  return (
    <div className={css.container}>
      <Button className={css.back} onClick={() => router.back()}>
        <Back />
        <p>Back</p>
      </Button>
      <div className={css.cards}>
        {data?.map((car) => (
          <CardBox key={car.id} {...car} />
        ))}
      </div>
    </div>
  );
}
