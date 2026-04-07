import { useState } from 'react';
import ProductCard from './ProductCard';
import ProductModal, { type Product } from './ProductModal';

export default function ProductGrid() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const defaultSizes = ["XS", "S", "M", "L", "XL"];

  const products: Product[] = [
    {
      title: "The Signature Scrub Top",
      price: "$85.00",
      images: ["/first-collection-1.jpg", "/first-collection-2.jpg", "/first-collection-3.jpg"],
      colors: ["#1c3b48", "#987f72", "#b6a99f"],
      sizes: defaultSizes
    },
    {
      title: "The Essential Scrub Pant",
      price: "$95.00",
      images: ["/second-collection-1.jpg", "/second-collection-2.jpg", "/second-collection-3.jpg"],
      colors: ["#a97177", "#5a3245", "#1f2440"],
      sizes: defaultSizes
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-3xl font-serif text-primary">The First Drop</h2>
        <a href="#" className="text-sm uppercase tracking-widest text-primary hover:text-sage transition-colors border-b border-primary/20 hover:border-sage pb-1">
          View Collection
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, idx) => (
          <ProductCard key={idx} {...product} onClick={() => setSelectedProduct(product)} />
        ))}
      </div>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
