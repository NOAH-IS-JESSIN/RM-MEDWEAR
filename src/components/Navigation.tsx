import { ShoppingCart, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Menu className="w-6 h-6 cursor-pointer sm:hidden text-primary" onClick={() => setIsOpen(true)} />
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
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="absolute -top-2 -right-2 bg-sage text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                2
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-[#fdfbf7] flex flex-col px-6 pt-8 pb-10"
          >
            <div className="flex justify-between items-center mb-16">
              <h2 className="font-serif text-2xl text-primary tracking-widest">RM MEDWEAR</h2>
              <button className="p-2 -mr-2" onClick={() => setIsOpen(false)}>
                <X className="w-8 h-8 text-primary" />
              </button>
            </div>
            
            <div className="flex flex-col gap-10 text-3xl font-serif text-primary">
              <Link to="/" className="border-b border-primary/10 pb-4" onClick={() => setIsOpen(false)}>SHOP ALL</Link>
              <Link to="/" className="border-b border-primary/10 pb-4" onClick={() => setIsOpen(false)}>COLLECTIONS</Link>
              <Link to="/" className="border-b border-primary/10 pb-4" onClick={() => setIsOpen(false)}>OUR STORY</Link>
              <Link to="/cart" className="border-b border-primary/10 pb-4 flex justify-between" onClick={() => setIsOpen(false)}>
                CART 
                <span className="text-xl">2 ITEMS</span>
              </Link>
            </div>
            
            <div className="mt-auto pt-10 text-xs tracking-widest uppercase text-primary/50 text-center">
              Editorial Elegance • Clinical Precision
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
