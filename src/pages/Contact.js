import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "../App.module.css";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      alert("Please enter a valid email");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setEmail("");
    }, 800);
  };

  return (
    <motion.div
      className={styles.contactPage}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className={styles.contactHeader}>
        <h2 className={styles.title}>Work with me!</h2>
        <p className={styles.subtitle}>please keep in touch and a pleasure to work with you :)</p>
      </div>

      <form onSubmit={submit} className={styles.contactForm}>
        <input
          className={styles.input}
          type="email"
          placeholder="your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit" className={styles.sendBtn}>
          {loading ? "Sending..." : "Send"}
        </button>
      </form>

      {submitted && (
        <p className={styles.successMsg}>
          Message sent successfully!
        </p>
      )}

      <div className={styles.contactContent}>
        <a href="mailto:emmanguyen611@email.com" className={styles.card}>
            <div className={styles.label}>EMAIL</div>
            <div className={styles.value}>emmanguyen611@email.com</div>
        </a>

        <div className={styles.card}>
          <div className={styles.label}>INSTAGRAM</div>
          <div className={styles.value}>@gem_hyu</div>
        </div>

        <div className={styles.card}>
          <div className={styles.label}>LINKEDIN</div>
          <div className={styles.value}>linkedin.com/blankForNow</div>
        </div>

        <div className={styles.card}>
          <div className={styles.label}>LOCATION</div>
          <div className={styles.value}>Orlando, Florida</div>
        </div>

      </div>
    </motion.div>
  );
}