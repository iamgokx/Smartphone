import { FcDoughnutChart } from "react-icons/fc";
import styles from "./LockScreenNotification.module.css";
import { IoIosSettings } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
function LockScreenNotification() {
  let notificationFlag = false;
  const handleArrowClick = (event) => {
    event.stopPropagation();
    const notificationDiv = document.querySelector(
      "." + styles.notificatonCont
    );

    const message = document.querySelector("." + styles.message);
    const settingsIcon = document.querySelector("." + styles.settingsIcon);
    if (notificationFlag == false) {
      notificationDiv.style.height = "100px";
      settingsIcon.classList.add(styles.settingsNoticicationOpen);
      notificationFlag = true;
      setTimeout(() => {
        message.innerText = "Your password is 2024."
      }, 100);
    } else if (notificationFlag == true) {
      message.innerText = "Tap to view."

      notificationDiv.style.height = "90px";
      settingsIcon.classList.remove(styles.settingsNoticicationOpen);
      notificationFlag = false;
    }
  };

  const handleNotificationClick = (event) => {
    event.stopPropagation();
    const notificationDiv = document.querySelector(
      "." + styles.notificatonCont
    );

    const message = document.querySelector("." + styles.message);
    const settingsIcon = document.querySelector("." + styles.settingsIcon);
    if (notificationFlag == false) {
      notificationDiv.style.height = "100px";
      settingsIcon.classList.add(styles.settingsNoticicationOpen);
      notificationFlag = true;
      setTimeout(() => {
        message.innerText = "Your password is 2024."
      }, 100);
    } else if (notificationFlag == true) {
      message.innerText = "Tap to view."

      notificationDiv.style.height = "90px";
      settingsIcon.classList.remove(styles.settingsNoticicationOpen);
      notificationFlag = false;
    }
  };

  return (
    <div className={styles.notificatonCont} onClick={handleNotificationClick}>
      <div className={styles.messageContOne}>
        <IoIosSettings className={styles.settingsIcon}></IoIosSettings>
        <div className={styles.notificationContent}>
          <p>
            <b>System</b>
          </p>
          <span className={styles.message}>Tap to open.</span>
        </div>
      </div>

      <span className={styles.iconSpan} onClick={handleArrowClick}>
        {" "}
        <IoIosArrowDown className={styles.downArrow} />
      </span>
    </div>
  );
}
export default LockScreenNotification;
