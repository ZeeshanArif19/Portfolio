'use client';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const certificates = [
    {
        title: 'Cloud Computing',
        issuer: 'IIT Kharagpur',
        date: 'Oct 2025',
        description: 'Studied foundational and advanced cloud architectures, covering virtualization, distributed computing, resource management, and core service models (IaaS, PaaS, SaaS).',
        link: '',
        image:'/images/cloud-cert.jpg'
    },
    {
        title: 'MERN Stack development with GenAI',
        issuer: 'W3Grads',
        date: 'Aug 2025',
        description: 'Built full-stack web applications using MongoDB, Express.js, React, and Node.js, while integrating Generative AI APIs to create smart, scalable, and dynamic web solutions.',
        link: '#',
        image:'/images/mern.jpeg'
    },
    {
        title: 'Computer Communication',
        issuer: 'University of Colorado (Coursera)',
        date: 'Nov 2024',
        description: 'Explored core networking principles, gaining an in-depth understanding of the OSI model, TCP/IP protocols, packet switching, routing, and reliable data transmission.',
        link: '#',
        image:'/images/compnet.png'
    },
    {
        title: 'Introduction to Hardware and Operating Systems',
        issuer: 'IBM (Coursera)',
        date: 'Sep 2024',
        description: 'Acquired foundational knowledge of computer hardware architectures, peripheral devices, and core operating system functions including process, memory, and file management.',
        link: '#',
        image:'/images/os.png'
    }
];

export default function Certificates() {
    return (
        <section className="py-24 max-w-[1100px] mx-auto w-full px-6">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-20"
            >
                <h6 className="text-[11px] font-bold tracking-[0.2em] text-[#00dfd8] uppercase mb-4">
                    VERIFIED SKILLS
                </h6>
                <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
                    Professional <span className="text-gradient">Certificates.</span>
                </h2>
                <p className="text-[#a1a1aa] max-w-2xl mx-auto text-lg">
                    Continuous learning is at the core of my journey. Here are some of the professional checkpoints I&apos;ve cleared globally.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certificates.map((cert, i) => (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        key={i}
                        className="group relative flex flex-col bg-[#111] border border-white/5 rounded-[32px] overflow-hidden hover:border-white/10 transition-colors shadow-xl"
                    >
                        {/* Visual Header */}
                        <div className="h-44 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] relative flex items-center justify-center border-b border-white/5 overflow-hidden">
                            {cert.image ? (
                                <>
                                    <div className="absolute inset-0 bg-[#00dfd8]/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                                    <Image 
                                        src={cert.image} 
                                        alt={cert.title} 
                                        fill
                                        className="object-cover group-hover:scale-110 transition-all duration-500"
                                    />
                                </>
                            ) : (
                                <>
                                    <div className="absolute inset-0 bg-[#00dfd8]/5 group-hover:bg-[#00dfd8]/10 transition-colors duration-500" />
                                    <Award size={56} className="text-[#333] group-hover:text-[#00dfd8] group-hover:scale-110 transition-all duration-500 relative z-10" strokeWidth={1} />
                                </>
                            )}
                        </div>
                        
                        <div className="p-8 flex flex-col flex-grow">
                            <div className="flex justify-between items-start mb-6">
                                <span className="px-3.5 py-1.5 bg-[#1a1a1a] text-[#a1a1aa] group-hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest rounded-full border border-white/5 shadow-inner">
                                    {cert.date}
                                </span>
                                <a href={cert.link} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black text-white transition-all shadow-md">
                                    <ExternalLink size={14} />
                                </a>
                            </div>
                            <h3 className="text-[20px] font-bold text-white mb-2 leading-tight tracking-tight">{cert.title}</h3>
                            <h4 className="text-[13px] text-[#00dfd8] font-medium mb-5">{cert.issuer}</h4>
                            <p className="text-[#888] text-[14px] leading-relaxed mt-auto">
                                {cert.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
