import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { Check } from "lucide-react";
import { useRef, useState } from "react";
import {
    GiMoebiusTriangle,
    GiCheckeredDiamond,
    GiUpgrade,
    GiAutoRepair,
} from "react-icons/gi";
import { IoMdCube } from "react-icons/io";
import { openGmail } from "../../utils/constants";

import { MdOutlineCleaningServices } from "react-icons/md";
import { GrHostMaintenance } from "react-icons/gr";
import { TbReportAnalytics } from "react-icons/tb";

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
            className="pricing max-w-7x mx-auto px-2 md:px-2 py-17 my-20"
        >
            <div className="h-[160vh] overflow-hidden relative rounded-md">
                <img
                    src="/hero-new.jpg"
                    alt=""
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
                <div className=" absolute inset-0 p-5 py-10 h-full w-full ">
                    <p className="capitalize text-5xl font-semibold text-brand-lime font-raleway text-center">
                        solar maintenance service plans
                    </p>
                    <div className="grid grid-cols-5 gap-2 mt-3 w-3xl mx-auto">
                        <div className="bg-brand-light-bg/10 backdrop-blur-sm p-3 rounded-md">
                            <div className="">
                                <MdOutlineCleaningServices
                                    size={40}
                                    className="font-extralight text-brand-lime/90"
                                />
                            </div>
                            <p className="text-cente text-xl font-medium leading-6 font-raleway mt-3 text-brand-light-bg">
                                Panel Cleaning
                            </p>
                        </div>
                        <div className="bg-brand-light-bg/10 backdrop-blur-sm p-3 rounded-md">
                            <div className="w-fit mx-aut ">
                                <GrHostMaintenance
                                    size={40}
                                    className="font-extralight text-brand-lime/90"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </div>
                            <p className="text-cente text-xl font-medium leading-6 font-raleway mt-3 text-brand-light-bg">
                                Routine Maintenace
                            </p>
                        </div>
                        <div className="bg-brand-light-bg/10 backdrop-blur-sm p-3 rounded-md">
                            <div className="w-fit mx-aut ">
                                <TbReportAnalytics
                                    size={45}
                                    className="font-extralight text-brand-lime/90"
                                />
                            </div>
                            <p className="text-cente text-xl font-medium leading-6 font-raleway mt-3 text-brand-light-bg">
                                Performance Reports
                            </p>
                        </div>
                        <div className="bg-brand-light-bg/10 backdrop-blur-sm p-3 rounded-md">
                            <div className="w-fit mx-aut ">
                                <GiUpgrade
                                    size={40}
                                    className="font-extralight text-brand-lime/90"
                                />
                            </div>
                            <p className="text-cente text-xl font-medium leading-6 font-raleway mt-3 text-brand-light-bg">
                                Upgrade Systems
                            </p>
                        </div>
                        <div className="bg-brand-light-bg/10 backdrop-blur-sm p-3 rounded-md">
                            <div className="w-fit mx-aut ">
                                <GiAutoRepair
                                    size={40}
                                    className="font-extralight text-brand-lime/90"
                                />
                            </div>
                            <p className="text-cente text-xl font-medium leading-6 font-raleway mt-3 text-brand-light-bg">
                                System Repair
                            </p>
                        </div>
                    </div>
                </div>

                <div className="absolute top-50 mx-10">
                    <div className="flex text-brand-light-bg items-center gap-3 w-fit mx-auto my-10 mt-12 md:text-3xl text-xl font-mon">
                        <span>Yearly</span>

                        <button
                            onClick={() => setIsMonthly(!isMonthly)}
                            className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors duration-300 ${
                                isMonthly
                                    ? "bg-emerald-900"
                                    : "bg-brand-light-lime"
                            }`}
                        >
                            <span
                                className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-md transition-transform duration-300 ${
                                    isMonthly
                                        ? "translate-x-7"
                                        : "translate-x-1"
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
                                        <IoMdCube
                                            size={70}
                                            className="rotate-0 mb-1"
                                        />
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
                                    {isMonthly
                                        ? plan.price.monthly
                                        : plan.price.yearly}
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
                                        <li
                                            key={i}
                                            className="flex items-start gap-2"
                                        >
                                            <Check
                                                size={16}
                                                className="mt-0.5"
                                            />
                                            <span className="font-inter">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
