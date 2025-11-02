
import { Button } from "@heroui/button";
import { Link } from "react-router-dom";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-background-light/90 dark:border-slate-800/80 dark:bg-background-dark/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
        <div className="w-6 text-slate-900 dark:text-white">
                <svg
                  fill="currentColor"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"></path>
                </svg>
              </div>
          <div className="text-primary font-bold text-lg">Vogue</div>
        </Link>

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link className="hover:text-primary transition-colors" to="#">Shop</Link>
          <Link className="hover:text-primary transition-colors" to="#">New Arrivals</Link>
          <Link className="hover:text-primary transition-colors" to="/productpage">Collections</Link>
        </nav>

        <div className="flex gap-2">
          <Button isIconOnly variant="light"><FiSearch size={18} /></Button>
          <Button isIconOnly variant="light"><FiUser size={18} /></Button>
          <Button isIconOnly variant="light"><FiShoppingCart size={18} /></Button>
        </div>
      </div>
    </header>
  );
}
