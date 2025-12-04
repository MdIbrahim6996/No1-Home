import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { Check } from "lucide-react";
import { useRef, useState } from "react";
import { GiMoebiusTriangle, GiCheckeredDiamond } from "react-icons/gi";
import { IoMdCube } from "react-icons/io";
import { openGmail } from "../../utils/constants";

const plans = [
    {
        title: "Essential",
        price: {
            monthly: "£19",
            yearly: "£199",
        },
        subtitle: "Perfect for small homes",
        features: [
            "Annual Panel Cleaning",
            "Virtual System Inspection",
            "Inverter Performance Check.",
            "Output Report (Basic)",
        ],
        button: "Get Started",
        highlight: false,
    },
    {
        title: "Standard",
        price: {
            monthly: "£33",
            yearly: "£349",
        },
        subtitle: "Best for growing families",
        features: [
            "Everything Included In Essential.",
            "Full Electrical Safety Test.",
            "Detailed Inverter Diagnostics.",
            "Thermal Imaging Scan.",
            "System Performance Guarantee.",
            "Priority Call Out Response.",
            "Full Photo Report.",
        ],
        button: "Get Started",
        highlight: true,
    },
    {
        title: "Premium",
        price: {
            monthly: "£55",
            yearly: "£599",
        },
        subtitle: "For large homes or businesses",
        features: [
            "Everything Included In Essential & Standard.",
            "Unlimited Call Outs Included.",
            "Parts & Labour Warranty Report(Upto $X/yr).",
            "Annual Performance Optimization.",
            "Remote Monitoring Setup.",
            "Battery & Storage Health Check.",
            "Extended System Lifetime Guarantee.",
        ],
        button: "Get Started",
        highlight: false,
    },
];
const Pricing = () => {
    const [isMonthly, setIsMonthly] = useState(true);
    const textRef = useRef(null);
    const subtextRef = useRef(null);

    useGSAP(() => {
        const text = SplitText.create(textRef.current, {
            type: "lines",
            mask: "lines",
        });
        const subtext = SplitText.create(subtextRef.current, {
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
                    trigger: ".pricing",
                    start: "top 70%",
                },
            }
        );
        gsap.fromTo(
            subtext.lines,
            {
                y: "100%",
            },
            {
                y: "0%",
                stagger: 0.2,
                duration: 0.5,
                delay: 0.5,
                scrollTrigger: {
                    trigger: ".pricing",
                    start: "top center",
                },
            }
        );
    });
    return (
        <section
            id="pricing"
            className="pricing max-w-7xl mx-auto px-2 md:px-12 py-20 my-20"
        >
            <div className="md:flex gap-2 items-start mb-24">
                <h2
                    ref={textRef}
                    className="font-raleway md:text-5xl text-3xl font-semibold text-brand-midnight"
                >
                    Simple Plans. Real Savings. Invest Once. Save for Decades.
                </h2>
                <p
                    ref={subtextRef}
                    className="font-inter ml-auto w-[90%] text-slate-700 max-w-md md:pt-24 pt-5 md:mt-0 text-base leading-5.5"
                >
                    Choose the solar package that fits your home and budget,
                    designed to give you long-term energy independence,
                    transparent pricing, and unmatched service quality.
                </p>
            </div>
            {/* <div className="md:flex md:gap-2 md:items-start md:mb-24 text-brand-deep-navy">
                <h2
                    ref={textRef}
                    className="font-raleway md:text-5xl text-3xl font-semibold"
                >
                    Simple Plans. Real Savings. Invest Once. Save for Decades.
                </h2>
                <p
                    ref={subtextRef}
                    className="font-inter text-brand-deep-navy/90 max-w-md md:pt-24 pt-5 md:mt-0 text-base leading-5.5"
                >
                    Choose the solar package that fits your home and budget,
                    designed to give you long-term energy independence,
                    transparent pricing, and unmatched service quality.
                </p>
            </div> */}

            <div className="flex items-center gap-3 w-fit mx-auto my-10 md:text-3xl text-xl font-mon">
                <span>Yearly</span>

                <button
                    onClick={() => setIsMonthly(!isMonthly)}
                    className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors duration-300 ${
                        isMonthly ? "bg-emerald-900" : "bg-brand-light-lime"
                    }`}
                >
                    <span
                        className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-md transition-transform duration-300 ${
                            isMonthly ? "translate-x-7" : "translate-x-1"
                        }`}
                    />
                </button>

                {/* <span className="w-20">{isMonthly ? "Monthly" : "Yearly"}</span> */}
                <span>Monthly</span>
            </div>

            {/* Pricing Grid */}
            <div className="grid md:grid-cols-3 gap-3">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`relative rounded-xl shadow-lg overflow-hidden p-8 transition-transform duration-300 hover:-translate-y-2 ${
                            plan.highlight
                                ? "bg-emerald-900 text-brand-light-bg"
                                : "bg-brand-light-bg text-brand-navy border border-slate-300"
                        }`}
                    >
                        {plan.highlight && (
                            <p
                                className="btn overflow-hidden absolute top-3 right-3 font-spaceGrotesk font-medium
                         bg-brand-lime text-brand-midnight px-4 py-0.5 text-sm rounded-full"
                            >
                                Most Popular
                            </p>
                        )}
                        {/* Header */}
                        <div>
                            {plan.title === "Essential" && (
                                <IoMdCube size={70} className="rotate-0 mb-1" />
                            )}
                            {plan.title === "Standard" && (
                                <GiMoebiusTriangle
                                    size={70}
                                    className="rotate-15"
                                />
                            )}
                            {plan.title === "Premium" && (
                                <GiCheckeredDiamond
                                    size={70}
                                    className="rotate-"
                                />
                            )}
                        </div>
                        <h3 className="font-spaceGrotesk text-2xl font-semibold mb-2 uppercase">
                            {plan.title}
                        </h3>
                        <p className="font-inter text-sm mb-6 opacity-80">
                            {plan.subtitle}
                        </p>
                        <h2 className="font-inter text-3xl md:text-4xl font-bold mb-6">
                            {isMonthly ? plan.price.monthly : plan.price.yearly}
                        </h2>

                        {/* Button */}

                        <button
                            onClick={() => openGmail()}
                            className={`btn relative overflow-hidden w-full py-3 cursor-pointer rounded-md font-spaceGrotesk font-semibold mb-8 transition-all ${
                                plan.highlight
                                    ? "bg-brand-light-lime text-brand-deep-navy hover:bg-brand-lime"
                                    : "bg-brand-navy text-brand-light-bg hover:bg-[--color-brand-highlight]"
                            }`}
                        >
                            {plan.button}
                        </button>

                        {/* Features */}
                        <ul className="space-y-3 text-sm text-left w-full">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <Check size={16} className="mt-0.5" />
                                    <span className="font-inter">
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Pricing;
