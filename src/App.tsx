import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { Contact } from "./pages/Contact";
import { Cart } from "./pages/Cart";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import { Search } from "./pages/Search";
import Product from "./pages/Product";
import { CheckoutSuccess } from "./pages/CheckoutSuccess";
import ScrollToTop from "./components/helpers/ScrollToTop";
import { useFetch } from "./hooks/useFetch";
import { IProduct } from "./interface";
import { baseUrl } from "./api/Constants";
import Sale from "./pages/Sale";

function App() {
  const { data, isLoading, isError } = useFetch<IProduct[]>(baseUrl);
  const products = data ?? [];
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchTermFromURL = params.get("term") || "";

  const [searchTerm, setSearchTerm] = useState(searchTermFromURL);

  useEffect(() => {
    setSearchTerm(searchTermFromURL);
  }, [searchTermFromURL]);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Home
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                data={products}
                isLoading={isLoading}
                isError={isError}
              />
            }
          ></Route>
          <Route
            path="product/:id"
            element={
              <Product
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                data={products}
                isLoading={isLoading}
                isError={isError}
              />
            }
          ></Route>
          <Route
            path="search"
            element={
              <Search
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                data={products}
                isLoading={isLoading}
                isError={isError}
              />
            }
          ></Route>
          <Route
            path="sale"
            element={
              <Sale
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                data={products}
                isLoading={isLoading}
                isError={isError}
              />
            }
          ></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route
            path="checkout/thank-you"
            element={<CheckoutSuccess />}
          ></Route>
          <Route
            path="contact"
            element={
              <Contact
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                data={products}
                isLoading={isLoading}
                isError={isError}
              />
            }
          ></Route>
          <Route path="*"></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
