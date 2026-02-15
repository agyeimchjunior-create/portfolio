import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

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
        <div ref={sectionRef} className="relative min-h-screen pt-32 pb-20 overflow-hidden">
            {/* Background Decorations */}
            <div className="blob absolute top-1/4 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="blob absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Image Side */}
                    <div ref={imageRef} className="relative group">
                        <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
                            <img
                                src="/images/me.jpg"
                                alt="Agyei Michael Junior"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                            />
                            {/* Decorative Frame */}
                            <div className="absolute inset-0 border-[20px] border-[#050505]/20 pointer-events-none"></div>
                        </div>

                        {/* Status Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-white text-black px-8 py-4 rounded-2xl shadow-2xl transform rotate-3 font-bold group-hover:rotate-0 transition-transform duration-500">
                            <span className="text-sm uppercase tracking-widest leading-none">Creative Developer</span>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div ref={textRef} className="space-y-8">
                        <div>
                            <span className="text-xs uppercase tracking-[0.5em] text-white/40 font-bold mb-4 block">About Me</span>
                            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-tight">
                                Crafting digital <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">masterpieces.</span>
                            </h1>
                        </div>

                        <div className="space-y-6 text-lg text-white/60 leading-relaxed font-light">
                            <p>
                                Hello! I'm <span className="text-white font-medium">Agyei Michael Junior</span>, a passionate developer dedicated to merging technical excellence with creative vision. My journey in technology is driven by a desire to build tools that are not only functional but also breathtakingly intuitive.
                            </p>
                            <p>
                                With a deep focus on modern web architectures and minimalist design, I transform complex problems into elegant, user-centric solutions. Whether it's crafting lightning-fast front-end experiences or architecting robust back-end systems, I strive for perfection in every line of code.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 pt-8">
                            <div>
                                <h4 className="text-white font-bold mb-2">Strategy</h4>
                                <p className="text-sm text-white/40">Building scalable systems that grow with your vision.</p>
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-2">Design</h4>
                                <p className="text-sm text-white/40">Creating interfaces that prioritize flow and aesthetics.</p>
                            </div>
                        </div>

                        <div className="pt-10 flex flex-wrap gap-6 items-center">
                            <a
                                href="/cv.pdf"
                                download="Agyei_Michael_Junior_CV.pdf"
                                className="inline-flex items-center gap-4 px-8 py-4 bg-white text-black rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] group/cv"
                            >
                                <div className="p-2 bg-black/5 rounded-lg group-hover/cv:bg-black group-hover/cv:text-white transition-colors">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4M7 10l5 5 5-5M12 15V3" />
                                    </svg>
                                </div>
                                <span className="uppercase tracking-widest text-sm">Download My CV</span>
                            </a>

                            <a
                                href="/contact"
                                className="inline-flex items-center gap-4 group"
                            >
                                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                                    </svg>
                                </div>
                                <span className="text-sm uppercase tracking-widest font-bold">Let's connect</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;
