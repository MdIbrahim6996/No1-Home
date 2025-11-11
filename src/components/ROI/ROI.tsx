const ROI = () => {
    const stats = [
        {
            value: "95%",
            label: "Complete Customer Satisfaction",
        },
        {
            value: "10+",
            label: "Valuable Insights & Innovations.",
        },
        {
            value: "$10M",
            label: "Highly Efficient Financial Strategies",
        },
        {
            value: "50M",
            label: "Users Worldwide Affected",
        },
    ];

    return (
        <section className=" px-[5%] py-40 bg-brand-midnight text-center m-2 rounded-lg">
            {/* Accent Marker */}
            <div className="border w-fit px-10 py-1 border-brand-light-lime text-brand-light-lime rounded-full mx-auto mb-8">Return on Investment</div>

            {/* Description */}
            <p className="font-raleway text-lg md:text-4xl text-brand-light-lime max-w-3xl mx-auto leading-9 mb-12">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap- mt-10  w-3xl mx-auto">
                {stats.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-xl bg-brand-light-lim py-8 px-4 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                        <h3 className="font-raleway text-3xl md:text-4xl font-bold text-brand-lime mb-2">
                            {item.value}
                        </h3>
                        <p className="font-inter text-brand-light-lime text-sm md:text-base">
                            {item.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ROI;
