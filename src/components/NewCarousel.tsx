import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

type Slide = {
    id: number;
    title: string;
    subtitle: string;
    image: string;
};

const slides: Slide[] = [
    {
        id: 0,
        title: "Grow Your Business",
        subtitle: "Web development that scales your brand",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    },
    {
        id: 1,
        title: "High-Performance Websites",
        subtitle: "Blazing fast, SEO-optimized & modern",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
    {
        id: 2,
        title: "Premium Design",
        subtitle: "Elegant UI & frictionless UX",
        image: "/hero-2.jpg",
    },
];

// --- Splits text into spans ---
// const splitText = (text: string, cls = "") =>
//     text.split("").map((ch, i) => (
//         <span key={i} className={cls}>
//             {ch === " " ? "\u00A0" : ch}
//         </span>
//     ));

export default function HeroCarousel() {
    const [index, setIndex] = useState<number>(0);

    const letterRefs = useRef<Record<number, HTMLSpanElement[]>>({});
    const subLetterRefs = useRef<Record<number, HTMLSpanElement[]>>({});

    // Change slide every 5s
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    // GSAP premium reveal animation
    useEffect(() => {
        const titleLetters = letterRefs.current[index] || [];
        const subtitleLetters = subLetterRefs.current[index] || [];

        const tl = gsap.timeline();

        tl.set(titleLetters, {
            opacity: 0,
            y: 30,
            filter: "blur(6px)",
        });

        tl.set(subtitleLetters, {
            opacity: 0,
            y: 30,
            filter: "blur(6px)",
        });

        tl.to(titleLetters, {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.03,
        });

        tl.to(
            subtitleLetters,
            {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.015,
            },
            "-=0.4"
        );

        return () => {
            tl.kill();
        };
    }, [index]);

    return (
        <div className="relative w-full h-[96vh] overflow-hidden">
            {slides.map((slide, slideIndex) => (
                <div
                    key={slide.id}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 bg-cover bg-center ${
                        index === slideIndex ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    <div className="w-full h-full bg-black/50 flex flex-col justify-center items-start px-8 md:px-20">
                        {/* TITLE LETTERS */}
                        <h1 className="text-3xl md:text-6xl font-bold text-white flex flex-wrap">
                            {slide.title.split("").map((char, i) => (
                                <span
                                    key={i}
                                    ref={(el) => {
                                        if (el) {
                                            if (
                                                !letterRefs.current[slideIndex]
                                            ) {
                                                letterRefs.current[slideIndex] =
                                                    [];
                                            }
                                            letterRefs.current[slideIndex][i] =
                                                el;
                                        }
                                    }}
                                    className="inline-block"
                                >
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            ))}
                        </h1>

                        {/* SUBTITLE LETTERS */}
                        <p className="text-lg md:text-2xl text-white/80 flex flex-wrap mt-3">
                            {slide.subtitle.split("").map((char, i) => (
                                <span
                                    key={i}
                                    ref={(el) => {
                                        if (el) {
                                            if (
                                                !subLetterRefs.current[
                                                    slideIndex
                                                ]
                                            ) {
                                                subLetterRefs.current[
                                                    slideIndex
                                                ] = [];
                                            }
                                            subLetterRefs.current[slideIndex][
                                                i
                                            ] = el;
                                        }
                                    }}
                                    className="inline-block"
                                >
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            ))}
                        </p>
                    </div>
                </div>
            ))}

            {/* PROGRESS BAR */}
            <div className="absolute bottom-8 left-8 flex gap-3 w-[120px]">
                {slides.map((_, i) => (
                    <div
                        key={i}
                        onClick={() => setIndex(i)}
                        className="w-full h-[3px] bg-white/30 overflow-hidden"
                    >
                        <div
                            className={`h-full bg-white transition-all duration-5000 ${
                                index === i ? "w-full" : "w-0"
                            }`}
                        ></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
