import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <div
      className={`relative flex xl:flex-row flex-col  w-full h-screen mx-auto gap-10 overflow-hidden`}
    >
      <div
        className={`${styles.paddingX} inset-0 top-[120px] bottom-[120px] max-7xl mx-auto sm:mt-20 md:mt-20 flex flex-row items-center gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#81FFD9]" />
          <div className="w-1 sm:h-40 h-80 teal-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#81FFD9]">Long Vo</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop robust backend systems
            <br className="sm:block hidden" /> and web applications using
            Python, <br className="sm:block hidden" /> Javascript, SQL, and AWS.
          </p>
        </div>
      </div>

      <div className="xl:w-1/2 inset-0 z-[-1] xl:relative z-[10] pr-7">
        <ComputersCanvas className="w-full h-screen mx-auto absolute inset-0 z-[-1]" />
      </div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-[20]">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
