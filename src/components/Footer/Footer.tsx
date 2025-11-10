import { ArrowUp } from "lucide-react";

const Footer = () => {
    return (
        <footer className="relative bg-slate-100 text-brand-navy pt-24 pb-12 px-8 md:px-16 text-center md:text-left">
            {/* Background circle accent */}
            <div className="absolute inset-0 flex justify-center items-center opacity-5">
                <div className="w-[400px] h-[400px] bg-[--color-brand-lime] rounded-full blur-3xl"></div>
            </div>

            {/* Main Headline */}
            <div className="relative z-10 text-center mb-20">
                <p className="font-inter text-sm mb-2 tracking-wide">
                    Got a project? Let’s collaborate.
                </p>
                <h2 className="font-raleway text-[clamp(2.5rem,6vw,5rem)] font-bold uppercase tracking-tight">
                    GET IN{" "}
                    <span className="text-[--color-brand-lime]">TOUCH</span>
                </h2>
            </div>

            {/* Footer Links Grid */}
            <div className="relative z-10 grid md:grid-cols-3 gap-8 border-t border-[--color-brand-neutral-light] pt-10">
                {/* Navigation */}
                <div>
                    <h4 className="font-inter text-xs uppercase tracking-wide mb-4">
                        Navigation
                    </h4>
                    <ul className="space-y-2 font-inter text-sm">
                        <li>
                            <a
                                href="#home"
                                className="hover:text-[--color-brand-lime]"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="hover:text-[--color-brand-lime]"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#services"
                                className="hover:text-[--color-brand-lime]"
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                className="hover:text-[--color-brand-lime]"
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="hover:text-[--color-brand-lime]"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Socials */}
                <div>
                    <h4 className="font-inter text-xs uppercase tracking-wide mb-4">
                        Socials
                    </h4>
                    <ul className="space-y-2 font-inter text-sm">
                        <li>
                            <a
                                href="#"
                                className="hover:text-[--color-brand-lime]"
                            >
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-[--color-brand-lime]"
                            >
                                YouTube
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-[--color-brand-lime]"
                            >
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-[--color-brand-lime]"
                            >
                                GitHub
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h4 className="font-inter text-xs uppercase tracking-wide mb-4">
                        Resources
                    </h4>
                    <ul className="space-y-2 font-inter text-sm">
                        <li>
                            <a
                                href="#"
                                className="hover:text-[--color-brand-lime]"
                            >
                                Documentation
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-[--color-brand-lime]"
                            >
                                Figma Templates
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-[--color-brand-lime]"
                            >
                                Privacy Policy
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="relative z-10 mt-16 flex flex-col md:flex-row justify-between items-center gap-4 text-[--color-brand-slate] font-inter text-xs border-t border-[--color-brand-neutral-light] pt-6">
                <p>© {new Date().getFullYear()} No1 Home Solar</p>
                <p>Built by Ibrahim • All rights reserved.</p>

                <a
                    href="#top"
                    className="p-2 rounded-full bg-brand-lime text-brand-navy hover:bg-brand-lime/90 transition-all"
                >
                    <ArrowUp size={16} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
