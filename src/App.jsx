import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUsPage.jsx";
import Gallery from "./components/GalleryPage.jsx";
import Events from "./components/EventsPage.jsx";
import Registration from "./components/RegistrationsPage.jsx";
import SponsorUs from "./components/SponsorUsPage.jsx";
import ContactUs from "./components/ContactUsPage.jsx";
import Hero from "./components/Hero.jsx";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/registrations" element={<Registration />} />
          <Route path="/sponsor-us" element={<SponsorUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
