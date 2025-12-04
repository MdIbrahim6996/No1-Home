import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const Contact = () => {
    const [selected, setSelected] = useState("");

    return (
        <section
            id="contact"
            className="max-w-7xl mx-auto md:px-12 py-24 grid md:grid-cols-2 gap-12 items-start"
        >
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

                <form className="space-y-6" autoComplete="off">
                    <div className="flex items-center gap-4">
                        <div className="flex-1">
                            <label htmlFor="first name" className="text-sm">
                                First Name <sup>*</sup>
                            </label>
                            <input
                                type="text"
                                id="first name"
                                required={true}
                                className="w-full bg-transparent border-b border-brand-light-lime pt-2 focus:outline-none font-inter text-sm md:text-base"
                            />
                        </div>
                        <div className="flex-1">
                            <label htmlFor="last name" className="text-sm">
                                Last Name <sup>*</sup>
                            </label>
                            <input
                                type="text"
                                id="last name"
                                required={true}
                                className="w-full bg-transparent border-b border-brand-light-lime pt-2 focus:outline-none font-inter text-sm md:text-base"
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex-1">
                            <label htmlFor="phone number" className="text-sm">
                                Phone Number <sup>*</sup>
                            </label>
                            <input
                                type="tel"
                                maxLength={10}
                                minLength={10}
                                id="phone number"
                                required={true}
                                className="w-full bg-transparent border-b border-brand-light-lime pt-2 focus:outline-none font-inter text-sm md:text-base"
                            />
                        </div>
                        <div className="flex-1">
                            <label htmlFor="post" className="text-sm">
                                Post Code <sup>*</sup>
                            </label>
                            <input
                                type="text"
                                id="post"
                                maxLength={8}
                                required={true}
                                className="w-full bg-transparent border-b border-brand-light-lime pt-2 focus:outline-none font-inter text-sm md:text-base"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full bg-transparent border-b border-brand-light-lime pt-2 focus:outline-none font-inter text-sm md:text-base"
                        />
                    </div>
                    <div className="flex items-center gap-5">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="freeQuote"
                                name="type"
                                checked={selected === "freeQuote"}
                                onChange={(e) => setSelected(e.target.value)}
                                required={true}
                                className="accent-brand-lime"
                            />
                            Free Quote
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="freeAssessment"
                                name="type"
                                checked={selected === "freeAssessment"}
                                onChange={(e) => setSelected(e.target.value)}
                                className="accent-brand-lime"
                            />
                            Free Assessment
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="else"
                                name="type"
                                checked={selected === "else"}
                                onChange={(e) => setSelected(e.target.value)}
                                className="accent-brand-lime"
                            />
                            Something Else
                        </label>
                    </div>
                    {selected === "else" && (
                        <div>
                            <textarea
                                placeholder="Tell us about the project."
                                rows={5}
                                className=" h-40 md:h-auto w-full bg-transparent border-b  py-2 focus:outline-none font-inter text-sm md:text-base"
                            ></textarea>
                        </div>
                    )}
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
