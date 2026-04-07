import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CartPage() {
  // Mock Cart Items based on latest product definition
  const cartItems = [
    {
      id: 1,
      name: "The Signature Scrub Top",
      price: 85.00,
      colorName: "Sage",
      colorHex: "#1c3b48",
      size: "M",
      quantity: 1,
      image: "/first-collection-1.jpg"
    },
    {
      id: 2,
      name: "The Essential Scrub Pant",
      price: 95.00,
      colorName: "Charcoal",
      colorHex: "#a97177",
      size: "S",
      quantity: 2,
      image: "/second-collection-2.jpg"
    }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal > 200 ? 0 : 15;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="w-full min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 w-full">
        <div className="mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-primary"
          >
            Your Cart
          </motion.h1>
          <p className="text-primary/60 mt-2">2 items</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Cart Items List */}
          <div className="w-full lg:w-2/3 flex flex-col gap-8">
            <div className="hidden sm:grid grid-cols-12 gap-4 border-b border-ui pb-4 text-xs tracking-widest text-primary/60 uppercase">
              <div className="col-span-6">Product</div>
              <div className="col-span-3 text-center">Quantity</div>
              <div className="col-span-3 text-right">Total</div>
            </div>

            {cartItems.map((item) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center py-6 border-b border-ui/50"
              >
                {/* Product Info */}
                <div className="col-span-1 border-ui/50 pb-4 mb-4 sm:col-span-6 flex gap-4 sm:gap-6 sm:border-0 sm:p-0 sm:m-0 border-b">
                  <div className="w-24 h-32 bg-lilac/20 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-lg font-serif text-primary mb-1">{item.name}</h3>
                    <p className="text-sm text-primary/70 mb-3">${item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-4 text-xs text-primary/70 mb-4">
                      <span className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full border border-ui" style={{ backgroundColor: item.colorHex }} />
                        {item.colorName}
                      </span>
                      <span className="px-2 py-1 bg-primary/5 uppercase">{item.size}</span>
                    </div>
                    <button className="flex items-center text-xs tracking-widest text-primary/50 hover:text-red-500 transition-colors w-fit">
                      <Trash2 className="w-3 h-3 mr-2" /> REMOVE
                    </button>
                  </div>
                </div>

                {/* Quantity */}
                <div className="col-span-1 flex justify-between sm:justify-center sm:col-span-3">
                  <span className="text-sm uppercase tracking-widest text-primary/60 sm:hidden">Quantity</span>
                  <div className="flex items-center border border-ui">
                    <button className="px-3 py-2 hover:bg-primary/5 transition-colors text-primary/70"><Minus className="w-3 h-3" /></button>
                    <span className="px-3 text-sm text-primary">{item.quantity}</span>
                    <button className="px-3 py-2 hover:bg-primary/5 transition-colors text-primary/70"><Plus className="w-3 h-3" /></button>
                  </div>
                </div>

                {/* Total */}
                <div className="col-span-1 flex justify-between sm:justify-end sm:col-span-3">
                  <span className="text-sm uppercase tracking-widest text-primary/60 sm:hidden">Total</span>
                  <span className="text-lg font-serif text-primary">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3">
            <div className="bg-[#fbf9f6] p-8 border border-ui/50 sticky top-32">
              <h2 className="text-2xl font-serif text-primary mb-8 border-b border-ui pb-4">Order Summary</h2>
              
              <div className="space-y-4 text-sm text-primary/80 mb-8">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between text-xl font-serif text-primary border-t border-ui pt-6 mb-8">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button className="w-full bg-primary text-background py-4 flex items-center justify-center tracking-widest text-sm hover:bg-sage transition-colors font-medium group">
                SECURE CHECKOUT
                <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="mt-4 text-center">
                <Link to="/" className="text-xs tracking-widest uppercase text-primary/60 hover:text-primary transition-colors border-b border-transparent hover:border-primary/30 pb-0.5">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
