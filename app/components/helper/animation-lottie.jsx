"use client";

import { useEffect, useState } from "react";

const AnimationLottie = ({ animationPath }) => {
  const [Lottie, setLottie] = useState(null);

  useEffect(() => {
    // Ensure Lottie is only imported in the browser
    import("lottie-react").then((mod) => setLottie(() => mod.default));
  }, []);

  if (!Lottie) return null; // Prevents SSR execution

  return <Lottie animationData={animationPath} loop autoplay style={{ width: "95%" }} />;
};

export default AnimationLottie;
