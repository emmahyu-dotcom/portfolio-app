import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../App.module.css";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className={styles.navbar}>
      <div className={styles.navLinks}>
        <button className={styles.navBtn} onClick={() => navigate("/")}>home</button>
        <button className={styles.navBtn} onClick={() => navigate("/about")}>about</button>
        <button className={styles.navBtn} onClick={() => navigate("/works")}>works</button>
        <button className={styles.navBtn} onClick={() => navigate("/contact")}>contact</button>
      </div>
    </div>
  );
}