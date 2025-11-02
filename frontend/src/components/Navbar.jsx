import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { FaShoppingCart, FaPlus, FaSun, FaMoon } from "react-icons/fa";

export default function Navbar() {
  const { dark, toggleDark } = useTheme();

  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-gray-100 dark:bg-gray-800 dark:text-white shadow-md sticky top-0 z-50">
      <Link to="/" className="text-2xl font-bold text-pink-500">
        Shopping Buddy
      </Link>
      <div className="flex gap-6 items-center text-lg">
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/cart">
          <FaShoppingCart className="text-xl" />
        </Link>
        <Link to="/add-product">
          <FaPlus className="text-xl" />
        </Link>
        <button
          onClick={toggleDark}
          className="bg-gray-300 dark:bg-gray-700 rounded px-2 py-1 flex items-center justify-center"
        >
          {dark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-600" />}
        </button>
      </div>
    </nav>
  );
}