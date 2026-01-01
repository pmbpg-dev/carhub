import Link from "next/link";
import styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href={"/"} className={styles.logo}>
          Car
          <span className=" text-[var(--maincolor)]">Hub</span>
        </Link>
        <div>
          <Link href={"/"} className={styles.btnLink}>
            Home
          </Link>
          <Link href={"/cars"} className={styles.btnLink}>
            Cars
          </Link>
        </div>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>hand coded by pmbpg</p>
      </footer>
    </>
  );
}
