import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "../App.module.css";
import profile from "../assets/profile.jpg";
import { FaComments, FaBriefcase, FaEnvelope } from "react-icons/fa";

export default function Home() {
  const navigate = useNavigate();

  return (
    <motion.div className={styles.content}>
      <img src={profile} className={styles.profileCircle} alt="" />
      <h2>hi! i'm emma</h2>

      <div className={styles.menu}>
        <button onClick={() => navigate("/about")}>
          <div className={styles.iconCircle}><FaComments /></div>
          <span>about</span>
        </button>

        <button onClick={() => navigate("/works")}>
          <div className={styles.iconCircle}><FaBriefcase /></div>
          <span>works</span>
        </button>

        <button onClick={() => navigate("/contact")}>
          <div className={styles.iconCircle}><FaEnvelope /></div>
          <span>contact</span>
        </button>
      </div>
    </motion.div>
  );
}