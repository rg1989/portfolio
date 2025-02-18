"use client";
import { useEffect, useState } from "react";

const AnimationLottieClient = ({ animationPath }) => {
    const [Lottie, setLottie] = useState(null);

    useEffect(() => {
        import("lottie-react").then((mod) => setLottie(() => mod.default));
    }, []);

    if (!Lottie) return <div style={{ height: "100px", width: "100px", background: "transparent" }} />;

    return <Lottie animationData={animationPath} loop autoplay style={{ width: "95%" }} />;
};

export default AnimationLottieClient;
