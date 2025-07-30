import Home from "./components/home.jsx";
import Restaurants from "./components/resturants.jsx";
import {BrowserRouter , Routes, Route} from "react-router";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resturants" element= {<Restaurants/>} />
      </Routes>
    </BrowserRouter>
  );
}