import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import GoToTop from "./components/GoToTop";
import Navbar2 from './components/Navbar2';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Inventory from "./pages/Inventory";
import AboutUs from "./pages/About";
import ContactUs from './pages/Contact';
import NotFound from "./pages/NotFound";


import './App.css';
import './styles.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar2 />

        <GoToTop>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/NotFound" element={<NotFound />} />
          </Routes>
        </GoToTop>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
