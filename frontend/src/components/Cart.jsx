import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  if (cart.length === 0) {
    return (
      <p className="text-center mt-10 text-gray-600 text-lg">
        🛒 Your cart is empty — go grab some cool stuff!
      </p>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between border p-4 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <div className="flex items-start gap-6 w-full sm:w-auto">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="h-24 w-24 object-cover rounded-md border"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                <p className="mt-2 text-gray-800 dark:text-gray-200 font-semibold">
                  ₹{item.price} × {item.qty} ={" "}
                  <span className="font-bold text-black dark:text-white">
                    ₹{item.price * item.qty}
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-4 sm:mt-0 sm:ml-4">
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition w-full sm:w-auto"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col sm:flex-row justify-between items-center border-t pt-6">
        <p className="text-xl font-semibold mb-4 sm:mb-0">
          Total: <span className="text-green-600 font-bold">₹{total}</span>
        </p>
        <button
          onClick={clearCart}
          className="bg-primary text-white px-4 py-2 rounded"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}