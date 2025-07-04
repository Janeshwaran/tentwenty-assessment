import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useInView } from "framer-motion";

const imgs = [
  {
    img: "./a.png",
    title: "Client 1",
    sub: "Dubai, United Arab Emirates",
  },
  {
    img: "./b.png",
    title: "Client 2",
    sub: "Texas, United State of America",
  },
  {
    img: "./c.png",
    title: "Client 3",
    sub: "Sharjah, United Arab Emirates",
  },
  {
    img: "./d.png",
    title: "Client 4",
    sub: "NY, United State of America",
  },
  {
    img: "./e.png",
    title: "Client 5",
    sub: "Dubai, United Arab Emirates",
  },
];
const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;
const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};
const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};
export default function SwipeCarousel() {
  const [imgIndex, setImgIndex] = useState(2);
// const isInView = useInView(ref, { once: false, amount: 0.4 });
  const dragX = useMotionValue(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.4 });
  useEffect(() => {
    // const intervalRef = setInterval(() => {
    //   const x = dragX.get();
    //   if (x === 0) {
    //     setImgIndex((pv) => {
    //       if (pv === imgs.length - 1) {
    //         return 0;
    //       }
    //       return pv + 1;
    //     });
    //   }
    // }, AUTO_DELAY);
    // return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div
      style={{ backgroundColor: "#fefcfb" }}
      className="relative  h-[100vh] overflow-hidden bg-neutral-100 py-8 snap-start flex justify-center flex-col"
    >
      <div className="w-[100vw]  flex justify-center text-5xl py-10">
        {" "}
         <motion.div
          className="text-3xl"
          key={imgIndex + "-title"}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          whileInView="visible"
          custom={0}
          variants={textVariant}
        >Mid Content</motion.div>
      </div>
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{ translateX: `-${(imgIndex - 1) * 33.333}%` }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex h-[auto] cursor-grab items-center active:cursor-grabbing"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>
      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      {/* <GradientEdges /> */}
    </div>
  );
}

const Images = ({ imgIndex }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        let transform = "scale(0.85) rotate(0deg)";
        if (idx === imgIndex) {
          transform = "scale(1) rotate(0deg)";
        } else if (idx === imgIndex - 1) {
          transform = "scale(0.85) rotate(-15deg)";
        } else if (idx === imgIndex + 1) {
          transform = "scale(0.85) rotate(15deg)";
        }
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${imgSrc.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              position: "relative",
              top: imgIndex === idx ? "0vh" : "10vh",
              transform: transform,
            }}
            transition={SPRING_OPTIONS}
            // className="aspect-video h-[60vh] w-[33.3vw]  shrink-0 rounded-xl bg-neutral-800 object-cover"
            className="customCursor aspect-video h-[50vh] w-[25.3vw] mx-[4vw] shrink-0 rounded-xl bg-neutral-800 object-cover"
          />
        );
      })}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.4 });
  return (
    <>
      {/* {imgs.map((imgSrc, idx) => ( */}
      <div className="mt-9 flex w-full justify-center items-center flex-col gap-2">
        <motion.div
          className="text-3xl"
          key={imgIndex + "-title"}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          whileInView="visible"
          custom={0}
          variants={textVariant}
        >
          {imgs[imgIndex].title}
        </motion.div>

        <motion.div
          className="text-xl"
          key={imgIndex + "-sub"}
          initial="hidden"
          animate="visible"
          viewport={{ once: false, amount: 0.4 }}
          custom={1}
          variants={textVariant}
        >
          {imgs[imgIndex].sub}
        </motion.div>
      </div>
      {/* ))} */}
    </>
  );
};
