import React, { useEffect, useRef } from 'react';
import { FlaskConical, Thermometer, Droplets, Factory, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

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
        <div ref={sectionRef} className="min-h-screen pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="mb-20 pyro-item">
                <span className="text-xs uppercase tracking-[0.5em] text-white/40 font-bold mb-4 block">Scientific Portfolio</span>
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 italic">
                    PYROLYSIS <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">ENGINEERING</span>
                </h1>
                <p className="text-xl text-white/50 max-w-2xl font-light leading-relaxed">
                    Exploring the intersection of chemical engineering and sustainable energy through thermal conversion technologies.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 pyro-item">
                {researchAreas.map((area, i) => (
                    <div key={i} className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-500 group">
                        <area.icon size={40} className={`mb-6 ${area.color} group-hover:scale-110 transition-transform`} />
                        <h3 className="text-2xl font-bold mb-4">{area.title}</h3>
                        <p className="text-white/40 font-light leading-relaxed">{area.description}</p>
                    </div>
                ))}
            </div>

            <div className="pyro-item mb-12">
                <h2 className="text-4xl font-bold mb-12 tracking-tight italic">Current Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Project 1: Waste Tire */}
                    <Link to="/pyrolysis/tire" className="group relative p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Factory size={120} />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-4 text-orange-500">Waste Tire Pyrolysis</h3>
                            <p className="text-white/50 mb-6 leading-relaxed">
                                Investigation of thermal decomposition of scrap tires for high-yield bio-oil extraction and carbon black recovery.
                            </p>
                            <span className="inline-flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-all italic underline underline-offset-8 decoration-white/10">
                                VIEW PROJECT <ArrowRight size={18} />
                            </span>
                        </div>
                    </Link>

                    {/* Project 2: Plastic Pyrolysis */}
                    <Link to="/pyrolysis/plastic" className="group relative p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <FlaskConical size={120} />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-4 text-blue-500">Plastic Waste-to-Fuel</h3>
                            <p className="text-white/50 mb-6 leading-relaxed">
                                Advanced catalytic pyrolysis for converting municipal plastic waste into high-grade liquid hydrocarbons and diesel.
                            </p>
                            <span className="inline-flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-all italic underline underline-offset-8 decoration-white/10">
                                VIEW PROJECT <ArrowRight size={18} />
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Pyrolysis;
