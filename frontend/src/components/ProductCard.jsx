import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const addToWishlist = (product) => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (!wishlist.some((p) => p.id === product.id)) {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      alert("Added to Wishlist");
    }
  };

  return (
    <div className="border rounded-xl p-3 shadow hover:shadow-xl transition dark:bg-gray-800">
      <Link to={`/product/${product.id}`}>
        <img src={product.imageUrl} alt={product.title} className="h-52 w-full object-cover rounded-lg" />
      </Link>
      <h3 className="mt-2 font-semibold">{product.title}</h3>
      <p className="text-gray-600 dark:text-gray-400">₹{product.price}</p>
      <div className="flex gap-2 mt-2">
        <button onClick={() => addToCart(product)} className="bg-blue-600 text-white px-2 py-1 rounded text-sm">Add to Cart</button>
        <button onClick={() => addToWishlist(product)} className="bg-pink-500 text-white px-2 py-1 rounded text-sm">Add to Wishlist</button>
      </div>
    </div>
  );
}