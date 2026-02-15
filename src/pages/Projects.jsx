import React, { useEffect, useRef } from 'react';
import { Code2, Flame, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';

const Projects = () => {
    const sectionRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".header-item", {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });
            gsap.from(".category-card", {
                y: 100,
                opacity: 0,
                duration: 1.2,
                stagger: 0.3,
                ease: "power4.out",
                delay: 0.2
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const handleFrontendClick = () => {
        navigate('/');
        // Wait for navigation then scroll
        setTimeout(() => {
            const element = document.getElementById('projects-grid');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <div ref={sectionRef} className="min-h-screen pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-24 header-item">
                <span className="text-xs uppercase tracking-[0.5em] text-white/40 font-bold mb-4 block">My Work</span>
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 italic">
                    SELECT <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">PROJECTS</span>
                </h1>
                <p className="text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
                    A dual-disciplinary showcase of digital engineering and chemical research.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Frontend Category */}
                <div
                    onClick={handleFrontendClick}
                    className="category-card group cursor-pointer relative p-12 rounded-[3.5rem] bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-700 overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Code2 size={150} />
                    </div>
                    <div className="relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-white text-black flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                            <Code2 size={32} />
                        </div>
                        <h2 className="text-4xl font-bold mb-6 tracking-tighter italic">Frontend Development</h2>
                        <p className="text-white/40 text-lg mb-10 leading-relaxed font-light">
                            Creative user interfaces, complex dashboards, and high-performance React applications built with modern tools.
                        </p>
                        <div className="flex items-center gap-4 text-white font-bold group-hover:gap-6 transition-all italic">
                            VIEW GALLERY <ArrowRight size={20} />
                        </div>
                    </div>
                </div>

                {/* Pyrolysis Category */}
                <Link
                    to="/pyrolysis"
                    className="category-card group relative p-12 rounded-[3.5rem] bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-700 overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Flame size={150} />
                    </div>
                    <div className="relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-white text-black flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                            <Flame size={32} />
                        </div>
                        <h2 className="text-4xl font-bold mb-6 tracking-tighter italic">Pyrolysis Research</h2>
                        <p className="text-white/40 text-lg mb-10 leading-relaxed font-light">
                            Scientific research on thermal degradation, plastic-to-fuel conversion, and sustainable chemical engineering.
                        </p>
                        <div className="flex items-center gap-4 text-white font-bold group-hover:gap-6 transition-all italic">
                            EXPLORE RESEARCH <ArrowRight size={20} />
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Projects;
