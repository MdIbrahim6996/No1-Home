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
            className="card text-brand-light-bg font-inter text-lg px-5 mt-3 w-full py-2
                             bg-brand-charcoal/15 backdrop-blur-sm rounded-md"
        >
            <p className="font-spaceGrotesk font-bold text-6xl">{itemNo}.</p>
            <div className="mt-10">
                <p className="font-raleway font-semibold text-3xl">{title}</p>
                <p className="font-raleway leading-5 mt-2 text-brand-light-bg/80">
                    {desc}
                </p>
            </div>
        </div>
    );
};

export default InstallationCard;
