import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center section-padding pt-32 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-40 right-[-10%] w-96 h-96 bg-latte/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-[-5%] w-72 h-72 bg-sage/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-coffee-light mb-6 block">
            Analytics • Strategy • Relationships
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.1] mb-8">
            Thoughtful <span className="italic text-coffee-medium">conversations</span> about analytics and business.
          </h1>
          <p className="text-lg md:text-xl text-coffee-medium max-w-2xl leading-relaxed mb-12">
            I work with organizations to turn complex data into meaningful business decisions, 
            bridging the gap between technical insights and human partnerships.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-coffee-dark text-cream rounded-full font-medium flex items-center gap-2 group"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border border-coffee-dark/20 text-coffee-dark rounded-full font-medium hover:bg-coffee-dark/5 transition-colors"
            >
              Learn More
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-[1px] h-24 bg-gradient-to-b from-coffee-dark/20 to-transparent" />
      </motion.div>
    </section>
  );
}
