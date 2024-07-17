import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Product from "./components/Product";
import Dashboard from "./components/Dashboard.jsx";
import Cart from "./components/Cart.jsx";
import Navbars from "./components/Navbar.jsx";
import { Provider } from "react-redux";
import store from "../src/store/Store";
import { useEffect } from "react";

const App = () => {
  
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/products/products", {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (e) {
      console.error("Fetch error:", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Navbars />
          <Routes>
            <Route path="/products" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
