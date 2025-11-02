import { useState, useEffect } from "react";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("wishlist");
    if (saved) setWishlist(JSON.parse(saved));
  }, []);

  const removeFromWishlist = (id) => {
    const updated = wishlist.filter((p) => p.id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Wishlist</h2>
      {wishlist.length === 0 ? <p>No items yet</p> : (
        <div className="grid md:grid-cols-4 gap-4">
          {wishlist.map((p) => (
            <div key={p.id} className="border p-3 rounded shadow">
              <img src={p.imageUrl} className="h-40 w-full object-cover rounded" />
              <h3>{p.title}</h3>
              <p>₹{p.price}</p>
              <button onClick={() => removeFromWishlist(p.id)} className="bg-red-500 text-white w-full rounded mt-2 py-1">
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}