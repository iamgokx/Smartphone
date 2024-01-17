import React, { useState, useEffect } from "react";
import styles from "./Clock.module.css";
const Clock = () => {
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
  const formattedHours = hours % 12 || 12;

  const date = new Date();

  const options = { day: "numeric", month: "short", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <>
      <div className={styles.clock}>
        {formattedHours}:{minutes}
      </div>
      <div className={styles.clockDate}>{formattedDate}</div>
    </>
  );
};

export default Clock;
