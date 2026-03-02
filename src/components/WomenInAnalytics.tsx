import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function WomenInAnalytics() {
  return (
    <section id="women-in-tech" className="section-padding bg-coffee-dark text-cream relative overflow-hidden">
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cream via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="aspect-square rounded-full border border-cream/20 p-8">
                <div className="w-full h-full rounded-full overflow-hidden grayscale contrast-125">
                  <img 
                    src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000" 
                    alt="Women in Tech" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-24 h-24 border border-cream/20 rounded-full flex items-center justify-center backdrop-blur-sm"
              >
                <Sparkles className="text-coffee-light w-8 h-8" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-coffee-light mb-4 block">
              Advocacy & Empowerment
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
              Encouraging More Women in Analytics
            </h2>
            <div className="space-y-6 text-cream/80 leading-relaxed text-lg">
              <p>
                The world of data and analytics benefits from diverse perspectives, yet women continue to be underrepresented in many technical roles. I care deeply about contributing to a future where more women feel confident entering, growing, and leading in analytics and technology.
              </p>
              <p>
                I’m particularly interested in supporting conversations and initiatives that make the field more accessible and inclusive, and in encouraging more women to explore careers in data-driven industries.
              </p>
              <p className="pt-4">Over time, I hope to contribute by:</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-coffee-light/20 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-coffee-light" />
                  </div>
                  <span>Supporting communities that encourage women to pursue analytics careers</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-coffee-light/20 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-coffee-light" />
                  </div>
                  <span>Advocating for inclusive environments where diverse perspectives can thrive</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-coffee-light/20 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-coffee-light" />
                  </div>
                  <span>Contributing to conversations around women’s growth in data and technology</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
