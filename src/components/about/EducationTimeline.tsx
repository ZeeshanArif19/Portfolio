'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const educationData = [
    {
        year: '2023 - 2027',
        degree: 'Bachelor of Technology in Computer Science and engineering',
        CGPA: '8.6',
        institution: 'Lovely Professional University',
        description: 'Focused on Data Structures, Algorithms, Full-Stack Web Development, and Cloud Architecture. Consistently ranked in the top percentile, actively participating in advanced hackathons and research initiatives.'
    },
    {
        year: '2021 - 2022',
        degree: 'Intermediate',
        institution: 'The Assembly of God Church School',
        Percentage: '83.8',
        description: 'Majored in Physics, Chemistry, and Mathematics with an intense focus on computational logic. Graduated with honors and highest distinction across all technical electives.'
    },
    {
        year: '2019 - 2020',
        degree: 'Matriculation',
        institution: 'The Assembly of God Church School',
        Percentage: '80.8',
        description: 'Built a strong foundation in core subjects. Developed an early passion for technology by leading the local computer club and participating in national coding olympiads.'
    }
];

export default function EducationTimeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section ref={containerRef} className="py-24 relative max-w-4xl mx-auto w-full px-6 md:px-12 mt-12 bg-[#090909] rounded-[48px] border border-white/5 mb-32 shadow-2xl">
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-24"
            >
                <h6 className="text-[11px] font-bold tracking-[0.2em] text-[#a1a1aa] uppercase mb-4">
                    ACADEMIC BACKGROUND
                </h6>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                    Education <span className="text-gradient">Timeline</span>
                </h2>
            </motion.div>

            <div className="relative pl-6 md:pl-0 max-w-2xl mx-auto">
                {/* Background Line */}
                <div className="absolute left-[24px] md:left-[39px] top-4 bottom-12 w-[2px] bg-white/10 rounded-full" />
                
                {/* Scroll Indicator Line */}
                <motion.div 
                    className="absolute left-[24px] md:left-[39px] top-4 bottom-12 w-[2px] bg-gradient-to-b from-[#00dfd8] to-[#007cf0] rounded-full origin-top"
                    style={{ scaleY }}
                />

                <div className="flex flex-col gap-16 relative z-10">
                    {educationData.map((item, i) => (
                        <div key={i} className="relative pl-12 md:pl-28 flex flex-col group">
                            
                            {/* Marker Node */}
                            <div className="absolute left-0 md:left-[24px] top-2 w-8 h-8 md:w-8 md:h-8 rounded-full bg-[#111] border-[2px] border-white/20 flex items-center justify-center z-10 transition-colors duration-300 group-hover:border-[#00dfd8] shadow-lg">
                                <motion.div 
                                    className="w-2 h-2 bg-white/50 rounded-full group-hover:bg-[#00dfd8] transition-all duration-300" 
                                    whileHover={{ scale: 1.5 }}
                                />
                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-[#111] border border-white/5 p-8 rounded-[24px] hover:border-white/10 transition-colors relative shadow-xl"
                            >
                                <span className="px-3.5 py-1 bg-[#1a1a1a] text-[#a1a1aa] group-hover:text-[#00dfd8] transition-colors text-[10px] font-bold uppercase tracking-widest rounded-full mb-5 inline-block border border-white/5">
                                    {item.year}
                                </span>
                                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight leading-snug">{item.degree}</h3>
                                <h4 className="text-[16px] text-[#00dfd8] mb-3 font-medium">{item.institution}</h4>
                                
                                {(item.CGPA || item.Percentage) && (
                                    <div className="mb-5 inline-flex items-center px-3 py-1 rounded-md bg-white/5 border border-white/10 w-max">
                                        <span className="text-[12px] font-bold text-white tracking-wide">
                                            {item.CGPA ? `CGPA: ${item.CGPA}` : `Score: ${item.Percentage}%`}
                                        </span>
                                    </div>
                                )}

                                <p className="text-[#888] leading-[1.8] text-[15px]">
                                    {item.description}
                                </p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
