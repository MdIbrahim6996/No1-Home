import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { FaMoneyBillTrendUp, FaMoneyBillWheat } from "react-icons/fa6";
import { PiPlant } from "react-icons/pi";

import type { IconType } from "react-icons";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import BeforeAfterSlider from "../ImageSlider";
import { useAutoFetch } from "../../hooks/useAutoFetch";

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

// const benefits = [
//     {
//         title: "Pay Less on Energy Bills",
//         desc: "Reduce your monthly electricity costs by generating your own clean, renewable power directly from sunlight.",
//         img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?fm=jpg&q=80&w=800", // solar roof
//     },
//     {
//         title: "Protect Against Rising Energy Rates",
//         desc: "Lock in predictable energy costs and safeguard your household budget from fluctuating utility prices.",
//         img: "https://plus.unsplash.com/premium_photo-1682148196781-8bbcdfd7f537?fm=jpg&q=80&w=800", // technician
//     },
//     {
//         title: "Increase Your Home’s Value",
//         desc: "Homes with solar PV systems are more attractive to buyers and often command higher resale prices.",
//         img: "https://images.unsplash.com/photo-1691421740425-48ff22b6d442?fm=jpg&q=80&w=800", // modern house
//     },
//     {
//         title: "Be Part of Clean Energy Efforts",
//         desc: "Every panel installed helps reduce carbon emissions, contributing to a sustainable future for all.",
//         img: "https://images.unsplash.com/photo-1630608354129-6a7704150401?fm=jpg&q=80&w=800", // nature + panels
//     },
//     {
//         title: "Maximize Your Return on Investment",
//         desc: "With today’s energy costs, most systems pay for themselves within 5–7 years while providing decades of savings.",
//         img: "https://images.unsplash.com/photo-1655300256335-beef51a914fe?fm=jpg&q=80&w=800", // panels perspective
//     },
// ];
const Benefits = () => {
    const imagePairs = [
        { before: "/before-1.png", after: "/after-1.png" },
        { before: "/before-2.png", after: "/after-2.png" },
        { before: "/before-3.png", after: "/after-3.png" },
    ];
    const textRef = useRef(null);
    const subtextRef = useRef(null);

    const benefits = useAutoFetch<any>("/Benefit");

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % imagePairs.length);
        }, 5000); // 5 seconds

        return () => clearInterval(interval);
    }, []);

    useGSAP(async () => {
        // Wait until all custom fonts are loaded
        await document.fonts.ready;

        // Force browser to finalize text layout
        gsap.set(subtextRef.current, { opacity: 1 });
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
                yPercent: 100,
            },
            {
                yPercent: 0,
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

        // gsap.from(subtextRef.current, {
        //     y: 30,
        //     opacity: 0,
        //     scale: 0.98,
        //     duration: 0.8,
        //     ease: "power3.out",
        //     delay: 0.15,
        //     scrollTrigger: {
        //         trigger: ".benefits",
        //         start: "top 75%",
        //     },
        // });
    });

    return (
        <section
            id="benefits"
            className="benefits md:px-[5%] px-2 py-20 my-20 bg-emerald-900 md:m-2 md:rounded-lg"
        >
            {/* Section Heading */}

            <div className="md:flex gap-2 items-start mb-24">
                <h2
                    ref={textRef}
                    className="font-raleway md:text-5xl text-3xl font-semibold text-brand-light-bg"
                >
                    {benefits?.header}
                </h2>
                <p
                    ref={subtextRef}
                    className="font-inter ml-auto w-[90%] text-brand-light-bg/90 max-w-md md:pt-24 pt-5 md:mt-0 text-base leading-5.5"
                >
                    {benefits?.subheader}
                </p>
            </div>
            {/* <div className="md:flex gap-2 items-start mb-24">
                <h2
                    ref={textRef}
                    className="font-raleway md:w-[60%] md:text-5xl text-3xl font-semibold text-brand-light-bg"
                >
                    Why Solar PV is the Smart Investment for Your Home and the
                    Planet.
                </h2>
                <p
                    ref={subtextRef}
                    className="overflow-hidden font-inter border ml-auto w-[90%] md:max-w-[40%] text-brand-light-bg/90 md:pt-24 pt-5 md:mt-0 text-base leading-5.5"
                >
                    At No1 Home Solar, we believe in helping every household
                    achieve long-term savings and energy independence. Discover
                    the benefits that make solar PV the smartest choice for
                    modern homeowners.
                </p>
            </div> */}
            {/* Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-2">
                <div className="flex flex-col gap-2">
                    <BenefitCard
                        index={1}
                        title={benefits?.card_title_1}
                        desc={benefits?.card_desc_1}
                        icon={MdOutlineEnergySavingsLeaf}
                    />
                    <BenefitCard
                        index={2}
                        title={benefits?.card_title_2}
                        desc={benefits?.card_desc_2}
                        icon={FaMoneyBillTrendUp}
                    />
                </div>
                <div className="h-full w-full rounded-xl overflow-hidden">
                    {/* <BeforeAfterSlider
                        beforeSrc="/before-3.png"
                        afterSrc="/after-3.png"
                    /> */}

                    <BeforeAfterSlider
                        beforeSrc={imagePairs[index].before}
                        afterSrc={imagePairs[index].after}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <BenefitCard
                        index={3}
                        title={benefits?.card_title_3}
                        desc={benefits?.card_desc_3}
                        icon={FaMoneyBillWheat}
                    />
                    <BenefitCard
                        index={4}
                        title={benefits?.card_title_4}
                        desc={benefits?.card_desc_4}
                        icon={PiPlant}
                    />
                </div>
            </div>
        </section>
    );
};

export default Benefits;
