import Footer from "./components/footer";
import Navbar from "./components/navbar";
import HomeRent from "./page/homeRent/HomeRent";
import Landing from "./page/landing/Landing";
import navbarLogo from  "./assets/logo.svg"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar img={navbarLogo} />
      <Routes>
        <Route exact  path="/" element={<Landing />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/homeRent" element={<HomeRent />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
