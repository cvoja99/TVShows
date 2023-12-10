import "./App.css";
import { Homepage } from "./components/Homepage";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const App = () => {
  return (
    <div className="bg-gray-100 w-full h-full">
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
};

export default App;
