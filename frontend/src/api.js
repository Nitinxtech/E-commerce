import axios from "axios";

const API_URL = "http://localhost:5147/api/products";

export const getProducts = async (category) => {
  try {
    const res = await axios.get(
      category ? `${API_URL}?category=${category}` : API_URL
    );
    return res.data;
  } catch (err) {
    console.error("Error fetching products", err);
    return [];
  }
};

export const addProduct = async (product) => {
  try {
    const res = await axios.post(API_URL, product);
    return res.data;
  } catch (err) {
    console.error("Error adding product", err.response?.data || err.message);
    throw err;
  }
};