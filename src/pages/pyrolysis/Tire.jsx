import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowLeft, FileText, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Tire = () => {
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
        "/images/pyrolysis/tire/meth-1.jpg",
        "/images/pyrolysis/tire/meth-2.jpg",
        "/images/pyrolysis/tire/meth-3.jpg",
        "/images/pyrolysis/tire/meth-4.jpg",
        "/images/pyrolysis/tire/meth-5.jpg",
        "/images/pyrolysis/tire/meth-6.jpg",
        "/images/pyrolysis/tire/meth-7.jpg",
        "/images/pyrolysis/tire/meth-8.jpg",
    ];

    const resultImages = [
        "/images/pyrolysis/tire/res-1.jpg",
        "/images/pyrolysis/tire/res-2.jpg",
        "/images/pyrolysis/tire/res-3.png",
        "/images/pyrolysis/tire/res-4.jpg",
        "/images/pyrolysis/tire/res-5.jpg",
        "/images/pyrolysis/tire/res-6.jpg",
        "/images/pyrolysis/tire/res-7.png",
        "/images/pyrolysis/tire/res-8.jpg",
        "/images/pyrolysis/tire/res-9.jpg",
        "/images/pyrolysis/tire/res-10.jpg",
    ];

    return (
        <div ref={sectionRef} className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto font-inter text-white">
            {/* Header */}
            <div className="mb-16 reveal">
                <Link to="/pyrolysis" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-8 group">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Research
                </Link>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 italic">
                    WASTE TIRE <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">PYROLYSIS</span>
                </h1>
                <div className="flex flex-wrap gap-4 items-center text-sm uppercase tracking-widest text-white/60 font-bold">
                    <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5">Research Project</span>
                    <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5">2026</span>
                </div>
            </div>

            {/* Project Overview */}
            <section className="mb-20 reveal">
                <h2 className="text-3xl font-bold mb-8 italic border-l-4 border-orange-500 pl-6">Project Overview</h2>
                <div className="text-lg text-white/60 leading-relaxed font-light space-y-4">
                    <p>
                        This project investigates the conversion of waste tires into useful products through the process of pyrolysis. Waste tires pose significant environmental challenges due to their non-biodegradable nature. The study explores pyrolysis as a sustainable waste management solution that produces valuable by-products such as pyrolysis oil, carbon black, and combustible gases.
                    </p>
                    <p>
                        The research focuses on process efficiency, product yield, and environmental impact.
                    </p>
                </div>
            </section>

            {/* Objectives */}
            <section className="mb-20 reveal">
                <h2 className="text-3xl font-bold mb-8 italic border-l-4 border-orange-500 pl-6">Objectives</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        "To convert waste tires into useful products using pyrolysis",
                        "To analyze the yield of pyrolysis oil, gas, and char",
                        "To evaluate the environmental and economic potential of the process",
                        "To minimize environmental emissions during the conversion process."
                    ].map((obj, i) => (
                        <div key={i} className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                            <CheckCircle2 className="text-orange-500 shrink-0" size={24} />
                            <p className="text-white/80 font-medium">{obj}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* General Setup */}
            <section className="mb-20 reveal">
                <h2 className="text-3xl font-bold mb-8 italic border-l-4 border-orange-500 pl-6">General Experimental Setup</h2>
                <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 group">
                    <div className="absolute inset-0 flex items-center justify-center text-white/10 italic text-sm uppercase tracking-widest text-center px-4">
                        General Experimental Setup
                    </div>
                    <img
                        src="/images/pyrolysis/tire/general-setup.png"
                        alt="General Experimental Setup"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        onError={(e) => e.target.style.display = 'none'}
                    />
                </div>
            </section>

            {/* Materials and Methodology */}
            <section className="mb-20 reveal">
                <h2 className="text-3xl font-bold mb-8 italic border-l-4 border-orange-500 pl-6">Materials and Methodology</h2>
                <div className="text-lg text-white/60 leading-relaxed font-light mb-12 space-y-6">
                    <p>
                        The materials used for this experiment included waste tire samples, a laboratory-scale pyrolysis reactor, a heating system, a condenser unit, collection containers, and measuring instruments such as thermometers and weighing scales.
                    </p>
                    <p>
                        The setup was designed to allow controlled heating in the absence of oxygen to ensure proper thermal decomposition.
                        The waste tires were first cleaned and cut into smaller pieces to increase surface area. The prepared samples were then placed inside the pyrolysis reactor.
                    </p>
                    <p>
                        The reactor was heated gradually to the required temperature in an oxygen-free environment. During heating:
                    </p>
                    <ul className="list-disc pl-8 space-y-2">
                        <li>Vapors produced were passed through a condenser</li>
                        <li>Liquid oil was collected in a container</li>
                        <li>Non-condensable gases were separated</li>
                        <li>Solid residue (char) remained in the reactor</li>
                    </ul>
                    <p>
                        The experiment monitored temperature, reaction time, and product yield for analysis.
                    </p>
                </div>

                {/* 8 Methodology Images */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {methodologyImages.map((src, i) => (
                        <div key={i} className="relative group aspect-square rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                            <div className="absolute top-4 left-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-orange-500 text-black font-black text-xs">
                                0{i + 1}
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center text-white/10 italic text-[10px] uppercase tracking-widest text-center px-4">
                                Step {i + 1}: Methodology Image
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
                <h2 className="text-3xl font-bold mb-8 italic border-l-4 border-orange-500 pl-6">Project Results</h2>
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
                    The experiment successfully produced three major products:

                    Pyrolysis oil – a dark liquid with potential fuel applications

                    Carbon black (char) – solid residue usable in industrial applications

                    Combustible gases – which can potentially be reused to fuel the system

                    The results showed that temperature and reaction time significantly affected product yield. Higher temperatures generally increased oil production while reducing solid residue.

                    The findings demonstrate that pyrolysis is a viable method for converting waste tires into valuable resources
                </p>
            </section>

            {/* Conclusion & Declaration */}
            <section className="mb-20 reveal p-12 rounded-[3.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                <h2 className="text-3xl font-bold mb-8 italic">Conclusion & Declaration</h2>
                <div className="space-y-6 text-white/60 leading-relaxed font-light italic">
                    <p>
                        The study confirms that pyrolysis offers an environmentally sustainable and economically promising solution for managing waste tires. By converting non-biodegradable waste into usable fuel and industrial materials, the process supports waste reduction and energy recovery efforts.

                        This research contributes to sustainable waste management practices and circular economy initiatives.
                    </p>
                    <div className="pt-8 border-t border-white/5">
                        <p className="text-sm uppercase tracking-widest font-bold text-white mb-2">Declaration</p>
                        <p className="text-xs">
                            The Pyrolysis of Waste Tires project was conducted by a team of four undergraduate students. As a key team member, I actively participated in the experimental setup, data analysis, and interpretation of results. This collaborative experience strengthened my research, teamwork, and problem-solving skills.                        </p>
                    </div>
                </div>
            </section>

            {/* Downloads */}
            <div className="reveal flex flex-wrap gap-6 pt-12 border-t border-white/5">
                <a
                    href="/files/tire-pyrolysis-article.pdf"
                    download
                    className="flex items-center gap-4 px-8 py-4 bg-white text-black rounded-2xl font-black hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                >
                    <FileText size={20} /> DOWNLOAD FULL ARTICLE
                </a>
            </div>
        </div>
    );
};

export default Tire;
