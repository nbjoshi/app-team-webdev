import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero
        header={"Shop"}
        description={"Find the perfect plant for your space"}
      />
      <Outlet />
      <Footer />
    </div>
  );
}
