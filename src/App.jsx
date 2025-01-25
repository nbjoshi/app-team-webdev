import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import PlantCard from "./components/PlantCard.jsx";
import ShopBody from "./components/ShopBody.jsx";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero
        header={"Shop"}
        description={"Find the perfect plant for your space"}
      />
      <Outlet />
      <ShopBody />
    </div>
  );
}
