import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Cart } from "./pages/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="product:id"></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="checkout"></Route>
          <Route path="checkout-success"></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="*"></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
