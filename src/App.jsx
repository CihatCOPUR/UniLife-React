import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../src/App.css'
import HomePage from "./pages/homePage/HomePage";
import CitySearch from "./pages/citySearch/CitySearch";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cities" element={<CitySearch />} />
      </Routes>
    </Router>
  );
}

export default App;
