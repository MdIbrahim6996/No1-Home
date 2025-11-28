import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import { ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const mobileLinks = [
    "Home",
    "About",
    "Benefits",
    "Pricing",
    "Installation",
    "Testimonial",
    "ROI",
    "FAQs",
    "Contact",
];

const MobileNavButton = ({
    title,
    handleCLoseMenu,
}: {
    title: string;
    handleCLoseMenu: () => void;
}) => {
    return (
        <span className="cursor-pointer capitalize" onClick={handleCLoseMenu}>
            {title}
        </span>
    );
};

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);
    useGSAP(() => {
        gsap.from("nav", {
            y: -100,
            duration: 1,
        });
        gsap.from(".links span", {
            y: 100,
            delay: 0.5,
            stagger: 0.1,
        });
    });
    useGSAP(() => {
        if (open) {
            gsap.to(menuRef.current, {
                x: 0,
                duration: 0.4,
                ease: "power3.out",
            });
        } else {
            gsap.to(menuRef.current, {
                x: "100%",
                duration: 0.4,
                ease: "power3.in",
            });
        }
    }, [open]);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <>
            <nav className="fixed md:hidde w-screen h-16 z-100 top-0 overflow-hidden">
                <div
                    className="flex items-center justify-between md:px-4 px-2 bg-brand-charcoal/15 backdrop-blur-sm
             text-brand-light-bg m-2 mx-2 md:mr-5 rounded-md py-2"
                >
                    <div className="w-16 md:w-40 md:h-10">
                        {/* <img
                        src="/logo.png"
                        className="w-full h-full object-cover"
                        alt=""
                    /> */}
                        <img
                            src="/solarcare-logo.svg"
                            className="h-full w-full object-"
                            alt=""
                        />
                    </div>
                    <div className="links md:flex gap-5 justify-center translate-x-10 font-spaceGrotesk hidden">
                        <span
                            className="cursor-pointer"
                            onClick={() => scrollToSection("home")}
                        >
                            Home
                        </span>

                        <span
                            className="cursor-pointer"
                            onClick={() => scrollToSection("about")}
                        >
                            About
                        </span>

                        <span
                            className="cursor-pointer"
                            onClick={() => scrollToSection("services")}
                        >
                            Services
                        </span>

                        <span
                            className="cursor-pointer"
                            onClick={() => scrollToSection("pricing")}
                        >
                            Pricing
                        </span>

                        <span
                            className="cursor-pointer"
                            onClick={() => scrollToSection("contact")}
                        >
                            Contact
                        </span>
                    </div>

                    <div className="hidden md:flex items-center h-full">
                        <button className="gap-2 bg-brand-lime text-sm font-medium text-brand-midnight font-spaceGrotesk px-5 py-2 rounded-md">
                            Get A Free Quote
                        </button>
                        <button className=" bg-brand-lime text-brand-midnight h-full px-5 py-2 rounded-md">
                            <ArrowUpRight size={20} />
                        </button>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setOpen(!open)}
                            className="bg-brand-lime text-brand-midnight px-3 py-2 rounded-md"
                        >
                            {open ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>
            <div
                ref={menuRef}
                className=" fixed w-4/4 h-screen bg-brand-midnight text-brand-light-bg 
                    p-8 pt-2 z-1000 font-spaceGrotesk shadow-xl translate-x-full"
            >
                <div className="mb-20 mt-3">
                    <button
                        onClick={() => setOpen(!open)}
                        className="bg-brand-lime text-brand-midnight px-3 py-2 rounded-md"
                    >
                        <X size={24} />
                    </button>
                </div>
                <div className="flex flex-col gap-4 text-lg">
                    {mobileLinks.map((link) => (
                        <MobileNavButton
                            key={link}
                            title={link}
                            handleCLoseMenu={() => {
                                setOpen(false);
                                scrollToSection(link.toLowerCase());
                            }}
                        />
                    ))}
                </div>

                <div className="mt-10 flex flex-coap-4">
                    <button className="bg-brand-lime text-brand-midnight px-5 py-3 rounded-md font-medium">
                        Get A Free Quote
                    </button>
                    <button className="bg-brand-lime text-brand-midnight px-5 py-3 rounded-md flex items-center justify-center">
                        <ArrowUpRight size={22} />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
