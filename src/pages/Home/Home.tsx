import About from "../../components/About/About";
// import AdditionalExtra from "../../components/AdditionalExtra/AdditionalExtra";
import Benefits from "../../components/Benefits/Benefits";
import Contact from "../../components/Contact/Contact";
import FAQs from "../../components/FAQs/FAQs";
import Hero from "../../components/Hero/Hero";
import InstallationProcess from "../../components/InstallationProcess/InstallationProcess";
import NewTestimonial from "../../components/NewTestimonial/NewTestimonial";
import Pricing from "../../components/Pricing/Pricing";
import ROI from "../../components/ROI/ROI";
// import Testimonial from "../../components/Testimonial/Testimonial";
import TrustedBrands from "../../components/TrustedBrands/TrustedBrands";

const Home = () => {
    return (
        <div className="bg-slate-100">
            <Hero />
            <About />
            <InstallationProcess />
            {/* <SolarWorks /> */}
            <Pricing />
            <TrustedBrands />
            <Benefits />

            {/* <Packages />  same as Pricing*/}
            {/* <AdditionalExtra /> */}
            <ROI />
            <NewTestimonial />
            {/* <Testimonial /> */}
            <FAQs />
            <Contact />
        </div>
    );
};

export default Home;
