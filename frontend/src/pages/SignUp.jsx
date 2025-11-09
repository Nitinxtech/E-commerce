import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import { signUp } from "../api/auth";

export default function SignUp() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate(); // ✅ Initialize navigate

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(form);
      alert("Sign up successful!");
      navigate("/signin"); // ✅ Redirect to Sign-In page
    } catch (err) {
      alert("Sign up failed");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto space-y-4">
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>
      <input
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
        Sign Up
      </button>
    </form>
  );
}