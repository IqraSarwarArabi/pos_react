import styles from "./NavBar.module.css";
import Button from "../Button/Button";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/allProducts", text: "All Products" },
    { to: "/new", text: "Add New" },
  ];

  return (
    <div className={styles.navbar}>
      <div className={styles.nav}>
        <img src="../static/images/logo.png" alt="logo" />
        <p>Fake Store</p>
      </div>
      <div className={styles.nav}>
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.to}
            className={({ isActive }) => (isActive && styles.active) || ""}
          >
            {link.text}
          </NavLink>
        ))}
      </div>
      <div className={styles.nav}>
        <Link to="https://github.com/keikaavousi/fake-store-api">
          <Button val="View API Github" />
        </Link>
        <Link link="https://fakestoreapi.com/docs">
          <Button val="View API Docs" />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
