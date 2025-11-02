import { useEffect, useState } from "react";
import axios from "axios";

function Women() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5147/api/products");
        const womenItems = res.data.filter((item) => item.category === 1);
        setProducts(womenItems);
        setFiltered(womenItems);
      } catch (err) {
        console.error("Error fetching women products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleSearch = (query) => {
    const q = query.toLowerCase();
    setFiltered(products.filter((p) => p.title.toLowerCase().includes(q)));
  };

  const handleSort = (type) => {
    if (type === "low")
      setFiltered([...filtered].sort((a, b) => a.price - b.price));
    else if (type === "high")
      setFiltered([...filtered].sort((a, b) => b.price - a.price));
    else setFiltered(products);
  };

  if (loading) return <p className="text-center mt-6">Loading...</p>;

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-3 mb-6">
        <input
          type="text"
          placeholder="Search Women’s Products..."
          onChange={(e) => handleSearch(e.target.value)}
          className="p-2 border rounded-md w-full md:w-1/3"
        />
        <select
          onChange={(e) => handleSort(e.target.value)}
          className="p-2 border rounded-md"
        >
          <option value="default">Sort by</option>
          <option value="low">Price: Low → High</option>
          <option value="high">Price: High → Low</option>
        </select>
      </div>

      <h1 className="text-2xl font-bold mb-4">Women’s Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.length > 0 ? (
          filtered.map((p) => (
            <div
              key={p.id}
              className="border rounded-xl shadow-md hover:shadow-lg transition p-4"
            >
              <img
                src={p.imageUrl}
                alt={p.title}
                className="h-56 w-full object-cover rounded-lg mb-3"
              />
              <h2 className="font-semibold text-lg">{p.title}</h2>
              <p className="text-gray-600 text-sm">{p.description}</p>
              <p className="text-lg font-bold mt-2">₹{p.price}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No Women products found</p>
        )}
      </div>
    </div>
  );
}

export default Women;