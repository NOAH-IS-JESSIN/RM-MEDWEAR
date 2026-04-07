import { motion } from 'framer-motion';

export default function BrandStory() {
  return (
    <section className="py-32 px-4 bg-primary text-background flex justify-center items-center relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 w-full h-full opacity-30 mix-blend-overlay pointer-events-none"
        style={{ 
          backgroundImage: 'url("/brand-story.jpg")', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }} 
      />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.2em] text-blush uppercase mb-8 block font-mono"
        >
          The Narrative
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight mb-10"
        >
          Founded by a pharmacy student and a master fashion designer. It's a legacy turned into purposeful fashion.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-background/80 font-light max-w-2xl mx-auto"
        >
          Zero clinical sterility. Maximum editorial elegance. We design for the elite professionals who refuse to compromise their signature aesthetic while changing lives.
        </motion.p>
      </div>
    </section>
  );
}
