import css from "@/components/modules/Categories.module.css";
import { Surface } from "@heroui/react";
import Link from "next/link";
import Sedan from "../icons/Sedan";
import Suv from "../icons/Suv";
import Hatchback from "../icons/Hatchback";
import Sport from "../icons/Sport";

export default function Categories() {
  return (
    <div className={css.container}>
      <Surface className={css.card}>
        <div>
          <Link href={"/categories/sedan"}>
            <p>sedan</p>
            <Sedan />
          </Link>
        </div>
        <div>
          <Link href={"/categories/suv"}>
            <p>SUV</p>
            <Suv />
          </Link>
        </div>
        <div>
          <Link href={"/categories/hatchback"}>
            <p>Hatchback</p>
            <Hatchback />
          </Link>
        </div>
        <div>
          <Link href={"/categories/sport"}>
            <p>Sport cars</p>
            <Sport />
          </Link>
        </div>
      </Surface>
    </div>
  );
}
