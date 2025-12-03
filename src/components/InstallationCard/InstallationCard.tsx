const InstallationCard = ({
    itemNo,
    title,
    subtitle,
    essential,
    standard,
    premium,
}: {
    itemNo: number;
    title: string;
    subtitle: string;
    essential: string;
    standard: string;
    premium: string;
}) => {
    return (
        <div
            className="card text-brand-light-bg font-inter text-lg px-5 w-full py-2
                             bg-brand-charcoal/15 backdrop-blur-sm rounded-md cursor-pointer"
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
                    What’s included in this plan:
                </p>
                <div className="my-5 space-y-1">
                    <p className="flex  gap-2 font-raleway font-medium leading-5 text-brand-light-bg/80 md:text-base">
                        <span className="font-semibold text-brand-lime">
                            Essential:
                        </span>
                        <span>{essential}</span>
                    </p>
                    <p className="flex  gap-2 font-raleway font-medium leading-5 text-brand-light-bg/80 md:text-base">
                        <span className="font-semibold text-brand-lime">
                            Standard:
                        </span>
                        <span>{standard}</span>
                    </p>
                    <p className="flex  gap-2 font-raleway font-medium leading-5 text-brand-light-bg/80 md:text-base">
                        <span className="font-semibold text-brand-lime">
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
