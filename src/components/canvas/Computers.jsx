import React from "react";
import me from "../../assets/tech/me.png";

const ComputersCanvas = () => {
  return (
    <div className="absolute w-full h-full flex justify-center items-end md:justify-end">
      <img
        className="w-[90%] h-[54%] sm:w-[52%] sm:h-[52%] md:w-[55%] md:h-[70%] lg:w-[48%] lg:h-[75%] xl:w-[45%] xl:h-[84%] 2xl:w-[45%] 2xl:h-[84%]"
        src={me}
        alt="Sar Sopiseth"
      />
    </div>
  );
};

export default ComputersCanvas;
