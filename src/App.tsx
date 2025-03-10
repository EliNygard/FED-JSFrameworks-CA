import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { Contact } from "./pages/Contact";
import { Cart } from "./pages/Cart";
import { useState } from "react";
import Home from "./pages/Home";
import { Search } from "./pages/Search";
import Product from "./pages/Product";
import { CheckoutSuccess } from "./pages/CheckoutSuccess";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Home searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            }
          ></Route>
          <Route
            path="product/:id"
            element={
              <Product searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            }
          ></Route>
          <Route
            path="search"
            element={<Search searchTerm={searchTerm} />}
          ></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route
            path="checkout/thank-you"
            element={<CheckoutSuccess />}
          ></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="*"></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
