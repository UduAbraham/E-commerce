
import { Button } from "@heroui/button";
import { Link } from "react-router-dom";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-background-light/90 dark:border-slate-800/80 dark:bg-background-dark/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="text-primary font-bold text-lg">Vogue</div>
        </Link>

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link className="hover:text-primary transition-colors" to="#">Shop</Link>
          <Link className="hover:text-primary transition-colors" to="#">New Arrivals</Link>
          <Link className="hover:text-primary transition-colors" to="#">Collections</Link>
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
