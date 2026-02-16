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
        "/images/pyrolysis/plastic/meth-1.jpeg",
        "/images/pyrolysis/plastic/meth-2.jpeg",
        "/images/pyrolysis/plastic/meth-3.jpeg",
        "/images/pyrolysis/plastic/meth-4.jpeg",
        "/images/pyrolysis/plastic/meth-5.jpeg",
        "/images/pyrolysis/plastic/meth-6.jpeg",
        "/images/pyrolysis/plastic/meth-7.jpeg",
        "/images/pyrolysis/plastic/meth-8.jpeg",
    ];

    const resultImages = [
        "/images/pyrolysis/plastic/res-1.jpg",
        "/images/pyrolysis/plastic/res-2.jpg",
        "/images/pyrolysis/plastic/res-3.png",
        "/images/pyrolysis/plastic/res-4.png",
        "/images/pyrolysis/plastic/res-5.png",
        "/images/pyrolysis/plastic/res-6.png",
        "/images/pyrolysis/plastic/res-7.png",
        "/images/pyrolysis/plastic/res-8.png",
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
                    This project focused on converting waste plastic into usable fuel through a controlled thermal process. It was carried out at Osu Beach in Accra with the aim of addressing two key challenges: plastic pollution along the coastline and limited access to affordable fuel for local fishermen.

                    The initiative was designed to demonstrate how waste plastic materials can be transformed into a valuable energy resource, while also educating members of the indigenous fishing community on sustainable waste management practices.                </p>
            </section>

            {/* Objectives */}
            <section className="mb-20 reveal">
                <h2 className="text-3xl font-bold mb-8 italic border-l-4 border-blue-500 pl-6">Objectives</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        "To reduce plastic waste pollution at Osu Beach",
                        "To train the local community on converting waste plastic into fuel",
                        "To provide a sustainable source of fuel for local fishermen",
                        "To demonstrate the potential of pyrolysis as a waste management solution"
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
                        src="/images/pyrolysis/plastic/general-setup.jpeg"
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
                    The project utilized collected waste plastics from the beach environment, a small-scale thermal conversion unit, heating equipment, and collection containers for the produced fuel. Basic monitoring tools were used to observe temperature and product yield.

                    All materials were selected to demonstrate a practical and replicable process suitable for community-level application.
                    Waste plastics gathered from the beach were sorted and prepared before undergoing a controlled heating process in the absence of oxygen. This thermal conversion process produced liquid fuel, combustible gases, and solid residue.

                    Community members were engaged during the demonstration phase, where they were educated on:

                    The environmental impact of plastic waste

                    The principles behind plastic-to-fuel conversion

                    Safe handling and potential applications of the produced fuel

                    The liquid fuel produced was tested for practical usability, particularly for small-scale marine applications such as canoe engines.                </p>

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
                    The project successfully demonstrated that waste plastics collected from Osu Beach can be converted into usable fuel. The produced liquid fuel showed potential as an alternative energy source for fuelling fishing canoes, reducing dependence on conventional fuels.

                    In addition to energy production, the initiative raised environmental awareness within the community and promoted responsible waste collection practices.

                    Key outcomes included:

                    Reduction of visible plastic waste along parts of the beach

                    Practical demonstration of fuel production from waste

                    Increased knowledge transfer to indigenous fishermen

                    Promotion of sustainable livelihood support                </p>
            </section>

            {/* Conclusion & Declaration */}
            <section className="mb-20 reveal p-12 rounded-[3.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                <h2 className="text-3xl font-bold mb-8 italic">Conclusion & Declaration</h2>
                <div className="space-y-6 text-white/60 leading-relaxed font-light italic">
                    <p>
                        This project demonstrated how waste plastics collected at Osu Beach can be converted into usable fuel to support local fishing activities while reducing environmental pollution. The initiative empowered indigenous community members with practical skills in plastic-to-fuel production.

                        The project was funded by the French Embassy, while training and capacity-building were carried out by my university, ensuring sustainable knowledge transfer and long-term community impact.                    </p>
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
                    href="/files/plastic-project-certificate.jpeg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 px-8 py-4 bg-blue-600/10 border border-blue-500/20 text-blue-400 rounded-2xl font-black hover:bg-blue-600 hover:text-white transition-all shadow-[0_0_20px_rgba(37,99,235,0.1)]"
                >
                    <Award size={20} /> VIEW CERTIFICATE
                </a>
            </div>
        </div>
    );
};

export default Plastic;
