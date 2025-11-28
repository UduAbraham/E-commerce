

import { useState } from "react";
import { Button, Input } from "@heroui/react";
import {  FaTrashAlt } from "react-icons/fa";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { useNavigate } from "react-router-dom";

interface CartItem {
  id: number;
  name: string;
  color: string;
  size: string;
  price: number;
  quantity: number;
  image: string;
}

export default function CartPage() {

  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Premium Crewneck Sweatshirt",
      color: "Onyx",
      size: "L",
      price: 68,
      quantity: 1,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAw7bpGinIsogr1ibtcCkQw5MvGqZwykoe5FG15sKN4tQueCHRRezSrMlifnexFodcWojDci3KZS7hYdMEGNltfOvjigP50c3be69v6WiGsIpFJdG5xXE3kTDz0KBczSa5cfILNNVByVhkJri_OuF8lffZznl3uf6yAjSAanr0Sduj7J-neF3lgOYRdzTkSG55DMEZ4Fp1KD2EXjSxIa072dmsMkr8yglERA5H7dQugoXjbI6Jy8Yi5nBoCwjytTT1Ejyy0qR8VpEfB",
    },
    {
      id: 2,
      name: "Performance Jogger",
      color: "Heather Grey",
      size: "M",
      price: 84,
      quantity: 1,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuANxiu_V0zLzaXg-YZfzHxfehWN1oxZ6P51sQJS8lhPOFQm-DuTZ0EG0Mpxmy54TiJPbkdIQhJcn5_UdYKhMfZFFh8IuVKEnQxD8eOK3eVDDv6VQ4LndPY062ZrejRRMfMVOsmB-VNHqpy6cQx-GWGuaDwNocfuNwcp8ZPOM-KOz3ShgaqUe89OKYjx86o0OGiwMys-AJGZRdn8_drB2PWi9UBT-tBNv4lCCGOAMSblWZv8",
    },
  ]);

  const handleQuantityChange = (id: number, delta: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemove = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = 5.0;
  const total = subtotal + shipping;

  return (
    <div className=" max-w-6xl mx-auto bg-background-light dark:bg-background-dark min-h-screen text-slate-800 dark:text-slate-200">
      {/* HEADER */}
      <header className="border-b border-slate-200 dark:border-slate-800 sticky top-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md z-50">
      
      </header>

      {/* MAIN */}
      <main className="container mx-auto px-4 py-10 grid lg:grid-cols-12 gap-8">
        {/* CART ITEMS */}
        <section className="lg:col-span-8 space-y-6">
          <div className="flex justify-between items-baseline">
            <h2 className="text-4xl font-black">Your Bag</h2>
            <a href="#" className="text-sm text-slate-500 hover:text-primary">
              Continue Shopping
            </a>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-lg divide-y">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-wrap sm:flex-nowrap justify-between p-4 gap-4 items-center"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div>
                    <p className="font-semibold tracking-wide">{item.name}</p>
                    <p className="text-sm text-slate-500">
                      Color: {item.color}, Size: {item.size}
                    </p>
                    <p className="text-base font-medium sm:hidden mt-1 py-1">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6 ml-auto">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 p-2 rounded-full"
                    >
                      <IoMdRemove />
                    </button>
                    <span className="font-medium">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 p-2 rounded-full"
                    >
                      <IoMdAdd />
                    </button>
                  </div>

                  <p className="hidden sm:block font-semibold w-20 text-right">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>

                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-slate-400 hover:text-red-500"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SUMMARY */}
        <aside className="lg:col-span-4 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl p-6 h-fit sticky top-28">
          <h3 className="text-xl font-bold mb-6">Summary</h3>

          <div className="space-y-3 text-slate-600 dark:text-slate-300">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="font-medium">${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Taxes</span>
              <span className="text-sm">Calculated at checkout</span>
            </div>
          </div>

          <div className="my-4 border-t border-slate-200 dark:border-slate-700" />

          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <div className="mt-6 flex gap-2">
            <Input
              type="text"
              placeholder="Enter promo code"
              className="flex-grow"
              radius="lg"
            />
            <Button variant="flat" className="bg-slate-200 dark:bg-slate-800">
              Apply
            </Button>
          </div>

          <Button
            color="primary"
            className="w-full mt-6 py-3 text-white font-bold rounded-lg"
            onPress={()=>  navigate("/checkoutpage")}
          >
            Secure Checkout
          </Button>

          <div className="mt-6 text-center text-sm text-slate-500">
            <p className="mb-2">We accept:</p>
            <div className="flex justify-center gap-3 opacity-70">
              <img src="/visa.svg" alt="Visa" className="h-6" />
              <img src="/mastercard.svg" alt="Mastercard" className="h-6" />
              <img src="/paypal.svg" alt="PayPal" className="h-6" />
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
