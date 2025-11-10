import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "How much can I save with a solar PV system?",
        answer: "Savings depend on your energy usage, roof direction, and system size, but most homeowners reduce their electricity bills by up to 70%. With a battery system installed, you can store excess energy and use it at night, further increasing your savings and independence from the grid.",
    },
    {
        question: "How long does installation take?",
        answer: "Most residential installations are completed in just one day. Our expert team handles everything from roof prep to activation, ensuring a smooth and safe process.",
    },
    {
        question: "What kind of maintenance do solar panels need?",
        answer: "Solar panels are low maintenance. We recommend an annual inspection and cleaning to maintain peak efficiency and longevity.",
    },
    {
        question: "Will solar panels work on cloudy or rainy days?",
        answer: "Yes! Solar panels can still generate power from indirect sunlight. While production is lower, you’ll still produce usable electricity even during cloudy weather.",
    },
    {
        question: "How do solar panels actually work?",
        answer: "Solar panels convert sunlight into direct current (DC) electricity through photovoltaic cells. An inverter then converts this into alternating current (AC) electricity that powers your home.",
    },
    {
        question: "How do solar panels actually work?",
        answer: "Solar panels convert sunlight into direct current (DC) electricity through photovoltaic cells. An inverter then converts this into alternating current (AC) electricity that powers your home.",
    },
];

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="max-w-4xl mx-auto px-6 md:px-10 py-24 text-center">
            {/* Section Header */}
            <p className="font-inter text-brand-slate text-sm mb-2 uppercase tracking-wide">
                Trusted By
            </p>
            <h2 className="font-raleway text-[clamp(2rem,4vw,2.8rem)] font-semibold text-brand-navy mb-12 leading-tight">
                Any Questions. <br /> We Got You.
            </h2>

            {/* FAQ List */}
            <div className="space-y-1 text-left">
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div
                            key={index}
                            className={`rounded-2xl bg-brand-light-lime overflow-hidden transition-all duration-300 ${
                                isOpen ? "py-6" : "py-4"
                            }`}
                        >
                            <button
                                onClick={() =>
                                    setOpenIndex(isOpen ? null : index)
                                }
                                className="w-full flex justify-between items-center px-6 text-left"
                            >
                                <h3 className="font-raleway text-base md:text-lg font-semibold text-brand-navy">
                                    {faq.question}
                                </h3>
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-lime text-brand-navy">
                                    {isOpen ? (
                                        <Minus size={16} />
                                    ) : (
                                        <Plus size={16} />
                                    )}
                                </span>
                            </button>

                            {/* Answer */}
                            <div
                                className={`px-6 overflow-hidden transition-all duration-300 ${
                                    isOpen ? "max-h-96 mt-3" : "max-h-0"
                                }`}
                            >
                                <p className="font-inter text-brand-navy/80 text-sm md:text-base leading-5">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default FAQs;
