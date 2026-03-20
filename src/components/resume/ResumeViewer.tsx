'use client';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';

export default function ResumeViewer() {
    return (
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-12">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
            >
                <h6 className="text-[11px] font-bold tracking-[0.2em] text-[#a1a1aa] uppercase mb-4">
                    CURRICULUM VITAE
                </h6>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-8">
                    Professional <span className="text-gradient">Resume.</span>
                </h2>
                
                <motion.a 
                    href="/gencv2.pdf" 
                    download="Zeeshan_Arif_Resume.pdf"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold tracking-wide shadow-[0_0_40px_-10px_rgba(0,223,216,0.6)] border border-white/20"
                >
                    <Download size={20} />
                    Download Resume (PDF)
                </motion.a>
                
                {/* <p className="text-[#555] text-[11px] mt-4 max-w-sm mx-auto">
                    Note: Please ensure your resume file is named <code className="bg-[#111] px-1 py-0.5 rounded text-[#a1a1aa]">resume.pdf</code> and placed in the <code className="bg-[#111] px-1 py-0.5 rounded text-[#a1a1aa]">public/</code> directory.
                </p> */}
            </motion.div>

            {/* Document Viewer Frame */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="w-full h-[85vh] min-h-[600px] bg-[#0a0a0a] rounded-[32px] border border-white/10 shadow-2xl overflow-hidden relative group"
            >
                {/* Top Browser-like Bar */}
                <div className="w-full h-10 bg-[#111] border-b border-white/5 flex items-center px-4 gap-2 absolute top-0 left-0 z-10">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    <div className="mx-auto flex items-center gap-2 text-[#555] text-xs font-mono">
                        <FileText size={12} /> gencv2.pdf
                    </div>
                </div>

                {/* PDF Object Map (pushed down to clear the bar) */}
                <div className="w-full h-full pt-10">
                    <object 
                        data="/gencv2.pdf#view=FitH&toolbar=0&navpanes=0" 
                        type="application/pdf" 
                        className="w-full h-full bg-[#161616]"
                    >
                        {/* Fallback if PDF cannot be rendered (e.g. strict mobile browsers or missing file) */}
                        <div className="flex flex-col items-center justify-center w-full h-full text-center p-8">
                            <FileText size={48} className="text-[#333] mb-4" />
                            <p className="text-[#a1a1aa] mb-4">No PDF viewer available or file not found.</p>
                            <a 
                                href="/gencv2.pdf" 
                                download="Zeeshan_Arif_Resume.pdf"
                                className="text-[#00dfd8] hover:underline"
                            >
                                Click here to download the file directly.
                            </a>
                        </div>
                    </object>
                </div>

                {/* Subtle sheen effect over the whole frame */}
                <div className="absolute inset-0 border border-white/5 rounded-[32px] pointer-events-none" />
            </motion.div>
        </div>
    );
}
