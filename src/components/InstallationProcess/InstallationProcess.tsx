import { useGSAP } from "@gsap/react";
import InstallationCard from "../InstallationCard/InstallationCard";
import { useRef } from "react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { useAutoFetch } from "../../hooks/useAutoFetch";

const installationSteps = [
    {
        id: 1,
        title: "Initial Consultation & Site Survey",
        description:
            "Our process begins with a detailed home assessment by one of our experienced surveyors. We evaluate your property’s roof direction, structure, and shading to ensure you get the most efficient solar setup possible.",
    },
    {
        id: 2,
        title: "Tailored System Design",
        description:
            "After the survey, our technical team creates a bespoke solar system plan designed specifically for your home. This includes panel placement, inverter positioning, and estimated energy savings — so you know exactly what to expect before we start.",
    },
    {
        id: 3,
        title: "Quotation & Approval",
        description:
            "Once your design is finalized, we provide a transparent, all-inclusive quotation. There are no hidden charges or surprise add-ons — just clear, honest pricing and professional guidance every step of the way.",
    },
    {
        id: 4,
        title: "Professional Installation",
        description:
            "Our certified installation engineers handle every aspect of setup — from panel mounting and electrical connections to inverter configuration. All work complies with UK safety standards and is completed with precision and care.",
    },
    {
        id: 5,
        title: "System Testing & Commissioning",
        description:
            "Before we leave, our team conducts a complete performance test to make sure your system is running perfectly. Once everything is checked and approved, your solar PV system is activated and begins producing clean energy immediately.",
    },
    {
        id: 6,
        title: "Handover & Aftercare",
        description:
            "After installation, we provide a full handover pack with all warranties, documentation, and maintenance guidance. Our support team remains available for future assistance, performance checks, and annual servicing to keep your system at peak efficiency.",
    },
];

const InstallationProcess = () => {
    const textRef = useRef(null);
    const subtextRef = useRef(null);

    const install = useAutoFetch<any>("/InstallationProcess");

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
                    trigger: ".install",
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
                    trigger: ".install",
                    start: "top center",
                },
            }
        );
        gsap.fromTo(
            ".install-grid .card",
            {
                y: "100%",
            },
            {
                y: "0%",
                stagger: 0.2,
                duration: 0.5,
                delay: 0.5,
                scrollTrigger: {
                    trigger: ".install-grid",
                    start: "top 70%",
                },
            }
        );
    });
    return (
        <section
            id="installation"
            className="install md:mx-2 relative mt-20 md:rounded-t-md overflow-hidden bg-emerald-900"
        >
            <img
                src="/panel-install.jpg"
                className="absolute inset-0 w-full h-full object-cover"
                alt=""
            />
            <div className="absolute inset-0 bg-black/50" />

            <div className="relative md:px-[5%] px-2 py-20">
                <div className="md:flex gap-2 items-start mb-24 text-brand-lime">
                    <h2
                        ref={textRef}
                        className="font-raleway md:text-5xl text-3xl font-semibold "
                    >
                        {install?.header}
                    </h2>
                    <p
                        ref={subtextRef}
                        className="font-inter ml-auto w-[90%] text-brand-light-bg/90 max-w-md md:pt-24 pt-5 md:mt-0 text-base leading-5.5"
                    >
                        {install?.subheader}
                    </p>
                </div>

                <div className="install-grid grid md:grid-cols-3 md:gap-3 gap-2 h-full">
                    {installationSteps.map((item, i) => (
                        <InstallationCard
                            itemNo={item.id}
                            title={install?.[`card_title_${i + 1}`]}
                            desc={install?.[`card_desc_${i + 1}`]}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InstallationProcess;
