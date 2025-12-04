import { ArrowUp } from "lucide-react";

const Footer = () => {
    return (
        <footer className="relative h-screen bg-slate-100 overflow-hidden text-brand-midnight md:pt-44 pt-12 pb text-center md:text-left">
            {/* Background circle accent */}
            <div className="absolute inset-0 flex justify-center items-center opacity">
                <div className="aspect-square md:h-screen h-[500px] bg-brand-lime opacity-15 rounded-full"></div>
                <img
                    src="/solarcare-logo.svg"
                    alt=""
                    className="absolute left-1/2 top-1/2 -translate-1/2 w-120 h-120 opacity-50"
                />
            </div>

            {/* Footer Links Grid */}
            <div className="absolute w-full border-b border-brand-deep-navy grid grid-cols-1 md:grid-cols-12 gap-8 md:px-16 pb-20 px-4">
                <div className="md:col-span-9">
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

                <div className="md:col-span-3">
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
            </div>

            {/* Footer Bottom */}
            <div className="absolute bottom-0 w-full">
                <div
                    className="mt-16 md:px-16 px-4 flex flex-col md:flex-row justify-between 
            items-center gap-4 text-[--color-brand-slate] font-inter text-xs borde border-emerald-800 pt-6"
                >
                    <p className="font-bold text-xl font-inter text-center">
                        © {new Date().getFullYear()} No1 Solar Care
                    </p>
                    <a
                        href="#top"
                        className="p-5 rounded-full bg-brand-lime text-brand-navy hover:bg-brand-lime/90 transition-all"
                    >
                        <ArrowUp size={20} />
                    </a>
                </div>
                <div
                    className="bg-brand-lime text-brand-deep-navy relative z-10 mt-5 text-center
             md:text-xl font-spaceGrotesk font-medium py-2"
                >
                    <p>
                        This site is built by{" "}
                        <a
                            href="https://www.firstwebstudio.com/"
                            target="_blank"
                            className="underline font-semibold ml-3"
                        >
                            First Web Studio
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
