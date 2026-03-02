import { motion } from 'motion/react';
import { Mail, Linkedin, Twitter, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-latte/10">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
              Let's start a <span className="italic text-coffee-medium">conversation</span>.
            </h2>
            <p className="text-lg text-coffee-medium mb-12 leading-relaxed">
              Whether you're looking to transform your analytics strategy or just want to chat 
              about the future of data, I'm always open to new connections.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-coffee-dark text-cream flex items-center justify-center group-hover:bg-coffee-light transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs uppercase tracking-widest text-coffee-light mb-1">Email Me</p>
                  <a href="mailto:aartithakker1228@gmail.com" className="text-lg font-medium hover:text-coffee-light transition-colors">aartithakker1228@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-coffee-dark text-cream flex items-center justify-center group-hover:bg-coffee-light transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs uppercase tracking-widest text-coffee-light mb-1">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/aarti-thakkar/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-medium hover:text-coffee-light transition-colors"
                  >
                    linkedin.com/in/aarti-thakkar/
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
