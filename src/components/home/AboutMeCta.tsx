'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

export default function AboutMeCta() {
    return (
        <section className="py-12 flex flex-col gap-16 w-full" id="about">
            {/* About Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col-reverse md:flex-row gap-16 md:gap-12 items-center md:items-start"
            >
                {/* Left Side: Text */}
                <div className="w-full md:w-1/2 flex flex-col items-start pr-0 md:pr-10">
                    <h6 className="text-[11px] font-bold tracking-[0.2em] text-[#a1a1aa] uppercase mb-4">
                        ABOUT ME
                    </h6>
                    <h2 className="text-[40px] md:text-[50px] mb-10 leading-[1.1]">
                        <span className="heading-glow">Software Engineer with a</span> <br />
                        <span className="heading-glow">little bit of</span> <span className="text-gradient">everything</span>
                    </h2>

                    <div className="text-[#a1a1aa] text-[15px] leading-[1.8] flex flex-col gap-6 font-medium">
                        <p>
                            <strong className="text-white font-bold tracking-wide">I&apos;m Zeeshan Arif Ahmad</strong> — an aspiring Software Engineer with a passion for building engaging and efficient web applications. Whether it&apos;s crafting responsive frontend or architecting robust backends, my toolkit is rooted in the JavaScript ecosystem and Python. I have strong experience in React, Next.js, and Node.js. I&apos;m always curious to learn more.
                        </p>
                        <p>
                            When I&apos;m not deep in code, I love to explore new ideas and fulfill my curiosity. I believe in balance and enjoy embracing every aspect of life.
                        </p>
                        <p>
                            I believe each day is a fresh opportunity to grow, create, and make a difference! Every project is a chance to engineer something meaningful that enhances how people interact with technology.
                        </p>
                    </div>

                    <div className="flex gap-4 mt-10">
                        <a href="https://github.com/ZeeshanArif19" target="_blank" rel="noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors text-white">
                            <Github size={18} />
                        </a>
                        <a href="https://www.linkedin.com/in/zeeshan-arif-ahmad-b44608270/" target="_blank" rel="noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors text-white">
                            <Linkedin size={18} />
                        </a>
                    </div>
                </div>

                {/* Right Side: Image Placeholder */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                    <div className="w-full max-w-[420px] aspect-[4/5] bg-[#111111] border border-white/10 rounded-[32px] overflow-hidden relative shadow-2xl flex items-center justify-center">
                        {/* Image Placeholder simulating the portrait */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#1a1a1a] to-[#2a2a2a]" />
                        <span className="relative text-white/30 text-xs font-medium uppercase tracking-widest z-10">Portrait Placeholder</span>
                    </div>
                </div>
            </motion.div>

            {/* CTA Section */}
            {/* <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-full bg-[#111111] border border-white/5 rounded-3xl p-12 lg:p-24 text-center flex flex-col items-center relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-[#d946ef]/10 to-transparent opacity-30 pointer-events-none" />

                <h2 className="text-[32px] md:text-[48px] font-bold mb-6 max-w-3xl leading-[1.15] tracking-tight">
                    I&apos;m available for full-time roles & freelance projects.
                </h2>
                <p className="text-[#a1a1aa] text-[16px] max-w-2xl mb-12 leading-relaxed">
                    If you have an opportunity or a project in mind, feel free to reach out. I&apos;m always open to discussing new ideas, collaborations, or potential opportunities to contribute my skills and expertise.
                </p>

                <a
                    href="mailto:arifzeeshan659@gmail.com"
                    className="px-10 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-2 group text-[15px]"
                >
                    Get In Touch
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
            </motion.div> */}
        </section>
    );
}
