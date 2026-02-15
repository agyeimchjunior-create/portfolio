import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Mail, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl bg-black/40 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full flex justify-between items-center z-50 shadow-2xl font-outfit">
            <div className="flex items-center">
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="relative w-10 h-10 overflow-hidden rounded-xl border border-white/20 bg-white/5 transition-all duration-500 group-hover:border-white/40 group-hover:scale-110">
                        <img
                            src="/images/mylogo.png"
                            alt="Logo"
                            className="w-full h-full object-cover p-1.5"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent"></div>
                    </div>
                </Link>
            </div>

            <div className="flex items-center gap-2 md:gap-6">
                <Link to="/" className="group flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300 px-4 py-2 rounded-full hover:bg-white/5">
                    <Home size={18} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
                    <span className="hidden md:block font-medium text-sm">Home</span>
                </Link>

                <Link to="/about" className="group flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300 px-4 py-2 rounded-full hover:bg-white/5">
                    <User size={18} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
                    <span className="hidden md:block font-medium text-sm">About</span>
                </Link>

                <Link to="/projects" className="group flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300 px-4 py-2 rounded-full hover:bg-white/5">
                    <Briefcase size={18} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
                    <span className="hidden md:block font-medium text-sm">Projects</span>
                </Link>

                <Link to="/contact" className="relative group flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] overflow-hidden animate-beep">
                    <Mail size={18} className="relative z-10" />
                    <span className="relative z-10">Contact</span>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;

