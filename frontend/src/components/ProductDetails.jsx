import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    axios.get(`http://localhost:5147/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error("Error fetching product:", err));
  }, [id]);

  if (!product) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 grid md:grid-cols-2 gap-6">
      <img src={product.imageUrl} alt={product.title} className="rounded-xl shadow" />
      <div>
        <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{product.description}</p>
        <p className="text-xl font-semibold mb-4">₹{product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}