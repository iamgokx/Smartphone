import styles from "./MessageNotification.module.css";
import { IoMdContact } from "react-icons/io";
import { PiNumberCircleNineFill } from "react-icons/pi";
function MessageNotification({ name, messageInfo, messageTime,iconColor}) {
  return (
    <div className={styles.messagesNotifications}>
      <IoMdContact
      style={{ color: iconColor }}
        className={`${styles.messageContactIcon} ${styles.contactIcon}`}
      />
      <div className={styles.messageNotificationsContent}>
        <div className={styles.messageContent}>
          <p>{name}</p>
          <p>{messageInfo}</p>
        </div>
      </div>
      <span className={styles.messageTime}>
        {messageTime}
        <PiNumberCircleNineFill className={styles.notificationNumber} />
      </span>
    </div>
  );
}
export default MessageNotification;
