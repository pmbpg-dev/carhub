import css from "@/components/template/CarDetails.module.css";
import Image from "next/image";
import { Button, Surface } from "@heroui/react";
import Company from "../icons/Company";
import Location from "../icons/Location";
import Model from "../icons/Model";
import Calender from "../icons/Calender";
import Road from "../icons/Road";
import Money from "../icons/Money";

export default function CarDetails({
  id,
  name,
  model,
  year,
  distance,
  location,
  image,
  price,
  description,
}) {
  return (
    <div className={css.container}>
      <Image src={image} className={css.image} width={500} height={500} />
      <h3 className={css.header}>
        {name} {model}
      </h3>
      <Surface variant="secondary" className={css.details}>
        <div>
          <Company />
          <p>Company</p>
          <span>{name}</span>
        </div>
        <div>
          <Model />
          <p>Model</p>
          <span>{model}</span>
        </div>
        <div>
          <Calender />
          <p>First registration</p>
          <span>{year}</span>
        </div>
        <div>
          <Road />
          <p>kms driven</p>
          <span>{Number(distance)?.toLocaleString()}</span>
        </div>
      </Surface>
      <Surface variant="secondary" className={css.details}>
        <div>
          <Location />
          <p>Location</p>
          <span>{location}</span>
        </div>
      </Surface>
      <Surface variant="secondary" className={css.details}>
        <h3>Extra Information</h3>
        <p>{description}</p>
      </Surface>
      <Surface variant="secondary" className={css.details}>
        <div className={css.price}>
          <Money />
          <p>Price</p>
          <span>$ {price?.toLocaleString()}</span>
        </div>
      </Surface>
      <Button>Buy</Button>
    </div>
  );
}
