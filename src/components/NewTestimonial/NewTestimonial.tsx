import { useGSAP } from "@gsap/react";
import { RiDoubleQuotesR } from "react-icons/ri";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import { useAutoFetch } from "../../hooks/useAutoFetch";
gsap.registerPlugin(SplitText);

const NewTestimonial = () => {
    const textRef = useRef(null);
    const subtextRef = useRef(null);

    const testimonial = useAutoFetch<any>("/Testimonial");
    console.log("testimonial", testimonial);
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
                opacity: 0,
            },
            {
                y: "0%",
                opacity: 1,
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
            id="testimonial"
            className="testimonial font-montserrat h-scree  md:mx-2 mt-20 py-20 md:rounded-t-md overflow-hidden"
        >
            <div className="md:flex gap-2 items-start mb-8 md:px-[5%] text-brand-midnight">
                <h2
                    ref={textRef}
                    className="font-raleway md:text-5xl text-3xl font-semibold"
                >
                    {testimonial?.header}
                </h2>
                <p
                    ref={subtextRef}
                    className="font-inter ml-auto w-[90%] max-w-md md:pt-24 pt-5 md:mt-0 text-base leading-5.5"
                >
                    {testimonial?.subheader}
                </p>
            </div>
            {/* <div className="font-montserrat text-center mb-5">
                <p className="text-4xl">Read Reviews</p>
                <p className="text-4xl font-semibold">Ride With Confidence.</p>
            </div> */}
            <div className="text-brand-navy flex items-center w-fit ml-auto mr-16 gap-15 text-center">
                <p>
                    {" "}
                    <span className="font-medium">Rating</span> <br />
                    4.2/5
                </p>
                {/* <div className="font-semibold text-3xl flex items-center gap-">
                    {" "}
                    <svg
                        viewBox="0 0 20 20"
                        className="h-12 w-12"
                        aria-hidden="true"
                    >
                        <path
                            d="M10 1.5 12.47 7l5.53.4-4.2 3.57 1.29 5.37L10 13.9 4.91 16.3l1.29-5.33-4.2-3.57 5.53-.4L10 1.5Z"
                            fill="#00B67A"
                        />
                    </svg>
                    <p>TrustPilot</p>
                </div> */}
                <p>
                    <span className="font-medium">Based on</span> <br />
                    4,345 reviews
                </p>
            </div>

            <div className="grid md:grid-cols-4 grid-cols-1 md:gap-5 gap-10 md:mx-20 mx-2 mt-15">
                <div className="">
                    <RiDoubleQuotesR
                        size={80}
                        className="fill-brand-deep-navy stroke-brand-light-lime"
                    />
                    <p className="text-5xl capitalize text-brand-deep-navy mt-20">
                        What our customers are saying
                    </p>
                </div>
                <article className="max-w-md rounded-lg overflow-hidden hadow-[0_22px_60px_rgba(15,23,42,0.08)]">
                    {/* Quote */}
                    <div className="polygon bg-brand-light-lime p-4 pb-12">
                        <p className="leading-5 text-brand-deep-navy">
                            {testimonial?.content_1}
                        </p>{" "}
                        <div className="mt-15 w-fit ml-auto flex items-center">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <svg
                                    key={i}
                                    viewBox="0 0 20 20"
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M10 1.5 12.47 7l5.53.4-4.2 3.57 1.29 5.37L10 13.9 4.91 16.3l1.29-5.33-4.2-3.57 5.53-.4L10 1.5Z"
                                        fill="#00B67A"
                                    />
                                </svg>
                            ))}
                        </div>
                    </div>

                    {/* Stars */}

                    {/* Avatar + meta */}
                    <div className="-mt-7 ml-7 flex items-center gap-2">
                        <div
                            // src={"avatar"}
                            // alt={"name"}
                            className="h-10 w-10  bg-brand-deep-navy rounded-full object-cover"
                        />
                        <div className="flex flex-col">
                            <span className="text-[14px] font-semibold text-brand-deep-navy">
                                {testimonial?.author_1}
                            </span>
                            <span className="text-[12px] text-slate-500">
                                Customer
                            </span>
                        </div>
                    </div>
                </article>
                <article className="max-w-md rounded-lg overflow-hidden hadow-[0_22px_60px_rgba(15,23,42,0.08)]">
                    {/* Quote */}
                    <div className="polygon bg-brand-light-lime p-4 pb-12">
                        <p className="leading-5 text-slate-800">
                            {testimonial?.content_2}
                        </p>{" "}
                        <div className="mt-15 w-fit ml-auto flex items-center">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <svg
                                    key={i}
                                    viewBox="0 0 20 20"
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M10 1.5 12.47 7l5.53.4-4.2 3.57 1.29 5.37L10 13.9 4.91 16.3l1.29-5.33-4.2-3.57 5.53-.4L10 1.5Z"
                                        fill="#00B67A"
                                    />
                                </svg>
                            ))}
                        </div>
                    </div>

                    {/* Stars */}

                    {/* Avatar + meta */}
                    <div className="-mt-7 ml-7 flex items-center gap-2">
                        <div
                            // src={"avatar"}
                            // alt={"name"}
                            className="h-10 w-10  bg-brand-deep-navy rounded-full object-cover"
                        />
                        <div className="flex flex-col">
                            <span className="text-[14px] font-semibold text-brand-deep-navy">
                                {testimonial?.author_2}
                            </span>
                            <span className="text-[12px] text-slate-500">
                                Customer
                            </span>
                        </div>
                    </div>
                </article>
                <article className="max-w-md rounded-lg overflow-hidden hadow-[0_22px_60px_rgba(15,23,42,0.08)]">
                    {/* Quote */}
                    <div className="polygon bg-brand-light-lime p-4 pb-12">
                        <p className="leading-5 text-slate-800">
                            {testimonial?.content_3}
                        </p>{" "}
                        <div className="mt-15 w-fit ml-auto flex items-center">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <svg
                                    key={i}
                                    viewBox="0 0 20 20"
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M10 1.5 12.47 7l5.53.4-4.2 3.57 1.29 5.37L10 13.9 4.91 16.3l1.29-5.33-4.2-3.57 5.53-.4L10 1.5Z"
                                        fill="#00B67A"
                                    />
                                </svg>
                            ))}
                        </div>
                    </div>

                    {/* Stars */}

                    {/* Avatar + meta */}
                    <div className="-mt-7 ml-7 flex items-center gap-2">
                        <div
                            // src={"avatar"}
                            // alt={"name"}
                            className="h-10 w-10  bg-brand-deep-navy rounded-full object-cover"
                        />
                        <div className="flex flex-col">
                            <span className="text-[14px] font-semibold text-brand-deep-navy">
                                {testimonial?.author_3}
                            </span>
                            <span className="text-[12px] text-slate-500">
                                Customer
                            </span>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default NewTestimonial;
