import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import { Button } from "@heroui/button";
import { AiFillStar } from "react-icons/ai";

// ✅ Define product type
interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
}

const recommendedProducts: Product[] = [
  {
    id: 1,
    name: "Expedition Trek Bag",
    price: 139,
    rating: 4.6,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwGRFz1X4uyx22JcH_V6PW-PQ3tZz_Zli1hAF09m5vMEGo0lBmRk7pc8TcBIms5bQ7YVlSvW2J02VwLilolKkB576hJhqVorcXwUyPCU8Ba71z0Fr13sdQXU_nGHW6qZRp_x3gnD8Y7sniQCC8D_QtQE9wsUr51C-9uk2ETBPsIKcLSIiTDuZ8_DRnKS89YR_iqoNlzNdy8mFGnEVzMiTzL6ot_E7G2cDqxzWye4Q0UhPH99-PM2C08O6Fd0AQjE5rzD1eM_nurEZk",
  },
  {
    id: 2,
    name: "Trail Runner GTX Shoes",
    price: 159,
    rating: 4.8,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAb22t4khvl7ze06f4QADeI1uW84_oGIxM0d7JAcwi8aGP9BTGB9k7XmZMK2kAKr9oXjNAftyW3cr8kWbynJbeEz0pVnoH6Z24Guh08IuwU1IuPIQ7G9JRBCzvShRF-Wl9AIXdSLQK-SQHPRF7YgZoHRjIeHa0y-2CSg2zWxe6MCE1WPENWfqB3ojT0XrGBwyKYKikkWR2_oKFV45lvPtebkyvJQQVNATFy4XlFgi4UQJI3PLqB_s4rzuM3MhLgdephEk0YP0aBLgx2",
  },
  {
    id: 3,
    name: "Nomad Knit Beanie",
    price: 39,
    rating: 4.5,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBP0ilmmv8ubO-iCI4ZFXGMOzE7iPCNNIYAcVQ-EcDscgn2ByPga9L21FWNOlxc0l2F6lE1Xqzj-hfeSLAgvUwdgzU88Dr446-o7vaH7WgXmCQ3r0zCX8lglVdGJNsyAEKk_FuKsIh69S6hBxkS-T_JR5z7Ou0U2IQdTFv2qZnC9Vs59B5q72Z-YRlWPj-F6TgPeTWTzmbgk0ajc2o27PUbmzm0w52skhkfezm21tXUMbONS_mzdn7LmnhoeYNkcwcu0O1C3WYvX-vN",
  },
  {
    id: 4,
    name: "Heritage Leather Boots",
    price: 199,
    rating: 5,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCh4wuHmDGgMwY68XEUOtTDqNVlO77glzDA6it3sf2EDi8cG4Iy7S1phAVhAgyWQxCJWUq4evWKZgBBrvlzh9Eyfkxjcmq-1T_hyRwr7JGX_c51iiQWckzDcXbb9wbovR-RppW5kwX2AJU9SUlUFugVRdrnzQTXmU51mEfFDWDB798pxX3FKOjaLvcdMg6h9WWwGdt7dUQOG-Crq7OII8izUppADQ2PnAsLedk4hyknwOBKr8cDc4FnQB06VVodaZFSsSXEBF3BaJ3P",
  },
];

// ✅ Star rating component
const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;
  return (
    <div className="flex items-center text-yellow-500">
      {[...Array(fullStars)].map((_, i) => (
        <AiFillStar key={i} size={16} />
      ))}
      {hasHalf && <AiFillStar size={16} className="opacity-50" />}
    </div>
  );
};

export default function RecommendedProducts(){
  return (
    <section className="mt-20 border-t border-gray-200 dark:border-gray-800 pt-12">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-8">
        You Might Also Like
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {recommendedProducts.map((product) => (
          <Card
            key={product.id}
            isPressable
            shadow="sm"
            className="hover:shadow-lg transition rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
          >
            <CardHeader className="p-0">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-64 rounded-t-xl"
              />
            </CardHeader>

            <CardBody className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {product.name}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <StarRating rating={product.rating} />
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {product.rating.toFixed(1)}
                </span>
              </div>
            </CardBody>

            <CardFooter className="flex items-center justify-between p-4">
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                ${product.price.toFixed(2)}
              </p>
              <Button
                size="sm"
                color="primary"
                variant="solid"
                className="bg-black dark:bg-white text-white dark:text-black rounded-lg"
              >
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

