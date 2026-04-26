import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "../App.module.css";
import ex from "../assets/exercise.jpg";
import rex from "../assets/react_exercise.jpg";
import quiz from "../assets/quiz.jpg";
import recipe from "../assets/recipe.jpg";

export default function Works() {
  const open = (url) => window.open(url);

  return (
    <motion.div className={styles.page}>
      <div className={styles.contactHeader}>
        <div className={styles.title}>
          Contact me via my{" "}
          <Link to="/contact" style={{ textDecoration: "underline", color: "hsl(347, 21%, 66%)" }}>
            work email!
          </Link>
        </div>

        <div className={styles.subtitle}>
          These are the projects I have done in my classes so far.
        </div>
      </div>

      <div className={styles.scroll}>

        {[ex, rex, quiz, recipe].map((img, i) => (
          <motion.div
            key={i}
            className={styles.card}
            whileHover={{ scale: 1.03 }}
            onClick={() =>
              open([
                "https://emmahyu-dotcom.github.io/react-exercise-tracker/",
                "https://emmahyu-dotcom.github.io/ExerciseApp/",
                "https://emmahyu-dotcom.github.io/QuizApp/",
                "https://www.figma.com/proto/10RbrzELwmZWIotn0ivtuB/UX-UI-prototype?node-id=68-367&starting-point-node-id=68%3A367&t=JhPZhei8J1BVevT8-1"
              ][i])
            }
          >
            <img src={img} alt="project" />
            <div>
              <div className={styles.label}>PROJECT</div>
              <div className={styles.value}>
                {["React Exercise App", "React Native App", "Quiz App", "Recipe Prototype"][i]}
              </div>
            </div>
          </motion.div>
        ))}

      </div>
    </motion.div>
  );
}