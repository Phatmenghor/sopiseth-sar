import React from "react";
import { motion } from "framer-motion";
import video1 from "../assets/video/video1.mp4";
import video2 from "../assets/video/video2.mp4";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Video = () => {
  return (
    <div className="md:flex justify-center gap-10">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="rounded-lg md:w-1/2 border border-orange-700 shadow-sm shadow-orange-400"
      >
        <video autoPlay loop muted>
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="rounded-lg  md:w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mt-10 md:mt-0"
      >
        <video autoPlay loop muted>
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Video, "");

// export default Video;
