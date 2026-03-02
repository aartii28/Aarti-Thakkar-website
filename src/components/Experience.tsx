import { motion } from 'motion/react';

const experiences = [
  {
    role: "Strategic Account Management",
    description: "Leading high-value partnerships by aligning analytics capabilities with long-term business objectives. Focused on building sustainable growth through data transparency.",
    tags: ["Partnership", "Growth", "Strategy"]
  },
  {
    role: "Analytics-Driven Decision Making",
    description: "Translating complex datasets into actionable business insights. Bridging the gap between raw data and executive-level decision-making processes.",
    tags: ["Data Viz", "Insights", "ROI"]
  },
  {
    role: "Stakeholder Collaboration",
    description: "Acting as the primary bridge between technical analytics teams and business leaders to ensure project alignment and successful delivery of insights.",
    tags: ["Leadership", "Communication", "Agile"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-coffee-light mb-4 block">
              Professional Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              Work & Experience
            </h2>
          </div>
          <p className="text-coffee-medium max-w-md">
            Focusing on the intersection of human collaboration and technical precision to drive business impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl border border-coffee-dark/10 hover:border-coffee-light transition-colors group bg-white/50"
            >
              <div className="w-12 h-12 rounded-full bg-latte/30 flex items-center justify-center mb-6 group-hover:bg-coffee-light group-hover:text-cream transition-colors">
                <span className="font-serif text-lg font-bold">0{index + 1}</span>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">{exp.role}</h3>
              <p className="text-coffee-medium leading-relaxed mb-6">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase tracking-widest px-2 py-1 bg-coffee-dark/5 rounded text-coffee-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
