import { useState } from "react";
import styles from "./App.module.css";
import LockSCreen from "./Components/Lock Screen/LockScreen";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";

function App() {
  //password check
  const correctPin = "2024";
  const [lockScreenStatus, setLockScreenStatus] = useState(true);

  const checkPin = (value) => {
    if (correctPin === value) {
      setLockScreenStatus(false);
    }
  };

  const powerOff = () => {
    setLockScreenStatus(true);
  };

  return (
    <>
      <div className={styles.mobileFrame}>
        <div id={styles.mobileScreenContainer}>
          <div className={styles.mobileScreenScrollcont}>
            <div className={styles.cameraPunchHole}></div>

            <div className={styles.navDiv}>
              {!lockScreenStatus && <Navbar></Navbar>}
            </div>

            {lockScreenStatus == true ? (
              <LockSCreen checkPin={checkPin}></LockSCreen>
            ) : (
              <Home></Home>
            )}
          </div>
        </div>
        <div className={styles.powerBtn} onClick={powerOff}></div>
      </div>
    </>
  );
}

export default App;
