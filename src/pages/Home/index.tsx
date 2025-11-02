

import { Button } from "@heroui/button";
import ProductGrid from "../product";
import FeaturesSection from "../FeaturedSection";

export default function HomePage() {
  return (
    <>
    <section
      className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center text-center gap-6 bg-cover bg-center bg-no-repeat p-6"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), 
          url('https://lh3.googleusercontent.com/aida-public/AB6AXuDd_12Jqtq-lDYMPWSZFxxN8tOWDUucl82MFyhk1dWyzqrTeC_sAOL9NEyODq7VVXwvj0Zs58WQME9SYVi-foY7-z7q0DB20DCUBDVd9lmvBdf7i6jdL4p6Esfca1vEo0SblPHkU-QBaxEb3P6X3qZ1UeGfYFm35b-13E6t4pBKNlL6iTW6xFfOFP7gHHEGME6GwrsAaCD4vsKDbAUjSnyKjRhY93sNYgjpRf2IzWg9ze3rzb7DeQGKqUJ9N0grVtM46hB0GtcEaorl')`
      }}
    >
      <h1 className="text-4xl sm:text-6xl font-black text-white max-w-3xl leading-tight">
        The New Seasonal Collection
      </h1>
      <p className="text-slate-200 max-w-2xl text-base sm:text-lg">
        Explore curated styles and premium quality essentials designed for the modern wardrobe.
      </p>
      <Button color="primary" className="font-bold px-6 py-3 rounded-lg hover:scale-105 transition">
        Shop Now
      </Button>

    </section>
      <ProductGrid/>
      <FeaturesSection/>
    </>
  );
}
