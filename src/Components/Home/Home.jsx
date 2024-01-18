import styles from "./Home.module.css";
import { MdOutlineRefresh } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

import { useState } from "react";
import CameraComponent from "../Camera/CameraComponent.jsx";
import Phone from "../Phone/Phone.jsx";
import Contacts from "../Contacts/Contacts.jsx";
import Messages from "../Messages/Messages.jsx";
import { useRef } from "react";
import NavigationKeys from "../NavigationKeys/NavigationKeys.jsx";
// import Apps from "../App/Apps.jsx";

function Home() {
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
      appName: "callApk",
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

          // const apk = document.querySelector("." + styles[activeAppName]);
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
    // const apk = document.querySelector("." + styles[app]);
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
        <div className={styles.appsRenderDiv}>
          {findAppStatus("callApk") && <Phone></Phone>}

          {findAppStatus("contactApk") && <Contacts></Contacts>}

          {findAppStatus("cameraApk") && <CameraComponent></CameraComponent>}

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
            onClick={() => onAppClick("callApk")}>
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
