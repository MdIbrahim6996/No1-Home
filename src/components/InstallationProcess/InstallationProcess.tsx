import { useGSAP } from "@gsap/react";
import InstallationCard from "../InstallationCard/InstallationCard";
import { useRef } from "react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
// import { useAutoFetch } from "../../hooks/useAutoFetch";

const installationSteps = [
    {
        id: 1,
        title: "Annual Solar Maintenance Visit",
        subtitle:
            "Every plan starts with a professional solar maintenance session.",
        essential: "Annual panel cleaning.",
        standard: "Cleaning + full electrical safety test.",
        premium:
            "Cleaning + safety test + advanced diagnostics in one complete service.",
    },
    {
        id: 2,
        title: "System Inspection & Diagnostic Checks",
        reftext: "By Plan:",
        subtitle:
            "We inspect your solar system for health, safety and performance.",
        essential: "Virtual system inspection.",
        standard: "Detailed inverter diagnostics.",
        premium: "Full diagnostics + thermal imaging + deep system testing.",
    },
    {
        id: 3,
        title: "Inverter & Output Performance Review",
        reftext: "By Plan:",
        subtitle:
            "Your inverter is checked and your system output is analysed.",
        essential: "Basic inverter check.",
        standard: "Advanced inverter diagnostics + performance guarantee.",
        premium: "Full inverter optimisation + annual efficiency tuning.",
    },
    {
        id: 4,
        title: "Call-Outs & Support Access",
        reftext: "By Plan:",
        subtitle: "Need help? Your response speed depends on your plan.",
        essential: "Standard support.",
        standard: "Priority call-out response.",
        premium: "Unlimited call-outs included (no extra fees).",
    },
    {
        id: 5,
        title: "Reporting & Monitoring",
        reftext: "By Plan:",
        subtitle:
            "Every visit ends with a clear summary of your system’s condition.",
        essential: "Basic output report.",
        standard: "Full technician photo report.",
        premium:
            "Full report + remote monitoring setup + battery health check.",
    },
    {
        id: 6,
        title: "Protection, Guarantees & Annual Review",
        reftext: "By Plan:",
        subtitle: "We keep your system safe and efficient long-term.",
        essential: "Annual report reminder.",
        standard: "System performance guarantee.",
        premium:
            "Parts & labour warranty (up to £X/yr) + extended lifetime guarantee.",
    },
];

const InstallationProcess = () => {
    const textRef = useRef(null);
    const subtextRef = useRef(null);

    // const install = useAutoFetch<any>("/InstallationProcess");

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
                        How Our Maintenance Plan Works
                    </h2>
                    <p
                        ref={subtextRef}
                        className="font-inter ml-auto w-[90%] text-brand-light-bg/90 max-w-md md:pt-24 pt-5 md:mt-0 text-base leading-5.5"
                    >
                        Our dedicated team of engineers offer end-to-end solar
                        maintenance care and solutions to meet your needs. This
                        is what the process looks like, once you’ve booked a
                        plan
                    </p>
                </div>

                <div className="install-grid grid md:grid-cols-3 md:gap-3 gap-2 h-full">
                    {installationSteps.map((item) => (
                        <InstallationCard
                            key={item.id}
                            itemNo={item.id}
                            title={item.title}
                            reftext={item.reftext}
                            subtitle={item.subtitle}
                            essential={item.essential}
                            standard={item.standard}
                            premium={item.premium}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InstallationProcess;
