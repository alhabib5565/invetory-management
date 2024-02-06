import Container from "../layout/Container";
import author1 from "../../assets/testimonial/author1.png";
import author2 from "../../assets/testimonial/author2.png";
import author3 from "../../assets/testimonial/author3.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialCard from "./TestimonialCard";
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
    {
      authorImage: author3,
      authorName: "Jacob Joshua",
      designation: "Chief Manager",
      review:
        "Embrace really nails it! Creative brilliance, approachable style. They're the partners you want—artistry meets strategy. Thrilled with what they achieved!",
    },
    {
      authorImage: author3,
      authorName: "Jacob Joshua",
      designation: "Chief Manager",
      review:
        "Embrace really nails it! Creative brilliance, approachable style. They're the partners you want—artistry meets strategy. Thrilled with what they achieved!",
    },
    {
      authorImage: author3,
      authorName: "Jacob Joshua",
      designation: "Chief Manager",
      review:
        "Embrace really nails it! Creative brilliance, approachable style. They're the partners you want—artistry meets strategy. Thrilled with what they achieved!",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Container className="mt-20">
      <h1>What Our Client Said about us</h1>

      <Carousel
        draggable={true}
        swipeable={true}
        responsive={responsive}
        // transitionDuration={300}
        autoPlay={true}
        autoPlaySpeed={3000}
        className=" mt-14"
      >
        {reviews.map((review, index) => (
          <TestimonialCard review={review} key={index} />
        ))}
      </Carousel>
    </Container>
  );
};

export default Testimonial;
