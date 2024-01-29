import bg from "../../assets/recentEvent/Purple.png";
import Container from "../layout/Container";
import img1 from "../../assets/recentEvent/img1.png";
import img2 from "../../assets/recentEvent/img2.png";
import img3 from "../../assets/recentEvent/img3.png";
import img4 from "../../assets/recentEvent/img4.png";
import img5 from "../../assets/recentEvent/img5.png";
import img6 from "../../assets/recentEvent/img6.png";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const images = [img1, img2, img3, img4, img5, img6];
const RecentEvent = () => {
  return (
    <div
      style={{
        backgroundImage: `url("${bg}")`,
      }}
      className="h-screen bg-no-repeat flex"
    >
      <Container className="flex gap-[107px] items-center">
        <div className="grid grid-cols-3 gap-5">
          {images.map((image, index) => (
            <img
              className={cn(
                "max-w-[190px] max-h-[190px] w-full  rounded-[26px] ",
                {
                  "rounded-full": index === 2,
                },
                {
                  "rounded-full": index === 3,
                }
              )}
              key={index}
              src={image}
            />
          ))}
        </div>
        <div className="max-w-[518px]">
          <h1 className="mb-6">Recent Event</h1>
          <p className="mb-12 text-[#566B84] text-[18px]">
            Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
          </p>
          <Button
            className={cn(
              "w-[195px] h-[52px] text-[16px] font-bold rounded-none font-plus-jakarta-sans"
            )}
          >
            Explore
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default RecentEvent;
