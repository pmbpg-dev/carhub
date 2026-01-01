import CardBox from "../modules/Card";
import styles from "./CarsPage.module.css";

function CarsPage({ data }) {
  return (
    <div className={styles.container}>
      {data?.map((car) => (
        <CardBox key={car.id} {...car} />
      ))}
    </div>
  );
}

export default CarsPage;
