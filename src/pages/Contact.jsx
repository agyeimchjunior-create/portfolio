import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Mail, Github, Linkedin, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const sectionRef = useRef(null);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("Sending....");

        const formData = new FormData(event.target);
        // Using the user's provided access key
        formData.append("access_key", "d1a0f405-e197-497d-8f2e-1bc4876160b7");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Message Sent Successfully!");
                event.target.reset();
                setTimeout(() => setResult(""), 5000);
            } else {
                setResult(data.message || "Something went wrong.");
            }
        } catch (error) {
            setResult("Network error. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".contact-item", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="min-h-screen pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-20 contact-item">
                <span className="text-xs uppercase tracking-[0.5em] text-white/40 font-bold mb-4 block">Get in touch</span>
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 italic">
                    LET'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">CONNECT</span>
                </h1>
                <p className="text-xl text-white/50 max-w-2xl mx-auto font-light">
                    Have a project in mind or just want to say hello? I'm always open to new opportunities and creative collaborations.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Contact Info */}
                <div className="space-y-12 contact-item">
                    <div className="group cursor-pointer">
                        <div className="flex items-center gap-6 mb-4">
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white group-hover:text-black transition-all">
                                <Mail size={24} />
                            </div>
                            <h3 className="text-2xl font-bold">Email</h3>
                        </div>
                        <p className="text-white/40 text-lg ml-20 group-hover:text-white transition-colors">agyeimchjunior@gmail.com</p>
                    </div>

                    <div className="group cursor-pointer">
                        <div className="flex items-center gap-6 mb-4">
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white group-hover:text-black transition-all">
                                <MessageSquare size={24} />
                            </div>
                            <h3 className="text-2xl font-bold">Socials</h3>
                        </div>
                        <div className="flex gap-4 ml-20">
                            {[Github, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="p-3 rounded-full border border-white/10 hover:bg-white/10 transition-all">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Quick Message Form */}
                <div className="contact-item">
                    <form onSubmit={onSubmit} className="space-y-6 bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-xl relative overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Full Name"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-white/40 transition-all text-white placeholder:text-white/20"
                            />
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Email Address"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-white/40 transition-all text-white placeholder:text-white/20"
                            />
                        </div>
                        <textarea
                            rows="6"
                            name="message"
                            required
                            placeholder="Your Message"
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-white/40 transition-all resize-none text-white placeholder:text-white/20"
                        ></textarea>

                        <button
                            disabled={isSubmitting}
                            type="submit"
                            className="w-full py-6 bg-white text-black rounded-2xl font-black text-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? "SENDING..." : "SEND MESSAGE"} <Send size={20} />
                        </button>

                        {result && (
                            <div className={`mt-6 p-4 rounded-xl text-center flex items-center justify-center gap-2 ${result.includes("Successfully") ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-white/5 text-white/60"}`}>
                                {result.includes("Successfully") && <CheckCircle2 size={18} />}
                                {result}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
