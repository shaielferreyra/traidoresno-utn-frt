
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Concerts from "./pages/Concerts";
import Discography from "./pages/Discography";
import History from "./pages/History";
import GalleryPage from "./pages/GalleryPage";
import News from "./pages/News";
import Articles from "./pages/Articles";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/conciertos" element={<Concerts />} />
            <Route path="/discografia" element={<Discography />} />
            <Route path="/nuestra-historia" element={<History />} />
            <Route path="/galeria" element={<GalleryPage />} />
            <Route path="/novedades" element={<News />} />
            <Route path="/articulos" element={<Articles />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
