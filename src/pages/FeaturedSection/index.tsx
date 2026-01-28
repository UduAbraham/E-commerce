import { LuLeaf, LuPackageCheck, LuTruck } from "react-icons/lu";

export default function FeaturesSection() {
  const features = [
    {
      icon: <LuLeaf className="text-4xl text-primary mb-4" />,
      title: "Ethically Sourced For You",
      description:
        "We partner with suppliers who share our commitment to sustainability and fair labor.",
    },
    {
      icon: <LuPackageCheck className="text-4xl text-primary mb-4" />,
      title: "Built to Last and serve",
      description:
        "Our garments are crafted with high-quality materials to ensure longevity and timeless style.",
    },
    {
      icon: <LuTruck className="text-4xl text-primary mb-4" />,
      title: "Free Returns Always",
      description:
        "Enjoy complimentary returns on all orders to ensure the perfect fit and satisfaction.",
    },
  ];

  return (
    <section className="bg-slate-100 py-16 dark:bg-slate-900 sm:py-24 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center hover:scale-105 transition-transform duration-300"
            >
              {feature.icon}
              <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-wide">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
