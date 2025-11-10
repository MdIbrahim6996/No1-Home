const Hero = () => {
    return (
        <section
            className="relative overflow-hidden h-screen w- bg-cover bg-center flex flex-col justify-end m-1.5 px-8 md:px-20 pb-20 rounded-lg"
            style={{
                backgroundImage: "url('/hero.jpg')", // replace with your actual image path
            }}
        >
            {/* Overlay for better contrast */}
            {/* <div className="absolute inset-0 bg-[rgba(12,53,89,0.65)] rounded-2xl"></div> */}
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.50)] rounded-2xl"></div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl">
                <h1 className="font-raleway text-7xl font-semibold text-brand-light-bg leading-18">
                    Harness Your Home’s <br /> Natural Sunlight
                </h1>

                <p className="mt-4 max-w-md font-inter text-brand-lime text-base md:text-lg leading-5.5">
                    At No1 Home Solar, we help homeowners unlock their
                    property’s natural energy potential. Save money, reduce your
                    carbon footprint, and power your home sustainably with
                    premium solar systems.
                </p>
            </div>
        </section>
    );
};

export default Hero;
