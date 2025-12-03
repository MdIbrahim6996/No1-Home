const InstallationCard = ({
    itemNo,
    title,
    reftext,
    subtitle,
    essential,
    standard,
    premium,
}: {
    itemNo: number;
    title: string;
    reftext: string | undefined;
    subtitle: string;
    essential: string;
    standard: string;
    premium: string;
}) => {
    const scrollToSection = () => {
        const el = document.getElementById("pricing");
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div
            className="card text-brand-light-bg font-inter text-lg px-5 w-full py-2
                             bg-brand-charcoal/15 backdrop-blur-sm rounded-md"
        >
            <p className="font-spaceGrotesk font-bold text-brand-light-lim md:text-6xl text-5xl">
                {itemNo}.
            </p>
            <div className="mt-10">
                <p className="font-raleway font-semibold text-brand-lime md:text-3xl text-2xl leading-8">
                    {title}
                </p>
                <p className="font-raleway font-medium leading-5 mt-1 text-brand-light-lime/80 md:text-base">
                    {subtitle}
                </p>

                <p className="border-b border-brand-lime w-fit font-raleway font-medium leading-5 mt-8 text-brand-light-bg/80 md:text-base">
                    {reftext ? reftext : "What’s included in each plan:"}
                </p>

                <div className="my-5 space-y-1">
                    <p
                        onClick={() => scrollToSection()}
                        className="flex  gap-2 font-raleway font-medium leading-5 text-brand-light-bg/80 md:text-base"
                    >
                        <span className="font-semibold text-brand-lime cursor-pointer hover:underline">
                            Essential:
                        </span>
                        <span>{essential}</span>
                    </p>
                    <p
                        onClick={() => scrollToSection()}
                        className="flex  gap-2 font-raleway font-medium leading-5 text-brand-light-bg/80 md:text-base"
                    >
                        <span className="font-semibold text-brand-lime cursor-pointer hover:underline">
                            Standard:
                        </span>
                        <span>{standard}</span>
                    </p>
                    <p
                        onClick={() => scrollToSection()}
                        className="flex  gap-2 font-raleway font-medium leading-5 text-brand-light-bg/80 md:text-base"
                    >
                        <span className="font-semibold text-brand-lime cursor-pointer hover:underline">
                            Premium:
                        </span>
                        <span>{premium}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InstallationCard;
