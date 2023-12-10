import "./App.css";
import { Homepage } from "./components/Homepage";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TVShowDetails } from "./components/TVShowDetails";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-gray-100 w-full h-full">
        <Header />
        <div className="pb-32 bg-gray-100">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/movies/:id" element={<TVShowDetails />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
