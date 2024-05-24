import React from "react";
import me from "../../assets/tech/me.png";

const ComputersCanvas = () => {
  return (
    <div className="absolute w-full h-full flex justify-center items-end xl:justify-end xl:items-start">
      <img
        className="w-[100%] h-[60%] sm:w-[80%] sm:h-[60%] md:w-[70%] md:h-[70%] lg:w-[55%] lg:h-[70%] xl:w-[55%] xl:h-[100%] 2xl:w-[42%] 2xl:h-[100%]"
        src={me}
        alt="menghor phat"
      />
    </div>
  );
};

export default ComputersCanvas;
