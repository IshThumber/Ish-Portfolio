import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HeroMain from "./sections/HeroMain";

const Wrapper = () => {
  return (
    <>
      <div className="min-h-screen transition-all duration-500">
        <div className="fixed z-50 w-full">
          <Navbar />
        </div>
        <div className="h-36 md:h-32" />
        <div className="max-h-screen bg-transparent">
          <HeroMain />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Wrapper;
