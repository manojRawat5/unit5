import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import { Routes, Route } from "react-router-dom";
import MainDatePage from "./pages/MainDatePage";
import TripPlan from "./components/tripPlan/TripPlan";
import Summary from "./components/summary/Summary";
import Home from './pages/Home'
import DatePage from "./components/DatesPage";
import TripDiscription from './components/TripDiscription'
import Navbar from "./components/home/Navbar";

function App() {
  return (
    <div>
    {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='tripDesc' element={<TripDiscription />} />
        <Route path="tripPlan" element={<TripPlan />} />
        <Route path="summary" element={<Summary />} />
        <Route path="datePage" element={<MainDatePage />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
