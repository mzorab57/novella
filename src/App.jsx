import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import Hero from "./components/Hero";
import Kondo from "./components/Kondo";
import OnwardSection from "./components/OnwardSection";
import GoalPage from "./pages/GoalPage";
import GoalSection from "./components/GoalSection";

// import Wave from './components/Wave'

function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="px-6 md:px-12 py-5 flex items-center justify-between bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 border border-red-700/50 rotate-45 flex items-center justify-center">
            <div className="w-2 h-2 bg-red-600/60 rotate-45" />
          </div>
          <span className="font-serif text-lg tracking-[0.15em] text-white/80 ml-2">NOVÈLLA</span>
        </div>

        <div className="flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-mono text-[10px] uppercase tracking-[0.3em] transition-colors duration-300 ${
                isActive ? "text-red-400/90" : "text-white/50 hover:text-red-400/80"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/goal"
            className={({ isActive }) =>
              `font-mono text-[10px] uppercase tracking-[0.3em] transition-colors duration-300 ${
                isActive ? "text-red-400/90" : "text-white/50 hover:text-red-400/80"
              }`
            }
          >
            GOAL
          </NavLink>
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <div>
      <Hero />
      <Kondo />
      <OnwardSection />
      <GoalSection />
      
      {/* <Wave /> */}
    </div>
  );
}

function App() {
  const location = useLocation();
  const showNavbar = location.pathname !== "/goal";

  return (
    <div>
      {showNavbar ? <Navbar /> : null}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/goal" element={<GoalPage />} />
      </Routes>
    </div>
  )
}

export default App
