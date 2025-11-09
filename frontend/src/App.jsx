import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import ProductDetails from "./components/ProductDetails";
import Wishlist from "./components/Wishlist";
import Cart from "./components/Cart";
import AddProductForm from "./components/AddProductForm";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";


function App() {
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900 dark:text-white">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add-product" element={<AddProductForm />} />

          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;