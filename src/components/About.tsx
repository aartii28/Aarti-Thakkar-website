import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="section-padding bg-latte/20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/aarti-portrait/800/1000" 
              alt="Aarti Thakkar" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-coffee-dark p-8 rounded-2xl text-cream hidden lg:block max-w-[240px]">
            <p className="font-serif italic text-lg">
              "The best insights often come from a simple cup of coffee and a curious mind."
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-coffee-light mb-4 block">
            The Conversation
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
            A Coffee Conversation About My Work
          </h2>
          <div className="space-y-6 text-coffee-medium leading-relaxed text-lg">
            <p>
              With a deep-rooted background in analytics, I've spent my career navigating the intricate 
              world of data. But I've learned that data alone isn't enough. It needs a translator—someone 
              who can turn complex models into stories that business leaders can act upon.
            </p>
            <p>
              I specialize in bridging the gap between technical teams and stakeholders. My approach is 
              built on the belief that strong relationships are the foundation of any successful 
              analytics initiative. 
            </p>
            <p>
              Whether I'm working with strategic accounts or internal business teams, my goal is always 
              the same: to foster understanding, build trust, and drive decisions that are both 
              data-driven and human-centric.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-serif font-bold text-2xl mb-2">5.5</h4>
              <p className="text-sm text-coffee-light uppercase tracking-wider">Years Experience</p>
            </div>
            <div>
              <h4 className="font-serif font-bold text-2xl mb-2">15+</h4>
              <p className="text-sm text-coffee-light uppercase tracking-wider">Clients Partnered</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
