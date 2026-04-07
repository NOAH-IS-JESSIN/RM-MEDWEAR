import { ShoppingCart, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Menu className="w-5 h-5 cursor-pointer sm:hidden text-primary" />
          <div className="hidden sm:flex gap-8 text-sm font-medium tracking-wide">
            <Link to="/" className="hover:text-sage transition-colors">SHOP ALL</Link>
            <Link to="/" className="hover:text-sage transition-colors">COLLECTIONS</Link>
            <Link to="/" className="hover:text-sage transition-colors">OUR STORY</Link>
          </div>
        </div>
        <Link to="/" className="absolute left-1/2 -translate-x-1/2 h-14 flex items-center justify-center">
          <img src="/logo.jpg" alt="RM Medwear Logo" className="max-h-full w-auto object-contain mix-blend-multiply" />
        </Link>
        <div className="flex items-center gap-4 text-primary">
          <Link to="/cart" className="relative cursor-pointer hover:text-sage transition-colors">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-sage text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
              2
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
