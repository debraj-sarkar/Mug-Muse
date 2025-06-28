import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import MainContent from "../components/MainContent";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

export default function App() {
  return <>
    <div className="min-h-screen mx-6">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <MainContent />

      {/* Explore our menu */}
      <Menu />

      {/* About us */}
      <AboutUs />

      {/* Footer */}
      <Footer />
    </div>
  </>
}