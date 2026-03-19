'use client';
import { motion } from 'framer-motion';

const skills = [
    "ReactJS", "NextJS", "Material UI", "Motion", "NodeJS", "Tailwind CSS",
    "TypeScript", "Python", "ExpressJS", "JQuery", "MongoDB", "PostgreSQL",
    "AWS", "Git", "GitHub", "Linux", "JIRA", "Docker", "Postman", "React Redux",
    "Netlify", "Vercel", "Sass"
];

export default function Competencies() {
    return (
        <section className="flex flex-col items-center justify-center py-12" id="skills">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-8 flex flex-col items-center text-center"
            >
                <h6 className="text-[11px] font-bold tracking-[0.2em] text-[#a1a1aa] uppercase mb-4">
                    CORE STRENGTHS
                </h6>
                <h2 className="text-5xl tracking-tight">
                    <span className="heading-glow">Competencies</span> <span className="text-gradient">skills</span>
                </h2>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl px-4">
                {skills.map((skill, idx) => (
                    <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (idx % 10) * 0.05 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0a0a0a] border border-white/10 hover:border-white/20 transition-colors cursor-default"
                    >
                        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 opacity-80" />
                        <span className="font-medium text-[13px] text-white tracking-wide">{skill}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
