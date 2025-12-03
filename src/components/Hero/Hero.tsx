import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useEffect, useRef, useState } from "react";
import { useAutoFetch } from "../../hooks/useAutoFetch";
import Calculator from "../Calculator/Calculator";

gsap.registerPlugin(SplitText);

const slides = [
    {
        id: 0,
        title: "Power Your Home With Clean Energy.",
        subtitle:
            "Cut energy bills, increase property value, and enjoy uninterrupted solar power with our expert installation and high-efficiency panels.",
        image: "/hero-prod.png",
    },
    {
        id: 1,
        title: "Harness Your Home’s Natural Sunlight.",
        subtitle:
            "At No1 Home Solar, we help homeowners unlock their property’s natural energy potential. Save money, reduce your carbon footprint, and power your home sustainably with premium solar systems.",
        image: "/hero-desktop.webp",
    },

    {
        id: 2,
        title: "Switch to Solar. Save More Every Month.",
        subtitle:
            "Lower your monthly bills, reduce your carbon footprint, and enjoy clean energy independence with trusted solar professionals.",
        image: "/hero-2.jpg",
    },
];

const Hero = () => {
    const [index, setIndex] = useState<number>(0);

    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    const hero = useAutoFetch<any>("/Hero");

    useGSAP(
        () => {
            if (!titleRef.current || !subtitleRef.current) return;

            // Create fresh SplitText instances
            const titleSplit = new SplitText(titleRef.current, {
                type: "lines",
                linesClass: "split-line",
            });

            const subtitleSplit = new SplitText(subtitleRef.current, {
                type: "lines",
                linesClass: "split-line",
            });

            const tl = gsap.timeline();

            tl.fromTo(
                titleSplit.lines,
                { yPercent: 100, opacity: 0 },
                {
                    yPercent: 0,
                    opacity: 1,
                    stagger: 0.2,
                    duration: 0.8,
                    ease: "power3.out",
                    delay: 0.1,
                }
            ).fromTo(
                subtitleSplit.lines,
                { yPercent: 100, opacity: 0 },
                {
                    yPercent: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.7,
                    ease: "power3.out",
                    delay: 0.1,
                },
                "-=0.3"
            );

            // Image fade/zoom – always ends at opacity:1, scale:1
            tl.fromTo(
                "#hero .hero_image",
                { opacity: 0, scale: 1.05 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1.5,
                    ease: "power3.out",
                },
                0
            );

            // 🔥 IMPORTANT: cleanup so SplitText doesn't keep nesting
            return () => {
                titleSplit.revert();
                subtitleSplit.revert();
                gsap.killTweensOf("#hero .hero_image");
                gsap.killTweensOf(titleSplit.lines);
                gsap.killTweensOf(subtitleSplit.lines);
            };
        },
        { dependencies: [index] }
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [index]);
    return (
        <section
            id="home"
            className="relative overflow-hidden h-screen flex flex-col justify-end md:m-1.5 px-4 md:px-10 pb-20 md:rounded-lg"
        >
            <picture className="h-screen w-full overflow-hidden absolute inset-0">
                {/* <source srcSet="/hero-mobile.webp" media="(max-width: 768px)" /> */}
                <img
                    // src="/hero-desktop.webp"
                    src={slides[index].image}
                    alt=""
                    className="hero_image w-full h-full object-cover"
                    loading="eager"
                    fetchPriority="high"
                />
            </picture>
            {/* Overlay for better contrast */}

            <div
                className="hidden md:block absolute inset-0 bg-linear-to-b
                 from-black/15 via-black/25 via-45% to-black/90"
            ></div>
            <div
                className="md:hidden absolute inset-0 bg-linear-to-b
                 from-[rgba(0,0,0,0.15)] via-[rgba(0,0,0,0.85)] via-65% to-[rgba(0,0,0,0.9)]"
            ></div>

            {/* Content */}
            <div className="relative md:max-w-3xl">
                <h1
                    ref={titleRef}
                    className="will-change-transform will-change-opacity font-raleway md:text-7xl text-5xl font-semibold text-brand-light-bg md:leading-18 leading-12"
                >
                    {hero && hero[`title_${index + 1}`]}
                </h1>
                {/* 
                <p
                    ref={subtitleRef}
                    className="will-change-transform will-change-opacity mt-4 max-w-lg font-inter text-brand-lime text-base md:text-lg md:leading-5.5 leading-4.5"
                >
                    {slides[index].subtitle}
                </p> */}
                <p
                    ref={subtitleRef}
                    className="will-change-transform will-change-opacity mt-4 max-w-lg font-inter text-brand-lime text-base md:text-lg md:leading-5.5 leading-4.5"
                >
                    {hero && hero[`subtitle_${index + 1}`]}
                </p>
            </div>

            <div className="absolute hidden md:block right-4 top-20 gap-2 w-fit">
                <Calculator />
            </div>
            {/* Bottom Grid */}
            {/* <div className="absolute hidden md:grid right-4 bottom-3 grid-cols-3 gap-2 w-fit ">
                {slides.map((slide, i) => (
                    <div
                        className={`h-20 w-20 rounded-md overflow-hidden ${
                            i === index ? "border" : ""
                        } border-brand-light-bg p-1`}
                        onClick={() => setIndex(i)}
                    >
                        <img
                            src={slide.image}
                            className="h-full w-full object-cover rounded-[3px]"
                            alt=""
                        />
                    </div>
                ))}
            </div> */}
            <div className="absolute grid md:hidden right-5 bottom-5 grid-cols-3 gap-0.5 w-fit ">
                {slides.map((slide, i) => (
                    <div
                        className={`h-10 w-10 rounded-md overflow-hidden ${
                            i === index ? "border" : ""
                        }  border-brand-light-bg p-0.5`}
                        onClick={() => setIndex(i)}
                    >
                        <img
                            src={slide.image}
                            className="h-full w-full object-cover rounded-[3px]"
                            alt=""
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Hero;
