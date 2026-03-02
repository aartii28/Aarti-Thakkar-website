import { motion } from 'motion/react';

const insights = [
  {
    title: "The Human Side of Analytics",
    excerpt: "Many data projects focus heavily on models, tools, and algorithms. But in reality, the most successful analytics initiatives begin with understanding people — their questions, context, and decisions.",
    question: "What happens when we approach analytics with empathy first?",
    category: "Reflection"
  },
  {
    title: "Why Analytics Needs Better Storytelling",
    excerpt: "A dashboard can show numbers, but it doesn’t always explain what they mean or why they matter. The real impact of analytics often comes from translating insights into a story that helps people act.",
    question: "How can data teams communicate insights more effectively?",
    category: "Strategy"
  },
  {
    title: "Customer Relationships in Data-Driven Companies",
    excerpt: "As companies become more data-driven, interactions with customers increasingly happen through dashboards, metrics, and automated systems.",
    question: "How do we keep the human element alive in a world of data streams?",
    category: "Business"
  }
];

export default function Insights() {
  return (
    <section id="insights" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-coffee-light mb-4 block">
            The Journal
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Conversations Over Coffee
          </h2>
          <div className="text-coffee-medium max-w-3xl mx-auto space-y-4 text-lg">
            <p className="font-serif italic text-xl">Not fully written essays — just conversation starters.</p>
            <p>
              These are ideas I often find myself thinking about at the intersection of analytics, business, and human relationships. Think of them as reflections that might spark a thoughtful discussion.
            </p>
            <p>
              If any of these resonate with you, I’d love to hear your perspective. Feel free to reach out on LinkedIn — good conversations often start with a simple idea.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {insights.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <a 
                href="https://www.linkedin.com/in/aarti-thakkar/recent-activity/all/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block cursor-pointer h-full"
              >
                <div className="aspect-[16/10] bg-latte/30 rounded-2xl mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-coffee-dark/0 group-hover:bg-coffee-dark/5 transition-colors" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-cream rounded-full text-[10px] font-mono uppercase tracking-widest">
                    {item.category}
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-coffee-light transition-colors">
                  {item.title}
                </h3>
                <p className="text-coffee-medium leading-relaxed mb-4">
                  {item.excerpt}
                </p>
                <p className="text-coffee-dark font-medium italic mb-6">
                  {item.question}
                </p>
                <div className="mt-auto flex items-center gap-2 text-sm font-medium text-coffee-dark">
                  <span>Let's chat</span>
                  <div className="w-8 h-[1px] bg-coffee-dark group-hover:w-12 transition-all" />
                </div>
              </a>
            </motion.article>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center pt-12 border-t border-coffee-dark/5"
        >
          <p className="text-coffee-medium italic">
            These reflections are simply starting points for conversation.<br />
            If you have thoughts, perspectives, or experiences to share, I’d genuinely love to hear them.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
