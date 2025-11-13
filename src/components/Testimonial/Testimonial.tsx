import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { Quote } from "lucide-react";
import { useRef } from "react";
import { RiDoubleQuotesR } from "react-icons/ri";

const Testimonial = () => {
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
        <section className="testimonial px-[5%] py-24">
            {/* Section Header */}
            <div className="md:flex md:gap-2 md:items-start mb-12">
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
            </div>

            {/* Extras Grid */}
            <div className="testimonial-grid grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="card h-76 rounded-md overflow-hidden">
                    <img
                        src="/hero.jpg"
                        className="h-full w-full object-cover"
                        alt=""
                    />
                </div>
                <div className="card h-76 bg-brand-light-lime/60 rounded-md p-3 flex flex-col justify-between font-raleway">
                    <div>
                        <RiDoubleQuotesR
                            size={50}
                            className="fill-brand-midnight/80 stroke-brand-midnight/50"
                        />
                        <p className="font-semibold font-spaceGrotesk text-2xl mt-4">
                            My Daily Wellness.
                        </p>
                    </div>
                    <div className="font-light leading-5">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quae, totam!
                        </p>
                        <div className="flex items-center gap-3 mt-5">
                            <img
                                src="/hero.jpg"
                                className="h-10 w-10 object-cover rounded-full"
                                alt=""
                            />
                            <div className="-space-y-1">
                                <p className="font-semibold">Lorem, ipsum.</p>
                                <p className="text-sm">Lorem, ipsum.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card h-76 rounded-md overflow-hidden">
                    <img
                        src="/hero.jpg"
                        className="h-full w-full object-cover"
                        alt=""
                    />
                </div>
                <div className="card h-76 bg-brand-light-lime/60 rounded-md p-3 flex flex-col justify-between font-raleway">
                    <div>
                        <Quote
                            size={30}
                            className="fill-brand-midnight/90 stroke-brand-midnight/50"
                        />
                        <p className="font-semibold text-2xl mt-4">
                            My Daily Wellness.
                        </p>
                    </div>
                    <div className="font-light leading-5">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quae, totam!
                        </p>
                        <div className="flex items-center gap-3 mt-5">
                            <img
                                src="/hero.jpg"
                                className="h-10 w-10 object-cover rounded-full"
                                alt=""
                            />
                            <div className="-space-y-1">
                                <p className="font-semibold">Lorem, ipsum.</p>
                                <p className="text-sm">Lorem, ipsum.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card h-76 bg-brand-light-lime/60 rounded-md p-3 flex flex-col justify-between font-raleway">
                    <div>
                        <Quote
                            size={30}
                            className="fill-brand-midnight/90 stroke-brand-midnight/50"
                        />
                        <p className="font-semibold text-2xl mt-4">
                            My Daily Wellness.
                        </p>
                    </div>
                    <div className="font-light leading-5">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quae, totam!
                        </p>
                        <div className="flex items-center gap-3 mt-5">
                            <img
                                src="/hero.jpg"
                                className="h-10 w-10 object-cover rounded-full"
                                alt=""
                            />
                            <div className="-space-y-1">
                                <p className="font-semibold">Lorem, ipsum.</p>
                                <p className="text-sm">Lorem, ipsum.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card h-76 rounded-md overflow-hidden">
                    <img
                        src="/hero.jpg"
                        className="h-full w-full object-cover"
                        alt=""
                    />
                </div>
                <div className="card h-76 bg-brand-light-lime/60 rounded-md p-3 flex flex-col justify-between font-raleway">
                    <div>
                        <Quote
                            size={30}
                            className="fill-brand-midnight/90 stroke-brand-midnight/50"
                        />
                        <p className="font-semibold text-2xl mt-4">
                            My Daily Wellness.
                        </p>
                    </div>
                    <div className="font-light leading-5">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quae, totam!
                        </p>
                        <div className="flex items-center gap-3 mt-5">
                            <img
                                src="/hero.jpg"
                                className="h-10 w-10 object-cover rounded-full"
                                alt=""
                            />
                            <div className="-space-y-1">
                                <p className="font-semibold">Lorem, ipsum.</p>
                                <p className="text-sm">Lorem, ipsum.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card h-76 rounded-md overflow-hidden">
                    <img
                        src="/hero.jpg"
                        className="h-full w-full object-cover"
                        alt=""
                    />
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
