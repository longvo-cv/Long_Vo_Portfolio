import Spline from "@splinetool/react-spline";

// Scene posters in public/hero-scene-*.webp are screenshots of this scene; recapture them if it changes.
const Computers = ({ onLoad }) => (
  <Spline
    scene="https://prod.spline.design/DKlhyBruxYq4WkGZ/scene.splinecode"
    onLoad={onLoad}
  />
);

export default Computers;
