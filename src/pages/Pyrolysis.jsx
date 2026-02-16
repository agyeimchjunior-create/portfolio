import React, { useEffect, useRef } from 'react';
import { FlaskConical, Thermometer, Droplets, Factory, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import Footer from '../components/Footer';

const Pyrolysis = () => {
    const sectionRef = useRef(null);

    const researchAreas = [
        {
            title: "Thermal Degradation",
            description: "Studying the decomposition of polymers under controlled temperature environments without oxygen.",
            icon: Thermometer,
            color: "text-orange-500"
        },
        {
            title: "Catalytic Conversion",
            description: "Enhancing bio-oil quality through specialized catalysts for better fuel properties.",
            icon: Factory,
            color: "text-blue-500"
        },
        {
            title: "Bio-oil Refining",
            description: "Process engineering for upgrading pyrolysis oil into sustainable transport fuels.",
            icon: Droplets,
            color: "text-emerald-500"
        },
        {
            title: "Syngas Production",
            description: "Optimization of gas yields for energy generation and chemical synthesis.",
            icon: FlaskConical,
            color: "text-purple-500"
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".pyro-item", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="min-h-screen pt-40 overflow-hidden bg-[#050505]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <div className="mb-20 pyro-item">
                    <span className="text-xs uppercase tracking-[0.5em] text-white/40 font-bold mb-4 block text-white/40">Scientific Portfolio</span>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 italic text-white">
                        PYROLYSIS <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">ENGINEERING</span>
                    </h1>
                    <p className="text-xl text-white/50 max-w-2xl font-light leading-relaxed">
                        Exploring the intersection of chemical engineering and sustainable energy through thermal conversion technologies.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 pyro-item text-white">
                    {researchAreas.map((area, i) => (
                        <div key={i} className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-500 group">
                            <area.icon size={40} className={`mb-6 ${area.color} group-hover:scale-110 transition-transform`} />
                            <h3 className="text-2xl font-bold mb-4">{area.title}</h3>
                            <p className="text-white/40 font-light leading-relaxed">{area.description}</p>
                        </div>
                    ))}
                </div>

                <div className="pyro-item mb-12">
                    <h2 className="text-4xl font-bold mb-12 tracking-tight italic text-white">Current Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Project 1: Waste Tire */}
                        <Link to="/pyrolysis/tire" className="group relative p-10 rounded-[3rem] bg-white/[0.04] border border-white/10 hover:border-orange-500/30 transition-all duration-500 overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-all duration-700 group-hover:scale-110 group-hover:-rotate-12">
                                <Factory size={150} />
                            </div>
                            <div className="relative z-10">
                                <div className="inline-block px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6 font-mono text-[10px] text-orange-500 uppercase tracking-widest font-bold">In Progress</div>
                                <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-orange-500 transition-colors">Waste Tire Pyrolysis</h3>
                                <p className="text-white/40 mb-8 leading-relaxed font-light text-lg">
                                    Investigation of thermal decomposition of scrap tires for high-yield bio-oil extraction and carbon black recovery.
                                </p>
                                <span className="inline-flex items-center gap-3 text-white font-black group-hover:gap-5 transition-all italic underline underline-offset-[12px] decoration-white/10 group-hover:decoration-orange-500/40">
                                    EXPLORE PROJECT <ArrowRight size={20} />
                                </span>
                            </div>
                        </Link>

                        {/* Project 2: Plastic Pyrolysis */}
                        <Link to="/pyrolysis/plastic" className="group relative p-10 rounded-[3rem] bg-white/[0.04] border border-white/10 hover:border-blue-500/30 transition-all duration-500 overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-all duration-700 group-hover:scale-110 group-hover:rotate-12">
                                <FlaskConical size={150} />
                            </div>
                            <div className="relative z-10">
                                <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 font-mono text-[10px] text-blue-500 uppercase tracking-widest font-bold">Research Phase</div>
                                <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-blue-500 transition-colors">Plastic Waste-to-Fuel</h3>
                                <p className="text-white/40 mb-8 leading-relaxed font-light text-lg">
                                    Advanced catalytic pyrolysis for converting municipal plastic waste into high-grade liquid hydrocarbons and diesel.
                                </p>
                                <span className="inline-flex items-center gap-3 text-white font-black group-hover:gap-5 transition-all italic underline underline-offset-[12px] decoration-white/10 group-hover:decoration-blue-500/40">
                                    EXPLORE PROJECT <ArrowRight size={20} />
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Pyrolysis;
