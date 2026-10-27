import { useEffect, useState } from "react";

// False during prerender and the first client render, so hydration matches.
export const useHydrated = () => {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  return hydrated;
};

// 3D scenes only on larger screens without reduced motion; everything else gets the static page.
export const useCan3D = () => {
  const hydrated = useHydrated();
  return (
    hydrated &&
    !window.matchMedia("(max-width: 768px), (prefers-reduced-motion: reduce)")
      .matches
  );
};
