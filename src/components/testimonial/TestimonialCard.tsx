import { cn } from "@/lib/utils";
type TReview = {
  review: {
    authorImage: string;
    authorName: string;
    designation: string;
    review: string;
  };
};
const TestimonialCard = ({ review }: TReview) => {
  return (
    <div
      className={cn(
        "max-w-[513px] w-full max-h-[312px] rounded-[30px] p-10 bg-[#F8F9FF] hover:bg-[#3461FF] hover:text-white transition-all space-y-5"
      )}
    >
      <div className="flex gap-4 items-center">
        <img
          className="w-[85px] h-[85px] bg-contain"
          src={review.authorImage}
          alt=""
        />
        <div>
          <h4 className="text-[28px] font-medium">{review.authorName}</h4>
          <p className="text-[20px]">{review.designation}</p>
        </div>
      </div>
      <p className="text-[16px]">{review.review}</p>
    </div>
  );
};

export default TestimonialCard;
