import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUpRight, Menu, X } from "lucide-react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    // Top navbar animation
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

    // Mobile menu animation
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

    return (
        <nav className="fixed w-full h z-100 top-0 overflow-hidden">
            <div
                className="flex items-center justify-between bg-brand-charcoal/15 backdrop-blur-sm
                    text-brand-light-bg m-2 rounded-md p-4 py-2"
            >
                {/* Logo */}
                <div className="w-40 h-10">
                    <img src="/solarcare-logo.svg" className="h-full w-full" alt="" />
                </div>

                {/* Desktop Links */}
                <div className="links hidden md:flex gap-5 translate-x-10 font-spaceGrotesk">
                    <span className="cursor-pointer">Home</span>
                    <span className="cursor-pointer">About</span>
                    <span className="cursor-pointer">Services</span>
                    <span className="cursor-pointer">Pricing</span>
                    <span className="cursor-pointer">Contact</span>
                </div>

                {/* Desktop Buttons */}
                <div className="hidden md:flex items-center h-full">
                    <button className="gap-2 bg-brand-lime text-sm font-medium text-brand-midnight font-spaceGrotesk px-5 py-2 rounded-md">
                        Get A Free Quote
                    </button>
                    <button className=" bg-brand-lime text-brand-midnight h-full px-5 py-2 rounded-md">
                        <ArrowUpRight size={20} />
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden bg-brand-lime text-brand-midnight px-3 py-2 rounded-md"
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Slide-In Menu */}
            <div
                ref={menuRef}
                className="fixed top-0 right-0 w-3/4 h-full bg-brand-charcoal text-brand-light-bg 
                    p-6 pt-24 z-50 font-spaceGrotesk shadow-xl translate-x-full"
            >
                <div className="flex flex-col gap-6 text-lg text-red-600">
                    <span className="cursor-pointer" onClick={() => setOpen(false)}>Home</span>
                    <span className="cursor-pointer" onClick={() => setOpen(false)}>About</span>
                    <span className="cursor-pointer" onClick={() => setOpen(false)}>Services</span>
                    <span className="cursor-pointer" onClick={() => setOpen(false)}>Pricing</span>
                    <span className="cursor-pointer" onClick={() => setOpen(false)}>Contact</span>
                </div>

                <div className="mt-10 flex flex-col gap-4">
                    <button className="bg-brand-lime text-brand-midnight px-5 py-3 rounded-md font-medium">
                        Get A Free Quote
                    </button>
                    <button className="bg-brand-lime text-brand-midnight px-5 py-3 rounded-md flex items-center justify-center">
                        <ArrowUpRight size={22} />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
