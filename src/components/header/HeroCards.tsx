import love1 from "../../assets/icon/love1.png";
import love2 from "../../assets/icon/love2.png";
import love3 from "../../assets/icon/love3.png";
const HeroCards = () => {
  return (
    <div className="flex gap-3 md:gap-6 max-w-[740px] mx-auto w-full mt-10 lg:-mt-10">
      <div className="p-2 md:px-[15px] md:py-6 bg-white w-fit space-y-4 md:space-y-8 rounded-md border-2 border-[#FFFFFF] bg-opacity-50">
        <img src={love1} alt="" />
        <p className="text-[16px] leading-6 text-[#333333] font-light">
          Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus
          imperdiet sed id.
        </p>
      </div>
      <div className="p-2 md:px-[15px] md:py-6 bg-white w-fit space-y-4 md:space-y-8 rounded-md  border-2 border-[#FFFFFF] bg-opacity-50">
        <img src={love2} alt="" />
        <p className="text-[16px] leading-6 text-[#333333] font-light">
          Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus
          imperdiet sed id.
        </p>
      </div>
      <div className="p-2 md:px-[15px] md:py-6 bg-white w-fit space-y-4 md:space-y-8 rounded-md  border-2 border-[#FFFFFF] bg-opacity-50">
        <img src={love3} alt="" />
        <p className="text-[16px] leading-6 text-[#333333] font-light">
          Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus
          imperdiet sed id.
        </p>
      </div>
    </div>
  );
};

export default HeroCards;
