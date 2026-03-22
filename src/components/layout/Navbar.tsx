'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import CommandMenu from '@/components/layout/CommandMenu';

const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Achievements', href: '/achievements' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isCmdOpen, setIsCmdOpen] = useState(false);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl flex justify-between items-center"
        >
            {/* Custom Z 1 Logo */}
            <Link href="/" className="group relative flex flex-col items-center justify-center w-11 h-11 rounded-full bg-[#111] border border-white/10 hover:border-[#00dfd8]/50 hover:shadow-[0_0_20px_rgba(0,223,216,0.3)] hover:scale-105 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00dfd8]/10 to-[#007cf0]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <svg width="18" height="24" viewBox="0 0 500 680" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 drop-shadow-[0_0_8px_rgba(0,223,216,0.2)] group-hover:drop-shadow-[0_0_12px_rgba(0,223,216,0.6)] transition-all duration-500">
                    <defs>
                        <linearGradient id="zGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#00dfd8" />
                            <stop offset="100%" stopColor="#007cf0" />
                        </linearGradient>
                    </defs>
                    <path d="M 465 35 L 35 645 L 465 645 L 465 35 L 35 35" stroke="url(#zGradient)" strokeWidth="70" strokeLinejoin="miter" strokeMiterlimit="4" strokeLinecap="square" />
                </svg>
            </Link>

            {/* Centered Pill Navigation */}
            <nav className="hidden md:flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-2 py-1.5 relative shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
                <ul className="flex items-center gap-1">
                    {links.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <li key={link.name} className="relative">
                                {isActive && (
                                    <motion.div
                                        layoutId="navbar-active-item"
                                        className="absolute inset-0 pointer-events-none"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        style={{ borderRadius: 9999 }}
                                    >
                                        <div className="absolute inset-0 bg-white/10 rounded-full" />
                                        <div className="absolute -top-[6px] inset-x-0 mx-auto w-8 h-[3px] bg-white rounded-full shadow-[0_2px_15px_4px_rgba(255,255,255,0.6)]" />
                                    </motion.div>
                                )}
                                <Link
                                    href={link.href}
                                    className={`relative z-10 block px-7 py-2.5 rounded-full text-[14px] font-medium transition-colors ${isActive ? 'text-white' : 'text-[#a1a1aa] hover:text-white'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* Right Actions */}
            <div className="hidden md:flex flex-row items-center gap-6">
                <Link
                    href="/resume"
                    className="relative group px-5 py-2 rounded-full overflow-hidden flex items-center justify-center transition-transform hover:scale-105"
                >
                    {/* Glowing background */}
                    <span className="absolute inset-0 bg-gradient-to-r from-[#00dfd8] to-[#007cf0] blur-[10px] group-hover:blur-[15px] transition-all duration-300 opacity-60 group-hover:opacity-100" />
                    <span className="absolute inset-0 bg-gradient-to-r from-[#00dfd8] to-[#007cf0] opacity-80" />

                    {/* Button surface */}
                    <span className="relative z-10 font-bold text-white text-[13px] tracking-widest uppercase text-shadow-sm">
                        Resume
                    </span>

                    {/* Glass sheen */}
                    <span className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-50 z-20" />
                </Link>

                <button
                    onClick={() => setIsCmdOpen(true)}
                    className="text-[#a1a1aa] hover:scale-110 transition-transform w-[27px] h-[27px]"
                >
                    <img src="/file.png" alt="Command Menu icon" className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
                </button>
            </div>

            <CommandMenu isOpen={isCmdOpen} setIsOpen={setIsCmdOpen} />
        </motion.header>
    );
}
