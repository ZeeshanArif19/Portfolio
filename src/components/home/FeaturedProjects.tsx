'use client';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const projects = [
    {
        title: "Cloud Drive",
        description: "A comprehensive cloud storage platform designed for modern teams, featuring real-time synchronization, granular sharing controls, and blazing-fast upload capabilities with enterprise-grade security and intuitive file management.",
        features: [
            "Advanced search functionality with intelligent filters and instant file retrieval across all stored content",
            "Collaborative folder system with granular role-based permissions and real-time access control management",
            "Optimized upload system with resumable chunks, progress tracking, and bandwidth optimization features",
            "Real-time synchronization engine that keeps files updated across all devices and platforms seamlessly",
            "Enterprise-grade security implementation with end-to-end encryption and comprehensive audit logging"
        ],
        tech: ["NextJS", "TypeScript", "MongoDB", "AWS S3", "AWS CloudFront"],
        color: "bg-[#8bb4f6]"
    },
    {
        title: "FinTech Hub",
        description: "Real-time financial analytics dashboard visualizing complex market data with sub-second latency.",
        features: [
            "Live WebSocket market data streaming connecting to multiple global exchanges",
            "Interactive WebGL charting capabilities with advanced technical indicators",
            "Automated portfolio rebalancing alerts powered by AI pricing models",
            "Multi-currency support with dynamic live-conversion modules",
            "Bank-level encryption protocols safeguarding user trading credentials"
        ],
        tech: ["React", "Node.js", "PostgreSQL", "Socket.IO", "Redis"],
        color: "bg-[#f5a3a3]"
    },
    {
        title: "AI Image Studio",
        description: "A powerful generative AI tool that turns text prompts into stunning high-resolution assets instantly.",
        features: [
            "Stable Diffusion API integration for lightning-fast image synthesis",
            "Custom LoRA model training interface for specialized aesthetic requests",
            "Bulk generation queue management designed for enterprise marketing teams",
            "Auto-upscaler pushing resolutions up to 4K natively in the browser",
            "Seamless cloud asset export straight to your connected drive"
        ],
        tech: ["Python", "FastAPI", "React", "PyTorch", "GCP"],
        color: "bg-[#b1ecc0]"
    }
];

export default function FeaturedProjects() {
    return (
        <section className="flex flex-col items-center justify-center py-16 w-full" id="projects">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h6 className="text-xs font-bold tracking-[0.2em] text-[#a1a1aa] uppercase mb-4">
                    FEATURED CASE STUDIES
                </h6>
                <h2 className="text-5xl">
                    <span className="heading-glow">Curated</span> <span className="text-gradient">work</span>
                </h2>
            </motion.div>

            <div className="flex flex-col gap-16 w-full">
                {projects.map((project, idx) => (
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        key={project.title}
                        className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} rounded-[32px] overflow-hidden bg-[#161616] border border-white/5 shadow-2xl relative`}
                    >
                        {/* Visual Placeholder for Project Image */}
                        <div className={`w-full lg:w-[40%] ${project.color} flex items-center justify-center p-8 lg:p-8 relative min-h-[350px]`}>
                            {/* Authentic Laptop Mockup */}
                            <div className="relative w-full max-w-[420px] drop-shadow-2xl">
                                {/* Laptop Screen Bezels */}
                                <div className="aspect-[16/10] bg-[#0a0a0a] rounded-t-[12px] border-[8px] lg:border-[10px] border-[#18181b] relative flex flex-col items-center justify-center overflow-hidden">
                                    {/* Camera dot */}
                                    <div className="absolute top-1.5 w-1.5 h-1.5 rounded-full bg-[#333]" />
                                    {/* Screen Content */}
                                    <div className="w-full h-full flex items-center justify-center bg-[#070707] border border-white/5 rounded-sm relative">
                                        <div className="text-center">
                                            <div className="w-14 h-14 bg-[#1a1a1a] rounded-lg mx-auto mb-3 border border-white/5 flex items-center justify-center">
                                                <div className="w-5 h-5 bg-blue-500 rounded-full blur-[6px] opacity-60" />
                                            </div>
                                            <span className="text-white/30 text-[9px] font-medium tracking-wide uppercase">App Interface</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Laptop Base Lip */}
                                <div className="w-[110%] -ml-[5%] h-[12px] lg:h-[14px] bg-gradient-to-b from-[#dbdbdb] via-[#a3a3a3] to-[#808080] rounded-b-[18px] rounded-t-[2px] relative shadow-2xl flex justify-center mt-[1px]">
                                    {/* Trackpad notch */}
                                    <div className="w-14 h-1 lg:w-16 lg:h-1.5 bg-[#8a8a8a] rounded-b-md absolute top-0 inset-x-0 mx-auto" />
                                </div>
                            </div>
                        </div>

                        {/* Project Details */}
                        <div className="w-full lg:w-[60%] flex flex-col items-start p-8 lg:py-10 lg:px-12">
                            <div className="flex items-center gap-4 mb-5">
                                <h3 className="text-[30px] lg:text-[32px] font-bold text-white tracking-tight leading-none">{project.title}</h3>
                                <span className="px-3 py-1 bg-[#00dfd8] text-[#0a0a0a] text-[11px] font-bold rounded-full tracking-wide">
                                    Featured
                                </span>
                            </div>

                            <p className="text-[#a1a1aa] mb-6 leading-[1.6] text-[14px] w-full">
                                {project.description}
                            </p>

                            <ul className="flex flex-col gap-2.5 mb-8 w-full">
                                {project.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3.5 text-[13px] text-[#a1a1aa] leading-relaxed">
                                        <div className="mt-1 min-w-[16px]">
                                            <Check size={14} className="text-[#888] font-medium" strokeWidth={1.5} />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2.5 mt-auto">
                                {project.tech.map((t) => (
                                    <span key={t} className="px-3.5 py-1.5 rounded-full text-[12px] font-medium bg-[#1e1e1e] border border-white/5 text-[#d1d1d1] flex items-center gap-2">
                                        <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#444] to-[#222] font-bold text-[7px] flex justify-center items-center text-white border border-white/10 uppercase">
                                            {t[0]}
                                        </div>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
