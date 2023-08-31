import styles from "./SectionHero.module.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function SectionHero() {
  return (
    <div className={styles.container}>
      <div>
        <p>
          A Fake store rest API shopping website prototype, where you can view
          and modify the Products fetched from API !
        </p>
        <Link to="/allProducts">
          <Button val="View All Products" />
        </Link>
      </div>
      <img src="../static/images/intro.svg" alt="intro" />
    </div>
  );
}

export default SectionHero;
