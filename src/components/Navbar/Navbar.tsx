import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";

const Navbar = () => {
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
    return (
        <nav className="fixed w-full h-16 z-100 top-0 overflow-hidden">
            <div
                className="flex items-center justify-between  bg-brand-charcoal/15 backdrop-blur-sm
             text-brand-light-bg m-2 rounded-md p-4 py-2"
            >
                <div className="w-40 h-10">
                    {/* <img
                        src="/logo.png"
                        className="w-full h-full object-cover"
                        alt=""
                    /> */}
                    <img src="/solarcare-logo.svg" className="h-full w-full object-" alt="" />
                </div>
                <div className="links flex gap-5 justify-center translate-x-10 font-spaceGrotesk">
                    <span className="cursor-pointer">Home</span>
                    <span className="cursor-pointer">About</span>
                    <span className="cursor-pointer">Services</span>
                    <span className="cursor-pointer">Pricing</span>
                    <span className="cursor-pointer">Contact</span>
                </div>
                <div className="flex items-center h-full">
                    <button className="gap-2 bg-brand-lime text-sm font-medium text-brand-midnight font-spaceGrotesk px-5 py-2 rounded-md">
                        Get A Free Quote
                    </button>
                    <button className=" bg-brand-lime text-brand-midnight h-full px-5 py-2 rounded-md">
                        <ArrowUpRight size={20} />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
