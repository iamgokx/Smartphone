import { useRef, useState } from "react";
import Clock from "../LockScreenClock/Clock";
import styles from "./LockScreen.module.css";
import { FaCamera } from "react-icons/fa6";
import CameraComponent from "../Camera/CameraComponent";

function LockSCreen({ checkPin }) {
  const [keysClickedCounter, setCounter] = useState(0);
  const [camerIconStatus, setCameraIconStatus] = useState(true);

  const handleLockScreenClick = () => {
    const secondDiv = document.querySelector("." + styles.keypadscreen);
    setCameraIconStatus(false);
    if (secondDiv) {
      secondDiv.scrollIntoView({ behavior: "smooth" });
    }
  };

  const enteredPin = useRef("");

  const handleKeypress = (value) => {
    enteredPin.current = enteredPin.current + value;
    checkPin(enteredPin.current);
    setCounter((prevCounter) => Math.min(Math.max(prevCounter + 1, 0), 4));
    addPins(keysClickedCounter);
  };

  const keyboardPass = (event) => {
    if (event.key === "Backspace") {
      enteredPin.current = enteredPin.current.slice(0, -1);
      setCounter((prevCounter) => Math.min(Math.max(prevCounter - 1, 0), 4));
      deletePins(keysClickedCounter);
    } else {
      enteredPin.current = enteredPin.current + event.key;
      checkPin(enteredPin.current);
      setCounter((prevCounter) => Math.min(Math.max(prevCounter + 1, 0), 4));
      addPins(keysClickedCounter);
    }
  };

  const handleBackBtnClick = () => {
    enteredPin.current = enteredPin.current.slice(0, -1);
    setCounter((prevCounter) => Math.min(Math.max(prevCounter - 1, 0), 4));
    deletePins(keysClickedCounter);
  };

  const addPins = (value) => {
    if (value == 0) {
      const divs = document.getElementsByClassName(styles.key1);
      for (const div of divs) {
        div.style.backgroundColor = "white";
      }
    } else if (value == 1) {
      const divs = document.getElementsByClassName(styles.key2);
      for (const div of divs) {
        div.style.backgroundColor = "white";
      }
    } else if (value == 2) {
      const divs = document.getElementsByClassName(styles.key3);
      for (const div of divs) {
        div.style.backgroundColor = "white";
      }
    } else if (value == 3) {
      const divs = document.getElementsByClassName(styles.key4);
      for (const div of divs) {
        div.style.backgroundColor = "white";
      }
    }
  };

  const deletePins = (value) => {
    if (value == 4) {
      const divs = document.getElementsByClassName(styles.key4);
      for (const div of divs) {
        div.style.backgroundColor = "transparent";
      }
    } else if (value == 3) {
      const divs = document.getElementsByClassName(styles.key3);
      for (const div of divs) {
        div.style.backgroundColor = "transparent";
      }
    } else if (value == 2) {
      const divs = document.getElementsByClassName(styles.key2);
      for (const div of divs) {
        div.style.backgroundColor = "transparent";
      }
    } else if (value == 1) {
      const divs = document.getElementsByClassName(styles.key1);
      for (const div of divs) {
        div.style.backgroundColor = "transparent";
      }
    }
  };

  const [clockStatus, setClockStatus] = useState(true);
  const [cameraComponenetStatus, setCameraComponenetStatus] = useState(false);
  const CamerabuttonClick = (event) => {
    event.stopPropagation();
    setClockStatus(false);
    const camDiv = document.getElementById(styles.cameraAppDiv);
    camDiv.style.backgroundColor = "black";
    camDiv.style.borderRadius = "0";
    camDiv.style.margin = "0px";
    camDiv.style.width = "400px";
    camDiv.style.height = "760px";
    setCameraComponenetStatus(true);
  };

  return (
    <div className={styles.LockScreenContainer}>
      <div className={styles.cont} onClick={handleLockScreenClick}>
        <section className={styles.clockContainer}>
          <div className={styles.clockDiv}>
            {clockStatus && <Clock></Clock>}
          </div>
        </section>
        <div
          className={styles.cameraAppDiv}
          id={styles.cameraAppDiv}
          onClick={CamerabuttonClick}>
          {!cameraComponenetStatus && camerIconStatus && (
            <FaCamera className={styles.lockScreenCameraIcon} />
          )}

          {cameraComponenetStatus && <CameraComponent></CameraComponent>}
        </div>

        <section
          className={styles.passwordScreen + " " + styles.keypadscreen}
          tabIndex={0}
          onKeyDown={keyboardPass}>
          <p>Plese enter your pin</p>

          <div className={styles.lockScreenPassKeysContainer}>
            <div className={styles.passwordKeysClicked}>
              <div className={styles.key + " " + styles.key1}></div>
              <div className={styles.key + " " + styles.key2}></div>
              <div className={styles.key + " " + styles.key3}></div>
              <div className={styles.key + " " + styles.key4}></div>
            </div>

            <div className={styles.passwordKeypad}>
              <div
                className={styles.passwordKeypadKeys}
                onClick={() => handleKeypress(1)}>
                <span className={styles.keypadNum}>1</span>
                <span>&zwnj;</span>
              </div>
              <div
                className={styles.passwordKeypadKeys}
                onClick={() => handleKeypress(2)}>
                <span className={styles.keypadNum}>2</span>
                <span>ABC</span>
              </div>
              <div
                className={styles.passwordKeypadKeys}
                onClick={() => handleKeypress(3)}>
                <span className={styles.keypadNum}>3</span>
                <span>DEF</span>
              </div>
              <div
                className={styles.passwordKeypadKeys}
                onClick={() => handleKeypress(4)}>
                <span className={styles.keypadNum}>4</span>
                <span>GHI</span>
              </div>
              <div
                className={styles.passwordKeypadKeys}
                onClick={() => handleKeypress(5)}>
                <span className={styles.keypadNum}>5</span>
                <span>JKL</span>
              </div>
              <div
                className={styles.passwordKeypadKeys}
                onClick={() => handleKeypress(6)}>
                <span className={styles.keypadNum}>6</span>
                <span>MNO</span>
              </div>
              <div
                className={styles.passwordKeypadKeys}
                onClick={() => handleKeypress(7)}>
                <span className={styles.keypadNum}>7</span>
                <span>PQRS</span>
              </div>
              <div
                className={styles.passwordKeypadKeys}
                onClick={() => handleKeypress(8)}>
                <span className={styles.keypadNum}>8</span>
                <span>TUV</span>
              </div>
              <div
                className={styles.passwordKeypadKeys}
                onClick={() => handleKeypress(9)}>
                <span className={styles.keypadNum}>9</span>
                <span>+</span>
              </div>
              <div
                className={`${styles.passwordKeypadKeys} ${styles.avoidKey}`}>
                <span>&zwnj;</span>
                <span>&zwnj;</span>
              </div>
              <div
                className={styles.passwordKeypadKeys}
                onClick={() => handleKeypress(0)}>
                <span className={styles.keypadNum}>0</span>
                <span>&zwnj;</span>
              </div>
              <div
                className={styles.passwordKeypadKeys}
                onClick={handleBackBtnClick}>
                <span>BACK</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default LockSCreen;
