import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectsData as projects } from '../data/projectsData';
import Marquee from '../components/Marquee';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const ScrambleText = ({ text }) => {
    const [display, setDisplay] = useState('');
    const chars = 'ABCDEFGHIJKLMNPRSTUVWXYZ0123456789';

    useEffect(() => {
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplay(
                text
                    .split('')
                    .map((char, index) => {
                        if (char === ' ') return ' ';
                        if (index < iteration) return text[index];
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join('')
            );

            if (iteration >= text.length) clearInterval(interval);
            iteration += 1 / 3;
        }, 30);
        return () => clearInterval(interval);
    }, [text]);

    return <span className="font-mono">{display}</span>;
};

const Home = () => {
    const gridRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray('.project-card').forEach((card, i) => {
                const isLeft = i % 2 === 0;
                gsap.from(card, {
                    x: isLeft ? -100 : 100,
                    opacity: 0,
                    duration: 1.2,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=50",
                        toggleActions: "play none none none"
                    }
                });
            });
        }, gridRef);
        return () => ctx.revert();
    }, []);

    return (
        <div className="relative min-h-screen overflow-x-hidden bg-[#050505]">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
                {/* Hero Section */}
                <section className="text-center mb-24 relative py-16 px-6 rounded-[3rem] overflow-hidden border border-white/5">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/images/hero-img.jpg"
                            alt="Coding Background"
                            className="w-full h-full object-cover opacity-20 transition-transform duration-[10s] hover:scale-110"
                        />
                    </div>

                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/5 bg-white/5 backdrop-blur-md relative z-10">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-white/60 font-medium">Available for freelance</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none relative z-10 text-white">
                        <ScrambleText text="Agyei Michael Junior" />
                    </h1>
                    <p className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto font-light leading-relaxed mb-12 relative z-10">
                        Material Science Engineer and Frontend Developer passionate about sustainability and innovation.
                    </p>

                    <div className="flex flex-col items-center gap-6 relative z-10">
                        <div className="flex justify-center gap-4">
                            <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/20 self-center"></div>
                            <span className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold">My Portfolio 2026</span>
                            <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/20 self-center"></div>
                        </div>

                        <div className="flex flex-col items-center gap-2 text-white/80 animate-bounce mt-8 relative z-10">
                            <span className="text-[10px] uppercase tracking-widest font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">Scroll</span>
                            <div className="w-px h-12 bg-gradient-to-b from-white to-transparent shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
                        </div>
                    </div>
                </section>

                {/* Projects Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 header-item">
                    <div className="max-w-xl">
                        <h2 className="text-4xl font-bold mb-4 tracking-tight text-white">Crafting Web Excellence</h2>
                        <p className="text-white/40 leading-relaxed">A showcase of my latest frontend projects, featuring dynamic web interfaces, interactive designs, and visually engaging digital experiences.</p>
                    </div>
                    <div className="text-right">
                        <span className="block text-4xl font-black text-white/10 italic leading-none">05 PROJECTS</span>
                    </div>
                </div>

                {/* Projects Grid */}
                <div id="projects-grid" ref={gridRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card group relative">
                            <div className="relative h-full rounded-[2rem] overflow-hidden bg-[#0A0A0A] border border-white/5 transition-all duration-700 group-hover:border-white/20 shadow-2xl">
                                {/* Project Image */}
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                                </div>

                                {/* Project Content */}
                                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 pointer-events-none">
                                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                                        <div className="space-y-4 max-w-2xl transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                                            <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                                                <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold">
                                                    {project.category}
                                                </span>
                                            </div>
                                            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tighter">
                                                {project.title}
                                            </h3>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-4 pointer-events-auto opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                            <a
                                                href={project.previewUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-xl"
                                            >
                                                PREVIEW <ExternalLink size={16} />
                                            </a>
                                            <Link
                                                to={`/project/${project.id}`}
                                                className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/20 backdrop-blur-xl text-white rounded-full font-bold text-sm hover:bg-white/10 transition-all overflow-hidden relative group/btn"
                                            >
                                                <span className="relative z-10">DETAILS</span>
                                                <Info size={16} className="relative z-10" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Reusable Marquee and Footer */}
            <Marquee />
            <Footer />
        </div>
    );
};

export default Home;
