import styles from "./MainPage.module.css";
import oldCar from "../../public/oldCar.png";
import Image from "next/image";
import Link from "next/link";

function MainPage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.mainText}>
          <h1>Fund, book, buy a car quick and easy!</h1>
          <p>
            Streamline your car buy experience with our effortless booking
            process.
          </p>
          <Link href="/cars">Explore Cars &gt;</Link>
        </div>
        <div className={styles.image}>
          <Image src={oldCar} alt="oldCar" />
        </div>
      </div>
      <marquee
        className=" bg-[var(--foreground)] text-[var(--background)]"
        direction="left"
        scrolldelay="100"
      >
        Car Hub Car Hub Car Hub Car Hub Car Hub Car Hub Car Hub Car Hub Car Hub
        Car Hub Car Hub Car Hub Car Hub Car Hub Car Hub Car Hub Car Hub Car Hub
        Car Hub
      </marquee>
    </>
  );
}

export default MainPage;
