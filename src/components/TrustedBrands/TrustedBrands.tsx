import Marquee from "react-fast-marquee";

const TrustedBrands = () => {
    return (
        <div className="relative">
            <div className="absolute h-full md:w-52 w-10 inset-0 z-2 bg-linear-to-r from-slate-100 via-slate-100 to-transparent" />
            <Marquee speed={150}>
                <img src="/solar-edge.png" className="mx-10 h-20" alt="" />
                <img src="/solariboost_logo.png" className="h-32" alt="" />
                <img src="/growatt.png" className="h-32" alt="" />
                <img src="/energyAce-Logo.png" className="h-20 mx-20" alt="" />
                <img src="/solis-logo.webp" className="h-15 mx-10" alt="" />
                <img src="/sunsynk-logo.avif" className="h-13 mx-20" alt="" />
                <img src="/trinasolar-logo.png" className="h-13 mr-5" alt="" />
            </Marquee>
            <div className="absolute h-full md:w-52 w-10 top-0 right-0 z-2 bg-linear-to-l from-slate-100 via-slate-100 to-transparent" />
        </div>
    );
};

export default TrustedBrands;
