const BenefitCard = ({
    index,
    title,
    img,
    desc,
}: {
    index: number;
    title: string;
    img: string;
    desc: string;
}) => {
    return (
        <div
            key={index}
            className="relative rounded-xl overflow-hidden text-left h-[280px] md:h-[250px] group"
        >
            {/* Background Image */}
            <img
                src={img}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay */}
            <div
                className={`absolute inset-0 ${
                    index === 2
                        ? "bg-[--color-brand-lime]/70"
                        : "bg-[--color-brand-light-lime]/70"
                }`}
            ></div>

            {/* Content */}
            <div className="relative z-10 p-6 md:p-8 text-[--color-brand-navy]">
                <h3 className="font-raleway text-lg md:text-xl font-semibold mb-3">
                    {title}
                </h3>
                <p className="font-inter text-sm md:text-base leading-relaxed">
                    {desc}
                </p>
            </div>
        </div>
    );
};

const Benefits = () => {
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

    return (
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-40 text-center">
            {/* Section Heading */}
            <h2 className="font-raleway text-5xl font-semibold text-brand-midnight mb-4">
                Why Solar PV Is the Smart Investment <br />
                for Your Home and the Planet
            </h2>

            <p className="max-w-2xl mx-auto text-brand-navy font-raleway leading-5 mb-12 md:text-lg">
                At No1 Home Solar, we believe in helping every household achieve
                long-term savings and energy independence. Discover the benefits
                that make solar PV the smartest choice for modern homeowners.
            </p>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-2">
                <div className="flex flex-col gap-2">
                    <BenefitCard
                        index={1}
                        title={benefits[0].title}
                        desc={benefits[0].desc}
                        img={benefits[0].img}
                    />
                    <BenefitCard
                        index={2}
                        title={benefits[1].title}
                        desc={benefits[1].desc}
                        img={benefits[1].img}
                    />
                </div>
                <div className="h-full w-full rounded-xl overflow-hidden">
                    <img src="/hero.jpg" alt="" className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-col gap-2">
                    <BenefitCard
                        index={3}
                        title={benefits[2].title}
                        desc={benefits[2].desc}
                        img={benefits[2].img}
                    />
                    <BenefitCard
                        index={4}
                        title={benefits[3].title}
                        desc={benefits[3].desc}
                        img={benefits[3].img}
                    />
                </div>
            </div>
        </section>
    );
};

export default Benefits;
