import Event from "./components/event/Event";
import Header from "./components/header/Header";
import Services from "./components/serivces/Services";
import ValuableClient from "./components/valuableClient/ValuableClient";

const App = () => {
  return (
    <div>
      <Header />
      <ValuableClient />
      <Services />
      <Event />
    </div>
  );
};

export default App;
