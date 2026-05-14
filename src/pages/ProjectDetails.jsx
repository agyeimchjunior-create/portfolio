import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, CheckCircle2, AlertCircle, ChevronRight } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import Marquee from '../components/Marquee';
import Footer from '../components/Footer';

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const currentProject = projectsData.find(p => p.id === parseInt(id));
        setProject(currentProject);
    }, [id]);

    if (!project) return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-white/20 animate-pulse text-xl tracking-[0.5em]">LOADING PROJECT...</div>
        </div>
    );

    return (
        <div className="min-h-screen pt-40">
            {/* Navigation & Header */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-text-dim hover:text-text-main mb-12 transition-all group px-4 py-2 rounded-full border border-border-main hover:border-text-dim/30 bg-card-main"
                >
                    <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
                    <span className="text-xs uppercase tracking-widest font-bold">Back to Gallery</span>
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-xs uppercase tracking-[0.4em] text-text-dim font-bold">{project.category}</span>
                            {project.status === 'live' && (
                                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                    <span className="text-[10px] uppercase tracking-widest text-emerald-500 font-black">Production Live</span>
                                </div>
                            )}
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter italic leading-none mb-8 text-text-main">
                            {project.title.split(' ').map((word, i) => (
                                <span key={i} className={i === 1 ? "text-accent-primary" : ""}>
                                    {word}{' '}
                                </span>
                            ))}
                        </h1>
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <a
                            href={project.previewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-8 py-4 bg-text-main text-bg-main rounded-2xl font-black hover:scale-105 transition-all shadow-xl"
                        >
                            LIVE PREVIEW <ExternalLink size={20} />
                        </a>
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-8 py-4 bg-card-main border border-border-main rounded-2xl font-black hover:bg-text-main hover:text-bg-main transition-all"
                        >
                            SOURCE CODE <Github size={20} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Image */}
            <div className="max-w-[1400px] mx-auto px-4 mb-32">
                <div className="relative aspect-video md:aspect-[21/9] rounded-[3rem] overflow-hidden border border-border-main bg-card-main group shadow-2xl">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-main/60 to-transparent"></div>
                </div>
            </div>

            {/* Content Sections */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-20 mb-40 text-text-main">
                {/* Left Side: Overview & Features */}
                <div className="lg:col-span-7 space-y-24">
                    <section>
                        <h2 className="text-3xl font-bold mb-8 italic border-l-4 border-accent-primary pl-6">Project Overview</h2>
                        <p className="text-xl text-text-dim leading-relaxed font-light">
                            {project.description}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-8 italic border-l-4 border-accent-primary pl-6">Core Features</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {project.features.map((feature, i) => (
                                <div key={i} className="flex gap-4 p-6 rounded-3xl bg-card-main border border-border-main hover:border-text-dim/30 transition-all group">
                                    <CheckCircle2 className="text-text-dim group-hover:text-text-main transition-colors shrink-0" size={24} />
                                    <p className="text-text-dim group-hover:text-text-main font-medium leading-tight">{feature}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Right Side: Challenges & Tech */}
                <div className="lg:col-span-5 space-y-24">
                    <section className="p-10 rounded-[2.5rem] bg-card-main border border-border-main relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 text-text-dim/10 group-hover:text-text-dim/20 transition-colors">
                            <AlertCircle size={100} />
                        </div>
                        <h2 className="text-2xl font-bold mb-6 italic relative z-10 text-text-main">Challenges & Solutions</h2>
                        <div className="space-y-6 relative z-10">
                            <div>
                                <p className="text-xs uppercase tracking-[0.3em] text-text-dim font-bold mb-3">The Challenge</p>
                                <p className="text-text-dim font-light leading-relaxed">{project.challenges}</p>
                            </div>
                            <div className="pt-6 border-t border-border-main">
                                <p className="text-xs uppercase tracking-[0.3em] text-text-dim font-bold mb-3">The Solution</p>
                                <p className="text-text-dim font-light leading-relaxed">{project.solutions}</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-sm uppercase tracking-[0.5em] text-text-dim font-bold mb-8 italic">Technologies Used</h2>
                        <div className="flex flex-wrap gap-3">
                            {['React', 'GSAP', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons'].map((tech, i) => (
                                <span key={i} className="px-6 py-3 rounded-full bg-card-main border border-border-main text-sm font-bold tracking-wider hover:bg-text-main hover:text-bg-main transition-all cursor-default uppercase">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </section>
                </div>
            </div>

            {/* Let's Work Slider */}
            <Marquee />

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default ProjectDetails;
