import styles from "./Phone.module.css";
import { IoSearch } from "react-icons/io5";
import { MdOutlineMicNone } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRef, useState, useEffect } from "react";
import ContactName from "../ContactName/ContactName";
import Favourites from "../Favourites/Favourites";
import Recents from "../Recents/Recents";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { LuDot } from "react-icons/lu";
import { IoBackspaceOutline } from "react-icons/io5";

function Phone() {
  const phoneContactsList = [
    {
      name: "Aaron Adams",
      phone: "1234567890",
    },
    {
      name: "Abigail Baker",
      phone: "1234567890",
    },
    {
      name: "Adam Carter",
      phone: "1234567890",
    },
    {
      name: "Addison Clark",
      phone: "1234567890",
    },
    {
      name: "Adrian Davis",
      phone: "1234567890",
    },
    {
      name: "Aiden Edwards",
      phone: "1234567890",
    },
    ,
    {
      name: "Adams Aaron",
      phone: "1234567890",
    },
    {
      name: "Baker Abigail",
      phone: "1234567890",
    },
    {
      name: "Carter Adam",
      phone: "1234567890",
    },
    {
      name: "Clark Addison",
      phone: "1234567890",
    },
    {
      name: "Davis Adrian",
      phone: "1234567890",
    },
    {
      name: "Edwards Aiden",
      phone: "1234567890",
    },
    {
      name: "Ellis Alexander",
      phone: "1234567890",
    },
    {
      name: "Fisher Alice",
      phone: "1234567890",
    },
    {
      name: "Garcia Amelia",
      phone: "1234567890",
    },
    {
      name: "Harris Andrew",
      phone: "1234567890",
    },
    {
      name: "Hayes Anna",
      phone: "1234567890",
    },
    {
      name: "Ingram Anthony",
      phone: "1234567890",
    },
    {
      name: "Jenkins Ariana",
      phone: "1234567890",
    },
    {
      name: "Knight Ashley",
      phone: "1234567890",
    },
    {
      name: "Lawson Ava",
      phone: "1234567890",
    },
    {
      name: "Mason Benjamin",
      phone: "1234567890",
    },
    {
      name: "Mitchell Blake",
      phone: "1234567890",
    },
    {
      name: "Nelson Bradley",
      phone: "1234567890",
    },
    {
      name: "Owens Brianna",
      phone: "1234567890",
    },
    {
      name: "Parker Caleb",
      phone: "1234567890",
    },
    {
      name: "Quinn Caroline",
      phone: "1234567890",
    },
    {
      name: "Rivera Carter",
      phone: "1234567890",
    },
    {
      name: "Ross Charlotte",
      phone: "1234567890",
    },
    {
      name: "Simmons Chloe",
      phone: "1234567890",
    },
    {
      name: "Thompson Christopher",
      phone: "1234567890",
    },
    {
      name: "Turner Clara",
      phone: "1234567890",
    },
    {
      name: "Underwood Connor",
      phone: "1234567890",
    },
    {
      name: "Vargas Daniel",
      phone: "1234567890",
    },
    {
      name: "Vasquez David",
      phone: "1234567890",
    },
    {
      name: "Walker Elena",
      phone: "1234567890",
    },
    {
      name: "Xavier Eli",
      phone: "1234567890",
    },
    {
      name: "Wallace Elijah",
      phone: "1234567890",
    },
    {
      name: "Young Elizabeth",
      phone: "1234567890",
    },
    {
      name: "Armstrong Emily",
      phone: "1234567890",
    },
    {
      name: "Xavier Emma",
      phone: "1234567890",
    },
    {
      name: "Baker Ethan",
      phone: "1234567890",
    },
    {
      name: "Davis Eva",
      phone: "1234567890",
    },
    {
      name: "Edwards Evelyn",
      phone: "1234567890",
    },
    {
      name: "Ellis Gabriel",
      phone: "1234567890",
    },
    {
      name: "Garcia Grace",
      phone: "1234567890",
    },
    {
      name: "Grant Hailey",
      phone: "1234567890",
    },
    {
      name: "Harris Harper",
      phone: "1234567890",
    },
    {
      name: "Hayes Henry",
      phone: "1234567890",
    },
    {
      name: "Ingram Hudson",
      phone: "1234567890",
    },
    {
      name: "Jenkins Isabella",
      phone: "1234567890",
    },
    {
      name: "Knight Jack",
      phone: "1234567890",
    },
    {
      name: "Lawson Jackson",
      phone: "1234567890",
    },
    {
      name: "Mason James",
      phone: "1234567890",
    },
    {
      name: "Mitchell Jasmine",
      phone: "1234567890",
    },
    {
      name: "Nelson Jayden",
      phone: "1234567890",
    },
    {
      name: "Owens Joseph",
      phone: "1234567890",
    },
    {
      name: "Parker Joshua",
      phone: "1234567890",
    },
    {
      name: "Quinn Julia",
      phone: "1234567890",
    },
    {
      name: "Rivera Justin",
      phone: "1234567890",
    },
    {
      name: "Ross Katherine",
      phone: "1234567890",
    },
    {
      name: "Simmons Kayla",
      phone: "1234567890",
    },
    {
      name: "Thompson Kevin",
      phone: "1234567890",
    },
    {
      name: "Turner Landon",
      phone: "1234567890",
    },
    {
      name: "Underwood Lauren",
      phone: "1234567890",
    },
    {
      name: "Vargas Leah",
      phone: "1234567890",
    },
    {
      name: "Vasquez Liam",
      phone: "1234567890",
    },
    {
      name: "Walker Lily",
      phone: "1234567890",
    },
    {
      name: "Wallace Logan",
      phone: "1234567890",
    },
    {
      name: "Young Lucy",
      phone: "1234567890",
    },
    {
      name: "Adams Luna",
      phone: "1234567890",
    },
    {
      name: "Baker Madeline",
      phone: "1234567890",
    },
    {
      name: "Mason Carter",
      phone: "1234567890",
    },
    {
      name: "Clark Matthew",
      phone: "1234567890",
    },
    {
      name: "Davis Mia",
      phone: "1234567890",
    },
    {
      name: "Edwards Michael",
      phone: "1234567890",
    },
    {
      name: "Fisher Michelle",
      phone: "1234567890",
    },
    {
      name: "Garcia Nathan",
      phone: "1234567890",
    },
    {
      name: "Harris Natalie",
      phone: "1234567890",
    },
    {
      name: "Hayes Nathaniel",
      phone: "1234567890",
    },
    {
      name: "Ingram Noah",
      phone: "1234567890",
    },
    {
      name: "Jenkins Nora",
      phone: "1234567890",
    },
    {
      name: "Knight Olivia",
      phone: "1234567890",
    },
    {
      name: "Lawson Owen",
      phone: "1234567890",
    },
    {
      name: "Mason Paige",
      phone: "1234567890",
    },
    {
      name: "Mitchell Parker",
      phone: "1234567890",
    },
    {
      name: "Nelson Penelope",
      phone: "1234567890",
    },
    {
      name: "Owens Peyton",
      phone: "1234567890",
    },
    {
      name: "Parker Rachel",
      phone: "1234567890",
    },
    {
      name: "Quinn Riley",
      phone: "1234567890",
    },
    {
      name: "Rivera Robert",
      phone: "1234567890",
    },
    {
      name: "Ross Ruby",
      phone: "1234567890",
    },
    {
      name: "Simmons Ryan",
      phone: "1234567890",
    },
    {
      name: "Thompson Samuel",
      phone: "1234567890",
    },
    {
      name: "Turner Scarlett",
      phone: "1234567890",
    },
    {
      name: "Underwood Sophia",
      phone: "1234567890",
    },
    {
      name: "Vargas Stella",
      phone: "1234567890",
    },
    {
      name: "Vasquez Thomas",
      phone: "1234567890",
    },
    {
      name: "Walker Tyler",
      phone: "1234567890",
    },
    {
      name: "Xavier Victoria",
      phone: "1234567890",
    },
    {
      name: "Wallace Vincent",
      phone: "1234567890",
    },
    {
      name: "Young William",
      phone: "1234567890",
    },
    {
      name: "Adams Xavier",
      phone: "1234567890",
    },
    {
      name: "Baker Zoe",
      phone: "1234567890",
    },
    {
      name: "Carter Zoey",
      phone: "1234567890",
    },
    {
      name: "Davis Zoey",
      phone: "1234567890",
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

  const currentChar = useRef("");

  const handleAlpChange = (char) => {
    if (currentChar.current != char) {
      currentChar.current = char;
      return currentChar.current;
    }
  };

  const [activeDivStyle, setActiveDivStyle] = useState({
    left: "76%",
    top: "6%",
  });

  const [contactDivStatus, setContactDivStatus] = useState(true);
  const [recentsDivStatus, setRecentsDivStatus] = useState(false);
  const [favouritesDivStatus, setFavouritesDivStatus] = useState(false);

  const handlePhoneOptionsClick = (activeClass) => {
    if (activeClass === "favourites") {
      setContactDivStatus(false);
      setRecentsDivStatus(false);
      setFavouritesDivStatus(true);
      setActiveDivStyle({
        left: "10%",
        top: "6%",
      });
    } else if (activeClass === "recents") {
      setContactDivStatus(false);
      setRecentsDivStatus(true);
      setFavouritesDivStatus(false);
      setActiveDivStyle({
        left: "44%",
        top: "6%",
      });
    } else if (activeClass === "contacts") {
      setContactDivStatus(true);
      setRecentsDivStatus(false);
      setFavouritesDivStatus(false);
      setActiveDivStyle({
        left: "76%",
        top: "6%",
      });
    }
  };

  const display = document.querySelector("." + styles.display);
  const handleKeypress = (key) => {
    display.innerText += key;
  };

  const handleBackPress = () => {
    const currentText = display.innerText;
    display.innerText = currentText.slice(0, -1);
  };

  const handleNumBtnClick = () => {
    const numpadDiv = document.querySelector("." + styles.numnerPad);
    numpadDiv.style.height = "53%";
  };

  return (
    <div className={styles.phoneContainer}>
      <div className={styles.phoneHeaderDiv}>
        <div className={styles.phoneSearch}>
          <IoSearch className={styles.phoneHeaderIcons} />
          <input
            type="text"
            placeholder="Search contacts and places"
            className={styles.searchInput}
          />
          <MdOutlineMicNone className={styles.phoneHeaderIcons} />
          <BsThreeDotsVertical className={styles.phoneHeaderIcons} />
        </div>
      </div>

      <div className={styles.phoneDiv}>
        <div className={styles.phoneScrolldiv}>
          {favouritesDivStatus && <Favourites></Favourites>}

          {recentsDivStatus && <Recents></Recents>}

          {contactDivStatus && (
            <div className={styles.contactsDiv}>
              {phoneContactsList.map((contact, index) => (
                <ContactName
                  key={index}
                  iconCol={colorList[index % colorList.length]}
                  name={contact.name}
                  phone={contact.phone}
                  currentAlp={handleAlpChange(
                    contact.name.charAt(0)
                  )}></ContactName>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={styles.phoneOptionDiv}>
        <div
          className={styles.phoneOptions + " " + styles.favourites}
          onClick={() => handlePhoneOptionsClick("favourites")}>
          <span className={styles.phoneOptionsIcons}>
            {" "}
            <FaRegStar />
          </span>
          <p>Favourites</p>
        </div>
        <div
          className={styles.phoneOptions + " " + styles.recents}
          onClick={() => handlePhoneOptionsClick("recents")}>
          <span className={styles.phoneOptionsIcons}>
            <FaRegClock />
          </span>
          <p> Recents</p>
        </div>
        <div
          className={styles.phoneOptions + " " + styles.contacts}
          onClick={() => handlePhoneOptionsClick("contacts")}>
          <span className={styles.phoneOptionsIcons}>
            <BsFillPersonLinesFill />
          </span>
          <p>Contacts</p>
        </div>

        <div className={styles.activeDiv} style={activeDivStyle}></div>
      </div>

      <div className={styles.numpadDiv} onClick={handleNumBtnClick}>
        <PiDotsThreeOutlineFill className={styles.numpadIcons} />
        <PiDotsThreeOutlineFill className={styles.numpadIcons} />
        <PiDotsThreeOutlineFill className={styles.numpadIcons} />
        <LuDot className={styles.numpadIcons} />
      </div>

      <div className={styles.numnerPad}>
        <div className={styles.numDisplay}>
          <BsThreeDotsVertical className={styles.displayIcon} />
          <div className={styles.display}></div>
          <IoBackspaceOutline
            className={styles.displayIcon}
            onClick={handleBackPress}
          />
        </div>
        <div className={styles.numberKeysCont}>
          <div className={styles.dialPadKey} onClick={() => handleKeypress(1)}>
            <span className={styles.keypadNum}>1</span>
            <span>&zwnj;</span>
          </div>
          <div className={styles.dialPadKey} onClick={() => handleKeypress(2)}>
            <span className={styles.keypadNum}>2</span>
            <span>ABC</span>
          </div>
          <div className={styles.dialPadKey} onClick={() => handleKeypress(3)}>
            <span className={styles.keypadNum}>3</span>
            <span>DEF</span>
          </div>
          <div className={styles.dialPadKey} onClick={() => handleKeypress(4)}>
            <span className={styles.keypadNum}>4</span>
            <span>GHI</span>
          </div>
          <div className={styles.dialPadKey} onClick={() => handleKeypress(5)}>
            <span className={styles.keypadNum}>5</span>
            <span>JKL</span>
          </div>
          <div className={styles.dialPadKey} onClick={() => handleKeypress(6)}>
            <span className={styles.keypadNum}>6</span>
            <span>MNO</span>
          </div>
          <div className={styles.dialPadKey} onClick={() => handleKeypress(7)}>
            <span className={styles.keypadNum}>7</span>
            <span>PQRS</span>
          </div>
          <div className={styles.dialPadKey} onClick={() => handleKeypress(8)}>
            <span className={styles.keypadNum}>8</span>
            <span>TUV</span>
          </div>
          <div className={styles.dialPadKey} onClick={() => handleKeypress(9)}>
            <span className={styles.keypadNum}>9</span>
            <span>WXYZ</span>
          </div>

          <div
            className={styles.dialPadKey}
            onClick={() => handleKeypress("*")}>
            <span className={styles.keypadNum}>*</span>
          </div>

          <div className={styles.dialPadKey} onClick={() => handleKeypress(0)}>
            <span className={styles.keypadNum}>0</span>
            <span>+</span>
          </div>
          <div
            className={styles.dialPadKey}
            onClick={() => handleKeypress("#")}>
            <span className={styles.keypadNum}>#</span>
          </div>
          <div
            className={styles.dialPadKey + " " + styles.callBtn}
            onClick={() => handleKeypress("")}>
            <span className={styles.keypadNum + " " + styles.callBtn}>
              CALL
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Phone;
