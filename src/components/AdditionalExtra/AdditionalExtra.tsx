import { SiCheckio } from "react-icons/si";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

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
    console.log(extras);
    return (
        <section className="mx-2 mb-20 rounded-b-md px-[5%] md:px-12 py-20 bg-emerald-900">
            {/* Section Header */}
            <div className="md:flex md:gap-2 md:items-start mb-24 text-brand-light-bg">
                <h2 className="font-raleway text-5xl font-semibold ">
                    More Power, More Savings — Smart Solar Upgrades for Your
                    Home
                </h2>
                <p className="font-inter text-brand-light-bg/90 max-w-md pt-24 md:mt-0 text-base leading-5.5">
                    Take your solar setup further with smart add-ons designed to
                    boost performance, efficiency, and convenience. From
                    advanced batteries to cleaner panels, each upgrade enhances
                    your system’s long-term value.
                </p>
            </div>

            {/* Extras Grid */}
            <div className="-space-y-22">
                <div className="flex gap-2">
                    {" "}
                    <div className="relative group h-100 flex-1 bg-brand-light-lime rounded-md overflow-hidden">
                        <img
                            src="/battery.jpg"
                            className="h-full w-full object-cover"
                            alt=""
                        />
                        <div
                            className="absolute inset-0 w-full h-full bg-black/5 translate-y-full group-hover:translate-y-0
                         transition-all duration-500"
                        >
                            <p
                                className="text-emerald-900 font-semibold font-spaceGrotesk text-2xl px-5 py-2 m-3
                             bg-white/25 backdrop-blur-sm w-fit mx-auto rounded-md border border-emerald-900/15"
                            >
                                Battery Add on
                            </p>
                            <div
                                className="text-emerald-900 font-inter text-lg px-5 mt-3 w-full absolute bottom-0 py-2
                             bg-white/25 backdrop-blur-sm rounded-md"
                            >
                                <div className="flex gap-2">
                                    <IoCheckmarkDoneSharp className="font-semibold text-2xl" />
                                    Compact size and easy installation
                                </div>
                                <div className="flex gap-2">
                                    <IoCheckmarkDoneSharp className="font-semibold text-2xl" />
                                    High energy density and efficiency
                                </div>
                                <div className="flex gap-2">
                                    <IoCheckmarkDoneSharp className="font-semibold text-2xl" />
                                    Excellent safety of LFePO4 battery
                                </div>
                                <div className="flex gap-2">
                                    <IoCheckmarkDoneSharp className="font-semibold text-2xl" />
                                    DoD up to 94.5%
                                </div>
                                <div className="flex gap-2">
                                    <IoCheckmarkDoneSharp className="font-semibold text-2xl" />
                                    Lifetime of 6,000 cycles
                                </div>
                                <div className="flex gap-2">
                                    <IoCheckmarkDoneSharp className="font-semibold text-2xl" />
                                    10 Years Warranty
                                </div>
                                <div
                                    className={`overflow-hidden w-full text-center mt-5 py-1 cursor-pointer rounded-md font-spaceGrotesk 
                                        font-semibold transition-all bg-emerald-900 text-brand-light-bg hover:bg-emerald-800`}
                                >
                                    Get One
                                </div>
                            </div>
                        </div>
                        {/* <div className="absolute bottom-0 h-full group-hover:translate-y-0 transition-all translate-y-[88%] w-full">
                            <div className="rounded-md m- p-2 h-full overflow-hidden  backdrop-blur-[10px] bg-linear-to-b from-red to-white/10 shadow-xl">
                                <h2 className="font-raleway text-center text-3xl text-emerald-900 font-semibold mb-2">
                                    Battery Add On
                                </h2>
                                <div className="px-3 font-raleway text-emerald-900">
                                    <div className="flex items-center  gap-2">
                                        <SiCheckio className="font-semibold text-2xl" />
                                        Lorem, ipsum dolor.
                                    </div>
                                    <div className="flex items-center  gap-2">
                                        <SiCheckio className="font-semibold text-2xl" />
                                        Lorem, ipsum dolor.
                                    </div>
                                    <div className="flex items-center  gap-2">
                                        <SiCheckio className="font-semibold text-2xl" />
                                        Lorem, ipsum dolor.
                                    </div>
                                    <div className="flex items-center  gap-2">
                                        <SiCheckio className="font-semibold text-2xl" />
                                        Lorem, ipsum dolor.
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="relative group h-88 flex-1 bg-brand-light-lime rounded-md overflow-hidden">
                        <img
                            src="/iboost.png"
                            className="h-full w-full object-cover"
                            alt=""
                        />
                        <div className="absolute bottom-0 h-full group-hover:translate-y-0 transition-all duration-500 translate-y-[88%] w-full">
                            <div className="rounded-md m- p-2 h-full overflow-hidden  backdrop-blur-[10px] bg-linear-to-b from-red to-white/10 shadow-xl">
                                <h2 className="font-raleway text-center text-3xl text-emerald-900 font-semibold mb-2">
                                    Battery Add On
                                </h2>
                                <div className="px-3 font-raleway text-emerald-900">
                                    <div className="flex items-center  gap-2">
                                        <SiCheckio className="font-semibold text-2xl" />
                                        Lorem, ipsum dolor.
                                    </div>
                                    <div className="flex items-center  gap-2">
                                        <SiCheckio className="font-semibold text-2xl" />
                                        Lorem, ipsum dolor.
                                    </div>
                                    <div className="flex items-center  gap-2">
                                        <SiCheckio className="font-semibold text-2xl" />
                                        Lorem, ipsum dolor.
                                    </div>
                                    <div className="flex items-center  gap-2">
                                        <SiCheckio className="font-semibold text-2xl" />
                                        Lorem, ipsum dolor.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative group h-76 flex-1 bg-brand-light-lime rounded-md overflow-hidden">
                        <img
                            src="/inverter.jpg"
                            className="h-full w-full object-cover"
                            alt=""
                        />
                        <div className="absolute bottom-0 h-full group-hover:translate-y-0 transition-all duration-500 translate-y-[88%] w-full">
                            <div className="rounded-md m- p-2 h-full overflow-hidden  backdrop-blur-[10px] bg-linear-to-b from-red to-white/10 shadow-xl">
                                <h2 className="font-raleway text-center text-3xl text-emerald-900 font-semibold mb-2">
                                    Battery Add On
                                </h2>
                                <div className="px-3 font-raleway text-emerald-900">
                                    <div className="flex items-center  gap-2">
                                        <SiCheckio className="font-semibold text-2xl" />
                                        Lorem, ipsum dolor.
                                    </div>
                                    <div className="flex items-center  gap-2">
                                        <SiCheckio className="font-semibold text-2xl" />
                                        Lorem, ipsum dolor.
                                    </div>
                                    <div className="flex items-center  gap-2">
                                        <SiCheckio className="font-semibold text-2xl" />
                                        Lorem, ipsum dolor.
                                    </div>
                                    <div className="flex items-center  gap-2">
                                        <SiCheckio className="font-semibold text-2xl" />
                                        Lorem, ipsum dolor.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-end flex-row-reverse gap-2">
                    {" "}
                    <div className="relative group h-100 flex-1 bg-brand-light-lime rounded-md overflow-hidden">
                        <img
                            src="/battery.jpg"
                            className="h-full w-full object-cover"
                            alt=""
                        />
                        <div className="absolute bottom-0 h-full group-hover:translate-y-0 transition-all translate-y-[88%] w-full">
                            <div className="rounded-md m- p-2 h-full overflow-hidden  backdrop-blur-[10px] bg-linear-to-b from-red to-white/10 shadow-xl">
                                <h2 className="font-raleway text-center text-3xl text-emerald-900 font-semibold mb-2">
                                    Battery Add On
                                </h2>
                                <div className="px-3 font-raleway text-emerald-900">
                                    <div className="flex items-center  gap-2">
                                        <SiCheckio className="font-semibold text-2xl" />
                                        Lorem, ipsum dolor.
                                    </div>
                                    <div className="flex items-center  gap-2">
                                        <SiCheckio className="font-semibold text-2xl" />
                                        Lorem, ipsum dolor.
                                    </div>
                                    <div className="flex items-center  gap-2">
                                        <SiCheckio className="font-semibold text-2xl" />
                                        Lorem, ipsum dolor.
                                    </div>
                                    <div className="flex items-center  gap-2">
                                        <SiCheckio className="font-semibold text-2xl" />
                                        Lorem, ipsum dolor.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative group h-88 flex-1 bg-brand-light-lime rounded-md overflow-hidden">
                        <img
                            src="/iboost.png"
                            className="h-full w-full object-cover"
                            alt=""
                        />
                        <div className="absolute bottom-0 h-full group-hover:translate-y-0 transition-all duration-500 translate-y-[88%] w-full">
                            <div className="rounded-md m- p-2 h-full overflow-hidden  backdrop-blur-[10px] bg-linear-to-b from-red to-white/10 shadow-xl">
                                <h2 className="font-raleway text-center text-3xl text-emerald-900 font-semibold mb-2">
                                    Battery Add On
                                </h2>
                                <div className="px-3 font-raleway text-emerald-900">
                                    <div className="flex items-center  gap-2">
                                        <SiCheckio className="font-semibold text-2xl" />
                                        Lorem, ipsum dolor.
                                    </div>
                                    <div className="flex items-center  gap-2">
                                        <SiCheckio className="font-semibold text-2xl" />
                                        Lorem, ipsum dolor.
                                    </div>
                                    <div className="flex items-center  gap-2">
                                        <SiCheckio className="font-semibold text-2xl" />
                                        Lorem, ipsum dolor.
                                    </div>
                                    <div className="flex items-center  gap-2">
                                        <SiCheckio className="font-semibold text-2xl" />
                                        Lorem, ipsum dolor.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative group h-76 flex-1 bg-brand-light-lime rounded-md overflow-hidden">
                        <img
                            src="/inverter.jpg"
                            className="h-full w-full object-cover"
                            alt=""
                        />
                        <div className="absolute bottom-0 h-full group-hover:translate-y-0 transition-all duration-500 translate-y-[88%] w-full">
                            <div className="rounded-md m- p-2 h-full overflow-hidden  backdrop-blur-[10px] bg-linear-to-b from-red to-white/10 shadow-xl">
                                <h2 className="font-raleway text-center text-3xl text-emerald-900 font-semibold mb-2">
                                    Battery Add On
                                </h2>
                                <div className="px-3 font-raleway text-emerald-900">
                                    <div className="flex items-center  gap-2">
                                        <SiCheckio className="font-semibold text-2xl" />
                                        Lorem, ipsum dolor.
                                    </div>
                                    <div className="flex items-center  gap-2">
                                        <SiCheckio className="font-semibold text-2xl" />
                                        Lorem, ipsum dolor.
                                    </div>
                                    <div className="flex items-center  gap-2">
                                        <SiCheckio className="font-semibold text-2xl" />
                                        Lorem, ipsum dolor.
                                    </div>
                                    <div className="flex items-center  gap-2">
                                        <SiCheckio className="font-semibold text-2xl" />
                                        Lorem, ipsum dolor.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="flex items-end flex-row-reverse gap-2">
                    <div className="h-52 flex-1 bg-brand-light-lime rounded-md"></div>
                    <div className="h-64 flex-1 bg-brand-light-lime rounded-md"></div>
                    <div className="h-76 flex-1 bg-brand-light-lime rounded-md"></div>
                </div> */}
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
