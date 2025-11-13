import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { FaMoneyBillTrendUp, FaMoneyBillWheat } from "react-icons/fa6";
import { PiPlant } from "react-icons/pi";

import type { IconType } from "react-icons";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";

const BenefitCard = ({
    index,
    title,
    icon: Icon,
    desc,
}: {
    index: number;
    title: string;
    icon: IconType;
    desc: string;
}) => {
    return (
        <div
            key={index}
            className="rounded-lg overflow-hidden flex flex-col justify-between h-[280px] md:h-[250px] group
             bg-brand-light-lime/90"
        >
            {/* Content */}
            <div className="p-3 bg-emerald-900 rounded-md w-fit m-3">
                <Icon size={30} className="text-brand-light-lime" />
            </div>
            <div className="p-3 text-brand-deep-navy">
                <h3 className="font-spaceGrotesk text-lg md:text-2xl font-medium mb-3">
                    {title}
                </h3>
                <p className="font-inter text-sm md:text-base leading-4.5">
                    {desc}
                </p>
            </div>
        </div>
    );
};

const benefits = [
    {
        title: "Pay Less on Energy Bills",
        desc: "Reduce your monthly electricity costs by generating your own clean, renewable power directly from sunlight.",
        img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?fm=jpg&q=80&w=800", // solar roof
    },
    {
        title: "Protect Against Rising Energy Rates",
        desc: "Lock in predictable energy costs and safeguard your household budget from fluctuating utility prices.",
        img: "https://plus.unsplash.com/premium_photo-1682148196781-8bbcdfd7f537?fm=jpg&q=80&w=800", // technician
    },
    {
        title: "Increase Your Home’s Value",
        desc: "Homes with solar PV systems are more attractive to buyers and often command higher resale prices.",
        img: "https://images.unsplash.com/photo-1691421740425-48ff22b6d442?fm=jpg&q=80&w=800", // modern house
    },
    {
        title: "Be Part of Clean Energy Efforts",
        desc: "Every panel installed helps reduce carbon emissions, contributing to a sustainable future for all.",
        img: "https://images.unsplash.com/photo-1630608354129-6a7704150401?fm=jpg&q=80&w=800", // nature + panels
    },
    {
        title: "Maximize Your Return on Investment",
        desc: "With today’s energy costs, most systems pay for themselves within 5–7 years while providing decades of savings.",
        img: "https://images.unsplash.com/photo-1655300256335-beef51a914fe?fm=jpg&q=80&w=800", // panels perspective
    },
];
const Benefits = () => {
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
                    trigger: ".benefits",
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
                    trigger: ".benefits",
                    start: "top center",
                },
            }
        );
    });

    return (
        <section className="benefits px-[5%] py-20 my-20 text-cente bg-emerald-900 m-2 rounded-lg">
            {/* Section Heading */}
            <div className="md:flex md:gap-2 md:items-start mb-24 text-brand-light-bg">
                <h2
                    ref={textRef}
                    className="font-raleway text-5xl font-semibold "
                >
                    Why Solar PV Is the Smart Investment for Your Home and the
                    Planet
                </h2>
                <p
                    ref={subtextRef}
                    className="font-inter text-brand-light-bg/90 max-w-md pt-24 md:mt-0 text-base leading-5.5"
                >
                    At No1 Home Solar, we believe in helping every household
                    achieve long-term savings and energy independence. Discover
                    the benefits that make solar PV the smartest choice for
                    modern homeowners.
                </p>
            </div>
            {/* <h2 className="font-raleway text-5xl font-semibold text-brand-light-bg mb-4">
                Why Solar PV Is the Smart Investment <br />
                for Your Home and the Planet
            </h2> */}

            {/* <p className="max-w-2xl mx-auto text-brand-light-bg font-raleway leading-5 mb-12 md:text-lg">
                At No1 Home Solar, we believe in helping every household achieve
                long-term savings and energy independence. Discover the benefits
                that make solar PV the smartest choice for modern homeowners.
            </p> */}

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-2">
                <div className="flex flex-col gap-2">
                    <BenefitCard
                        index={1}
                        title={benefits[0].title}
                        desc={benefits[0].desc}
                        icon={MdOutlineEnergySavingsLeaf}
                    />
                    <BenefitCard
                        index={2}
                        title={benefits[1].title}
                        desc={benefits[1].desc}
                        icon={FaMoneyBillTrendUp}
                    />
                </div>
                <div className="h-full w-full rounded-xl overflow-hidden">
                    <img
                        src="/hero.jpg"
                        alt=""
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <BenefitCard
                        index={3}
                        title={benefits[2].title}
                        desc={benefits[2].desc}
                        icon={FaMoneyBillWheat}
                    />
                    <BenefitCard
                        index={4}
                        title={benefits[3].title}
                        desc={benefits[3].desc}
                        icon={PiPlant}
                    />
                </div>
            </div>
        </section>
    );
};

export default Benefits;
