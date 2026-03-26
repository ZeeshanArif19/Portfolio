'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutHero() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between gap-16 py-32 w-full max-w-5xl mx-auto px-6">
            {/* Left side text */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-[60%] flex flex-col items-start"
            >
                <h6 className="text-[11px] font-bold tracking-[0.2em] text-[#00dfd8] uppercase mb-4">
                    MY STORY
                </h6>
                <h1 className="text-[48px] md:text-[64px] font-bold mb-8 leading-[1.05] tracking-tight">
                    <span className="heading-glow">Behind the</span> <br />
                    <span className="text-gradient">developer.</span>
                </h1>
                
                <div className="text-[#a1a1aa] text-[16px] leading-[1.8] flex flex-col gap-6 font-medium">
                    <p>
                        <strong className="text-white font-bold tracking-wide">I&apos;m Zeeshan Arif Ahmad</strong> — a driven Software Engineer who thrives at the intersection of powerful logic and engaging design. While the home page gives you a glance at my capabilities, this is where you get to know the person behind the code.
                    </p>
                    <p>
                        My journey into tech started with a profound curiosity about how the digital world operates. Over the years, I&apos;ve transformed that curiosity into a career, mastering modern frameworks like React, Next.js, and Node.js to build products that feel as good as they function.
                    </p>
                    <p>
                        Beyond the IDE, I&apos;m constantly exploring new ideas, whether that&apos;s diving into the latest AI models, studying cutting-edge UI/UX trends, or finding the perfect balance between life and technology to ensure my work always sets a high bar.
                    </p>
                </div>
            </motion.div>

            {/* Right side visual placeholder */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full md:w-[35%] flex justify-center"
            >
                <div className="w-full max-w-[320px] aspect-[3/4] rounded-[40px] bg-gradient-to-br from-[#111] to-[#050505] border border-white/10 relative overflow-hidden flex items-center justify-center group shadow-2xl">
                    <Image
                        src="/images/profile.png"
                        alt="Zeeshan Arif Ahmad"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 320px"
                        priority
                    />
                    
                    {/* Decorative elements */}
                    <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-[#00dfd8] animate-pulse z-20" />
                    <div className="absolute bottom-10 left-10 w-16 h-[1px] bg-white/20 z-20" />
                    <div className="absolute -right-20 -top-20 w-40 h-40 bg-[#00dfd8]/20 blur-[60px] rounded-full z-10" />
                </div>
            </motion.div>
        </section>
    );
}
