const AdditionalExtra = () => {
    const extras = [
        {
            title: "Battery Add-On",
            img: "https://images.unsplash.com/photo-1655300256335-beef51a914fe?fm=jpg&q=80&w=800", // battery + panels
        },
        {
            title: "iBoost Water Heating",
            img: "https://images.unsplash.com/photo-1630608354129-6a7704150401?fm=jpg&q=80&w=800", // solar water system
        },
        {
            title: "Inverter Upgrade",
            img: "https://plus.unsplash.com/premium_photo-1682148196781-8bbcdfd7f537?fm=jpg&q=80&w=800", // inverter system
        },
        {
            title: "Voltage Optimiser",
            img: "https://images.unsplash.com/photo-1691421740425-48ff22b6d442?fm=jpg&q=80&w=800", // solar panel close-up
        },
        {
            title: "Panel Clean & Protect",
            img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?fm=jpg&q=80&w=800", // cleaning panels
        },
        {
            title: "Bird Nest Protection",
            img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?fm=jpg&q=80&w=800", // rooftop panels
        },
    ];

    return (
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
            {/* Section Header */}
            <div className="md:flex md:justify-between md:items-start mb-12">
                <h2 className="font-raleway text-[clamp(2rem,4vw,2.5rem)] font-semibold text-[--color-brand-navy] max-w-xl leading-tight">
                    More Power, More Savings — Smart Solar Upgrades for Your
                    Home
                </h2>
                <p className="font-inter text-[--color-brand-slate] max-w-md mt-4 md:mt-0 text-base leading-relaxed">
                    Take your solar setup further with smart add-ons designed to
                    boost performance, efficiency, and convenience. From
                    advanced batteries to cleaner panels, each upgrade enhances
                    your system’s long-term value.
                </p>
            </div>

            {/* Extras Grid */}
            <div className="-space-y-22">
                <div className="flex gap-2">
                    <div className="h-52 flex-1 bg-brand-light-lime rounded-md"></div>
                    <div className="h-64 flex-1 bg-brand-light-lime rounded-md"></div>
                    <div className="h-76 flex-1 bg-brand-light-lime rounded-md"></div>
                </div>
                <div className="flex items-end flex-row-reverse gap-2">
                    <div className="h-52 flex-1 bg-brand-light-lime rounded-md"></div>
                    <div className="h-64 flex-1 bg-brand-light-lime rounded-md"></div>
                    <div className="h-76 flex-1 bg-brand-light-lime rounded-md"></div>
                </div>
            </div>
            {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 ga">
                <div className="h-64 bg-red-500">f</div>
                <div className="h-52 bg-red-500">f</div>
                <div className="h-40 bg-red-500">f</div>
            </div> */}
        </section>
    );
};

export default AdditionalExtra;
