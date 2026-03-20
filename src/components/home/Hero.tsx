'use client';
import { motion } from 'framer-motion';
import { Zap, Eye, Layers, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    const techStack = ["Agile", "React", "Next.js", "Node.js", "C++", "Cloud", "MERN Stack", "PostgreSQL"];

    const traits = [
        { name: "Performance-first", icon: <Zap size={13} className="text-[#a1a1aa]" /> },
        { name: "Accessible by design", icon: <Eye size={13} className="text-[#a1a1aa]" /> },
        { name: "Scalable systems", icon: <Layers size={13} className="text-[#a1a1aa]" /> }
    ];

    return (
        <section className="flex flex-col items-center justify-start text-center w-full pt-[30px] pb-24 px-4 relative">
            <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-[48px] md:text-[68px] mb-4 leading-[1.05] max-w-[1200px] mx-auto w-full"
            >
                <span className="heading-glow">Turning business ideas</span>
                <br />
                <span className="whitespace-nowrap">
                    <span className="heading-glow">into scalable</span>{' '}
                    <span className="text-gradient">digital products</span>
                </span>
            </motion.h1>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-[#a1a1aa] mb-5 text-[15px] md:text-[16px] font-medium leading-[1.6] max-w-2xl px-2"
            >
                <p className="mb-0.5">Hey there! I&apos;m Zeeshan Arif Ahmad 👋 an aspiring Software Engineer</p>
                <p className="mb-0.5">Passionate about engineering high-performance, accessible, and scalable products</p>
                <p>for web and mobile.</p>
            </motion.div>

            {/* Tech Chips */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap justify-center gap-2 mb-5 max-w-3xl"
            >
                {techStack.map((tech) => (
                    <span key={tech} className="px-4 py-1.5 rounded-full text-[12px] font-medium text-zinc-300 border border-white/10 bg-transparent hover:bg-white/5 transition-colors cursor-default">
                        {tech}
                    </span>
                ))}
            </motion.div>

            {/* Trait Chips */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap justify-center gap-3 mb-8"
            >
                {traits.map((trait, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[#a1a1aa] text-[12px] font-medium border border-white/10 px-3 py-1.5 rounded-xl bg-[#0a0a0a]">
                        {trait.icon}
                        {trait.name}
                    </div>
                ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
            >
                <Link
                    href="/about"
                    className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors text-[14px] min-w-[140px]"
                >
                    About Me
                </Link>
                <a
                    href="mailto:arifzeeshan659@gmail.com"
                    className="px-8 py-3 bg-transparent border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-colors flex items-center justify-center gap-2 group text-[14px] min-w-[140px]"
                >
                    Get In Touch
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </a>
            </motion.div>
        </section>
    );
}
