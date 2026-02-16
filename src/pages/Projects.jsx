import React, { useEffect, useRef } from 'react';
import { Code2, Flame, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import Footer from '../components/Footer';

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
            gsap.fromTo(".category-card",
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.3,
                    ease: "power4.out",
                    delay: 0.2,
                    clearProps: "all"
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const handleFrontendClick = () => {
        navigate('/');
        setTimeout(() => {
            const element = document.getElementById('projects-grid');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <div ref={sectionRef} className="min-h-screen pt-40 overflow-hidden bg-[#050505]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <div className="text-center mb-24 header-item">
                    <span className="text-xs uppercase tracking-[0.5em] text-white/40 font-bold mb-4 block">My Work</span>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 italic text-white">
                        SELECT <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">PROJECTS</span>
                    </h1>
                    <p className="text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
                        A dual-disciplinary showcase of digital engineering and chemical research.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    {/* Frontend Category */}
                    <div
                        onClick={handleFrontendClick}
                        className="category-card group cursor-pointer relative p-12 rounded-[3.5rem] bg-white/[0.07] backdrop-blur-xl border border-white/20 hover:border-white/40 transition-all duration-700 overflow-hidden shadow-2xl"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-all duration-700 group-hover:scale-110 group-hover:rotate-12">
                            <Code2 size={150} />
                        </div>
                        <div className="relative z-10 text-white">
                            <div className="w-16 h-16 rounded-2xl bg-white text-black flex items-center justify-center mb-8 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-500">
                                <Code2 size={32} />
                            </div>
                            <h2 className="text-4xl font-bold mb-6 tracking-tighter italic group-hover:translate-x-2 transition-transform duration-500">Frontend Development</h2>
                            <p className="text-white/70 text-lg mb-10 leading-relaxed font-light max-w-md">
                                Creative user interfaces, complex dashboards, and high-performance React applications built with modern tools.
                            </p>
                            <div className="flex items-center gap-4 font-black group-hover:gap-6 transition-all italic underline underline-offset-8 decoration-white/20 group-hover:decoration-white/60">
                                VIEW GALLERY <ArrowRight size={20} />
                            </div>
                        </div>
                    </div>

                    {/* Pyrolysis Category */}
                    <Link
                        to="/pyrolysis"
                        className="category-card group relative cursor-pointer p-12 rounded-[3.5rem] 
                    bg-white/15 backdrop-blur-xl 
                    border border-white/20 hover:border-white/40 
                    transition-all duration-700 
                    shadow-2xl"
                    >
                        <div className="absolute inset-0 z-0 rounded-[3.5rem] bg-gradient-to-br from-orange-500/10 to-transparent pointer-events-none"></div>
                        <div className="absolute inset-0 z-0 rounded-[3.5rem] bg-gradient-to-br from-orange-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                        <div className="absolute top-0 right-0 p-12 z-0 opacity-10 group-hover:opacity-20 transition-all duration-700 group-hover:scale-110 group-hover:-rotate-12 pointer-events-none">
                            <Flame size={150} />
                        </div>

                        <div className="relative z-20 text-white">
                            <div className="w-16 h-16 rounded-2xl bg-orange-500 text-black flex items-center justify-center mb-8 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all duration-500">
                                <Flame size={32} />
                            </div>
                            <h2 className="text-4xl font-bold mb-6 tracking-tighter italic group-hover:translate-x-2 transition-transform duration-500">Pyrolysis Research</h2>
                            <p className="text-white/80 text-lg mb-10 leading-relaxed font-light max-w-md">
                                Scientific research on thermal degradation, plastic-to-fuel conversion, and sustainable chemical engineering.
                            </p>
                            <div className="flex items-center gap-4 font-black group-hover:gap-6 transition-all italic underline underline-offset-8 decoration-white/20 group-hover:decoration-orange-500/60">
                                EXPLORE RESEARCH <ArrowRight size={20} />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Projects;
