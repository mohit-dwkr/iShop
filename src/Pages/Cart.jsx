import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../Context/ShopContext';
import EmptyCart from '../assets/EmptyCart.png';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart, getTotalCartItem } = useContext(ShopContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-32">
      <div className="max-w-7xl mx-auto my-10 p-4">
        {getTotalCartItem() === 0 ? (
          <div className="flex flex-col items-center justify-center gap-4">
            <img src={EmptyCart} alt="Empty Cart" className="w-64" />
            <p className="text-gray-700 text-lg font-medium">Your cart is empty</p>
            <Link to="/">
              <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Cart Items */}
            {all_product.map((e) => {
              if (cartItems[e.id] > 0) {
                return (
                  <div
                    key={e.id}
                    className="bg-white shadow-md rounded-xl p-4 flex flex-col sm:grid sm:grid-cols-6 sm:items-center sm:gap-4"
                  >
                    {/* Mobile layout */}
                    <div className="flex sm:hidden gap-4">
                      {/* Image */}
                      <img
                        src={e.image}
                        className="h-20 w-20 object-cover rounded-lg"
                        alt="product"
                      />
                      <div className="flex-1">
                        {/* Title */}
                        <p className="font-medium text-gray-800">{e.name}</p>
                        {/* Price */}
                        <p className="text-gray-600 mt-1">Price: ${e.new_price}</p>
                        {/* Quantity */}
                        <p className="text-gray-600 mt-1">Quantity: {cartItems[e.id]}</p>
                      </div>
                    </div>

                    {/* Remove Button Mobile */}
                    <div className="sm:hidden flex justify-center mt-3">
                      <X
                        onClick={() => removeFromCart(e.id)}
                        className="cursor-pointer text-red-500 hover:text-red-700 transition"
                        size={20}
                      />
                    </div>

                    {/* Desktop layout */}
                    <div className="hidden sm:block text-center">
                      <p className="font-bold text-gray-500 mb-6">Product</p>
                      <img
                        src={e.image}
                        className="h-20 w-20 object-cover rounded-lg mx-auto"
                        alt="product"
                      />
                    </div>
                    <div className="hidden sm:block text-center">
                      <p className="font-bold text-gray-500 mb-10">Title</p>
                      <p className="font-medium text-gray-800">{e.name}</p>
                    </div>
                    <div className="hidden sm:block text-center">
                      <p className="font-bold text-gray-500 mb-15">Price</p>
                      <p>${e.new_price}</p>
                    </div>
                    <div className="hidden sm:block text-center">
                      <p className="font-bold text-gray-500 mb-13">Quantity</p>
                      <span className="px-4 py-2 border rounded-lg">{cartItems[e.id]}</span>
                    </div>
                    <div className="hidden sm:block text-center">
                      <p className="font-bold text-gray-500 mb-12">Remove</p>
                      <X
                        onClick={() => removeFromCart(e.id)}
                        className="cursor-pointer text-red-500 hover:text-red-700 transition mx-auto"
                      />
                    </div>
                  </div>
                );
              }
              return null;
            })}

            {/* Totals & Promo Section */}
            <div className="flex flex-col lg:flex-row gap-10 md:gap-32">
              <div className="flex-1 bg-white shadow-md rounded-xl p-6 space-y-4">
                <h1 className="text-lg font-bold border-b pb-2">Cart Totals</h1>
                <div className="flex justify-between text-gray-700">
                  <p>Subtotal</p>
                  <p>${getTotalCartAmount()}</p>
                </div>
                <div className="flex justify-between text-gray-700">
                  <p>Shipping Fee</p>
                  <p className="text-green-600 font-medium">Free</p>
                </div>
                <div className="flex justify-between text-xl font-bold border-t pt-2">
                  <h3>Total</h3>
                  <h3>${getTotalCartAmount()}</h3>
                </div>
                <Link to="/login">
                  <button className="w-full mt-4 h-14 bg-blue-500 text-white font-semibold text-lg rounded-2xl hover:bg-blue-700 transition">
                    CONTINUE TO PAYMENT  
                  </button>
                </Link>
              </div>

              <div className="flex-1 bg-white shadow-md rounded-xl p-6">
                <p className="text-gray-600 mb-2">If you have a promo code, enter it here:</p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    placeholder="Promo Code"
                    className="flex-1 h-14 p-3 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="h-14 px-6 bg-white text-black border rounded-lg hover:bg-black hover:text-white font-bold transition">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
