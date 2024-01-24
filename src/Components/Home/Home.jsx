import styles from "./Home.module.css";
import { MdOutlineRefresh } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import CameraComponent from "../Camera/CameraComponent.jsx";
import Contacts from "../Contacts/Contacts.jsx";
import Messages from "../Messages/Messages.jsx";
import { useRef } from "react";
import NavigationKeys from "../NavigationKeys/NavigationKeys.jsx";
import Phone from "../Phone/Phone.jsx";
import Navbar from "../Navbar/Navbar.jsx";
function Home() {
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

  //home swip
  const pg1click = () => {
    const pgone = document.querySelector("." + styles.homePageOne);
    pgone.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const pg2click = () => {
    const pgtwo = document.querySelector("." + styles.homePageTwo);
    pgtwo.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  //navigation functions

  const [appsStatusList, setAppsStatusList] = useState([
    {
      appName: "phoneApk",
      appStatus: false,
    },
    {
      appName: "contactApk",
      appStatus: false,
    },
    {
      appName: "cameraApk",
      appStatus: false,
    },
    {
      appName: "messagesApk",
      appStatus: false,
    },
  ]);

  // const [activeAppsList, setActiveApp] = useState("");

  const handleBackBtnClick = () => {
    const apk = document.querySelector("." + styles.appsRenderDiv);
    apk.classList.remove(styles.appFullScreen);
    setTimeout(() => {
      let activeAppName = null;
      setAppsStatusList((prevAppsStatusList) => {
        const updatedList = prevAppsStatusList.map((app) => {
          if (app.appStatus === true) {
            activeAppName = app.appName;
          }

          return { ...app, appStatus: false };
        });
        return updatedList;
      });
    }, 500);
  };

  //aps rendering

  const onAppClick = (app) => {
    setTimeout(() => {
      const index = appsStatusList.findIndex(
        (apkItem) => apkItem.appName === app
      );

      if (index !== -1) {
        const updatedAppsStatusList = [...appsStatusList];
        updatedAppsStatusList[index].appStatus = true;
        setAppsStatusList(updatedAppsStatusList);
      }
    }, 500);
    const apk = document.querySelector("." + styles.appsRenderDiv);
    apk.classList.add(styles.appFullScreen);
  };

  const findAppStatus = (app) => {
    let status = true;
    for (let i = 0; i < appsStatusList.length; i++) {
      if (appsStatusList[i].appName === app) {
        status = appsStatusList[i].appStatus;
      }
    }
    return status;
  };

  //swip
  const swipeAreaRef = useRef(null);
  let startX;

  const handleTouchStart = (event) => {
    startX = event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    const currentX = event.touches[0].clientX;

    const deltaX = currentX - startX;

    swipeScreen(deltaX);
  };

  const swipeScreen = (value) => {
    const pgtwoswip = document.querySelector("." + styles.homePageTwo);
    const pgoneswip = document.querySelector("." + styles.homePageOne);
    if (value > 0) {
      pgoneswip.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (value < 0) {
      pgtwoswip.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeCont}>
        <Navbar></Navbar>

        <div className={styles.appsRenderDiv}>
          {findAppStatus("phoneApk") && <Phone></Phone>}||
          {findAppStatus("contactApk") && <Contacts></Contacts>} ||
          {findAppStatus("cameraApk") && <CameraComponent></CameraComponent>} ||
          {findAppStatus("messagesApk") && <Messages></Messages>}
        </div>
        <div
          className={styles.homePages}
          id={styles.homePages}
          ref={swipeAreaRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}>
          <div className={styles.homePageOne}>
            <div className={styles.googleSearchBox}>
              <FcGoogle className={styles.googleIcon} />
              <div className={styles.googleIconsDiv}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Google_mic.svg"
                  alt="voice-search-icon"
                  className={styles.googleVoiceSearch}
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Google_Lens_Icon.svg"
                  alt="camera-search-icon"
                  className={styles.googleCamerSeach}
                />
              </div>
            </div>

            <div className={styles.digitalWellBeing}>
              <div className={styles.dgbHeading}>
                <span>Screen Time</span>
                <MdOutlineRefresh />
              </div>
              <span className={styles.dgbHours}> 23h 49m</span>
              <div className={styles.dgbDiv}>
                <div className={styles.dibDivs}>
                  <div className={styles.roundHourDivs}>20h</div>
                  <span>Coding</span>
                </div>
                <div className={styles.dibDivs}>
                  <div
                    className={
                      styles.roundHourDivs + " " + styles.roundHourDivsTwo
                    }>
                    3h
                  </div>
                  <span>Google</span>
                </div>
                <div className={styles.dibDivs}>
                  <div
                    className={
                      styles.roundHourDivs + " " + styles.roundHourDivsThree
                    }>
                    49m
                  </div>
                  <span>Sleep</span>
                </div>
              </div>
            </div>
            <div className={styles.PageOneapps}>
              <div className={styles.apsCont}>
                <div
                  className={
                    styles.pageOneApks + " " + styles.galleryApk
                  }></div>
                <span>Photos</span>
              </div>
              <div className={styles.apsCont}>
                <div
                  className={styles.pageOneApks + " " + styles.googleApk}></div>
                <span>Google</span>
              </div>
              <div className={styles.apsCont}>
                <div
                  className={
                    styles.pageOneApks + " " + styles.playstoreApk
                  }></div>
                <span>Play Store</span>
              </div>
              <div className={styles.apsCont}>
                <div
                  className={styles.pageOneApks + " " + styles.themesApk}></div>
                <span>Themes</span>
              </div>
              <div className={styles.apsCont}>
                <div
                  className={styles.pageOneApks + " " + styles.safetyApk}></div>
                <span>Safety</span>
              </div>
              <div className={styles.apsCont}>
                <div
                  className={
                    styles.pageOneApks + " " + styles.assistantapk
                  }></div>
                <span>Assistant</span>
              </div>
              <div className={styles.apsCont}>
                <div
                  className={
                    styles.pageOneApks + " " + styles.securityApk
                  }></div>
                <span>Security</span>
              </div>
              <div className={styles.apsCont}>
                <div
                  className={
                    styles.pageOneApks + " " + styles.getappsApk
                  }></div>
                GetApps
              </div>
              <div className={styles.apsCont}>
                <div
                  className={
                    styles.pageOneApks + " " + styles.cleanerApk
                  }></div>
                Cleaner
              </div>
              <div className={styles.apsCont}>
                <div
                  className={styles.pageOneApks + " " + styles.chromeApk}></div>
                Chrome
              </div>
            </div>
          </div>
          <div className={styles.homePageTwo}>
            <div className={styles.appsContainertwo}>
              <div className={styles.apsCont}>
                <div
                  className={
                    styles.pageOneApks + " " + styles.settingsApk
                  }></div>
                Settings
              </div>

              <div className={styles.apsCont}>
                <div
                  className={
                    styles.pageOneApks + " " + styles.fileManagerApk
                  }></div>
                File Manager
              </div>

              <div className={styles.apsCont}>
                <div
                  className={
                    styles.pageOneApks + " " + styles.weatherApk
                  }></div>
                Weather
              </div>

              <div className={styles.apsCont}>
                <div
                  className={
                    styles.pageOneApks + " " + styles.zArchiverApk
                  }></div>
                ZArchiver
              </div>

              <div className={styles.apsCont}>
                <div className={styles.pageOneApks + " " + styles.vlcApk}></div>
                VLC
              </div>
              <div className={styles.apsCont}>
                <div
                  className={styles.pageOneApks + " " + styles.toolsApk}></div>
                Tools
              </div>
              <div className={styles.apsCont}>
                <div
                  className={styles.pageOneApks + " " + styles.gpayApk}></div>
                Gpay
              </div>
              <div className={styles.apsCont}>
                <div
                  className={
                    styles.pageOneApks + " " + styles.calendarApk
                  }></div>
                Calendar
              </div>
              <div className={styles.apsCont}>
                <div
                  className={
                    styles.pageOneApks + " " + styles.youtubeApk
                  }></div>
                YouTube
              </div>
              <div className={styles.apsCont}>
                <div
                  className={styles.pageOneApks + " " + styles.notesApk}></div>
                Notes
              </div>
              <div className={styles.apsCont}>
                <div
                  className={
                    styles.pageOneApks + " " + styles.dglockerApk
                  }></div>
                Digocker
              </div>
              <div className={styles.apsCont}>
                <div
                  className={
                    styles.pageOneApks + " " + styles.whatsappApk
                  }></div>
                WhatsApp
              </div>
              <div className={styles.apsCont}>
                <div
                  className={
                    styles.pageOneApks + " " + styles.spotifyApk
                  }></div>
                Spotify
              </div>
              <div className={styles.apsCont}>
                <div
                  className={
                    styles.pageOneApks + " " + styles.threadsApk
                  }></div>
                Threads
              </div>

              <div className={styles.apsCont}>
                <div className={styles.pageOneApks + " " + styles.codApk}></div>
                Call of Duty
              </div>

              <div className={styles.apsCont}>
                <div className={styles.pageOneApks + " " + styles.cocApk}></div>
                Clash of Clans
              </div>

              <div className={styles.apsCont}>
                <div
                  className={styles.pageOneApks + " " + styles.tegramApk}></div>
                Telegram
              </div>

              <div className={styles.apsCont}>
                <div
                  className={
                    styles.pageOneApks + " " + styles.instagramApk
                  }></div>
                Telegram
              </div>

              <div className={styles.apsCont}>
                <div
                  className={
                    styles.pageOneApks + " " + styles.nhealthApk
                  }></div>
                N Health
              </div>
            </div>
          </div>
        </div>
        <div className={styles.homePageIndex}>
          <div
            className={styles.pg1 + " " + styles.pg}
            onClick={pg1click}></div>
          <div
            className={styles.pg2 + " " + styles.pg}
            onClick={pg2click}></div>
        </div>

        <div className={styles.homePageFooter}>
          <div
            className={styles.bottomApks + " " + styles.callApk}
            onClick={() => onAppClick("phoneApk")}>
            {/* {findAppStatus("callApk") && <Phone></Phone>} */}
          </div>
          <div
            className={styles.bottomApks + " " + styles.contactApk}
            onClick={() => onAppClick("contactApk")}>
            {/* {findAppStatus("contactApk") && <Contacts></Contacts>} */}
          </div>
          <div
            className={styles.bottomApks + " " + styles.cameraApk}
            onClick={() => onAppClick("cameraApk")}>
            {/* {findAppStatus("cameraApk") && <CameraComponent></CameraComponent>} */}
          </div>
          <div
            className={styles.bottomApks + " " + styles.messagesApk}
            onClick={() => onAppClick("messagesApk")}>
            {/* {findAppStatus("messagesApk") && <Messages></Messages>} */}
          </div>
        </div>

        <NavigationKeys
          handleBackBtnClick={handleBackBtnClick}></NavigationKeys>
      </div>
    </div>
  );
}

export default Home;
