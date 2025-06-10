import Footer from "./components/Footer";
import HeroMain from "./sections/HeroMain";
import Navbar from "./sections/Navbar";

const Wrapper = () => {
  return (
    <>
      <div className="min-h-screen transition-all duration-500">
        <div className="fixed z-50 w-full">
          <Navbar />
        </div>
        <div className="h-36 md:h-32"></div>
        <div className="max-h-screen bg-transparent">
          <HeroMain />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Wrapper;