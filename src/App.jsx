import { Suspense, useRef } from "react";
import { MotionConfig, useInView } from "framer-motion";
import {
  About,
  Contact,
  Education,
  Experience,
  Featured,
  Feedbacks,
  Hero,
  Navbar,
  Skills,
  Works,
  StarsCanvas,
} from "./components";
import { useCan3D } from "./utils/client";

const App = () => {
  const can3D = useCan3D();
  const contact = useRef(null);
  const nearContact = useInView(contact, { once: true, margin: "600px" });
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:text-primary focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to content
      </a>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <main id="main">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Hero />
          </div>
          <About />
          <Featured />
          <Experience />
          <Skills />
          <Works />
          <Feedbacks />
          <Education />
          <div ref={contact} className="relative z-0">
            <Contact />
            {can3D && nearContact && (
              <Suspense fallback={null}>
                <StarsCanvas />
              </Suspense>
            )}
          </div>
        </main>
      </div>
    </MotionConfig>
  );
};

export default App;
