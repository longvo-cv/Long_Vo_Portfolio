import { motion } from "framer-motion";
import { styles } from "../styles";
import { lkdv } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Featured = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Featured case study</p>
        <h2 className={styles.sectionHeadText}>{lkdv.name}</h2>
        <p className="mt-2 text-white-100 text-[18px]">
          {lkdv.title}, {lkdv.dates}
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-6 max-w-3xl text-secondary text-[17px] leading-[30px]"
      >
        <p>{lkdv.context}</p>

        <h3 className="mt-8 text-white text-[22px] font-bold">
          Problems I solved
        </h3>
        <ol className="mt-4 list-decimal ml-5 space-y-4">
          {lkdv.problems.map((problem) => (
            <li key={problem.title} className="pl-1">
              <span className="text-white font-semibold">{problem.title}: </span>
              {problem.text}
            </li>
          ))}
        </ol>

        <p className="mt-8">
          <span className="text-white font-semibold">Also: </span>
          {lkdv.also}
        </p>
        <p className="mt-4">
          <span className="text-white font-semibold">Stack: </span>
          {lkdv.stack}
        </p>
      </motion.div>
    </>
  );
};

const FeaturedSection = SectionWrapper(Featured, "lkdv");

export default FeaturedSection;
