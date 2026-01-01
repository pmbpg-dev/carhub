import Image from "next/image";
import styles from "./Card.module.css";
import Location from "../icons/Location";
import { useRouter } from "next/router";
import { Chip, Card } from "@heroui/react";

function CardBox(props) {
  const { id, name, model, year, distance, location, image, price } = props;
  const router = useRouter();
  return (
    <Card
      className={styles.container}
      onClick={() => router.push(`/cars/${id}`)}
    >
      <Image src={image} alt={name} width={400} height={400} />
      <h4 className={styles.title}>{`${name} ${model}`}</h4>
      <p className={styles.detail}>{`${year} . ${distance}KM`}</p>
      <div className={styles.footer}>
        <Chip className={styles.price}>$ {price}</Chip>
        <Chip className={styles.location}>
          <p>{location}</p>
          <Location />
        </Chip>
      </div>
    </Card>
  );
}

export default CardBox;
