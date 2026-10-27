import { lazy } from "react";

// Lazy so three.js and Spline stay out of the main bundle and the prerender.
const EarthCanvas = lazy(() => import("./Earth"));
const ComputersCanvas = lazy(() => import("./Computers"));
const StarsCanvas = lazy(() => import("./Stars"));

export { EarthCanvas, ComputersCanvas, StarsCanvas };
