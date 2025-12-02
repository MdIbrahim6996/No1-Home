import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import { useAutoFetch } from "../../hooks/useAutoFetch";

const testimonials = [
    {
        reverse: false,
        light: true,
        title: "Super Smooth Experience.",
        description:
            "The team explained everything clearly and helped me choose the perfect 5kW system. My electricity bill dropped from £35 to almost £20 monthly!",
        reviewer: {
            name: "Rahul Mehta",
            role: "Homeowner",
            image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
        },
    },
    {
        reverse: true,
        light: false,
        title: "Excellent Support & Service.",
        description:
            "They handled my subsidy paperwork and installation very smoothly. Solar production is even better than I expected.",
        reviewer: {
            name: "Priya Nair",
            role: "Customer",
            image: "https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg",
        },
    },
    {
        reverse: false,
        light: false,
        title: "Fast & Clean Installation.",
        description:
            "Wiring, structure, and inverter setup were extremely clean. The mobile monitoring app is super useful.",
        reviewer: {
            name: "Arjun Patel",
            role: "Residential Client",
            image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg",
        },
    },
    {
        reverse: true,
        light: true,
        title: "Highly Professional Team.",
        description:
            "They surveyed my rooftop properly and gave a transparent cost breakdown. Savings are clearly visible month after month.",
        reviewer: {
            name: "Sneha Kulkarni",
            role: "Customer",
            image: "https://images.pexels.com/photos/413959/pexels-photo-413959.jpeg",
        },
    },
    {
        reverse: false,
        light: true,
        title: "Reliable After-Sales Support.",
        description:
            "Their team fixed a minor inverter setting issue the same day. Truly dependable service.",
        reviewer: {
            name: "Vikram Singh",
            role: "Homeowner",
            image: "https://images.pexels.com/photos/4098157/pexels-photo-4098157.jpeg",
        },
    },
    {
        reverse: true,
        light: false,
        title: "Great Pricing & Warranty.",
        description:
            "Compared many providers but they offered the best value. Solar production is consistent even on cloudy days.",
        reviewer: {
            name: "Aisha Khan",
            role: "Customer",
            image: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg",
        },
    },
];

const Testimonial = () => {
    const testimonialSheet = useAutoFetch<any>("/Testimonial");

    const textRef = useRef(null);
    const subtextRef = useRef(null);

    useGSAP(async () => {
        await document.fonts.ready;
        gsap.set(textRef.current, { opacity: 1 });
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
                y: "100%",
            },
            {
                y: "0%",
                stagger: 0.2,
                duration: 0.5,
                scrollTrigger: {
                    trigger: ".testimonial",
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
                    trigger: ".testimonial",
                    start: "top center",
                },
            }
        );
        gsap.fromTo(
            ".testimonial-grid .card",
            {
                y: "100%",
            },
            {
                y: "0%",
                stagger: 0.2,
                duration: 0.5,
                delay: 0.5,
                scrollTrigger: {
                    trigger: ".testimonial-grid",
                    start: "top 70%",
                },
            }
        );
    });
    return (
        <section id="testimonial" className="testimonial md:px-[5%] px-2 py-24">
            <div className="md:flex gap-2 items-start mb-24 text-brand-midnight">
                <h2
                    ref={textRef}
                    className="font-raleway md:text-5xl text-3xl font-semibold"
                >
                    Proven Results. Happy Homeowners.
                </h2>
                <p
                    ref={subtextRef}
                    className="font-inter ml-auto w-[90%] max-w-md md:pt-24 pt-5 md:mt-0 text-base leading-5.5"
                >
                    We don’t just install solar panels — we deliver lasting
                    value. Discover how homeowners across the country are saving
                    thousands every year while enjoying cleaner, more reliable
                    energy. These stories are proof that smart investments in
                    solar lead to brighter, more independent living.
                </p>
            </div>
            {/* <div className="md:flex gap-2 items-start mb-24 md:px-0 text-brand-midnight">
                <h2
                    ref={textRef}
                    className="font-raleway md:text-5xl text-3xl font-semibold "
                >
                    Proven Results. Happy Homeowners.
                </h2>
                <p
                    ref={subtextRef}
                    className="font-inter ml-auto w-[90%] text-slate-700 md:pt-24 pt-5 md:mt-0 text-base leading-5.5"
                >
                    We don’t just install solar panels — we deliver lasting
                    value. Discover how homeowners across the country are saving
                    thousands every year while enjoying cleaner, more reliable
                    energy. These stories are proof that smart investments in
                    solar lead to brighter, more independent living.
                </p>
            </div> */}
            {/* Section Header */}
            {/* <div className="md:flex md:gap-2 md:items-start mb-12">
                <h2
                    ref={textRef}
                    className="font-raleway text-6xl font-semibold text-brand-midnight"
                >
                    Proven Results. Happy Homeowners.
                </h2>
                <p
                    ref={subtextRef}
                    className="font-inter text-slate-700 max-w-md pt-20 md:mt-0 text-base leading-5.5"
                >
                    We don’t just install solar panels — we deliver lasting
                    value. Discover how homeowners across the country are saving
                    thousands every year while enjoying cleaner, more reliable
                    energy. These stories are proof that smart investments in
                    solar lead to brighter, more independent living.
                </p>
            </div> */}

            {/* Extras Grid */}
            <div className="testimonial-grid grid grid-cols-1 md:grid-cols-2 md:gap-3 gap-1">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard
                        title={
                            testimonialSheet &&
                            testimonialSheet[`card_title_${index + 1}`]
                        }
                        description={
                            testimonialSheet &&
                            testimonialSheet[`card_desc_${index + 1}`]
                        }
                        reviewer={testimonial.reviewer}
                        reverse={testimonial.reverse}
                        light={testimonial.light}
                        key={index}
                    />
                ))}
                {/* <TestimonialCard light={false} reverse={true} />
                <TestimonialCard light={false} />
                <TestimonialCard reverse={true} />
                <TestimonialCard />
                <TestimonialCard light={false} reverse={true} /> */}
                {/* <div className="card h-76 rounded-md overflow-hidden">
                    <img
                        src="https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg"
                        className="h-full w-full object-cover"
                        alt=""
                    />
                </div>
                <div className="card h-76 bg-brand-lime rounded-md p-3 flex flex-col justify-between font-raleway">
                    <div>
                        <RiDoubleQuotesR
                            size={50}
                            className="fill-brand-deep-navy stroke-brand-deep-navy"
                        />
                        <p className="font-medium text-brand-deep-navy font-spaceGrotesk text-2xl mt-4">
                            My Daily Wellness.
                        </p>
                    </div>
                    <div className="font- leading-5">
                        <p className="text-slate-800">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quae, totam!
                        </p>
                        <div className="flex items-center gap-3 mt-5">
                            <img
                                src="https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg"
                                className="h-10 w-10 object-cover rounded-full"
                                alt=""
                            />
                            <div className="-space-y-1 ">
                                <p className="font-semibold text-brand-deep-navy">
                                    Lorem, ipsum.
                                </p>
                                <p className="text-sm text-slate-800">
                                    Lorem, ipsum.
                                </p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default Testimonial;
