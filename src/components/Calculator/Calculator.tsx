import { useState } from "react";

export default function Calculator() {
    const [size, setSize] = useState(4);
    const [showAdvanced, setShowAdvanced] = useState(false);
    const [price, setPrice] = useState(0.3);
    const [uplift, setUplift] = useState(20);

    const YIELD_PER_KW = 850;

    const nf = new Intl.NumberFormat("en-GB", {
        maximumFractionDigits: 0,
    });

    const cf = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
    });

    const base = size * YIELD_PER_KW;
    const extra = base * (uplift / 100);
    const saving = extra * price;

    return (
        <div className="scrollbar-hide w-132 border h-120 overflow-y-scroll bg-brand-charcoal/20 backdrop-blur-md border-black/10 rounded-md p-6 shadow-xl font-spaceGrotesk">
            <h2 className="text-xl font-semibold text-brand-lime mb-1 leading-5">
                How much could maintenance save you each year?
            </h2>

            <p className="text-gray-60 mb-4 text-sm text-brand-light-bg">
                We use UK norms: 850 kWh/kW/yr baseline, +20% boost from
                maintenance, and £0.30/kWh.
            </p>

            {/* Slider */}
            <div>
                <div className="flex justify-between font-semibold text-brand-light-lime">
                    <span>System size</span>
                    <span>{size} kW</span>
                </div>
                <input
                    type="range"
                    min="1"
                    max="20"
                    step="0.5"
                    value={size}
                    onChange={(e) => setSize(Number(e.target.value))}
                    className="w-full mt-3 accent-brand-navy outline-none border-none focus:outline-none focus:ring-0"
                />
            </div>

            {/* Advanced Toggle */}
            <div
                className="text-brand-lime underline cursor-pointer mt-3 text-sm"
                onClick={() => setShowAdvanced(!showAdvanced)}
            >
                Advanced settings
            </div>

            {/* Advanced Box */}
            {showAdvanced ? (
                <div className="mt-3 space-y-3">
                    <div>
                        <label className="font-medium text-brand-light-bg">
                            Unit price (p/kWh)
                        </label>
                        <input
                            type="number"
                            step="0.01"
                            value={price}
                            onChange={(e) => setPrice(Number(e.target.value))}
                            className="w-full mt-1 outline-none border border-brand-light-lime/20 text-lime-100 rounded-lg p-2"
                        />
                    </div>

                    <div>
                        <label className="font-medium text-brand-light-bg">
                            Expected uplift (%)
                        </label>
                        <input
                            type="number"
                            step="1"
                            max={100}
                            value={uplift}
                            onChange={(e) => setUplift(Number(e.target.value))}
                            className="w-full mt-1 outline-none border border-brand-light-lime/20 text-lime-100 rounded-lg p-2"
                        />
                    </div>
                </div>
            ) : (
                <></>
            )}

            {/* Stats */}
            <div className="flex flex-col justify-between  mt-4">
                <div className="grid grid-cols-3 gap-3 text-brand-light-bg">
                    <div className="border border-brand-light-lime/20 rounded-lg p-3">
                        <div className="text-sm leading-4">
                            Baseline production
                        </div>
                        <div className="font-extrabold text-lg text-brand-lime">
                            {nf.format(base)} kWh/yr
                        </div>
                    </div>

                    <div className="border border-brand-light-lime/20 rounded-lg p-3">
                        <div className="text-sm">Extra energy (+{uplift}%)</div>
                        <div className="font-extrabold text-lg text-brand-lime">
                            +{nf.format(extra)} kWh/yr
                        </div>
                    </div>

                    <div className="border border-brand-light-lime/20 rounded-lg p-3">
                        <div className="text-sm">£ saving per year</div>
                        <div className="font-extrabold text-lg text-brand-lime">
                            {cf.format(saving)}
                        </div>
                    </div>
                </div>

                <button
                    className="w-full bg-brand-navy text-brand-light-bg font-bold py-3 rounded-lg mt-13"
                    onClick={() => (window.location.href = "#contact")}
                >
                    Get my free solar health check
                </button>

                <div className="text-brand-light-bg text-xs mt-2">
                    Assumptions: 850 kWh/kW/yr; uplift varies; price varies.
                    Actual results depend on your roof.
                </div>
            </div>
        </div>
    );
}
