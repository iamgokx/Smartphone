import styles from "./Home.module.css";
import { MdOutlineRefresh } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaSquare } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa6";
import { useState } from "react";
import { IoCaretBackOutline } from "react-icons/io5";
import CameraComponent from "../Camera/CameraComponent.jsx";
import Phone from "../Phone/Phone.jsx";
import Contacts from "../Contacts/Contacts.jsx";
import Messages from "../Messages/Messages.jsx";
import { useRef } from "react";

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
    let activeAppName = null;
    setAppsStatusList((prevAppsStatusList) => {
      const updatedList = prevAppsStatusList.map((app) => {
        if (app.appStatus === true) {
          activeAppName = app.appName;

          const apk = document.querySelector("." + styles[activeAppName]);
          apk.classList.remove(styles.appFullScreen);
        }
        return { ...app, appStatus: false };
      });

      return updatedList;
    });
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
    const apk = document.querySelector("." + styles[app]);
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
            <div className={styles.apsCont}>
              <div
                className={styles.pageOneApks + " " + styles.settingsApk}></div>
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
                className={styles.pageOneApks + " " + styles.weatherApk}></div>
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
            {findAppStatus("callApk") && <Phone></Phone>}
          </div>
          <div
            className={styles.bottomApks + " " + styles.contactApk}
            onClick={() => onAppClick("contactApk")}>
            {findAppStatus("contactApk") && <Contacts></Contacts>}
          </div>
          <div
            className={styles.bottomApks + " " + styles.cameraApk}
            onClick={() => onAppClick("cameraApk")}>
            {findAppStatus("cameraApk") && <CameraComponent></CameraComponent>}
          </div>
          <div
            className={styles.bottomApks + " " + styles.messagesApk}
            onClick={() => onAppClick("messagesApk")}>
            {findAppStatus("messagesApk") && <Messages></Messages>}
          </div>
        </div>

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
      </div>
    </div>
  );
}

export default Home;
