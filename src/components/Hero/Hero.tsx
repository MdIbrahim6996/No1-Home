import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

gsap.registerPlugin(SplitText);

const Hero = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    useGSAP(() => {
        const titleText = SplitText.create(titleRef.current, {
            type: "lines",
            mask: "lines",
        });
        const subtitleText = SplitText.create(subtitleRef.current, {
            type: "lines",
            mask: "lines",
        });

        gsap.fromTo(
            titleText.lines,
            {
                y: "100%",
            },
            {
                y: "0%",
                stagger: 0.3,
                duration: 0.8,
                delay: 0.5,
            }
        );
        gsap.fromTo(
            subtitleText.lines,
            {
                y: "100%",
            },
            {
                y: "0%",
                stagger: 0.1,
                duration: 0.7,
                delay: 1.25,
            }
        );
    }, []);
    return (
        <section
            className="relative overflow-hidden h-screen w- bg-cover bg-center flex flex-col justify-end m-1.5 px-8 md:px-20 pb-20 rounded-lg"
            style={{
                backgroundImage: "url('/hero-new.jpg')", // replace with your actual image path
               // backgroundImage: "url('https://images.unsplash.com/photo-1655300283246-1ef0317a565d?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // replace with your actual image path
            }}
        >
            {/* Overlay for better contrast */}
            {/* <div className="absolute inset-0 bg-[rgba(12,53,89,0.65)] rounded-2xl"></div> */}
            <div
                className="absolute inset-0 bg-[rgba(0,0,0,0.5) bg-linear-to-b
                 from-[rgba(0,0,0,0.15)] via-[rgba(0,0,0,0.25)] via-45% to-[rgba(0,0,0,0.9)]"
            ></div>

            {/* Content */}
            <div className="relative z max-w-3xl">
                <h1
                    ref={titleRef}
                    className="font-raleway text-7xl font-semibold text-brand-light-bg leading-18"
                >
                    Harness Your Home’s Natural Sunlight
                </h1>

                <p
                    ref={subtitleRef}
                    className="mt-4 max-w-md font-inter text-brand-lime text-base md:text-lg leading-5.5"
                >
                    At No1 Home Solar, we help homeowners unlock their
                    property’s natural energy potential. Save money, reduce your
                    carbon footprint, and power your home sustainably with
                    premium solar systems.
                </p>
            </div>
        </section>
    );
};

export default Hero;
