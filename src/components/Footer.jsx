import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="pt-20 md:pt-32 pb-12 md:pb-16 px-4 md:px-8 border-t border-border-main">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-20">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <h3 className="text-2xl md:text-3xl font-black italic mb-6 md:mb-8 tracking-tighter uppercase text-accent-primary">Agyei Michael Jr.</h3>
                        <p className="text-text-dim text-base md:text-lg font-light leading-relaxed max-w-md">
                            Bridging the gap between material science innovation and high-performance digital engineering.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-text-dim/60 font-bold mb-6 md:mb-8">Navigation</h4>
                        <ul className="space-y-3 md:space-y-4 font-bold tracking-tight">
                            {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                                <li key={link}>
                                    <Link to={link === 'Home' ? '/' : `/${link.toLowerCase()}`} className="text-text-dim hover:text-text-main transition-colors flex items-center gap-2 group text-sm md:text-base">
                                        <span className="w-0 group-hover:w-4 h-px bg-text-main transition-all duration-300"></span>
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-text-dim/60 font-bold mb-6 md:mb-8">Let's Connect</h4>
                        <div className="flex flex-col gap-3 md:gap-4">
                            <a href="https://github.com/AgyeiMichaelJunior" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-text-dim hover:text-text-main transition-all group">
                                <div className="p-2.5 md:p-3 rounded-xl bg-card-main border border-border-main group-hover:bg-text-main group-hover:text-bg-main transition-all">
                                    <Github size={18} />
                                </div>
                                <span className="font-bold tracking-tight text-sm md:text-base">GitHub</span>
                            </a>
                            <a href="https://linkedin.com/in/agyeimichaeljunior" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-text-dim hover:text-text-main transition-all group">
                                <div className="p-2.5 md:p-3 rounded-xl bg-card-main border border-border-main group-hover:bg-[#0077b5] group-hover:text-white transition-all">
                                    <Linkedin size={18} />
                                </div>
                                <span className="font-bold tracking-tight text-sm md:text-base">LinkedIn</span>
                            </a>
                            <a href="mailto:agyeimchjunior@gmail.com" className="flex items-center gap-3 text-text-dim hover:text-text-main transition-all group">
                                <div className="p-2.5 md:p-3 rounded-xl bg-card-main border border-border-main group-hover:bg-text-main group-hover:text-bg-main transition-all">
                                    <Mail size={18} />
                                </div>
                                <span className="font-bold tracking-tight text-sm md:text-base">Email</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border-main gap-4">
                    <p className="text-text-dim/40 text-[10px] md:text-xs font-bold uppercase tracking-widest text-center md:text-left">
                        © 2026 Michael Junior. All Rights Reserved.
                    </p>
                    <div className="flex gap-6 md:gap-8 text-[8px] md:text-[10px] uppercase tracking-[0.3em] font-black text-text-dim/40">
                        <span className="hover:text-text-main transition-colors cursor-pointer">Privacy Policy</span>
                        <span className="hover:text-text-main transition-colors cursor-pointer">Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
