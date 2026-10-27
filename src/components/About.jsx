import { motion } from "framer-motion";
import { styles } from "../styles";
import { about } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>About</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {about}
      </motion.p>
    </>
  );
};

const AboutSection = SectionWrapper(About, "about");

export default AboutSection;
