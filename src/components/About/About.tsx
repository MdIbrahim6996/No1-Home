import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { useAutoFetch } from "../../hooks/useAutoFetch";

gsap.registerPlugin(SplitText, ScrollTrigger);

const AboutSection = () => {
    const textRef = useRef(null);

    const about = useAutoFetch<any>("/About");

    useGSAP(() => {
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
                    trigger: ".about",
                    start: "top 80%",
                },
            }
        );
    });
    return (
        <section
            id="about"
            className="about md:px-[5%] px-2 md:py-40 py-20 flex flex-col md:flex-row gap-10 items-center"
        >
            {/* LEFT CONTENT */}
            <div className="md:w-[50%]">
                <button className="bg-brand-lime text-brand-deep-navy font-medium font-spaceGrotesk text-sm px-5 py-2 rounded-md">
                    About us
                </button>

                {/* <h2
                    // ref={textRef}
                    className="font-raleway tracking-tight text-4xl text-brand-midnight/80 leading-10 mt-6 md:mb-40 mb-20"
                >
                    <span className="text-brand-midnight font-medium">
                        No 1 Home’s
                    </span>{" "}
                    solar solutions help you save{" "}
                    <span className="text-brand-midnight font-medium">
                        money
                    </span>{" "}
                    while{" "}
                    <span className="text-brand-midnight font-medium">
                        giving
                    </span>{" "}
                    back to the{" "}
                    <span className="text-brand-midnight font-medium">
                        planet
                    </span>{" "}
                    . Our{" "}
                    <span className="text-brand-midnight font-medium">
                        experts
                    </span>{" "}
                    ensure top-quality
                    <span className="text-brand-midnight font-medium">
                        {" "}
                        installation
                    </span>{" "}
                    and{" "}
                    <span className="text-brand-midnight font-medium">
                        maximum
                    </span>{" "}
                    energy{" "}
                    <span className="text-brand-midnight font-medium">
                        savings
                    </span>{" "}
                    for every home.
                </h2> */}
                <h2
                    // ref={textRef}
                    className="font-raleway tracking-tight text-4xl text-brand-midnight leading-10 mt-6 md:mb-40 mb-20"
                >
                    {about?.title}
                </h2>

                <div className="flex items-center h-full text-brand-deep-navy">
                    <button className="gap-2 bg-brand-lime font-medium font-spaceGrotesk px-5 py-2 rounded-md hover:bg-[--color-brand-midnight] transition-colors">
                        Get A Free Quote
                    </button>
                    <button className="bg-brand-lime h-full px-5 py-2 rounded-md">
                        <ArrowUpRight size={23} />
                    </button>
                </div>
            </div>

            {/* RIGHT IMAGE GRID */}
            <div className="md:w-[55%] h-full  grid grid-cols-2 gap-2">
                <div className="col-span-2 md:col-span-1 h-130 row-span-2 rounded-xl overflow-hidden">
                    <img
                        // src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?fm=jpg&q=80&w=800"
                        src="about-1.webp"
                        alt="Solar panels on home roof"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="rounded-xl overflow-hidden h-70 md:h-full">
                    <img
                        src="about-2.webp"
                        // src="https://plus.unsplash.com/premium_photo-1682148196781-8bbcdfd7f537?fm=jpg&q=80&w=800"
                        alt="Solar technician installing panels"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="rounded-xl overflow-hidden">
                    <img
                        src="about-3.webp"
                        // src="https://images.unsplash.com/photo-1691421740425-48ff22b6d442?fm=jpg&q=80&w=800"
                        alt="Modern solar setup on building"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
