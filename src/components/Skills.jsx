import { motion } from "framer-motion";
import { styles } from "../styles";
import { skills } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>
      <ul className="mt-10 grid sm:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <motion.li
            key={skill.title}
            variants={fadeIn("up", "spring", index * 0.2, 0.75)}
            className="green-pink-gradient p-[1px] rounded-[20px] shadow-card"
          >
            <div className="bg-tertiary rounded-[20px] py-6 px-8 h-full">
              <h3 className="text-white text-[20px] font-bold">{skill.title}</h3>
              <p className="mt-2 text-secondary text-[16px]">{skill.items}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </>
  );
};

const SkillsSection = SectionWrapper(Skills, "skills");

export default SkillsSection;
