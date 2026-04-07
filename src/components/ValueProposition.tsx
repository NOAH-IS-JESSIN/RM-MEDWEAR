import { motion } from 'framer-motion';
import { Shirt, Scissors, ShieldCheck } from 'lucide-react';

export default function ValueProposition() {
  const features = [
    {
      icon: <Shirt className="w-6 h-6 text-sage" />,
      title: "Soft Structured Neckline",
      desc: "Architecturally designed collars that maintain structure without stiffness, providing a commanding yet comfortable presence."
    },
    {
      icon: <Scissors className="w-6 h-6 text-sage" />,
      title: "Functional Effortless Fit",
      desc: "Draped to follow natural body lines. Strategically hidden pockets that don't disrupt the silhouette."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-sage" />,
      title: "Performance Fabric",
      desc: "Fluid, anti-microbial, and wrinkle-resistant materials that feel like luxury but work like utility."
    }
  ];

  return (
    <section className="py-24 px-4 bg-background border-y border-ui">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-primary">The Anatomy</h2>
          <div className="w-12 h-px bg-primary/20 mx-auto mt-6" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full border border-ui flex items-center justify-center mb-6 group-hover:bg-sage/5 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium text-primary mb-3">{feature.title}</h3>
              <p className="text-sm text-primary/60 leading-relaxed max-w-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
