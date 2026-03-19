'use client';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const projects = [
    {
        title: "High Concurrency Ticketing System",
        description: "A full-stack, distributed platform architected for extreme concurrency, leveraging PostgreSQL's strict isolation levels to guarantee atomic seat booking and payment processing under massive traffic spikes.",
        features: [
            "Implemented SERIALIZABLE isolation and aggressive SELECT FOR UPDATE (Row-Level Locking) queries to strictly prevent double-booking and overselling.",
            "Designed robust automated transaction retry mechanisms to instantly resolve serialization failures and database deadlocks without user intervention.",
            "Devised a highly dynamic React interface featuring interactive stadium seat maps with real-time availability polling.",
            "Engineered an ACID-compliant checkout flow ensuring absolute data integrity between external payment gateways and inventory databases.",
            "Optimized connection pooling and complex query indexing to securely sustain thousands of concurrent booking attempts with minimal latency."
        ],
        tech: [
            { name: "Node.js", icon: "nodedotjs" },
            { name: "Express.js", icon: "express" },
            { name: "PostgreSQL", icon: "postgresql" },
            { name: "React", icon: "react" },
            { name: "Tailwind CSS", icon: "tailwindcss" }
        ],
        image: "/event-image.png",
        color: "bg-[#8bb4f6]"
    },
    {
        title: "Memory Mgt. Simulator",
        description: "A robust, console-based simulation engine engineered in C++ to deeply model core Operating System memory operations, focusing on dynamic allocation, address mapping, and defragmentation.",
        features: [
            "Assembled a robust object-oriented C++ simulation engine to comprehensively model dynamic memory allocation and deallocation lifecycles.",
            "Integrated LRU (Least Recently Used) and FIFO page replacement policies using advanced STL Maps and Queues.",
            "Architected an automatic defragmentation algorithm that intelligently shifts active process blocks to actively eliminate external fragmentation.",
            "Maximized contiguous memory availability to successfully handle highly fragmented and constrained system process environments.",
            "Demonstrated bare-metal resource management proficiency and a deep understanding of kernel-level operating system architectures."
        ],
        tech: [
            { name: "C++", icon: "cplusplus" },
            { name: "STL Containers", icon: null },
            { name: "OOP", icon: null },
            { name: "OS Architecture", icon: null }
        ],
        image: "/memory-image.png",
        color: "bg-[#f5a3a3]"
    },
    {
        title: "Crowd Problem Register",
        description: "A comprehensive full-stack geographic complaint management structured around secure role-based dashboards and dual-authentication workflows.",
        features: [
            "Engineered robust JWT and Google OAuth authentication flows strictly mapped to Role-Based Access Control (RBAC) privileges.",
            "Built a real-time, low-latency complaint resolution chat interface powered by bi-directional Socket.io web sockets.",
            "Integrated complex geospatial complaint mapping using Leaflet to visually cluster and track regional issues across interactive maps.",
            "Applied a highly secure multimedia upload pipeline utilizing Multer middleware directly linked to Cloudinary's edge CDN.",
            "Constructed interactive, data-driven analytics dashboards to visualize platform engagement and geographical complaint densities."
        ],
        tech: [
            { name: "MongoDB", icon: "mongodb" },
            { name: "Express.js", icon: "express" },
            { name: "React", icon: "react" },
            { name: "Node.js", icon: "nodedotjs" },
            { name: "Tailwind CSS", icon: "tailwindcss" },
            { name: "Socket.io", icon: "socketdotio" }
        ],
        image: "/crowd-image.png",
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
                                    <div className="w-full h-full flex items-center justify-center bg-[#070707] border border-white/5 rounded-sm relative overflow-hidden group/screen">
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top opacity-90 group-hover/screen:opacity-100 transition-opacity duration-500" />
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

                            <div className="flex flex-wrap gap-3 mt-auto">
                                {project.tech.map((t) => (
                                    <span key={t.name} className="flex flex-row items-center gap-2.5 px-3 py-1.5 rounded-[10px] bg-[#161616] border border-[#333333] text-[#fafafa] text-[14px] font-medium cursor-default transition-colors hover:border-[#555]">
                                        {t.icon ? (
                                            <div className="w-[16px] h-[16px] flex items-center justify-center">
                                                <img src={`https://cdn.simpleicons.org/${t.icon}`} alt={`${t.name} logo`} className="w-full h-full object-contain" />
                                            </div>
                                        ) : (
                                            <div className="w-[16px] h-[16px] rounded-full bg-gradient-to-br from-[#444] to-[#222] font-bold text-[8px] flex justify-center items-center text-white border border-[#333] uppercase">
                                                {t.name[0]}
                                            </div>
                                        )}
                                        <span className="tracking-wide text-[13px]">{t.name}</span>
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
