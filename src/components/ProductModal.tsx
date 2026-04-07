import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState, useEffect } from 'react';

export interface Product {
  title: string;
  price: string;
  images: string[];
  colors: string[];
  sizes: string[];
}

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColorIdx, setSelectedColorIdx] = useState<number>(0);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden';
      setSelectedColorIdx(0); // Reset color index on open
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [product]);

  return (
    <AnimatePresence>
      {product && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
          {/* Click outside to close overlay */}
          <div className="absolute inset-0 cursor-pointer" onClick={onClose} />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full max-w-5xl bg-background flex flex-col md:flex-row overflow-hidden shadow-2xl max-h-[90vh]"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 bg-white/50 backdrop-blur-md rounded-full hover:bg-white/80 transition-colors"
            >
              <X className="w-5 h-5 text-primary" />
            </button>

            {/* Left: Image */}
            <div className="w-full md:w-1/2 h-[35vh] sm:h-[40vh] md:h-auto bg-lilac/20 relative flex-shrink-0">
              <motion.img 
                key={selectedColorIdx}
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                src={product.images[selectedColorIdx] || product.images[0]} 
                alt={`${product.title} in color ${product.colors[selectedColorIdx]}`} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Details */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col overflow-y-auto">
              <h2 className="text-3xl md:text-5xl font-serif text-primary mb-2 leading-tight">
                {product.title}
              </h2>
              <p className="text-lg text-primary/60 mb-8 font-light tracking-wide">{product.price}</p>

              {/* Colors */}
              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-widest text-primary/80 mb-3 block">Color</h3>
                <div className="flex gap-3">
                  {product.colors.map((color, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedColorIdx(idx)}
                      className={`w-8 h-8 rounded-full border-2 transition-all ${selectedColorIdx === idx ? 'border-primary scale-110 shadow-lg' : 'border-transparent hover:scale-105 shadow-sm'}`}
                      style={{ backgroundColor: color }}
                      aria-label={`Select color ${color}`}
                    />
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="mb-10">
                <h3 className="text-sm uppercase tracking-widest text-primary/80 mb-3 flex justify-between items-center">
                  <span>Size</span>
                  <a href="#" className="underline text-xs tracking-normal text-primary/50 hover:text-primary">Size Guide</a>
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 flex items-center justify-center border transition-colors ${selectedSize === size ? 'border-primary bg-primary text-background' : 'border-ui hover:border-primary text-primary'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Buttons cluster */}
              <div className="mt-auto space-y-4 pt-4 border-t border-ui/50">
                <button className="w-full bg-primary text-background py-4 tracking-widest text-sm hover:bg-sage transition-colors font-medium">
                  ADD TO CART
                </button>
                <div className="flex gap-4">
                  <button className="w-1/2 border border-primary text-primary py-4 tracking-widest text-sm hover:bg-primary/5 transition-colors font-medium">
                    ORDER
                  </button>
                  <button className="w-1/2 border border-primary text-primary py-4 tracking-widest text-sm hover:bg-primary/5 transition-colors font-medium">
                    TAILOR
                  </button>
                </div>
              </div>
              
              <p className="text-xs text-center text-primary/50 mt-6 md:mb-0 leading-relaxed mx-auto max-w-sm">
                Tailoring service requires an additional 5-7 business days. Complimentary express shipping on all orders over $200.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
