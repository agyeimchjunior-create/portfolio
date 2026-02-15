import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowLeft, FileText, CheckCircle2, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Plastic = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const ctx = gsap.context(() => {
            gsap.from(".reveal", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const methodologyImages = [
        "/images/pyrolysis/plastic/meth-1.jpg",
        "/images/pyrolysis/plastic/meth-2.jpg",
        "/images/pyrolysis/plastic/meth-3.jpg",
        "/images/pyrolysis/plastic/meth-4.jpg",
        "/images/pyrolysis/plastic/meth-5.jpg",
        "/images/pyrolysis/plastic/meth-6.jpg",
        "/images/pyrolysis/plastic/meth-7.jpg",
        "/images/pyrolysis/plastic/meth-8.jpg",
    ];

    const resultImages = [
        "/images/pyrolysis/plastic/res-1.jpg",
        "/images/pyrolysis/plastic/res-2.jpg",
        "/images/pyrolysis/plastic/res-3.jpg",
        "/images/pyrolysis/plastic/res-4.jpg",
        "/images/pyrolysis/plastic/res-5.jpg",
        "/images/pyrolysis/plastic/res-6.jpg",
        "/images/pyrolysis/plastic/res-7.jpg",
        "/images/pyrolysis/plastic/res-8.jpg",
        "/images/pyrolysis/plastic/res-9.jpg",
        "/images/pyrolysis/plastic/res-10.jpg",
    ];

    return (
        <div ref={sectionRef} className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto font-inter text-white">
            {/* Header */}
            <div className="mb-16 reveal">
                <Link to="/pyrolysis" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-8 group">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Research
                </Link>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 italic">
                    PLASTIC WASTE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">TO FUEL</span>
                </h1>
                <div className="flex flex-wrap gap-4 items-center text-sm uppercase tracking-widest text-white/60 font-bold">
                    <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5">Engineering Research</span>
                    <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5">2026</span>
                </div>
            </div>

            {/* Project Overview */}
            <section className="mb-20 reveal">
                <h2 className="text-3xl font-bold mb-8 italic border-l-4 border-blue-500 pl-6">Project Overview</h2>
                <p className="text-lg text-white/60 leading-relaxed font-light">
                    Municipal plastic waste is one of the most persistent pollutants in the modern world. This project explores advanced catalytic pyrolysis to transform varied plastic polymers—specifically PE, PP, and PS—into high-quality liquid fuel blends. By utilizing specific catalysts, we aim to lower the required reaction temperature and improve the octane rating of the resulting fuel.
                </p>
            </section>

            {/* Objectives */}
            <section className="mb-20 reveal">
                <h2 className="text-3xl font-bold mb-8 italic border-l-4 border-blue-500 pl-6">Objectives</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        "Standardize the catalytic process for diverse plastic feedstocks.",
                        "Maximize the conversion efficiency into high-grade diesel and kerosene equivalents.",
                        "Reduce the solid residue (char) to less than 5% of initial weight.",
                        "Analyze the thermodynamic profile of the catalytic reaction."
                    ].map((obj, i) => (
                        <div key={i} className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                            <CheckCircle2 className="text-blue-500 shrink-0" size={24} />
                            <p className="text-white/80 font-medium">{obj}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* General Setup */}
            <section className="mb-20 reveal">
                <h2 className="text-3xl font-bold mb-8 italic border-l-4 border-blue-500 pl-6">General Experimental Setup</h2>
                <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 group">
                    <div className="absolute inset-0 flex items-center justify-center text-white/10 italic text-sm uppercase tracking-widest text-center px-4">
                        General Experimental Setup
                    </div>
                    <img
                        src="/images/pyrolysis/plastic/general-setup.jpg"
                        alt="General Experimental Setup"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        onError={(e) => e.target.style.display = 'none'}
                    />
                </div>
            </section>

            {/* Materials and Methodology */}
            <section className="mb-20 reveal">
                <h2 className="text-3xl font-bold mb-8 italic border-l-4 border-blue-500 pl-6">Materials and Methodology</h2>
                <p className="text-lg text-white/60 leading-relaxed font-light mb-12">
                    The research utilized a semi-batch reactor coupled with a multi-stage condenser. The methodology involved shredded plastic waste, alumina-silica catalysts, and a precisely programmed dual-zone heating mantle to ensure uniform thermal distribution.
                </p>

                {/* 8 Methodology Images */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {methodologyImages.map((src, i) => (
                        <div key={i} className="relative group aspect-square rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                            <div className="absolute top-4 left-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-black font-black text-xs">
                                0{i + 1}
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center text-white/10 italic text-[10px] uppercase tracking-widest text-center px-4">
                                Step {i + 1}: Process Documentation
                            </div>
                            <img
                                src={src}
                                alt={`Methodology Step ${i + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                onError={(e) => e.target.style.display = 'none'}
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Results */}
            <section className="mb-20 reveal">
                <h2 className="text-3xl font-bold mb-8 italic border-l-4 border-blue-500 pl-6">Project Results</h2>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                    {resultImages.map((src, i) => (
                        <div key={i} className="aspect-square rounded-2xl overflow-hidden border border-white/10 bg-white/5 relative group">
                            <div className="absolute inset-0 flex items-center justify-center text-white/10 italic text-[10px] uppercase tracking-widest text-center px-4">
                                Result Analysis {i + 1}
                            </div>
                            <img
                                src={src}
                                alt={`Result ${i + 1}`}
                                className="w-full h-full object-cover transition-opacity"
                                onError={(e) => e.target.style.display = 'none'}
                            />
                        </div>
                    ))}
                </div>
                <p className="text-lg text-white/60 leading-relaxed font-light mt-8">
                    The catalytic conversion provided a superior product compared to traditional thermal pyrolysis. The resulting liquid displayed a caloric value of 44 MJ/kg, highly comparable to industrial-grade diesel. GC-MS analysis confirmed a high concentration of C8-C20 hydrocarbons.
                </p>
            </section>

            {/* Conclusion & Declaration */}
            <section className="mb-20 reveal p-12 rounded-[3.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                <h2 className="text-3xl font-bold mb-8 italic">Conclusion & Declaration</h2>
                <div className="space-y-6 text-white/60 leading-relaxed font-light italic">
                    <p>
                        "This study demonstrates that the integration of catalysis in plastic pyrolysis significantly enhances fuel quality and economic viability. It provides a scalable solution to the global plastic pollution crisis while generating renewable energy resources."
                    </p>
                    <div className="pt-8 border-t border-white/5">
                        <p className="text-sm uppercase tracking-widest font-bold text-white mb-2">Declaration</p>
                        <p className="text-xs">
                            I hereby declare that this project is a result of my original work and that all research was conducted following strict laboratory safety protocols and environmental regulations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Downloads */}
            <div className="reveal flex flex-wrap gap-6 pt-12 border-t border-white/5">
                <a
                    href="/files/plastic-to-fuel-article.pdf"
                    download
                    className="flex items-center gap-4 px-8 py-4 bg-white text-black rounded-2xl font-black hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                >
                    <FileText size={20} /> DOWNLOAD FULL ARTICLE
                </a>
                <a
                    href="/files/plastic-project-certificate.pdf"
                    download
                    className="flex items-center gap-4 px-8 py-4 bg-blue-600/10 border border-blue-500/20 text-blue-400 rounded-2xl font-black hover:bg-blue-600 hover:text-white transition-all shadow-[0_0_20px_rgba(37,99,235,0.1)]"
                >
                    <Award size={20} /> DOWNLOAD CERTIFICATE
                </a>
            </div>
        </div>
    );
};

export default Plastic;
