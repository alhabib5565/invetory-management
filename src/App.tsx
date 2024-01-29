import Event from "./components/event/Event";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import Header from "./components/header/Header";
import Pricing from "./components/pricing/Pricing";
import RecentEvent from "./components/recentEvent/RecentEvent";
import Services from "./components/serivces/Services";
import Testimonial from "./components/testimonial/Testimonial";
import ValuableClient from "./components/valuableClient/ValuableClient";

const App = () => {
  return (
    <div>
      <Header />
      <ValuableClient />
      <Services />
      <Event />
      <Pricing />
      <Gallery />
      {/* <Testimonial /> */}
      <RecentEvent />
      <Footer />
    </div>
  );
};

export default App;
