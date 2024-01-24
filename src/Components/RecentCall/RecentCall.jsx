import styles from "./RecentCall.module.css";
import { IoCallOutline } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import { RiSpam2Fill } from "react-icons/ri";
import { GoArrowDownLeft } from "react-icons/go";
import { IoMdContact } from "react-icons/io";
import { MdHeight } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { MdOutlineMessage } from "react-icons/md";
import { LuHistory } from "react-icons/lu";

function RecentCall({ name, type, time, index, iconCol, isOpen, openCall }) {
  const callIndex = styles[index];
  return (
    <div
      className={`${styles.recentCall} ${isOpen ? styles.opened : ""}`}
      onClick={() => openCall(callIndex)}>
      <div className={styles.recentTop}>
        <span className={styles.personIcon}>
          <IoMdContact style={{ color: iconCol }} />
        </span>
        <div className={styles.namePhone}>
          <span>{name}</span>
          <span>
            {type === "Out" ? (
              <GoArrowUpRight className={styles.arrowIcon} />
            ) : (
              <GoArrowDownLeft className={styles.arrowIcon} />
            )}
            mobile . {time}
          </span>
        </div>
        <IoCallOutline className={styles.callIcon} />
      </div>

      <div className={`${isOpen ? styles.recentBottom : styles.hide}`}  >
        <div className={styles.callOptions}>
        <BiVideo className={styles.bottomIcon}/>

          <span>Video call</span>
        </div>
        <div className={styles.callOptions}>
        <MdOutlineMessage className={styles.bottomIcon}/>

          <span>Message</span>
        </div>
        <div className={styles.callOptions}>
        <LuHistory className={styles.bottomIcon}/>

          <span>History</span>
        </div>
      </div>
    </div>
  );
}
export default RecentCall;
