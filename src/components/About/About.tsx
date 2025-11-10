import { ArrowUpRight } from "lucide-react";

const AboutSection = () => {
    return (
        <section className="max-w-7xl mx-auto px-8 md:px-16 py-40 grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <div>
                <button className="bg-brand-midnight text-brand-light-lime font-inter text-sm px-5 py-2 rounded-md mb-6">
                    About us
                </button>

                <h2 className="font-raleway tracking-tight text-[clamp(1.8rem,3vw,2.5rem)] font-mediu text-brand-midnight leading-10 mb-6">
                    No 1 Home’s solar solutions help you save money while giving
                    back to the planet. Our experts ensure top-quality
                    installation and maximum energy savings for every home.
                </h2>

                <div className="flex items-center h-full">
                    <button className=" gap-2 bg-brand-midnight text-brand-light-lime font-inter px-5 py-2 rounded-md hover:bg-[--color-brand-midnight] transition-colors">
                        Get A Free Quote
                    </button>
                    <button className="bg-brand-midnight text-brand-light-lime h-full px-5 py-2 rounded-md">
                        <ArrowUpRight size={22} />
                    </button>
                </div>
            </div>

            {/* RIGHT IMAGE GRID */}
            <div className="grid grid-cols-2 gap-2">
                <div className="col-span-1 row-span-2 rounded-xl overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?fm=jpg&q=80&w=800"
                        alt="Solar panels on home roof"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="rounded-xl overflow-hidden">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1682148196781-8bbcdfd7f537?fm=jpg&q=80&w=800"
                        alt="Solar technician installing panels"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="rounded-xl overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1691421740425-48ff22b6d442?fm=jpg&q=80&w=800"
                        alt="Modern solar setup on building"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
