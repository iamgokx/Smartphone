import styles from "./Navbar.module.css";
import React, { useState, useEffect } from "react";
import { HiMiniBattery100 } from "react-icons/hi2";
import { MdSignalCellularAlt } from "react-icons/md";

const Navbar = () => {
  const [time, setTime] = useState(new Date());

  const updateClock = () => {
    setTime(new Date());
  };

  useEffect(() => {
    const intervalId = setInterval(updateClock, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;

  const date = new Date();

  const options = { day: "numeric", month: "short", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <div className={`${styles.navbar} mainNavbar`}>
      <div className={styles.navTopDiv}>
        <div className={styles.navTopDivLeft}>
          {formattedHours}:{minutes}:{ampm}
        </div>
        <div className={styles.navTopDivRight}>
          <span>5G</span>
          <MdSignalCellularAlt className={styles.battery} />
          <HiMiniBattery100 className={styles.battery} />

          <span className={styles.batteryIndication} >95%</span>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
