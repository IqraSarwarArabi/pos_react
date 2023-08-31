import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { loadLimitedProducts } from "../../utils/api/load";
import {
  SectionHero,
  NavBar,
  Products,
  Button,
  Footer,
  Loader,
} from "../../components/index";

function Home() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    loadLimitedProducts(setProducts, 6);
  }, []);

  return (
    <div className={styles.App}>
      <NavBar />
      <SectionHero />
      <div className={styles.products}>
        <h1> Few Demo Products</h1>
        {products === null && <Loader />}
        {products !== null && <Products products={products} />}
        <div>
          <Link to="/allProducts">
            <Button val="Load All Products" center={true} />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
