'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full relative overflow-hidden bg-[#050505] border-t border-white/5 pt-24 pb-12 mt-32">
            {/* Background ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[300px] bg-[#ffffff]/[0.02] blur-[120px] rounded-full pointer-events-none" />
            
            <div className="max-w-[1240px] mx-auto px-6 md:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
                    <div className="flex flex-col max-w-2xl">
                        <h2 className="text-[50px] md:text-[80px] font-bold tracking-tighter leading-[1.05] mb-6">
                            <span className="heading-glow">Let&apos;s build</span> <br />
                            <span className="text-gradient">something great.</span>
                        </h2>
                        <p className="text-[#a1a1aa] text-[17px] md:text-[19px] leading-[1.6]">
                            Ready to take your digital presence to the next level? Reach out and let&apos;s discuss your next massive project.
                        </p>
                    </div>
                    
                    <a 
                        href="mailto:arifzeeshan659@gmail.com" 
                        className="group flex flex-col items-start gap-4 p-8 rounded-[24px] bg-[#111] border border-white/5 hover:border-white/20 transition-all duration-300"
                    >
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-white text-white group-hover:text-black transition-all duration-300">
                            <Mail size={20} />
                        </div>
                        <div>
                            <p className="text-[#a1a1aa] text-sm font-medium mb-1">Get in touch</p>
                            <span className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                                arifzeeshan659@gmail.com
                                <ArrowUpRight size={18} className="text-[#a1a1aa] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </span>
                        </div>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 pt-16 border-t border-white/5">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-3xl font-bold mb-6 text-white tracking-tight">Zeeshan Arif Ahmad</h3>
                        <div className="flex items-center gap-3 px-4 py-2 bg-[#111] border border-white/10 rounded-full w-max mb-6">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping bg-[#00dfd8] rounded-full w-full h-full opacity-75 absolute"></span>
                                <span className="relative rounded-full h-2.5 w-2.5 bg-[#00dfd8]"></span>
                            </span>
                            <span className="text-[13px] font-semibold text-white/90">Available for freelance opportunities</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 mt-2">
                        <h4 className="text-[11px] font-bold tracking-[0.2em] text-[#666] uppercase mb-2">Navigation</h4>
                        <a href="#about" className="text-[#a1a1aa] hover:text-white transition-colors text-[15px] font-medium w-max">About</a>
                        <a href="#projects" className="text-[#a1a1aa] hover:text-white transition-colors text-[15px] font-medium w-max">Projects</a>
                        <a href="#competencies" className="text-[#a1a1aa] hover:text-white transition-colors text-[15px] font-medium w-max">Competencies</a>
                    </div>

                    <div className="flex flex-col gap-4 mt-2">
                        <h4 className="text-[11px] font-bold tracking-[0.2em] text-[#666] uppercase mb-2">Socials</h4>
                        <a href="https://github.com/ZeeshanArif19" target="_blank" rel="noreferrer" className="group flex items-center gap-3 text-[#a1a1aa] hover:text-white transition-colors text-[15px] font-medium w-max">
                            <Github size={18} className="text-[#555] group-hover:text-white transition-colors" /> GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/zeeshan-arif-ahmad-b44608270/" target="_blank" rel="noreferrer" className="group flex items-center gap-3 text-[#a1a1aa] hover:text-white transition-colors text-[15px] font-medium w-max">
                            <Linkedin size={18} className="text-[#555] group-hover:text-white transition-colors" /> LinkedIn
                        </a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-[#666] pt-8 border-t border-white/5">
                    <p className="text-[13px] font-medium mb-4 md:mb-0">
                        © {new Date().getFullYear()} Zeeshan Arif Ahmad. All rights reserved.
                    </p>
                    <p className="text-[13px] font-medium flex items-center gap-2">
                        Crafted with <span className="text-[#00dfd8] font-bold">Next.js</span> & <span className="text-[#00dfd8] font-bold">Tailwind</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
