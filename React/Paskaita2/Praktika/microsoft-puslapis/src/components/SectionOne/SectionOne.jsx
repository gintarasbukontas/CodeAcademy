import styles from "./SectionOne.module.css";
import classnames from "classnames";

export default function SectionOne() {
  return (
    <section className={"padding2 bgGray"}>
      <img
        className={classnames(styles.img)}
        src="https://cdn.britannica.com/10/152310-050-5A09D74A/Sand-dunes-Sahara-Morocco-Merzouga.jpg"
        alt="Desert"
      />
    </section>
  );
}
