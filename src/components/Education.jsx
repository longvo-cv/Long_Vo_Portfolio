import { motion } from "framer-motion";
import { styles } from "../styles";
import { education } from "../constants";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Education</h2>
      </motion.div>
      <ul className="mt-6 space-y-2 text-white-100 text-[17px]">
        {education.map((degree) => (
          <li key={degree}>{degree}</li>
        ))}
      </ul>
    </>
  );
};

const EducationSection = SectionWrapper(Education, "education");

export default EducationSection;
