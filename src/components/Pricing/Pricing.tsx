import React from "react";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      title: "Starter",
      price: "₹79,000",
      subtitle: "Perfect for small homes",
      features: ["Up to 2kW system", "Standard inverter", "Installation & setup", "1-year warranty"],
      button: "Get Started",
      highlight: false,
    },
    {
      title: "Professional",
      price: "₹1,10,000",
      subtitle: "Best for growing families",
      features: [
        "Up to 5kW system",
        "Premium inverter",
        "Battery-ready setup",
        "3-year maintenance plan",
      ],
      button: "Get Started",
      highlight: true,
    },
    {
      title: "Enterprise",
      price: "Custom",
      subtitle: "For large homes or businesses",
      features: [
        "Unlimited system capacity",
        "Commercial-grade inverter",
        "Custom ROI optimization",
        "Dedicated support & monitoring",
      ],
      button: "Contact Us",
      highlight: false,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 text-center">
      <h2 className="font-raleway text-[clamp(2rem,4vw,2.5rem)] font-semibold text-brand-navy mb-3">
        Pricing Plans
      </h2>
      <p className="font-inter text-[--color-brand-slate] mb-12">
        Choose the solar package that fits your home’s needs.
      </p>

      {/* Pricing Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl shadow-lg overflow-hidden p-8 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 ${
              plan.highlight
                ? "bg-brand-lime text-brand-navy"
                : "bg-brand-light-bg text-brand-navy"
            }`}
          >
            {/* Header */}
            <h3 className="font-raleway text-lg font-semibold mb-2 uppercase">
              {plan.title}
            </h3>
            <p className="font-inter text-sm mb-6 opacity-80">
              {plan.subtitle}
            </p>
            <h2 className="font-raleway text-3xl md:text-4xl font-bold mb-6">
              {plan.price}
            </h2>

            {/* Button */}
            <button
              className={`w-full py-3 rounded-full font-inter font-semibold mb-8 transition-all ${
                plan.highlight
                  ? "bg-[--color-brand-navy] text-white hover:bg-[--color-brand-midnight]"
                  : "bg-[--color-brand-lime] text-[--color-brand-navy] hover:bg-[--color-brand-highlight]"
              }`}
            >
              {plan.button}
            </button>

            {/* Features */}
            <ul className="space-y-3 text-sm text-left w-full">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check size={16} className="mt-[2px]" />
                  <span className="font-inter">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
