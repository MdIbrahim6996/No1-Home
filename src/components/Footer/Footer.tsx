import { ArrowUp } from "lucide-react";

const Footer = () => {
    return (
        <footer className="relative bg-slate-100 text-brand-midnight md:pt-24 pt-12 pb-12 px-4 md:px-16 text-center md:text-left">
            {/* Background circle accent */}
            <div className="absolute inset-0 flex justify-center items-center opacity-15">
                <div className="md:w-[600px] w-[500px] md:h-[600px] h-[500px] bg-brand-lime rounded-full blur-3x"></div>
            </div>

            {/* Main Headline */}
            <div className="relative z-10 text-center mb-20">
                <p className="font-inter text-sm mb-2 tracking-wide">
                    Got a project? Let’s collaborate.
                </p>
                <h2 className="font-raleway md:text-8xl text-6xl font-bold uppercase tracking-tight">
                    GET IN TOUCH
                </h2>
            </div>

            {/* Footer Links Grid */}
            <div className="relative z-10 grid md:grid-cols-12 gap-8 pt-10">
                {/* Navigation */}
                <div className="col-span-6">
                    <h4 className="font-inter border-b font-semibold uppercase tracking-wide mb-4">
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
                <div className="col-span-3">
                    <h4 className="font-inter border-b font-semibold uppercase tracking-wide mb-4">
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
                <div className="col-span-3">
                    <h4 className="font-inter border-b font-semibold uppercase tracking-wide mb-4">
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
            <div className="relative z-10 mt-16 flex flex-col md:flex-row justify-between items-center gap-4 text-[--color-brand-slate] font-inter text-xs border-t border-emerald-800 pt-6">
                <p className="font-bold text-6xl font-inter">
                    © {new Date().getFullYear()} <br /> No1 Home
                </p>
                {/* <p>Built by Ibrahim • All rights reserved.</p> */}

                <a
                    href="#top"
                    className="p-5 rounded-full bg-brand-lime text-brand-navy hover:bg-brand-lime/90 transition-all"
                >
                    <ArrowUp size={20} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
