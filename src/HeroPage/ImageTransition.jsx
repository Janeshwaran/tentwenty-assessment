import React, { useState } from "react";
import styles from "./ImageTransition.module.css";

const images = ["./a.png", "./b.png", "./c.png", "./d.png","./e.png"];

const ImageTransition = () => {
  const [index, setIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(null);
  const [fadeClass, setFadeClass] = useState("");
  const [thumbnailIndex, setThumbnailIndex] = useState(1);
  const [trigger, setTrigger] = useState(true);
  const handleClick = () => {
    setTrigger(false);
    const newIndex = (index + 1) % images.length;
    setNextIndex(newIndex);
    setFadeClass(styles.fadeIn);
    if (images[newIndex + 1]) {
      setThumbnailIndex(newIndex + 1);
    } else {
      setThumbnailIndex(0);
    }
    setTimeout(() => {
      setTrigger(true);
    }, 100);
  };

  const handleAnimationEnd = () => {
    setIndex(nextIndex);
    setNextIndex(null);
    setFadeClass("");
  };

  return (
    <div className={styles.container}>
        <div className={styles.titleContainer}>
            <span className={styles.header}>Welcome To</span>
            <span className={styles.subHeader}>Tentwenty</span>
        </div>
      <div className={styles.imgContainer}>
        <img
          src={images[index]}
          alt="Current"
          className={styles.backgroundImage}
        />
        {/* Current/Background Image - stays visible */}

        {/* Next Image - animates on top */}
        {nextIndex !== null && (
          <img
            src={images[nextIndex]}
            alt="Transitioning"
            className={`${styles.overlayImage} ${fadeClass}`}
            onAnimationEnd={handleAnimationEnd}
          />
        )}
      </div>

      <div className={styles.btnMain}>
        <div className={styles.btnContainer}>
          {trigger && (
            <>
              <span className={styles.top}></span>
              <span className={styles.right}></span>
              <span className={styles.bottom}></span>

              <span className={styles.left} onAnimationEnd={handleClick}></span>
            </>
          )}
          <div
            className={styles.btn}
            // style={{ background: `url(${images[thumbnailIndex]})` }}
            onClick={handleClick}
          >
            <img src={images[thumbnailIndex]} alt="" />
            <span>Next</span>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default ImageTransition;
