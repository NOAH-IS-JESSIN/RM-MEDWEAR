import { motion } from 'framer-motion';

interface ProductCardProps {
  title: string;
  price: string;
  images: string[];
  colors: string[];
  onClick: () => void;
}

export default function ProductCard({ title, price, images, colors, onClick }: ProductCardProps) {
  return (
    <motion.div 
      className="group flex flex-col cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
    >
      <div className="relative aspect-[3/4] bg-lilac/10 overflow-hidden border border-ui mb-4">
        <img 
          src={images[0]} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out bg-gradient-to-t from-black/50 to-transparent">
          <button className="w-full bg-background text-primary py-3 text-xs tracking-widest font-medium hover:bg-sage hover:text-white transition-colors pointer-events-none">
            VIEW DETAILS
          </button>
        </div>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium text-primary mb-1">{title}</h3>
          <p className="text-sm text-primary/60">{price}</p>
        </div>
        <div className="flex gap-1.5 pt-1">
          {colors.map((color, idx) => (
            <div 
              key={idx} 
              className="w-3 h-3 rounded-full border border-ui" 
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
