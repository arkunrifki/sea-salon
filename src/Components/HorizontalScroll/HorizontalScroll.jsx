import React, { useRef } from "react";
import "./horizontalscroll.css";
import One from "../../images/item 01.png";
import Two from "../../images/item 02.png";
import Three from "../../images/item 03.png";
import Four from "../../images/item 04.png";
import { motion, useScroll, useTransform } from "framer-motion";
import ImageContainer from "../ImageContainer/ImageContainer";

const HorizontalScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

  return (
    <div className="carousel" ref={targetRef}>
      <div className="contentContainer">
        <motion.div className="images" style={{ x }}>
          <motion.div
            className="imageItem"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0, treshold: 0.99 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ImageContainer imageSource={One} description={"Juni 2024"} />
          </motion.div>
          <motion.div
            className="imageItem"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0, treshold: 0.99 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ImageContainer imageSource={Two} description={"Juli 2024"} />
          </motion.div>
          <motion.div
            className="imageItem"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0, treshold: 0.99 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ImageContainer imageSource={Three} description={"Agustus 2024"} />
          </motion.div>
          <motion.div
            className="imageItem"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0, treshold: 0.99 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ImageContainer imageSource={Four} description={"September 2024"} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
