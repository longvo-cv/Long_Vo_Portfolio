import { Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useCan3D } from "../utils/client";
import { hero, links } from "../constants";

// Resolves once the page has loaded and the browser is idle (2 s cap), so Spline never competes with first paint.
const whenIdleAfterLoad = (cb) => {
  let cancel = () => {};
  const schedule = () => {
    if (window.requestIdleCallback) {
      const id = window.requestIdleCallback(cb, { timeout: 2000 });
      cancel = () => window.cancelIdleCallback(id);
    } else {
      const id = setTimeout(cb, 2000);
      cancel = () => clearTimeout(id);
    }
  };
  if (document.readyState === "complete") schedule();
  else window.addEventListener("load", schedule, { once: true });
  return () => {
    window.removeEventListener("load", schedule);
    cancel();
  };
};

const Hero = () => {
  const can3D = useCan3D();
  const [loadSpline, setLoadSpline] = useState(false);
  const [splineReady, setSplineReady] = useState(false);
  useEffect(() => {
    if (can3D) return whenIdleAfterLoad(() => setLoadSpline(true));
  }, [can3D]);

  return (
    <div
      className={`relative flex xl:flex-row flex-col  w-full h-screen mx-auto gap-10 overflow-hidden`}
    >
      <div
        className={`${styles.paddingX} inset-0 top-[120px] bottom-[120px] max-w-7xl mx-auto mt-20 flex flex-row items-center gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#81FFD9]" />
          <div className="w-1 sm:h-40 h-80 teal-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className="text-[#81FFD9]">Long Vo</span>.
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 max-w-2xl`}>
            {hero.intro}
          </p>
          <p className="mt-4 text-secondary text-[16px]">{hero.stack}</p>
          <ul className="mt-6 flex flex-wrap gap-3">
            <li>
              <a
                href={links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#81FFD9] text-primary font-semibold py-2 px-5 rounded-xl"
              >
                Resume (PDF)
              </a>
            </li>
            <li>
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="inline-block border border-secondary text-white py-2 px-5 rounded-xl">
                GitHub
              </a>
            </li>
            <li>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block border border-secondary text-white py-2 px-5 rounded-xl">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={`mailto:${links.email}`} className="inline-block border border-secondary text-white py-2 px-5 rounded-xl">
                {links.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="xl:w-1/2 inset-0 z-[-1] xl:relative z-[10] pr-7">
        {/* Poster reserves Spline's exact box (portrait at xl, 2:1 below) so the swap causes no layout shift.
            Hidden by CSS on the same conditions useCan3D checks; mobile and reduced motion keep the static hero background. */}
        <div className="relative w-full aspect-[2/1] xl:aspect-auto xl:h-full hidden min-[769px]:motion-safe:block">
          <picture>
            <source media="(min-width: 1280px)" srcSet="/hero-scene-portrait.webp" width="1017" height="1350" />
            <img
              src="/hero-scene-landscape.webp"
              width="1494"
              height="747"
              alt=""
              fetchPriority="high"
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ${splineReady ? "opacity-0" : "opacity-100"}`}
            />
          </picture>
          {loadSpline && (
            <div
              className={`absolute inset-0 transition-opacity duration-700 ${splineReady ? "opacity-100" : "opacity-0"}`}
            >
              <Suspense fallback={null}>
                <ComputersCanvas onLoad={() => setSplineReady(true)} />
              </Suspense>
            </div>
          )}
        </div>
      </div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-[20]">
        <a href="#about" aria-label="Scroll to About">
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
