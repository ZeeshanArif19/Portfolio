'use client';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const achievements = [
    {
        title: "Solved 600+ DSA Problems",
        category: "Problem Solving",
        date: "Mar 2026",
        description: "Solved 600+ problems across various platforms including LeetCode, GeeksforGeeks, and HackerRank, covering a wide range of topics from basic data structures to advanced algorithms and dynamic programming."
    },
    {
        title: "Competitive Programming",
        category: "Competition",
        date: "Feb 2026",
        description: "Earned 2 stars on CodeChef and 1534 rating on LeetCode, demonstrating competitive coding proficiency."
    },
    // {
    //     title: "Top 1% on LeetCode",
    //     category: "Problem Solving",
    //     date: "Ongoing",
    //     description: "Consistently ranked in the top 1% globally on coding platforms, demonstrating extreme proficiency in dynamic programming, graph theory, and system design optimizations under tight constraints."
    // }
];

export default function AchievementsList() {
    return (
        <section className="py-24 max-w-5xl mx-auto w-full px-6 mb-24">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20"
            >
                <h6 className="text-[11px] font-bold tracking-[0.2em] text-[#a1a1aa] uppercase mb-4">
                    MILESTONES
                </h6>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                    Key <span className="text-gradient">Achievements.</span>
                </h2>
            </motion.div>

            <div className="flex flex-col gap-6">
                {achievements.map((item, i) => (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        key={i}
                        className="group flex flex-col md:flex-row items-start md:items-center gap-6 p-8 rounded-[32px] bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-colors shadow-2xl"
                    >
                        {/* Icon Block */}
                        <div className="w-16 h-16 rounded-[16px] bg-[#111] border border-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                            <Trophy size={24} className="text-[#555] group-hover:text-yellow-500 transition-colors duration-500" />
                        </div>
                        
                        {/* Content */}
                        <div className="flex-grow">
                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">{item.title}</h3>
                                <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/10" />
                                <span className="text-[13px] font-bold text-yellow-500 tracking-wide uppercase">{item.category}</span>
                            </div>
                            <p className="text-[#888] text-[15px] leading-relaxed max-w-3xl">
                                {item.description}
                            </p>
                        </div>
                        
                        {/* Date Pill */}
                        <div className="shrink-0 mt-4 md:mt-0">
                            <span className="px-4 py-2 bg-[#111] shadow-inner border border-white/5 text-[#a1a1aa] group-hover:text-white transition-colors text-[11px] font-bold uppercase tracking-widest rounded-full inline-block">
                                {item.date}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
