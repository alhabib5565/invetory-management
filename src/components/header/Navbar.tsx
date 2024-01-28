import Container from "../layout/Container";

const Navbar = () => {
  return (
    <Container>
      <nav className="flex justify-between items-center py-6">
        <a href="" className="text-[32px] font-bold">
          Event <span className="text-primary">360</span>
        </a>
        <ul className="flex gap-4 items-center">
          <li>
            <a
              href=""
              className="px-2 py-3 tracking-[0.5px] text-[16px] font-medium leading-[24px]"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href=""
              className="px-2 py-3 tracking-[0.5px] text-[16px] font-medium leading-[24px]"
            >
              About
            </a>
          </li>
          <li>
            <a
              href=""
              className="px-2 py-3 tracking-[0.5px] text-[16px] font-medium leading-[24px]"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Navbar;
