import React, { useRef, useEffect } from "react";
import styles from "./CameraComponent.module.css";
import { IoFlashOff } from "react-icons/io5";
import { SiGooglelens } from "react-icons/si";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdCameraswitch } from "react-icons/md";


const CameraComponent = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
       
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });

       
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing the camera:", error);
      }
    };

    startCamera();
    return () => {
      if (videoRef.current) {
        const stream = videoRef.current.srcObject;
        if (stream) {
          const tracks = stream.getTracks();
          tracks.forEach((track) => track.stop());
        }
      }
    };
  }, []);

  return (
    <div id={styles.cameraDisplay}>
      <div className={styles.cameraSettingsDiv}>
        <IoFlashOff className={styles.cameraIcons} />
        <span>HDR</span>
        <RxHamburgerMenu className={styles.cameraIcons} />
        <SiGooglelens className={styles.cameraIcons} />
      </div>
      <div className={styles.vidoeDiv}>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className={styles.videoScreen}
      />
      </div>
      <div className={styles.cameraOpeationDiv}>
        <div className={styles.cameraModes}>
          <span className={styles.cameraModesList}>Pro</span>
          <span className={styles.cameraModesList}>Video</span>
          <span className={styles.cameraActiveMode + " "+ styles.cameraModesList }>Photo</span>
          <span className={styles.cameraModesList}>Portrait</span>
          <span className={styles.cameraModesList}>More</span>
        </div>

        <div className={styles.cameraFuctionDiv}>
          <div className={styles.cameraGallery}></div>
          <div className={styles.cameraBtn}></div>
          <div className={styles.cameraSwitch}><MdCameraswitch className={styles.cameraSwitchIcon}/></div>
        </div>
      </div>
    </div>
  );
};

export default CameraComponent;
