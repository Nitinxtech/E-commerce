import { useState } from "react";
import axios from "axios";

export default function AddProductForm() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    brand: "",
    imageUrl: "",
    category: "0",
    stock: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...form,
        price: parseFloat(form.price),
        stock: parseInt(form.stock),
        category: parseInt(form.category)
      };

      await axios.post("http://localhost:5147/api/products", payload);
      alert("Product Added Successfully!");
      setForm({
        title: "",
        description: "",
        price: "",
        brand: "",
        imageUrl: "",
        category: "0",
        stock: ""
      });
    } catch (err) {
      console.error("Error while adding product:", err);
      alert("Error occurred while adding product!");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit} className="grid gap-3 max-w-md mx-auto">
        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          placeholder="Price"
          type="number"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          placeholder="Brand"
          value={form.brand}
          onChange={(e) => setForm({ ...form, brand: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          placeholder="Image URL"
          value={form.imageUrl}
          onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
          className="border p-2 rounded"
        />

        <select
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className="border p-2 rounded"
        >
          <option value="0">Men</option>
          <option value="1">Women</option>
        </select>

        <input
          placeholder="Stock"
          type="number"
          value={form.stock}
          onChange={(e) => setForm({ ...form, stock: e.target.value })}
          className="border p-2 rounded"
        />

        <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Add Product
        </button>
      </form>
    </div>
  );
}