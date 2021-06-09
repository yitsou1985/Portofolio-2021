import React from "react";
import { motion } from "framer-motion";



const ballStyle = {
  display: "block",
  width: "4rem",
  height: "1rem",
  backgroundColor: "black",
  borderRadius: "0.5rem"
};

const bounceTransition = {
  y: {
    duration: 1,
    yoyo: Infinity,
    ease: "easeOut"
  },
  backgroundColor: {
    duration: 0.3,
    yoyo: Infinity,
    ease: "easeOut",
    repeatDelay: 0.8
  }
};

export default function BouncingBall() {
  return (
    <div
   
      style={{
        width: "2rem",
        height: "2rem",
        display: "flex",
        justifyContent: "space-around"
      }}
    >
    
      <motion.span
        style={ballStyle}
        transition={bounceTransition}
        animate={{
          y: ["100%", "-100%"],
          backgroundColor: ["#ff6699", "#6666ff"]
        }}
      />
    </div>
  );
}