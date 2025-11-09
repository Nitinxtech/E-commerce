import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../api/auth";

export default function SignIn() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn(form);
      const text = await res.text();
      if (res.ok) {
        // ✅ Save username in localStorage
        localStorage.setItem("username", form.email.split("@")[0]);
        alert("Signed in successfully!");
        navigate("/");
      } else {
        alert(text || "Wrong credentials");
      }
    } catch (err) {
      alert("Sign in failed");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto space-y-4">
      <h2 className="text-xl font-bold mb-4">Sign In</h2>
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
        Sign In
      </button>
    </form>
  );
}