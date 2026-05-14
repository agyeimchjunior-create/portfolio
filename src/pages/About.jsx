import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const About = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(imageRef.current, {
                x: -100,
                opacity: 0,
                duration: 1.5,
                ease: "power4.out"
            });
            gsap.from(textRef.current, {
                x: 100,
                opacity: 0,
                duration: 1.5,
                ease: "power4.out",
                delay: 0.2
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="relative min-h-screen pt-32 overflow-hidden">
            {/* Background Decorations */}
            <div className="blob absolute top-1/4 -left-20 w-80 h-80 bg-accent-primary/5 rounded-full blur-[100px] pointer-events-none transition-all duration-500"></div>
            <div className="blob absolute bottom-1/4 -right-20 w-80 h-80 bg-accent-primary/5 rounded-full blur-[100px] pointer-events-none transition-all duration-500"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Image Side */}
                    <div ref={imageRef} className="relative group">
                        <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-border-main bg-card-main backdrop-blur-sm shadow-shadow-main">
                            <img
                                src="/images/me.jpg"
                                alt="Agyei Michael Junior"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                            />
                            <div className="absolute inset-0 border-[20px] border-bg-main/20 pointer-events-none"></div>
                        </div>

                        <div className="absolute -bottom-6 -right-6 bg-accent-primary text-bg-main px-8 py-4 rounded-2xl shadow-shadow-main transform rotate-3 font-bold group-hover:rotate-0 transition-transform duration-500">
                            <span className="text-sm uppercase tracking-widest leading-none">Creative Developer</span>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div ref={textRef} className="space-y-8">
                        <div>
                            <span className="text-xs uppercase tracking-[0.5em] text-accent-primary font-bold mb-4 block">About Me</span>
                            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-tight text-text-main">
                                Crafting digital <br />
                                <span className="text-accent-primary">masterpieces.</span>
                            </h1>
                        </div>

                        <div className="space-y-6 text-lg text-text-dim leading-relaxed font-light">
                            <p>
                                Hello! I'm <span className="text-text-main font-medium">Agyei Michael Junior</span>, a graduate Material Science Engineer with a strong academic foundation in polymers, materials processing, and sustainable environmental practices. My training has equipped me with the ability to analyze material behavior, develop innovative solutions, and apply scientific principles to address real-world challenges — particularly in waste management and resource recovery.
                            </p>
                            <p>
                                With a deep interest in sustainability, I am passionate about advancing environmentally responsible technologies, especially in areas such as polymer recycling, waste-to-energy conversion, and circular economy initiatives. My work reflects a commitment to combining technical knowledge with practical impact.
                            </p>
                            <p>
                                In addition to my engineering background, I am also a Frontend Developer with a keen eye for clean design and intuitive user experiences. I enjoy translating complex technical concepts into accessible digital solutions through modern web technologies. This interdisciplinary skill set allows me to bridge engineering innovation with digital presentation, creating platforms that communicate ideas clearly and effectively.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border-main">
                            <div>
                                <h4 className="text-text-main font-bold mb-2 uppercase tracking-widest text-xs">Strategy</h4>
                                <p className="text-sm text-text-dim">Building scalable systems that grow with your vision.</p>
                            </div>
                            <div>
                                <h4 className="text-text-main font-bold mb-2 uppercase tracking-widest text-xs">Design</h4>
                                <p className="text-sm text-text-dim">Creating interfaces that prioritize flow and aesthetics.</p>
                            </div>
                        </div>

                        <div className="pt-10 flex flex-wrap gap-6 items-center">
                            <a
                                href="/cv.pdf"
                                download="Agyei_Michael_Junior_CV.pdf"
                                className="inline-flex items-center gap-4 px-8 py-4 bg-text-main text-bg-main rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-xl group/cv"
                            >
                                <div className="p-2 bg-bg-main/5 rounded-lg group-hover/cv:bg-bg-main group-hover/cv:text-text-main transition-colors">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4M7 10l5 5 5-5M12 15V3" />
                                    </svg>
                                </div>
                                <span className="uppercase tracking-widest text-xs">Download My CV</span>
                            </a>

                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-4 group"
                            >
                                <div className="w-12 h-12 rounded-full border border-border-main flex items-center justify-center group-hover:bg-text-main group-hover:text-bg-main transition-all duration-500 text-text-main">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                                    </svg>
                                </div>
                                <span className="text-xs uppercase tracking-[0.3em] font-black text-text-dim group-hover:text-text-main transition-colors">Let's connect</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default About;
