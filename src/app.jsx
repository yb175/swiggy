import Home from "./components/home.jsx";
import Restaurants from "./components/resturants.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Menu from "./components/menu.jsx";
import SearchedItems from "./components/searchItem.jsx";
import SecondaryHome from "./components/secondaryHome.jsx";
import Cart from "./components/cart.jsx";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/secondaryHome" element={<SecondaryHome />}>
          <Route path="resturants" element={<Restaurants />} />
          <Route path="menu/:id" element={<Menu />}>
            <Route path="search" element={<SearchedItems />} />
          </Route>
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
