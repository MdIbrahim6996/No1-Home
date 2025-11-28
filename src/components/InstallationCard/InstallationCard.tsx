const InstallationCard = ({
    itemNo,
    title,
    desc,
}: {
    itemNo: number;
    title: string;
    desc: string;
}) => {
    return (
        <div
            className="card text-brand-light-bg font-inter text-lg px-5 w-full py-2
                             bg-brand-charcoal/15 backdrop-blur-sm rounded-md cursor-pointer"
        >
            <p className="font-spaceGrotesk font-bold text-brand-light-lim md:text-6xl text-5xl">{itemNo}.</p>
            <div className="mt-10">
                <p className="font-raleway font-semibold text-brand-lime md:text-3xl text-2xl">{title}</p>
                <p className="font-raleway leading-5 mt-2 text-brand-light-bg/80">
                    {desc}
                </p>
            </div>
        </div>
    );
};

export default InstallationCard;
