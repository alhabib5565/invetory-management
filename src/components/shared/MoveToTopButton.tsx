import { cn } from "@/lib/utils";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useState } from "react";

const MoveToTopButton = () => {
  const { scrollY } = useScroll();
  const [showMoveToTopBtn, setShowMoveToTopBtn] = useState(false);

  useMotionValueEvent(scrollY, "change", (e) => {
    if (e < 400) {
      setShowMoveToTopBtn(false);
    } else {
      setShowMoveToTopBtn(true);
    }
  });

  const moveToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={moveToTop}
      className={cn(
        "bg-blue-700 p-2 fixed -bottom-20  right-5 animate-bounce cursor-pointer rounded-full",
        { "bottom-10": showMoveToTopBtn }
      )}
    >
      <ArrowUp className="size-8 text-white" />
    </div>
  );
};

export default MoveToTopButton;
