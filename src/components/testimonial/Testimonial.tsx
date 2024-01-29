import Container from "../layout/Container";
import author1 from "../../assets/testimonial/author1.png";
import author2 from "../../assets/testimonial/author2.png";
import author3 from "../../assets/testimonial/author3.png";
const Testimonial = () => {
  const reviews = [
    {
      authorImage: author1,
      authorName: "Amelia Joseph",
      designation: "Chief Manager",
      review:
        "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.",
    },
    {
      authorImage: author2,
      authorName: "Jacob Joshua",
      designation: "Chief Manager",
      review:
        "I found the digital expertise I needed. Their creative-professional balance exceeded expectations. Friendly interactions, exceptional outcomes. For digital enchantment, it's got to be Embrace!",
    },
    {
      authorImage: author3,
      authorName: "Jacob Joshua",
      designation: "Chief Manager",
      review:
        "Embrace really nails it! Creative brilliance, approachable style. They're the partners you want—artistry meets strategy. Thrilled with what they achieved!",
    },
  ];
  return (
    <Container className="mt-20">
      <h1>What Our Client Said about us</h1>
      <div className="flex gap-5 mt-14">
        {reviews.map((review, index) => (
          <div
            className="max-w-[513px] w-full max-h-[312px] rounded-[30px] p-10 bg-[#F8F9FF] hover:bg-[#3461FF] hover:text-white transition-all space-y-5"
            key={index}
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
        ))}
      </div>
    </Container>
  );
};

export default Testimonial;
