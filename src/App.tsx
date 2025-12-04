// import HeroCarousel from "./components/Carousel";
import Footer from "./components/Footer/Footer";
// import BeforeAfterSlider from "./components/ImageSlider";
// import Navbar from "./components/MobileNav";
import Navbar from "./components/Navbar/Navbar";
// import HeroCarousel from "./components/NewCarousel";
import Home from "./pages/Home/Home";

const App = () => {
    return (
        <>
            {/* <BeforeAfterSlider
                beforeSrc="/before-1.png"
                afterSrc="/after-1.png"
            />
            <BeforeAfterSlider
                beforeSrc="/before-2.png"
                afterSrc="/after-2.png"
            />
            <BeforeAfterSlider
                beforeSrc="/before-3.png"
                afterSrc="/after-3.png"
            /> */}
            {/* <GlassCard /> */}
            {/* <HeroCarousel /> */}
            <Navbar />
            <Home />
            <Footer />
        </>
    );
};

export default App;
