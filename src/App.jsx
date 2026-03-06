import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import Hero from "./components/Hero";
import Kondo from "./components/Kondo";
import OnwardSection from "./components/OnwardSection";
import GoalPage from "./pages/GoalPage";
import GoalSection from "./components/GoalSection";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import B2B from "./pages/B2B";
import About from "./pages/About";
import OurStory from "./components/OurStory";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

// import Wave from './components/Wave'


function HomePage() {
  return (
    <div>
      <Hero />
      <Kondo />
      <OnwardSection />
      <GoalSection />
      <OurStory />
      
      {/* <Wave /> */}
    </div>
  );
}

function App() {
  const location = useLocation();
  const showNavbar = location.pathname !== "/goal";

  return (
    <div>
       <Navbar /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/goal" element={<GoalPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/b2b" element={<B2B />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
