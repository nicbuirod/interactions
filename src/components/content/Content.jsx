import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

import styles from "./content.module.scss";
import OutboundIcon from "@mui/icons-material/Outbound";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

import image1 from "../../images/1.png";
import image2 from "../../images/2.png";
import image3 from "../../images/3.png";

import video from "../../videos/video.mp4";

const Content = () => {
  const [show, setShow] = useState(true);
  const [showArrow, setShowArrow] = useState(true);
  const [showArrow2, setShowArrow2] = useState(true);
  const [showArrow3, setShowArrow3] = useState(true);

  const [picture, setPicture] = useState(true);

  const handleEnter = () => {
    setShow(false);
  };
  const handleLeave = () => {
    setShow(true);
  };

  const handleEnterArrow = () => {
    setShowArrow(false);
  };
  const handleLeaveArrow = () => {
    setShowArrow(true);
  };
  const handleEnterArrow2 = () => {
    setShowArrow2(false);
  };
  const handleLeaveArrow2 = () => {
    setShowArrow2(true);
  };
  const handleEnterArrow3 = () => {
    setShowArrow3(false);
  };
  const handleLeaveArrow3 = () => {
    setShowArrow3(true);
  };

  const handleEnterImage = () => {
    setPicture(false);
  };
  const handleLeaveImage = () => {
    setPicture(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_up}>
        <div
          className={styles.section}
          onMouseEnter={handleEnterArrow}
          onMouseLeave={handleLeaveArrow}
        >
          <span className={showArrow ? styles.white_color : styles.black_color}>
            Brand
          </span>
          {!showArrow && (
            <span className={styles.arrow}>
              <OutboundIcon className={styles.arrow_icon} />
            </span>
          )}
          {showArrow && (
            <span className={styles.arrow}>
              <ArrowCircleRightIcon className={styles.arrow_icon} />
            </span>
          )}
        </div>
        <div
          className={styles.section}
          onMouseEnter={handleEnterArrow2}
          onMouseLeave={handleLeaveArrow2}
        >
          <span
            className={showArrow2 ? styles.white_color : styles.black_color}
          >
            Product
          </span>
          {!showArrow2 && (
            <span className={styles.arrow}>
              <OutboundIcon className={styles.arrow_icon} />
            </span>
          )}
          {showArrow2 && (
            <span className={styles.arrow}>
              <ArrowCircleRightIcon className={styles.arrow_icon} />
            </span>
          )}
        </div>
        <div
          className={styles.section}
          onMouseEnter={handleEnterArrow3}
          onMouseLeave={handleLeaveArrow3}
        >
          <span
            className={showArrow3 ? styles.white_color : styles.black_color}
          >
            Motion
          </span>
          {!showArrow3 && (
            <span className={styles.arrow}>
              <OutboundIcon className={styles.arrow_icon} />
            </span>
          )}
          {showArrow3 && (
            <span className={styles.arrow}>
              <ArrowCircleRightIcon className={styles.arrow_icon} />
            </span>
          )}
        </div>
        <div
          className={styles.section_video}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          {show && <ReactPlayer url={video} height="140%" playing={true} />}
        </div>
      </div>
      <div className={styles.work}>
        <span className={picture ? styles.text_work : styles.text_work2}>
          WORK
        </span>
        <div className={styles.cuadrado}>
          <div
            className={styles.image1}
            onMouseEnter={handleEnterImage}
            onMouseLeave={handleLeaveImage}
          >
            <img src={image1} alt="limit" />
            <h4>NewLimit</h4>
          </div>
          <div
            className={styles.image3}
            onMouseEnter={handleEnterImage}
            onMouseLeave={handleLeaveImage}
          >
            <img src={image3} alt="focus" />
            <h4>FocusVision</h4>
            <p>
              TRANSFORMING COMPLEX TECHNOLOGY INTO <br />
              MEANINGFUL DESIGN
            </p>
          </div>
          <div
            className={styles.image2}
            onMouseEnter={handleEnterImage}
            onMouseLeave={handleLeaveImage}
          >
            <img src={image2} alt="internet" />
            <h4>Surf Internet</h4>
            <p>
              MODERNIZING A LEGACY TELCOM BRAND FOR A <br />
              BRIGHT FUTURE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
