export default function Footer() {
  return (
    <footer className="bg-primary text-background pt-24 pb-8 px-4 sm:px-6 lg:px-8 border-t border-background/20 mt-12 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24">
        <div className="md:col-span-6 flex flex-col space-y-4">
          <h2 className="text-5xl md:text-8xl font-serif tracking-tight leading-none text-background">
            RM MEDWEAR
          </h2>
          <p className="text-background/60 text-sm max-w-xs font-light">
            Where style meets purpose. Reimagining medical apparel.
          </p>
        </div>
        
        <div className="md:col-span-3 flex flex-col space-y-4">
          <h4 className="text-xs tracking-widest uppercase font-semibold text-background/50 mb-2">Shop</h4>
          <a href="#" className="text-sm text-background/80 hover:text-sage transition-colors inline-block w-fit">Women's Collection</a>
          <a href="#" className="text-sm text-background/80 hover:text-sage transition-colors inline-block w-fit">Men's Collection</a>
          <a href="#" className="text-sm text-background/80 hover:text-sage transition-colors inline-block w-fit">Accessories</a>
          <a href="#" className="text-sm text-background/80 hover:text-sage transition-colors inline-block w-fit">Gift Cards</a>
        </div>

        <div className="md:col-span-3 flex flex-col space-y-4">
          <h4 className="text-xs tracking-widest uppercase font-semibold text-background/50 mb-2">Corporate</h4>
          <a href="#" className="text-sm text-background/80 hover:text-sage transition-colors inline-block w-fit">Our Story</a>
          <a href="#" className="text-sm text-background/80 hover:text-sage transition-colors inline-block w-fit">Sustainability</a>
          <a href="#" className="text-sm text-background/80 hover:text-sage transition-colors inline-block w-fit">Contact</a>
          <a href="#" className="text-sm text-background/80 hover:text-sage transition-colors inline-block w-fit">FAQ & Returns</a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-background/50">
        <p>© 2026 RM Medwear. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
