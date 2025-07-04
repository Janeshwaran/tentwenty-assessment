import React from "react";
// import styles from "./Swipe.module.css";
function Swipe() {
  const imgs = [
    "https://meta.novactech.in:7445/uploads/image/20250625073607_6da4c831.png",
    "https://meta.novactech.in:7445/uploads/image/20250625073607_6da4c831.png",
    "https://meta.novactech.in:7445/uploads/image/20250625073607_6da4c831.png",
    "https://meta.novactech.in:7445/uploads/image/20250625073607_6da4c831.png",
    "https://meta.novactech.in:7445/uploads/image/20250625073607_6da4c831.png",
    "https://meta.novactech.in:7445/uploads/image/20250625073607_6da4c831.png",
    "https://meta.novactech.in:7445/uploads/image/20250625073607_6da4c831.png",
  ];
  return (
    <>
      <div className={styles.cardContainer}>
        {imgs.map((val, key) => (
          <div className={styles.card}>
            <div
              className={styles.cardImg}
              style={{
                backgroundImage: `url(${val})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Swipe;
