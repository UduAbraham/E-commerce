import { Input, Select, SelectItem, Button, Divider } from "@heroui/react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiCreditCard, FiShield, FiLock } from "react-icons/fi";
import  { useState } from "react";
import { FiUsers } from "react-icons/fi";

type Country = {
  key: string;
  label: string;
};

export default function CheckoutPage() {
  const [step, setStep] = useState<"shipping" | "payment" | "review">("shipping");

  const navigate = useNavigate();

  const cartItems = [
    {
      id: 1,
      name: "Aperture Pro Headphones",
      qty: 1,
      price: 249,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBG53mO7HBpmZIL5tKvNtH9WjZEEQJcIWV1M4QBWod5ze8FT4Use498AwRhpXcbc1CDAZzdJEFq6TMXYQaBPNWj6SuPzx4W6vbwZUiVzTnpu4y5hUVHGt9RABHgqaOL5RJunMlrp4PEb-XdoB-Yu4TP6k0wcJlR5YRNCNwWfHojjtIUuiuOJrXVBRmZlAOjdzhay8JNpz5RcNWqySdMo7BaVI2s-ojcJdRbNSJwZI6HKfP9AqXoqFg01RRcvvfxjlv4Ze1bvN4_7lfR",
    },
    {
      id: 2,
      name: "Flux Runners",
      qty: 2,
      price: 130,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB2oMMXP97sHWNNi7reiB3GKvCDvhPj6T_tuyGfxcU8GFXDW2hyCiZxYpnrZ8-lnkG16DigdKpVx5y_JuSza4izHO3NAiQnxr_eVXGRh3R4DIr8fPxrk9mjFaqynzuAD70ZTb0lr03rvvnO41rCRCLlAWCDhbZpNpnI0fHUwYMYt-7BpVI2815UrMScEpCRLhX_z2ctm4Py2YlFgDTnMXNF7_a7OOxfb_F7YPhXc5FgH1_6hUJURTFUXK3hzKKuFDdOxb2iYvEq-8XB",
    },
  ];

  const countries: Country[] = [
    { key: "us", label: "United States" },
    { key: "ca", label: "Canada" },
    { key: "uk", label: "United Kingdom" },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const shipping = 6;
  const taxes = 42.14;
  const total = subtotal + shipping + taxes;

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-gray-900 dark:text-white">
            <div className="w-6 h-6">
            </div>
            <h1 className="text-xl font-bold">Aperture</h1>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        {/* LEFT: Checkout Form */}
        <div className="w-full lg:w-3/5 px-4 sm:px-8 lg:px-12 py-10 border-r border-gray-200 dark:border-gray-800">
          {/* Steps */}
          <div className="flex flex-wrap items-center gap-2 mb-8 text-sm">
            <span
              className={`font-semibold ${
                step === "shipping" ? "text-primary" : "text-gray-500"
              }`}
            >
              Shipping
            </span>
            <span className="text-gray-400">{">"}</span>
            <span
              className={`font-semibold ${
                step === "payment" ? "text-primary" : "text-gray-500"
              }`}
            >
              Payment
            </span>
            <span className="text-gray-400">{">"}</span>
            <span
              className={`font-semibold ${
                step === "review" ? "text-primary" : "text-gray-500"
              }`}
            >
              Review
            </span>
          </div>

          {/* Step 1: Shipping */}
          {step === "shipping" && (
            <>
              <section className="mb-8">
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-lg font-bold">Contact Information</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Already have an account?{" "}
                    <a
                      href="#"
                      className="text-primary font-medium hover:underline"
                    >
                      Log in
                    </a>
                  </p>
                </div>
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full"
                />
              </section>

              <section>
                <h3 className="text-lg font-bold mb-4">Shipping Address</h3>
                <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">
                  <Select<Country>
                    label="Country/Region"
                    className="sm:col-span-6"
                    items={countries}
                  >
                    {(country) => (
                      <SelectItem key={country.key}>{country.label}</SelectItem>
                    )}
                  </Select>

                  <Input label="First Name" className="sm:col-span-3" />
                  <Input label="Last Name" className="sm:col-span-3" />
                  <Input label="Address" className="sm:col-span-6" />
                  <Input
                    label="Apartment, suite, etc. (optional)"
                    className="sm:col-span-6"
                  />
                  <Input label="City" className="sm:col-span-2" />
                  <Input label="State" className="sm:col-span-2" />
                  <Input label="ZIP Code" className="sm:col-span-2" />
                </div>
              </section>

              <Divider className="my-8" />

              <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
                <Link
                  to="/cartpage"
                  className="flex items-center gap-1 text-sm text-primary font-medium hover:underline"
                >
                  <FiArrowLeft /> Return to cart
                </Link>
                <Button
                  color="primary"
                  className="w-full sm:w-auto bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900"
                  onPress={() => setStep("payment")}
                >
                  Continue to Payment
                </Button>
              </div>
            </>
          )}

          {/* Step 2: Payment */}
          {step === "payment" && (
            <>
              <section>
                <h3 className="text-lg font-bold mb-4 ">Payment Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Cardholder Name"
                    placeholder="John Doe"
                    startContent={<FiUsers className="text-gray-400" />}
                  />
                  <Input
                    label="Card Number"
                    placeholder="1234 5678 9012 3456"
                    startContent={<FiCreditCard className="text-gray-400" />}
                  />
                  <Input label="Expiry Date" placeholder="MM/YY" />
                  <Input label="CVC" placeholder="123" />
                </div>
              </section>

              <div className="mt-6 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <FiShield className="text-green-500" />
                <p>Your payment is secure and encrypted with SSL.</p>
              </div>

              <Divider className="my-8" />

              <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
                <Button
                  variant="flat"
                  onPress={() => setStep("shipping")}
                  className="text-primary"
                >
                  Back to Shipping
                </Button>
                <Button
                  color="primary"
                  className="w-full sm:w-auto bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900"
                  onPress={() => setStep("review")}
                >
                  Review Order
                </Button>
              </div>
            </>
          )}

          {/* Step 3: Review */}
          {step === "review" && (
            <section>
              <h3 className="text-lg font-bold mb-4">Review & Confirm</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Please review your order details before confirming your
                purchase.
              </p>

              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center"
                  >
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        Qty: {item.qty}
                      </p>
                    </div>
                    <p className="font-semibold">${item.price.toFixed(2)}</p>
                  </div>
                ))}
              </div>

              <Divider className="my-6" />

              <div className="flex justify-between font-semibold text-lg">
                <p>Total</p>
                <p>${total.toFixed(2)}</p>
              </div>

              <Divider className="my-6" />

              <Button
                color="primary"
                fullWidth
                className="bg-green-600 hover:bg-green-700 text-white"
                onPress={()=> navigate("/paymentsuccesspage")}
              >
                <FiLock className="mr-2" /> Confirm & Pay
              </Button>
            </section>
          )}
        </div>

        {/* RIGHT: Summary */}
        <aside className="w-full lg:w-2/5 bg-white dark:bg-gray-900/50 px-4 sm:px-8 lg:px-12 py-10">
          <h3 className="text-lg font-bold mb-6">Order Summary</h3>

          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 border-b border-gray-200 dark:border-gray-700 pb-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex-grow">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Qty: {item.qty}
                  </p>
                </div>
                <p className="font-semibold">${item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>

          <Divider className="my-6" />
          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping</p>
              <p>${shipping.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p>Taxes</p>
              <p>${taxes.toFixed(2)}</p>
            </div>
          </div>

          <Divider className="my-4" />
          <div className="flex justify-between items-center font-bold text-lg">
            <p>Total</p>
            <p>${total.toFixed(2)}</p>
          </div>
        </aside>
      </main>
    </div>
  );
}
