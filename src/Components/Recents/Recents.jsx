import styles from "./Recents.module.css";
import { useState } from "react";
import RecentCall from "../RecentCall/RecentCall";
function Recents() {
  const callList = [
    {
      name: "Dad",
      type: "In",
      time: "Mon",
    },
    {
      name: "Spam",
      type: "In",
      time: "Mon",
    },
    {
      name: "Chat GPT",
      type: "Out",
      time: "Tue",
    },
    {
      name: "Vi",
      type: "In",
      time: "Tue",
    },
    {
      name: "Aii",
      type: "Out",
      time: "Tue",
    },
    {
      name: "Badminton",
      type: "In",
      time: "Wed",
    },
    {
      name: "Bugs",
      type: "In",
      time: "Wed",
    },
    {
      name: "Errors",
      type: "In",
      time: "Wed",
    },
    {
      name: "Problems",
      type: "In",
      time: "Wed",
    },
    {
      name: "Problems",
      type: "In",
      time: "Wed",
    },
    {
      name: "Problems",
      type: "In",
      time: "Wed",
    },
    {
      name: "Problems",
      type: "In",
      time: "Wed",
    },
    {
      name: "Problems",
      type: "In",
      time: "Wed",
    },
    {
      name: "Problems",
      type: "In",
      time: "thu",
    },
    {
      name: "Problems",
      type: "In",
      time: "Wed",
    },
  ];

  const colorList = [
    "yellow",
    "rgb(98, 163, 13)",
    "pink",
    "rgb(81, 81, 255)",
    "orange",
    "lightblue",
    "red",
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleCallClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className={styles.recentsDiv}>
      <div className={styles.recentsScrollDiv}>
        {callList.map((person, index) => (
          <RecentCall
            key={index}
            index={index}
            name={person.name}
            type={person.type}
            time={person.time}
            iconCol={colorList[index % colorList.length]}
            isOpen={index === openIndex}
            openCall={() => handleCallClick(index)}></RecentCall>
        ))}
      </div>
    </div>
  );
}
export default Recents;
