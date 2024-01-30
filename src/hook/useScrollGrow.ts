import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const useScrolGrow = () => {
    const textRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: textRef,
        offset: ["start end", "end end"],
    });
    const scaleV = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    return { textRef, scaleV, cardRef }
};

export default useScrolGrow;