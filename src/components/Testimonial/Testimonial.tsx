import { Quote } from "lucide-react";

const Testimonial = () => {
    return (
        <section className="px-[5%] py-24">
            {/* Section Header */}
            <div className="md:flex md:justify-between md:items-start mb-12">
                <h2 className="font-raleway text-5xl font-semibold text-[--color-brand-navy] max-w-xl leading-tight">
                    Proven Results. Happy Homeowners.
                </h2>
                <p className="font-inter text-[--color-brand-slate] max-w-md mt-4 md:mt-0 text-base leading-relaxed">
                    We don’t just install solar panels — we deliver lasting
                    value. Discover how homeowners across the country are saving
                    thousands every year while enjoying cleaner, more reliable
                    energy. These stories are proof that smart investments in
                    solar lead to brighter, more independent living.
                </p>
            </div>

            {/* Extras Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <div className="h-76 rounded-md overflow-hidden">
                    <img
                        src="/hero.jpg"
                        className="h-full w-full object-cover"
                        alt=""
                    />
                </div>
                <div className="h-76 bg-brand-light-lime/60 rounded-md p-3 flex flex-col justify-between font-raleway">
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
                <div className="h-76 rounded-md overflow-hidden">
                    <img
                        src="/hero.jpg"
                        className="h-full w-full object-cover"
                        alt=""
                    />
                </div>
                <div className="h-76 bg-brand-light-lime/60 rounded-md"></div>
                <div className="h-76 bg-brand-light-lime/60 rounded-md"></div>
                <div className="h-76 rounded-md overflow-hidden">
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
