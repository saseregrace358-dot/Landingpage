import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import POSPage from "./pages/POSPage";
import PricingPage from "./components/PricingPage";
import "./index.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pos" element={<POSPage />} />
      <Route path="/pricing" element={<PricingPage />} />
    </Routes>
  );
}

export default App;