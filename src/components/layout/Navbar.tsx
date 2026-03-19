'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Command } from 'lucide-react';
import { motion } from 'framer-motion';

const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Hire Me', href: '/hire-me' },
    { name: 'Snippets', href: '/snippets' },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl flex justify-between items-center"
        >
            {/* Logo */}
            <Link href="/" className="flex flex-col items-center justify-center w-10 h-10 rounded-full border border-white/30 hover:scale-105 transition-transform">
                <span className="font-bold text-lg font-serif tracking-tighter">Z</span>
            </Link>

            {/* Centered Pill Navigation */}
            <nav className="hidden md:flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-2 py-1.5 relative shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
                <ul className="flex items-center gap-1">
                    {links.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <li key={link.name} className="relative">
                                {isActive && (
                                    <>
                                        <motion.div
                                            layoutId="navbar-active-bg"
                                            className="absolute inset-0 bg-white/10 rounded-full pointer-events-none"
                                        />
                                        <motion.div
                                            layoutId="navbar-active-glow"
                                            className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-8 h-[3px] bg-white rounded-full shadow-[0_2px_15px_4px_rgba(255,255,255,0.6)] pointer-events-none"
                                        />
                                    </>
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

            {/* Command Icon */}
            <button className="text-white hover:text-gray-300 transition-colors hidden md:block">
                <Command size={20} />
            </button>
        </motion.header>
    );
}
