import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects, earlierProjects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  showImage,
  name,
  subtitle,
  description,
  tags,
  image,
  source_code_link,
  case_study_link,
}) => {
  return (
    <motion.li variants={fadeIn("up", "spring", index * 0.5, 0.7)} className="h-full">
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl h-full flex flex-col"
      >
        {showImage && (
          <div className="relative w-full h-[230px] mb-5">
            <img
              loading="lazy"
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />
            {source_code_link && (
              <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                <a
                  href={source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${name} source code on GitHub`}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center"
                >
                  <img
                    loading="lazy"
                    src={github}
                    alt=""
                    className="w-1/2 h-1/2 object-contain"
                  />
                </a>
              </div>
            )}
          </div>
        )}
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        {subtitle && <p className="mt-1 text-white-100 text-[14px]">{subtitle}</p>}
        <p className="mt-2 text-secondary text-[14px]">{description}</p>

        {/* mt-auto pins tags and links to the bottom so cards in a row line up. */}
        <div className="mt-auto pt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        {case_study_link && (
          <a
            href={case_study_link}
            className="mt-4 inline-block text-white font-semibold underline underline-offset-4"
          >
            Read the case study
          </a>
        )}
        {!showImage && source_code_link && (
          <a
            href={source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-white font-semibold underline underline-offset-4"
          >
            Source on GitHub
          </a>
        )}
      </Tilt>
    </motion.li>
  );
};

// Images only when every card in the group has one, so a row never mixes card shapes.
const ProjectGrid = ({ items }) => {
  const showImage = items.every((project) => project.image);
  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
      {items.map((project, index) => (
        <ProjectCard
          key={project.name}
          {...project}
          index={index}
          showImage={showImage}
        />
      ))}
    </ul>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className="mt-10">
        <ProjectGrid items={projects} />
      </div>
      <details className="mt-10">
        <summary className="text-white text-[18px] font-semibold cursor-pointer">
          Earlier projects
        </summary>
        <div className="mt-6">
          <ProjectGrid items={earlierProjects} />
        </div>
      </details>
    </>
  );
};

const WorksSection = SectionWrapper(Works, "projects");

export default WorksSection;
