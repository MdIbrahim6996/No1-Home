import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="max-w-7xl mx-auto md:px-12 py-24 grid md:grid-cols-2 gap-12 items-start">
            {/* LEFT — Contact Info */}
            <div className="md:space-y-8 space-y-4 text-brand-deep-navy mt-2 px-4">
                {/* Chat */}
                <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 mt-1" />
                    <div>
                        <h4 className="font-raleway text-lg font-semibold">
                            Chat With Us
                        </h4>
                        <p className="font-inter text-sm">
                            Our friendly team is here to help.
                        </p>
                        <a
                            href="mailto:example@email.com"
                            className="font-inter font-medium block mt-1"
                        >
                            example@email.com
                        </a>
                    </div>
                </div>

                {/* Visit */}
                <div className="flex items-start gap-4 text-brand-deep-navy">
                    <Mail className=" w-6 h-6 mt-1" />
                    <div>
                        <h4 className="font-raleway text-lg font-semibold">
                            Visit Us
                        </h4>
                        <p className="font-inter text-[--color-brand-slate] text-sm">
                            Come say hello at our office HQ
                        </p>
                        <p className="font-inter font-medium mt-1">
                            123, Example Street
                        </p>
                    </div>
                </div>

                {/* Call */}
                <div className="flex items-start gap-4">
                    <Phone className="text-[--color-brand-navy] w-6 h-6 mt-1" />
                    <div>
                        <h4 className="font-raleway text-lg text-[--color-brand-navy] font-semibold">
                            Call Us
                        </h4>
                        <p className="font-inter text-[--color-brand-slate] text-sm">
                            Mon - Fri 8:00 AM to 9:00 PM
                        </p>
                        <a
                            href="tel:1234567890"
                            className="font-inter text-[--color-brand-navy] font-medium mt-1 block"
                        >
                            1234567890
                        </a>
                    </div>
                </div>
            </div>

            {/* RIGHT — Form */}
            <div className="bg-emerald-900 md:p-8 p-4 py-20 md:rounded-xl shadow-sm text-brand-light-lime">
                <h3 className="font-raleway text-2xl md:text-3xl font-semibold mb-2">
                    Got Ideas? We’ve got the skills. Let’s team up.
                </h3>
                <p className="font-inter mb-8 text-sm md:text-base">
                    Tell us more about yourself and what you have in mind.
                </p>

                <form className="space-y-6">
                    <div>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full bg-transparent border-b border-[--color-brand-navy] text-[--color-brand-navy] py-2 focus:outline-none font-inter text-sm md:text-base"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full bg-transparent border-b border-[--color-brand-navy] text-[--color-brand-navy] py-2 focus:outline-none font-inter text-sm md:text-base"
                        />
                    </div>
                    <div>
                        <textarea
                            placeholder="Tell us about the project."
                            rows={5}
                            className=" h-40 md:h-auto w-full bg-transparent border-b  py-2 focus:outline-none font-inter text-sm md:text-base"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-brand-light-lime hover:bg-brand-highlight text-brand-navy font-semibold py-3 rounded-md transition-colors font-inter"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
