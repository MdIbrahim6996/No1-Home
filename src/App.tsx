import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
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
            <Navbar />
            <Home />
            <Footer />
        </>
    );
};

export default App;
