import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { FaShoppingCart, FaPlus, FaMoon } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";

export default function Navbar() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username"); // ✅ Check login status
  const { dark, toggleDark } = useTheme();

  const handleLogout = () => {
    localStorage.removeItem("username"); // ✅ Remove username on logout
    navigate("/"); // ✅ Redirect to home
  };

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

        {/* ✅ Conditional rendering based on login */}
        {username ? (
          <>
            <span className="font-semibold">Hi, {username}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}

        {/* ✅ Theme toggle */}
        <button
          onClick={toggleDark}
          className="bg-gray-300 dark:bg-gray-700 rounded px-2 py-1 flex items-center justify-center"
        >
          {dark ? <MdLightMode /> : <FaMoon className="text-blue-600" />}
        </button>
      </div>
    </nav>
  );
}