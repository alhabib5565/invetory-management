import Container from "../layout/Container";
import groupPhoto from "../../assets/gallery/group-photo.png";
import checkBox from "../../assets/gallery/checkbox.png";

const Gallery = () => {
  const listItems = [
    "One day pas access all lecture",
    "Lunch and Snack",
    "Meet Event Speaker",
    "Front Seat",
    "One day pas access all lecture",
  ];

  return (
    <Container className="mt-20 flex flex-col-reverse lg:flex-row justify-between items-center gap-[120px]">
      <div className="space-y-[35px] max-w-[522px]">
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
      </div>

      <div className="max-w-[636px] max-h-[651px] w-full">
        <img className="w-full h-full" src={groupPhoto} alt="" />
      </div>
    </Container>
  );
};

export default Gallery;
