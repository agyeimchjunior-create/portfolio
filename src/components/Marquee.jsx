import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Marquee = () => {
    return (
        <div className="py-20 md:py-40 bg-white/[0.01] border-y border-white/5 mt-40 group overflow-hidden relative">
            <div className="relative flex overflow-x-hidden">
                <div className="animate-marquee whitespace-nowrap flex items-center">
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className="text-6xl md:text-[12rem] font-black text-white/5 mx-8 md:mx-16 uppercase tracking-tighter group-hover:text-white/10 transition-all duration-700">
                            Let's work together <span className="text-outline-thin text-transparent ml-4 opacity-50">•</span>
                        </span>
                    ))}
                </div>
                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center pointer-events-none">
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className="text-6xl md:text-[12rem] font-black text-white/5 mx-8 md:mx-16 uppercase tracking-tighter group-hover:text-white/10 transition-all duration-700">
                            Let's work together <span className="text-outline-thin text-transparent ml-4 opacity-50">•</span>
                        </span>
                    ))}
                </div>
            </div>

            <div className="text-center mt-12 md:mt-20 relative z-10">
                <Link
                    to="/contact"
                    className="inline-flex items-center gap-4 md:gap-6 px-8 md:px-16 py-4 md:py-8 bg-white text-black rounded-full font-black text-base md:text-2xl hover:scale-105 transition-all shadow-[0_0_50px_rgba(255,255,255,0.2)] active:scale-95"
                >
                    START A PROJECT <ChevronRight size={32} className="hidden md:block" />
                </Link>
            </div>
        </div>
    );
};

export default Marquee;
