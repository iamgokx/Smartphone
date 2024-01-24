import styles from "./Favourites.module.css";
import vid from "../../assets/Phone/vlc.mp4";
function Favourites() {
  return (
    <div className={styles.favouritesDiv}>
      <div className={styles.vidDiv}><video className={styles.favouritesVideo} src={vid} autoPlay loop></video></div>
      <p>Call your favourite contacts with just one tap</p>
      <span>
        <b>Add a favourite</b>
      </span>
    </div>
  );
}
export default Favourites;
