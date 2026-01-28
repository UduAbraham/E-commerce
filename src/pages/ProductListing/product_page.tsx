import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Button } from "@heroui/button";
import { Link } from "react-router-dom";

import CustomerReviews from "./customer_review";
import RecommendedProducts from "./recommended_products";

export default function ProductPage() {
  // Product variants (with image, name, price, and description)
  const productVariants = [
    {
      id: 1,
      name: "The Nomad Jacket",
      price: 249.0,
      description:
        "Engineered for the modern explorer, this jacket combines timeless style with unparalleled performance against the elements.",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCh4wuHmDGgMwY68XEUOtTDqNVlO77glzDA6it3sf2EDi8cG4Iy7S1phAVhAgyWQxCJWUq4evWKZgBBrvlzh9Eyfkxjcmq-1T_hyRwr7JGX_c51iiQWckzDcXbb9wbovR-RppW5kwX2AJU9SUlUFugVRdrnzQTXmU51mEfFDWDB798pxX3FKOjaLvcdMg6h9WWwGdt7dUQOG-Crq7OII8izUppADQ2PnAsLedk4hyknwOBKr8cDc4FnQB06VVodaZFSsSXEBF3BaJ3P",
    },
    {
      id: 2,
      name: "The Desert Runner",
      price: 179.0,
      description:
        "Lightweight, durable, and breathable—perfect for everyday adventures in urban or desert terrain.",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBP0ilmmv8ubO-iCI4ZFXGMOzE7iPCNNIYAcVQ-EcDscgn2ByPga9L21FWNOlxc0l2F6lE1Xqzj-hfeSLAgvUwdgzU88Dr446-o7vaH7WgXmCQ3r0zCX8lglVdGJNsyAEKk_FuKsIh69S6hBxkS-T_JR5z7Ou0U2IQdTFv2qZnC9Vs59B5q72Z-YRlWPj-F6TgPeTWTzmbgk0ajc2o27PUbmzm0w52skhkfezm21tXUMbONS_mzdn7LmnhoeYNkcwcu0O1C3WYvX-vN",
    },
    {
      id: 3,
      name: "The Desert Runner",
      price: 179.0,
      description:
        "Lightweight, durable, and breathable—perfect for everyday adventures in urban or desert terrain.",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAb22t4khvl7ze06f4QADeI1uW84_oGIxM0d7JAcwi8aGP9BTGB9k7XmZMK2kAKr9oXjNAftyW3cr8kWbynJbeEz0pVnoH6Z24Guh08IuwU1IuPIQ7G9JRBCzvShRF-Wl9AIXdSLQK-SQHPRF7YgZoHRjIeHa0y-2CSg2zWxe6MCE1WPENWfqB3ojT0XrGBwyKYKikkWR2_oKFV45lvPtebkyvJQQVNATFy4XlFgi4UQJI3PLqB_s4rzuM3MhLgdephEk0YP0aBLgx2",
    },
    {
      id: 4,
      name: "The Alpine Shell",
      price: 289.0,
      description:
        "Designed for high-altitude performance, this shell protects you from wind, rain, and snow while maintaining breathability.",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDukZTrOuQ4QZNrsrTqKUO2evOUB9wJacCNcR2wkXYm2lKFFriNP_OyrupdCcg-UIikOYys10ZOPN53xTGo5v_tKAEgN3M_3myZiMvCvlzJJcs9-soAllh0jsk_Rgk1DecvQWix3FzXOYKhRGx6eefeqY7qBTOKsJOcjUHzum_ZLvTmrQ8Ud96G5C6-c-6RFzdlo3M2c62HcrkFjGsUWedvoYyGyhmmDA2ebEc4R69x0eV0AP8F3x-ZRwz75TRK1JNs3TeSCq_20jr5",
    },
    {
      id: 5,
      name: "The Urban Trekker",
      price: 199.0,
      description:
        "A modern, minimalist jacket built for the streets—combining sleek aesthetics with everyday comfort.",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9qSOF6iJlqDXw9lS6BnXzCyhYexCsJIWKGA7RomsjWTikJwtxGAYbn9lgaNUFni-kYTzfIAQWMfghkbQlCnvn0dWEftl5fv_0P_O0fpts2BKE_EV_DClkooHl-NbrezCNaRjAYbw4VSM1pzs5-jP_Vi3JiVAiDIMoqxq5zu4UNu8BWrvZ9b9a096IT67VeNKsru6yPJ1VefEx6js70s8Dq_H_xtmsVDeRnWn4Cuun-JjDQ9Rzn7_Zd2c7VSrZoMXNFQTvETWtSgFJ",
    },
    {
      id: 6,
      name: "The Khaki Explorer",
      price: 259.0,
      description:
        "Versatile and weather-resistant, ideal for travel and outdoor escapades in any season.",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGUDOo6OHylpoGgMrJejdQ02xMN_3UqSbO7vX4ihVrMd4NVbZ4QlKd0cGa1eRwCORTc5xmL0gyyNxSJvyHc2zdRRuRcqQwwYsHrpW4NYJhy7rrz8jrs-8tctntOuiW_SCcbjIQAofg5JKAj0Sq4cMFempoJ4_xhR2KrFdO-IzHexTuxvMI7XM_rquYQNyxeFl0Fr9zc4PKguH2W-pN4MxQkpVGOIlWB08xj-_Q82hiSd4kIPgt0Fzq4w0kwaNwEmz4kMNn6V6XKNZ-",
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(productVariants[0]);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  const colors = [
    { name: "Black", value: "bg-gray-900" },
    { name: "Navy Blue", value: "bg-blue-800" },
    { name: "Forest Green", value: "bg-green-900" },
  ];

  const sizes = ["S", "M", "L", "XL"];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 px-8 py-12 max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* LEFT: Image Gallery */}
        <div>
          <img
            alt={selectedProduct.name}
            className="rounded-2xl shadow-md object-cover w-full h-[600px]"
            src={selectedProduct.src}
          />
          <div className="flex gap-3 mt-4 overflow-x-auto">
            {productVariants.map((variant) => (
              <div
                key={variant.id}
                className={`cursor-pointer rounded-xl border-2 p-1 transition ${
                  selectedProduct.id === variant.id
                    ? "border-blue-600 shadow-md"
                    : "border-gray-200 dark:border-gray-700"
                }`}
                onClick={() => setSelectedProduct(variant)}
              >
                <img
                  alt={variant.name}
                  className="w-20 h-20 object-cover rounded-lg"
                  src={variant.src}
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Product Details */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              Home / Apparel / {selectedProduct.name}
            </p>

            <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-3">
              {selectedProduct.name}
            </h1>

            {/* Ratings */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center text-yellow-500">
                {[...Array(4)].map((_, i) => (
                  <FaStar key={i} />
                ))}
                <FaStar className="text-gray-300" />
              </div>
              <a
                className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:underline"
                href="#reviews"
              >
                (121 Reviews)
              </a>
            </div>

            {/* Dynamic Price & Description */}
            <p className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              ${selectedProduct.price.toFixed(2)}
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {selectedProduct.description}
            </p>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                Color
              </h3>
              <div className="flex gap-3 mt-2">
                {colors.map((c) => (
                  <button
                    key={c.name}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === c.name
                        ? "ring-2 ring-offset-2 ring-gray-900 dark:ring-white"
                        : "border-transparent"
                    } ${c.value}`}
                    title={c.name}
                    onClick={() => setSelectedColor(c.name)}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                  Size
                </h3>
                <a
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  href="#"
                >
                  Size guide
                </a>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`flex items-center justify-center py-2 px-4 rounded-lg text-sm font-medium border ${
                      selectedSize === size
                        ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                        : "border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="mt-8 flex gap-4">
              <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-lg">
                <button
                  className="px-3 py-2 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  −
                </button>
                <span className="px-4 font-semibold">{quantity}</span>
                <button
                  className="px-3 py-2 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
              <Button
                as={Link}
                className="flex-1 py-3 px-6 bg-black dark:bg-white text-white dark:text-black rounded-lg text-base font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                color="primary"
                to={"/cartpage"}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>

      <CustomerReviews />
      <RecommendedProducts />
    </div>
  );
}
