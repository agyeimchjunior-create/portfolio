import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <div className="max-w-4xl mx-auto px-4 py-32">
            <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-white/40 hover:text-white mb-12 transition-colors group"
            >
                <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
                Back to projects
            </button>

            <div className="space-y-8">
                <h1 className="text-4xl md:text-6xl font-bold">Project {id} Details</h1>
                <div className="aspect-video rounded-3xl bg-white/5 border border-white/10 overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-white/20 uppercase tracking-widest">
                        Project Showcase Image
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8">
                    <div className="md:col-span-2 space-y-6">
                        <h2 className="text-2xl font-semibold">Overview</h2>
                        <p className="text-lg text-white/60 leading-relaxed">
                            This is a detailed view of project {id}. In a real application, this would fetch specific project data based on the ID.
                            The project showcases advanced implementation of modern web technologies and design principles.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-sm uppercase tracking-widest text-white/40 mb-2">Technologies</h3>
                            <ul className="flex flex-wrap gap-2">
                                {['React', 'Tailwind', 'GSAP', 'Lucide'].map(tech => (
                                    <li key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm">
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <a
                            href="#"
                            target="_blank"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition-transform"
                        >
                            Visit Website <ExternalLink size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
