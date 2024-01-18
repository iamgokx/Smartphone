import styles from "./NavigationKeys.module.css";
import { FaSquare } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa6";
import { IoCaretBackOutline } from "react-icons/io5";
function NavigationKeys({handleBackBtnClick}) {
  return (
    <div className={styles.navigationCont}>
      <div className={styles.minimizeBtn}>
        <FaSquare />
      </div>
      <div className={styles.closeBtn}>
        <div className={styles.circleBorder}>
          <FaCircle className={styles.closeBtnIcon} />
        </div>
      </div>
      <div className={styles.backBtn} onClick={handleBackBtnClick}>
        <IoCaretBackOutline className={styles.backBtbIcon} />
      </div>
    </div>
  );
}
export default NavigationKeys;
