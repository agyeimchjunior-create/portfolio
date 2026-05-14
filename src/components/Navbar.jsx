import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Mail, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] max-w-6xl bg-card-main backdrop-blur-xl border border-border-main px-4 md:px-6 py-3 rounded-full flex justify-between items-center z-50 shadow-2xl font-outfit transition-all duration-500">
            <div className="flex items-center">
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="relative w-10 h-10 overflow-hidden rounded-xl border border-border-main bg-bg-main/5 transition-all duration-500 group-hover:border-text-dim/40 group-hover:scale-110">
                        <img
                            src="/images/mylogo.png"
                            alt="Logo"
                            className="w-full h-full object-cover p-1.5"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-text-main/10 to-transparent"></div>
                    </div>
                </Link>
            </div>

            <div className="flex items-center gap-2 md:gap-6">
                <Link to="/" className="group flex items-center gap-2 text-text-dim hover:text-text-main transition-all duration-300 px-4 py-2 rounded-full hover:bg-text-main/5">
                    <Home size={18} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
                    <span className="hidden md:block font-medium text-sm">Home</span>
                </Link>

                <Link to="/about" className="group flex items-center gap-2 text-text-dim hover:text-text-main transition-all duration-300 px-4 py-2 rounded-full hover:bg-text-main/5">
                    <User size={18} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
                    <span className="hidden md:block font-medium text-sm">About</span>
                </Link>

                <Link to="/projects" className="group flex items-center gap-2 text-text-dim hover:text-text-main transition-all duration-300 px-4 py-2 rounded-full hover:bg-text-main/5">
                    <Briefcase size={18} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
                    <span className="hidden md:block font-medium text-sm">Projects</span>
                </Link>

                <button
                    onClick={toggleTheme}
                    className="p-2.5 rounded-full bg-bg-main/5 border border-border-main text-text-main hover:bg-accent-primary hover:text-bg-main transition-all duration-500 active:scale-90 relative overflow-hidden group/toggle"
                    aria-label="Toggle Theme"
                >
                    <div className="relative w-5 h-5">
                        <div className={`absolute inset-0 transition-all duration-500 transform ${theme === 'dark' ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0 scale-0'}`}>
                            <Sun size={20} />
                        </div>
                        <div className={`absolute inset-0 transition-all duration-500 transform ${theme === 'light' ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0 scale-0'}`}>
                            <Moon size={20} />
                        </div>
                    </div>
                </button>

                <Link to="/contact" className="relative group flex items-center gap-2 bg-text-main text-bg-main px-4 md:px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl overflow-hidden animate-beep">
                    <Mail size={18} className="relative z-10" />
                    <span className="hidden md:block relative z-10">Contact</span>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;


