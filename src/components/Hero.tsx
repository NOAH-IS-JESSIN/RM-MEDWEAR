import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative group cursor-default border-b-[2px] border-[#18474f]">
      <div 
        className="min-h-[100vh] pt-20 flex flex-col md:flex-row relative"
        style={{ 
          backgroundImage: "url('/newspaper_bg.png')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/80 pointer-events-none" />
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-24 py-16 md:py-0 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] mb-8 text-[#18474f]"
          >
            Where style<br />meets purpose.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-primary/70 max-w-md mb-10 tracking-wide font-light"
          >
            Elevating medical apparel with uncompromising editorial elegance.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="bg-primary text-background px-8 sm:px-10 py-4 text-sm font-medium tracking-widest hover:bg-sage transition-colors duration-300 w-fit relative z-20">
              DISCOVER THE DROP
            </button>
          </motion.div>
        </div>

        {/* Right Video */}
        <div className="w-full md:w-1/2 min-h-[50vh] md:min-h-screen bg-black relative overflow-hidden">
          <motion.video 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="/hero_vid.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover object-center absolute inset-0"
          />
        </div>

        {/* Mobile Video Overlay (Gradient base) */}
        <div className="absolute inset-x-0 bottom-0 top-[50%] z-30 bg-gradient-to-t from-[#fdfbf7] via-[#fdfbf7]/80 to-transparent transition-all duration-700 ease-in-out group-hover:opacity-0 flex md:hidden flex-col justify-end items-center pb-12 pointer-events-none">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-3xl sm:text-4xl font-serif tracking-widest text-center uppercase leading-tight px-4"
            style={{ color: '#18474f' }}
          >
            Sophistication<br/>
            <span className="text-xl sm:text-2xl font-light italic lowercase">in every detail</span>
          </motion.h2>
        </div>

        {/* Desktop Video Overlay (Polygonal) */}
        <div 
          className="absolute inset-0 z-30 bg-[#fdfbf7]/95 transition-all duration-700 ease-in-out group-hover:opacity-0 group-hover:scale-105 pointer-events-none hidden md:flex items-center justify-end pr-16"
          style={{ clipPath: 'polygon(62% 0%, 100% 0%, 100% 60%, 100% 100%, 45% 100%, 39% 55%, 50% 14%)' }}
        >
          <div className="w-1/2 flex justify-center">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="text-5xl lg:text-7xl font-serif tracking-widest text-center uppercase leading-tight px-4"
              style={{ color: '#18474f' }}
            >
              Sophistication<br/>
              <span className="text-3xl lg:text-4xl font-light italic lowercase">in every detail</span>
            </motion.h2>
          </div>
        </div>
      </div>
    </section>
  );
}
