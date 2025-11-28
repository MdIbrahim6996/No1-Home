import { useEffect, useState } from "react";

const slides = [
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
        subtitle: "Elegant UI & frictionless UX for your users",
        image: "https://images.unsplash.com/photo-1524646432684-e4c09872c132",
    },
];

export default function HeroCarousel() {
    const [index, setIndex] = useState(0);
    const [_, setLoopKey] = useState(0); // reset animations when loop restarts

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => {
                const next = (prev + 1) % slides.length;

                // when returning to start → reset progress bars
                if (next === 0) {
                    setLoopKey((k) => k + 1);
                }

                return next;
            });
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const [progress, setProgress] = useState({
        bar1: 0,
        bar2: 0,
        bar3: 0,
    });

    useEffect(() => {
        let timer:any;

        function startSequence() {
            setProgress({ bar1: 0, bar2: 0, bar3: 0 });

            // BAR 1 → fills first
            timer = setTimeout(() => {
                setProgress((p) => ({ ...p, bar1: 100 }));
            }, 0);

            // BAR 2 → fills second
            timer = setTimeout(() => {
                setProgress((p) => ({ ...p, bar2: 100 }));
            }, 5000);

            // BAR 3 → fills third
            timer = setTimeout(() => {
                setProgress((p) => ({ ...p, bar3: 100 }));
            }, 10000);

            // RESET & start again
            timer = setTimeout(() => {
                setProgress({ bar1: 0, bar2: 0, bar3: 0 });

                startSequence();
            }, 15000);
        }

        startSequence();
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative w-full h-[80vh] overflow-hidden">
            {/* Slides */}
            {slides.map((slide, i) => (
                <div
                    key={slide.id}
                    className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-700 ${
                        index === i ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    <div className="w-full h-full bg-black/50 flex flex-col justify-center items-start px-8 md:px-20">
                        <h1 className="text-3xl md:text-6xl font-bold text-white mb-3">
                            {slide.title}
                        </h1>
                        <p className="text-lg md:text-2xl text-white/80">
                            {slide.subtitle}
                        </p>
                    </div>
                </div>
            ))}

            {/* Progress Lines */}
            {/* <div
                key={loopKey}
                className="absolute bottom-8 left-8 flex gap-3 w-[120px]"
            >
                {slides.map((_, i) => (
                    <div
                        key={i}
                        className="w-full h-[3px] bg-white/30 overflow-hidden"
                    >
                        <div
                            className={`h-full bg-white transition-all duration-[5000ms] ${
                                index - 1 === i ? "w-full" : "w-0"
                            }`}
                        ></div>
                    </div>
                ))}
            </div> */}

            <div className="absolute bottom-2 left-8 flex gap-3 w-[150px] mt-10">
                {[progress.bar1, progress.bar2, progress.bar3].map(
                    (value, i) => (
                        <div
                            key={i}
                            className="w-full h-[3px] bg-white/20 overflow-hidden rounded"
                        >
                            <div
                                style={{ width: `${value}%` }}
                                className="h-full bg-white transition-all duration-5000"
                            />
                        </div>
                    )
                )}
            </div>
        </div>
    );
}
