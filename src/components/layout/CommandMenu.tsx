'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Home, User, FolderOpen, Trophy, FileText, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

const navigationItems = [
    { name: 'Home', sub: 'Welcome to my forever work-in-progress!', icon: Home, href: '/' },
    { name: 'About', sub: 'Learn more about me!', icon: User, href: '/about' },
    { name: 'Projects', sub: 'Showcase of my projects', icon: FolderOpen, href: '/#projects' },
    { name: 'Achievements', sub: 'View my certificates and progress', icon: Trophy, href: '/achievements' }
];

const resourceItems = [
    { name: 'Resume', sub: 'View my professional resume', icon: FileText, href: '/resume', external: true }
];

const socialItems = [
    { name: 'GitHub', sub: 'Check out my repositories', icon: Github, href: 'https://github.com/ZeeshanArif19', external: true },
    { name: 'LinkedIn', sub: 'Connect with me', icon: Linkedin, href: 'https://linkedin.com/in/zeeshan-arif-19z', external: true }
];

export default function CommandMenu({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (v: boolean) => void }) {
    const [search, setSearch] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const pathname = usePathname();
    const router = useRouter();
    const inputRef = useRef<HTMLInputElement>(null);

    // Combine all items for searching and keyboard navigation
    const allItems = [...navigationItems, ...resourceItems, ...socialItems].filter(item => 
        item.name.toLowerCase().includes(search.toLowerCase()) || 
        item.sub.toLowerCase().includes(search.toLowerCase())
    );

    // Reset selection when search changes or menu opens
    useEffect(() => {
        setSelectedIndex(0);
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [search, isOpen]);

    // Handle global keyboard shortcuts (Ctrl+Space or Cmd+K)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey && e.code === 'Space') || (e.metaKey && e.key === 'k')) {
                e.preventDefault();
                setIsOpen(!isOpen);
            }
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, setIsOpen]);

    // Handle lock body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.style.overflow = '';
            document.body.classList.remove('overflow-hidden');
        }
        return () => {
            document.body.style.overflow = '';
            document.body.classList.remove('overflow-hidden');
        };
    }, [isOpen]);

    // Handle internal keyboard navigation
    useEffect(() => {
        if (!isOpen) return;

        const handleNav = (e: KeyboardEvent) => {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedIndex(prev => (prev < allItems.length - 1 ? prev + 1 : prev));
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedIndex(prev => (prev > 0 ? prev - 1 : prev));
            } else if (e.key === 'Enter' && allItems[selectedIndex]) {
                e.preventDefault();
                const selected = allItems[selectedIndex];
                if ('external' in selected && selected.external && selected.href.startsWith('http')) {
                    window.open(selected.href, '_blank');
                } else {
                    router.push(selected.href);
                }
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleNav);
        return () => window.removeEventListener('keydown', handleNav);
    }, [isOpen, allItems, selectedIndex, router, setIsOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999]"
                        data-lenis-prevent="true"
                    />

                    {/* Modal Wrapper */}
                    <div className="fixed inset-0 flex items-start justify-center pt-[10vh] px-4 z-[1000] pointer-events-none" data-lenis-prevent="true">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="w-full max-w-[650px] bg-[#161616] border border-[#333] rounded-[16px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] pointer-events-auto flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header / Search Input */}
                            <div className="flex items-center px-4 border-b border-[#333]">
                                <Search size={20} className="text-[#a1a1aa] min-w-[20px]" />
                                <input
                                    ref={inputRef}
                                    type="text"
                                    placeholder="Search"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-full bg-transparent border-none outline-none text-white px-4 py-4 text-[15px] placeholder:text-[#a1a1aa]"
                                />
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="px-2 py-1 rounded-md bg-[#222] border border-[#333] text-[#a1a1aa] text-[10px] uppercase font-bold tracking-wider hover:bg-[#333] transition-colors"
                                >
                                    esc
                                </button>
                            </div>

                            {/* Content List */}
                            <div 
                                className="max-h-[350px] overflow-y-auto px-2 py-3 flex flex-col gap-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                                data-lenis-prevent="true"
                            >
                                {/* Navigation Group */}
                                {navigationItems.filter(i => allItems.includes(i)).length > 0 && (
                                    <div className="flex flex-col gap-1">
                                        <div className="px-3 py-1.5 text-[12px] font-bold text-[#a1a1aa]">Navigation</div>
                                        {navigationItems.map((item) => {
                                            if (!allItems.includes(item)) return null;
                                            const index = allItems.indexOf(item);
                                            const isSelected = selectedIndex === index;
                                            const isCurrent = pathname === item.href;

                                            return (
                                                <div
                                                    key={item.name}
                                                    onMouseMove={() => setSelectedIndex(index)}
                                                    onClick={() => { router.push(item.href); setIsOpen(false); }}
                                                    className={`w-full flex items-center justify-between px-3 py-3 rounded-xl cursor-pointer transition-colors ${isSelected ? 'bg-[#262626]' : 'hover:bg-[#222]'}`}
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <div className={`w-10 h-10 rounded-xl bg-[#222] border border-[#333] flex items-center justify-center shadow-inner ${isCurrent ? 'text-white' : 'text-[#a1a1aa]'}`}>
                                                            <item.icon size={18} />
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-white font-semibold text-[14px]">{item.name}</span>
                                                                {isCurrent && (
                                                                    <span className="px-2 py-0.5 rounded-full bg-[#333] text-white text-[10px] font-bold">Current</span>
                                                                )}
                                                            </div>
                                                            <span className="text-[#a1a1aa] text-[13px]">{item.sub}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}

                                {/* Resources Group */}
                                {resourceItems.filter(i => allItems.includes(i)).length > 0 && (
                                    <div className="flex flex-col gap-1">
                                        <div className="px-3 py-1.5 text-[12px] font-bold text-[#a1a1aa] border-t border-[#333] mt-2 pt-4">Resources</div>
                                        {resourceItems.map((item) => {
                                            if (!allItems.includes(item)) return null;
                                            const index = allItems.indexOf(item);
                                            const isSelected = selectedIndex === index;
                                            const isCurrent = pathname === item.href;

                                            return (
                                                <div
                                                    key={item.name}
                                                    onMouseMove={() => setSelectedIndex(index)}
                                                    onClick={() => { router.push(item.href); setIsOpen(false); }}
                                                    className={`w-full flex items-center justify-between px-3 py-3 rounded-xl cursor-pointer transition-colors ${isSelected ? 'bg-[#262626]' : 'hover:bg-[#222]'}`}
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <div className={`w-10 h-10 rounded-xl bg-[#222] border border-[#333] flex items-center justify-center shadow-inner ${isCurrent ? 'text-white' : 'text-[#a1a1aa]'}`}>
                                                            <item.icon size={18} />
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <span className="text-white font-semibold text-[14px]">{item.name}</span>
                                                            <span className="text-[#a1a1aa] text-[13px]">{item.sub}</span>
                                                        </div>
                                                    </div>
                                                    {item.external && <ArrowUpRight size={18} className="text-[#a1a1aa] mr-2" />}
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}

                                {/* Socials Group */}
                                {socialItems.filter(i => allItems.includes(i)).length > 0 && (
                                    <div className="flex flex-col gap-1">
                                        <div className="px-3 py-1.5 text-[12px] font-bold text-[#a1a1aa] border-t border-[#333] mt-2 pt-4">Socials</div>
                                        {socialItems.map((item) => {
                                            if (!allItems.includes(item)) return null;
                                            const index = allItems.indexOf(item);
                                            const isSelected = selectedIndex === index;

                                            return (
                                                <div
                                                    key={item.name}
                                                    onMouseMove={() => setSelectedIndex(index)}
                                                    onClick={() => { 
                                                        window.open(item.href, '_blank'); 
                                                        setIsOpen(false); 
                                                    }}
                                                    className={`w-full flex items-center justify-between px-3 py-3 rounded-xl cursor-pointer transition-colors ${isSelected ? 'bg-[#262626]' : 'hover:bg-[#222]'}`}
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-10 h-10 rounded-xl bg-[#222] border border-[#333] flex items-center justify-center text-[#a1a1aa] shadow-inner">
                                                            <item.icon size={18} />
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <span className="text-white font-semibold text-[14px]">{item.name}</span>
                                                            <span className="text-[#a1a1aa] text-[13px]">{item.sub}</span>
                                                        </div>
                                                    </div>
                                                    {item.external && <ArrowUpRight size={18} className="text-[#a1a1aa] mr-2" />}
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>

                            {/* Footer */}
                            <div className="flex items-center justify-between px-4 py-3 border-t border-[#333] bg-[#1a1a1a]">
                                <div className="flex items-center gap-4 text-[#a1a1aa]">
                                    <a href="https://github.com/ZeeshanArif19" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                        <Github size={16} />
                                    </a>
                                    <a href="https://linkedin.com/in/zeeshan-arif-19z" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                        <Linkedin size={16} />
                                    </a>
                                </div>

                                <div className="flex items-center gap-3 text-[11px] text-[#888] font-mono">
                                    <div className="flex items-center gap-1">
                                        <span className="px-1 py-0.5 rounded bg-[#333] text-[#ccc]">ctrl</span> + <span className="px-1 py-0.5 rounded bg-[#333] text-[#ccc]">space</span> open
                                    </div>
                                    <span className="px-1">•</span>
                                    <div className="flex items-center gap-1">
                                        <span className="px-1 py-0.5 rounded bg-[#333] text-[#ccc]">↑</span> <span className="px-1 py-0.5 rounded bg-[#333] text-[#ccc]">↓</span> navigate
                                    </div>
                                    <span className="px-1">•</span>
                                    <div className="flex items-center gap-1">
                                        <span className="px-1 py-0.5 rounded bg-[#333] text-[#ccc]">↵</span> select
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
