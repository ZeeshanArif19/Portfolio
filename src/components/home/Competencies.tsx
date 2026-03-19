'use client';
import { motion } from 'framer-motion';

const skills = [
    { name: 'React', icon: 'react' },
    { name: 'Node.js', icon: 'nodedotjs' },
    { name: 'Express.js', icon: 'express' },
    { name: 'MongoDB', icon: 'mongodb' },
    { name: 'PostgreSQL', icon: 'postgresql' },
    { name: 'Socket.io', icon: 'socketdotio' },
    { name: 'Tailwind CSS', icon: 'tailwindcss' },
    { name: 'C++', icon: 'cplusplus' },
    { name: 'Java', icon: 'java' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'GitHub', icon: 'github' },
    { name: 'Git', icon: 'git' },
    { name: 'VS Code', icon: 'visualstudiocode' },
    { name: 'Postman', icon: 'postman' },
    { name: 'Vercel', icon: 'vercel' },
    { name: 'Linux', icon: 'linux' },
    { name: 'JIRA', icon: 'jira' },
    { name: 'Docker', icon: 'docker' }
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
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (idx % 10) * 0.05 }}
                        className="flex flex-row items-center gap-3 px-4 py-2.5 rounded-[10px] bg-[#161616] border border-[#333333] text-[#fafafa] text-[14px] shadow-sm hover:border-[#555] cursor-default transition-colors"
                    >
                        <div className="w-[18px] h-[18px] flex items-center justify-center">
                            <img src={`https://cdn.simpleicons.org/${skill.icon}`} alt={skill.name} className="w-full h-full object-contain" />
                        </div>
                        <span className="font-medium tracking-wide">{skill.name}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
