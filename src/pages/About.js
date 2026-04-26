import React from "react";
import { motion } from "framer-motion";
import styles from "../App.module.css";
import profile from "../assets/profile.jpg";

export default function About() {
  return (
    <motion.div
      className={styles.aboutPage}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >

      <div className={styles.aboutHeader}>
        <div className={styles.profileSmall}>
          <img src={profile} alt="profile" />
        </div>

        <div>
          <h3 className={styles.title}>Emma Nguyen</h3>
          <p className={styles.subtitle}>Digital Media Student</p>
        </div>
      </div>

      <div className={styles.aboutScroll}>

        <p className={styles.aboutIntro}>
          i'm emma, a student studying digital media, i enjoy...
        </p>

        <p className={styles.aboutText}>
          • filming videos about things i like,<br />
          • creating digital experiences,<br />
          • UI design,<br />
          • and building interactive web + mobile projects!
        </p>

        <h4 className={styles.sectionTitle}>EDUCATION</h4>

        <p className={styles.aboutText}>
          <b>University of Central Florida</b><br />
          Bachelor of Arts in Digital Media
        </p>

        <p className={styles.aboutText}>
          <b>Valencia College</b><br />
          Associate of Arts Degree
        </p>

        <h4 className={styles.sectionTitle}>SKILLS</h4>

        <div className={styles.skills}>
          <span>React</span>
          <span>React Native</span>
          <span>PHP</span>
          <span>HTML/CSS</span>
          <span>Figma</span>
          <span>JavaScript</span>
        </div>

        <h4 className={styles.sectionTitle}>INTERESTS</h4>

        <div className={styles.interests}>
          <div className={styles.interestItem}>🎨 Creative Services</div>
          <div className={styles.interestItem}>💻 Web / Technology</div>
          <div className={styles.interestItem}>📢 Marketing</div>
        </div>

      </div>

    </motion.div>
  );
}