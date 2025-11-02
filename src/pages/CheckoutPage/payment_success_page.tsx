
import { Button } from "@heroui/react";
import { Link } from "react-router-dom";
import {
  FiCheck,
  FiHelpCircle,
} from "react-icons/fi";

export default function PaymentSuccessPage() {
  const orderedItems = [
    {
      id: 1,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBG53mO7HBpmZIL5tKvNtH9WjZEEQJcIWV1M4QBWod5ze8FT4Use498AwRhpXcbc1CDAZzdJEFq6TMXYQaBPNWj6SuPzx4W6vbwZUiVzTnpu4y5hUVHGt9RABHgqaOL5RJunMlrp4PEb-XdoB-Yu4TP6k0wcJlR5YRNCNwWfHojjtIUuiuOJrXVBRmZlAOjdzhay8JNpz5RcNWqySdMo7BaVI2s-ojcJdRbNSJwZI6HKfP9AqXoqFg01RRcvvfxjlv4Ze1bvN4_7lfR",
    },
    {
      id: 2,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2oMMXP97sHWNNi7reiB3GKvCDvhPj6T_tuyGfxcU8GFXDW2hyCiZxYpnrZ8-lnkG16DigdKpVx5y_JuSza4izHO3NAiQnxr_eVXGRh3R4DIr8fPxrk9mjFaqynzuAD70ZTb0lr03rvvnO41rCRCLlAWCDhbZpNpnI0fHUwYMYt-7BpVI2815UrMScEpCRLhX_z2ctm4Py2YlFgDTnMXNF7_a7OOxfb_F7YPhXc5FgH1_6hUJURTFUXK3hzKKuFDdOxb2iYvEq-8XB",
    },
    {
      id: 3,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKHlEjioMHs6roCCbqxaZxwpTwXZMI50zt0sFO2twWtLFphy5VPS8aJU5gHV23rgLF2WDJtAuSu2bLx7n3o11o6zVAFhfX9YPMwLHAZWwIrUTwu5K-y5I3TfA71_OxackNh6btDjnLNBhLZRQYhjHbHm9LxwB1KFhyNez5Hu2MKwS7LJFqZ7f7q6jE3SxIJNrtNR67Hv19cV2Gd9aB5T59ZZrIedj1Ero_g4WAT-E4weoAOYSqUz3onUBURyXo8Gxfc8lV6IqJkUgo",
    },
    {
      id: 4,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcUjX5U8EKeIpLXhUZp-lHHNB6jThEDoHZC-gunw2sgGaZodnO7PXp_ryaoHjziVrln8hycqUG1iULuzbeo47RlDArv2GZ7JD214s-Pp439HgNWFGB1l4rT91MwhWbV7Z0gNBLPidsqIutubEbt6IN0Ki7W1hg_HfKOrdsnO-HOGR9bdBOUity47wRsnfwQTRozj5Ls12quSU4Hd_sb7pGR--0CEzCiwa-Ry6IDVyiCIhPiNsoI-H_i59nOWMb7EXpd9JjHe-nLOsT",
    },
  ];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-200 flex flex-col">
     

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-grow py-10 px-4 text-center">
        {/* Success Icon */}
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50">
          <FiCheck className="text-green-600 dark:text-green-400 text-4xl" />
        </div>

        {/* Text */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-black mb-3">
            Thank you for your order!
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            Your order has been placed successfully. You’ll receive a
            confirmation email shortly with all the details.
          </p>
        </div>

        {/* Order Details */}
        <div className="w-full max-w-md bg-white dark:bg-background-dark border border-gray-200 dark:border-gray-800 rounded-xl p-6 mb-8">
          <div className="divide-y divide-gray-200 dark:divide-gray-800">
            <div className="flex justify-between py-3">
              <p className="text-gray-500 text-sm">Order Number</p>
              <p className="font-medium text-sm">#17345</p>
            </div>
            <div className="flex justify-between py-3">
              <p className="text-gray-500 text-sm">Order Date</p>
              <p className="font-medium text-sm">November 2, 2025</p>
            </div>
            <div className="flex justify-between py-3">
              <p className="text-gray-500 text-sm">Estimated Delivery</p>
              <p className="font-medium text-sm">November 8, 2025</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="w-full max-w-md flex flex-col items-center gap-4 mb-10">
          <Button
            color="primary"
            className="w-full bg-primary text-white font-semibold"
          >
            Track Your Order
          </Button>
          <Link
            to="/"
            className="text-primary text-sm font-medium underline hover:text-blue-600"
          >
            Continue Shopping
          </Link>
        </div>

        {/* Ordered Items */}
        <div className="w-full max-w-md text-left">
          <h3 className="text-lg font-bold mb-4">What you ordered</h3>
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4">
            {orderedItems.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-lg overflow-hidden"
              >
                <img
                  src={item.img}
                  alt="Ordered item"
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-6 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1">
          Need help?{" "}
          <a
            href="#"
            className="text-primary font-medium underline hover:text-blue-600"
          >
            Contact our support team
          </a>
          <FiHelpCircle className="inline text-gray-400" />
        </p>
      </footer>
    </div>
  );
}
