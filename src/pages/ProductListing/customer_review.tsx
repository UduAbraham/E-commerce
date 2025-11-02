import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Progress } from "@heroui/react";

// ✅ Review type
interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  text: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Alex R.",
    date: "March 15, 2023",
    rating: 5,
    text: "Incredible jacket! Perfect fit, warm but not bulky. I've worn it in light rain and stayed completely dry. Highly recommend.",
  },
  {
    id: 2,
    name: "Samantha B.",
    date: "February 28, 2023",
    rating: 4,
    text: "Great style and quality. My only issue is that the sleeves are a tiny bit long for me, but it's a minor thing. Overall a fantastic purchase.",
  },
];

// ✅ Rating stats type
interface RatingStat {
  stars: number;
  percent: number;
}

const ratingStats: RatingStat[] = [
  { stars: 5, percent: 70 },
  { stars: 4, percent: 15 },
  { stars: 3, percent: 8 },
  { stars: 2, percent: 4 },
  { stars: 1, percent: 3 },
];

// ✅ StarRating with types
interface StarRatingProps {
  value: number;
  size?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ value, size = 20 }) => (
  <div className="flex text-yellow-500">
    {[...Array(5)].map((_, i) =>
      i < value ? (
        <AiFillStar key={i} size={size} />
      ) : (
        <AiOutlineStar key={i} size={size} />
      )
    )}
  </div>
);

const CustomerReviews: React.FC = () => {
  return (
    <section
      id="reviews"
      className="mt-16 lg:mt-24 border-t border-gray-200 dark:border-gray-800 pt-12"
    >
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Customer Reviews
      </h2>

      <div className="mt-8 flex flex-col md:flex-row gap-10">
        {/* LEFT: Ratings Summary */}
        <div className="md:w-1/3 space-y-6">
          <div className="flex items-center">
            <p className="text-4xl font-bold text-gray-900 dark:text-white">4.2</p>
            <div className="ml-4">
              <StarRating value={4} />
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Based on 121 reviews
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {ratingStats.map(({ stars, percent }) => (
              <div key={stars} className="flex items-center gap-2 text-sm">
                <span className="w-10 text-gray-700 dark:text-gray-300">
                  {stars} star
                </span>
                <Progress
                  aria-label={`${stars}-star rating`}
                  size="sm"
                  color="warning"
                  value={percent}
                  className="flex-1"
                />
                <span className="w-10 text-right text-gray-700 dark:text-gray-300">
                  {percent}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Individual Reviews */}
        <div className="md:w-2/3 space-y-6">
          {reviews.map(({ id, name, date, rating, text }) => (
            <div
              key={id}
              className="p-6 rounded-xl bg-gray-100/60 dark:bg-gray-800/60 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {name}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{date}</p>
                </div>
                <StarRating value={rating} size={16} />
              </div>
              <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
