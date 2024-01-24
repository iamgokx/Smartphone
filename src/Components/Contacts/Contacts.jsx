import styles from "./Contacts.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineDotsVertical } from "react-icons/hi";
import hero from "../../assets/Contacts/hero.jpg";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuBuilding2 } from "react-icons/lu";
import ContactName from "../ContactName/ContactName";
import { MdOutlinePersonOutline } from "react-icons/md";
import { useRef } from "react";
import { BsBookmarkStar } from "react-icons/bs";
import { IoPersonSharp } from "react-icons/io5";
import { TbTool } from "react-icons/tb";
import { IoIosAdd } from "react-icons/io";

function Contacts() {
  const contactsList = [
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

  return (
    <div className={styles.contactsCont}>
      <div className={styles.messageTopDiv}>
        <div className={styles.messageSearch}>
          <RxHamburgerMenu className={styles.hamburger}></RxHamburgerMenu>
          <input type="text" placeholder="Search contacts" />
          <HiOutlineDotsVertical></HiOutlineDotsVertical>
          <img src={hero} alt="" className={styles.messageHeaderImg} />
        </div>

        <div className={styles.headerOption}>
          <div
            className={
              styles.phoneNumberFilter + " " + styles.headerOptionList
            }>
            <MdOutlineLocalPhone className={styles.headerIcons} />
            <span>Phone Contacts</span>
          </div>
          <div
            className={
              styles.emailContactsFilter + " " + styles.headerOptionList
            }>
            <MdOutlineMailOutline className={styles.headerIcons} />
            <span>Email contacts</span>
          </div>
          <div className={styles.companyFilter + " " + styles.headerOptionList}>
            <LuBuilding2 className={styles.headerIcons} />
            <span>Company</span>
          </div>
        </div>
      </div>

      <div className={styles.contactDiv}>
        <div className={styles.scrollDiv}>
          <div className={styles.email}>
            <MdOutlinePersonOutline className={styles.emailIcon} />
            <span>lekhwargokul84@gmail.com</span>
          </div>
          <div className={styles.contactNameAlp}></div>
          {contactsList.map((contact, index) => (
            <ContactName
              key={contact}
              iconCol={colorList[index % colorList.length]}
              name={contact.name}
              phone={contact.phone}
              currentAlp={handleAlpChange(
                contact.name.charAt(0)
              )}></ContactName>
          ))}
        </div>
      </div>

      <div className={styles.contactsOptionsDiv}>
        <div className={styles.contactsOptions}>
          <span className={styles.contactOptIconDiv}>
            <IoPersonSharp className={styles.contactOptIcon} />
          </span>
          <p>Contacts</p>
        </div>
        <div className={styles.contactsOptions}>
          <span className={styles.contactOptIconDiv}>
            <BsBookmarkStar className={styles.contactOptIcon} />
          </span>
          <p>Highlights</p>
        </div>
        <div className={styles.contactsOptions}>
          <span className={styles.contactOptIconDiv}>
            <TbTool className={styles.contactOptIcon} />
          </span>
          <p>Fix & manage</p>
        </div>
      </div>

      <div className={styles.addBtn}>
        <IoIosAdd />
      </div>
    </div>
  );
}
export default Contacts;
