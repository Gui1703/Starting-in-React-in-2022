import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./pages/App";
import { Cart } from "./pages/Cart";
import { Catalog } from "./pages/Catalog";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </Router>
  );
}
