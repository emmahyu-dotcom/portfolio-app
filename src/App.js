import React from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import styles from "./App.module.css";

import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

const order = ["/", "/about", "/works", "/contact"];

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const currentIndex = order.indexOf(location.pathname);

  const goBack = () => {
    if (currentIndex > 0) navigate(order[currentIndex - 1]);
  };

  const goForward = () => {
    if (currentIndex < order.length - 1) navigate(order[currentIndex + 1]);
  };

  return (
    <div className={styles.appLayout}>

      <Navbar />

      <div className={styles.container}>
        <div className={styles.window}>

          <div className={styles.windowBar}>
            <div className={styles.leftIcons}>
              <button className={styles.iconBtn} onClick={goBack}>
                <FaArrowLeft />
              </button>

              <button className={styles.iconBtn} onClick={goForward}>
                <FaArrowRight />
              </button>
            </div>

            <div className={styles.urlBox}>
              emma.com{location.pathname}
              <span className={styles.starInside}>★</span>
            </div>

            <div className={styles.rightIcons}>
              <button className={styles.iconBtn} onClick={() => navigate("/")}>
                <FaTimes />
              </button>
            </div>
          </div>

          <div className={styles.scroll}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/works" element={<Works />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>

        </div>
      </div>

      <Footer />

    </div>
  );
}