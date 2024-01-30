import Container from "../layout/Container";
import groupPhoto from "../../assets/gallery/group-photo.png";
import checkBox from "../../assets/gallery/checkbox.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Gallery = () => {
  const listItems = [
    "One day pas access all lecture",
    "Lunch and Snack",
    "Meet Event Speaker",
    "Front Seat",
    "One day pas access all lecture",
  ];

  const motionDuration = 0.3;

  const textRef = useRef<HTMLDivElement>(null);
  const textIsInView = useInView(textRef);
  const imgRef = useRef<HTMLDivElement>(null);
  const imgIsInView = useInView(imgRef);

  return (
    <Container className="mt-20 flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-[120px]">
      <motion.div
        ref={textRef}
        initial={!textIsInView ? { x: 100, opacity: 0.5 } : ""}
        animate={textIsInView ? { x: 0, opacity: 1 } : ""}
        transition={{
          duration: motionDuration,
        }}
        className="space-y-[35px] max-w-[522px]"
      >
        <h1>Gallery</h1>
        <p className="text-[18px] text-[#566B84]">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut
          posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
        </p>
        <ul>
          {listItems.map((listItem, index) => (
            <li
              key={index}
              className="flex gap-x-[18px] items-center text-[18px]"
            >
              <img src={checkBox} className="w-5 h-5 bg-cover" alt="" />{" "}
              <span>{listItem}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        ref={imgRef}
        initial={!imgIsInView ? { x: -100, opacity: 0.5 } : ""}
        animate={imgIsInView ? { x: 0, opacity: 1 } : ""}
        transition={{
          duration: motionDuration,
        }}
        className="max-w-[636px] max-h-[651px] w-full "
      >
        <img className="w-full h-full" src={groupPhoto} alt="" />
      </motion.div>
    </Container>
  );
};

export default Gallery;
