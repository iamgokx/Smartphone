import styles from "./ContactName.module.css";

function ContactName({ name, phone, currentAlp,iconCol }) {
  const firstAlp = name.charAt(0);
  return (
    <div className={styles.contactDiv}>
      <div className={styles.firstLetter} >
        {currentAlp == undefined ? "‎‎ " : currentAlp}
      </div>

      <div className={styles.contactsDiv}>
        <span className={styles.contactIcon} style={{backgroundColor:iconCol}}>{firstAlp}</span>
        <span>{name}</span>
      </div>
    </div>
  );
}
export default ContactName;
