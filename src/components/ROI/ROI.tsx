import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import { useAutoFetch } from "../../hooks/useAutoFetch";

const roiStats = [
    {
        id: 1,
        value: "70%",
        label: "Average Bill Savings",
        description:
            "Most homeowners reduce their monthly electricity costs by up to 70% after switching to solar.",
    },
    {
        id: 2,
        value: "5–7 Yrs",
        label: "Payback Period",
        description:
            "Your investment typically pays for itself within just 5 to 7 years — the rest is pure savings.",
    },
    {
        id: 3,
        value: "25+ Yrs",
        label: "System Lifespan",
        description:
            "Our high-efficiency panels are designed to perform for decades with minimal maintenance.",
    },
    {
        id: 4,
        value: "0% EMI",
        label: "Flexible Financing",
        description:
            "Affordable payment options and zero-interest EMI plans make going solar easier than ever.",
    },
];
const ROI = () => {
    const roi = useAutoFetch<any>("/ReturnOnInvestment");

    const textRef = useRef(null);

    useGSAP(async () => {
        await document.fonts.ready;
        gsap.set(textRef.current, { opacity: 1 });

        const text = SplitText.create(textRef.current, {
            type: "lines",
            mask: "lines",
        });
        gsap.fromTo(
            text.lines,
            {
                y: "100%",
            },
            {
                y: "0%",
                stagger: 0.2,
                duration: 0.5,
                scrollTrigger: {
                    trigger: ".roi",
                    start: "top center",
                },
            }
        );
    });

    return (
        <section
            id="roi"
            className="roi relative overflow-hidden px-4 py-40 bg-brand-midnigh bg-[url('/returnOn.jpg')] 
            bg-linear-to-b from-black to-black/50 bg-cover md:m-2 md:rounded-lg"
        >
            {/* Accent Marker */}
            <div className="absolute inset-0 h-full w-full bg-black/80"></div>
            {/* <img src="/returnOn.jpg" className="h-full w-full bg-cover absolute " alt="" /> */}
            <div className="relative">
                <div className="border w-fit px-10 py-1 border-brand-light-lime text-brand-light-lime rounded-full mx-auto mb-8">
                    Return on Investment
                </div>

                {/* Description */}
                <p
                    ref={textRef}
                    className="font-raleway text-center text-lg md:text-2xl text-brand-light-lime max-w-5xl 
             mx-auto md:leading-7 leading-6 mb-12"
                >
                    {roi?.main_text}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-15 mt-10 md:mx-10 mx-5">
                    {roiStats.map((_, index) => (
                        <div
                            key={index}
                            className="border-l border-brand-dark-lime py- pr-1 pl-3 flex flex-col gap-6"
                        >
                            <h3 className="font-inter text-3xl md:text-4xl font-bold text-brand-lime mb-2">
                                {roi && roi[`card_value_${index + 1}`]}
                            </h3>

                            <div>
                                <p className="font-spaceGrotesk text-brand-light-lime text-sm md:text-xl mb-2">
                                    {roi && roi[`card_title_${index + 1}`]}
                                </p>
                                <p className="font-inter text-brand-light-lime/80 text-sm">
                                    {roi && roi[`card_desc_${index + 1}`]}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ROI;
