import styles from "./Messages.module.css";
import { FcGoogle } from "react-icons/fc";
import { IoIosSearch } from "react-icons/io";
import hero from "../../assets/Messages/hero.jpg";
import { IoMdContact } from "react-icons/io";
import {
  PiNumberCircleOneFill,
  PiNumberCircleNineFill,
  PiNumberCircleThreeFill,
  PiNumberCircleTwoFill,
  PiNumberCircleSevenFill,
} from "react-icons/pi";

import MessageNotification from "../MessageNotification/MessageNotification";

function Messages() {
  const messageList = [
    {
      name: "Gokul",
      message: "Thank You for visiting this site!!!",
      time: "9:15 am",
    },
    {
      name: "Gokul",
      message: "I hope you liked the clone.",
      time: "10:15 am",
    },
    {
      name: "Gokul",
      message: "I would love suggestions to improve this clone.",
      time: "11:15 am",
    },
    {
      name: "Gokul",
      message: "So do let me know.",
      time: "12:15 pm",
    },
    {
      name: "Clone Update",
      message: "Things are going smooth as of now while building each app.",
      time: "1:15 pm",
    },
    {
      name: "Animation Update",
      message: "Please add the animations for all components.",
      time: "2:15 pm",
    },
    {
      name: "Sleep",
      message: "8 hrs sleep calling !!! go to bed now.",
      time: "3:15 pm",
    },
    {
      name: "Knowledge Update",
      message: "React seems fun to work with.",
      time: "4:15 pm",
    },
    {
      name: "5757022",
      message: "Ah, we know these stupid messages.",
      time: "5:15 pm",
    },
    {
      name: "VZ-ViCARE",
      message: "Another annoying message to fill you message box.",
      time: "6:15 pm",
    },
    {
      name: "VZ-611123",
      message: "You have exhausted you data pack and energy.",
      time: "7:15 pm",
    },
    {
      name: "The End",
      message: "You have reached the end.",
      time: "7:15 pm",
    },
  ];

  const colorList=["yellow","rgb(98, 163, 13)","pink","rgb(81, 81, 255)","orange","lightblue","red"]

  return (
    <div className={styles.messageContainer}>
      <div className={styles.messageHeader}>
        <FcGoogle className={styles.googleIcon} />
        <span className={styles.searchMessage}>Message</span>
        <IoIosSearch className={styles.searchIcon} />
        <a href="https://www.instagram.com/go.kullllll/" target="_blank">
          <img src={hero} alt="" className={styles.messagesHeroImg} />
        </a>
      </div>

      <div className={styles.messagesDiv}>
        <div className={styles.messageTopPadding}></div>
        {messageList.map((message, index) => {
          return (
            <MessageNotification
              key={index}
              name={message.name}
              messageInfo={message.message}
              messageTime={message.time}
              iconColor={colorList[index % colorList.length]}></MessageNotification>
             
          );
        })}

        <div className={styles.messageFooter}></div>
      </div>

      <div className={styles.startChatBtn}></div>
    </div>
  );
}
export default Messages;
