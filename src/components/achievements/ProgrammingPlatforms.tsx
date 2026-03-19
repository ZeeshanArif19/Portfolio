'use client';
import { motion } from 'framer-motion';

const platforms = [
    {
        name: 'LeetCode',
        url: 'https://leetcode.com',
        icon: 'https://cdn.simpleicons.org/leetcode/white',
    },
    {
        name: 'GeeksForGeeks',
        url: 'https://auth.geeksforgeeks.org',
        icon: 'https://cdn.simpleicons.org/geeksforgeeks/white',
    },
    {
        name: 'CodeChef',
        url: 'https://www.codechef.com',
        icon: 'https://cdn.simpleicons.org/codechef/white',
    },
    {
        name: 'Codeforces',
        url: 'https://codeforces.com',
        icon: 'https://cdn.simpleicons.org/codeforces/white',
    }
];

export default function ProgrammingPlatforms() {
    return (
        <section className="py-24 max-w-5xl mx-auto w-full px-6 mb-24">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h6 className="text-[11px] font-bold tracking-[0.2em] text-[#a1a1aa] uppercase mb-4">
                    PROBLEM SOLVING
                </h6>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                    Programming <span className="text-gradient">Profiles.</span>
                </h2>
            </motion.div>

            <div className="flex flex-wrap items-center justify-center gap-6">
                {platforms.map((platform, i) => (
                    <motion.a
                        key={platform.name}
                        href={platform.url}
                        target="_blank"
                        rel="noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="group relative inline-flex h-14 w-full sm:w-[220px] overflow-hidden rounded-full p-[2px] shadow-2xl hover:scale-105 transition-transform duration-300"
                    >
                        {/* Magic UI Rainbow Spinning Border Effect */}
                        <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff0000_0%,#ff7f00_14%,#ffff00_28%,#00ff00_42%,#0000ff_57%,#4b0082_71%,#9400d3_85%,#ff0000_100%)] opacity-50 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]" />
                        
                        {/* Pill Interior */}
                        <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-[#111] group-hover:bg-[#1a1a1a] transition-colors duration-300 px-6 backdrop-blur-3xl z-10">
                            <div className="w-5 h-5 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                                <img src={platform.icon} alt={`${platform.name} logo`} className="w-full h-full object-contain" />
                            </div>
                            <span className="text-white font-bold tracking-wide text-sm">{platform.name}</span>
                        </span>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}
