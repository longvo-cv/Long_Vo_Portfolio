import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    const ref = useRef(null);
    // Prerendered HTML is visible. After hydration, only sections still below the fold get the entrance animation.
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
      setAnimate(ref.current.getBoundingClientRect().top > window.innerHeight);
    }, []);

    return (
      <motion.section
        key={animate}
        ref={ref}
        variants={staggerContainer()}
        initial={animate ? "hidden" : false}
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
