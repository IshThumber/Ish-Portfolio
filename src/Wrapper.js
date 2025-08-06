import { Helmet } from "react-helmet-async";
import FooterV2 from './components/Footer';
import Navbar from "./components/Navbar";
import HeroMain from "./sections/HeroMain";

const Wrapper = () => {
  return (
    <>
      <Helmet>
        <title>Ish Thumber | Cloud Engineer Portfolio</title>
        <meta name="description" content="Portfolio of Ish Thumber, Cloud Engineer and Developer." />
        <meta property="og:title" content="Ish Thumber Portfolio" />
        <meta property="og:description" content="Cloud-native engineer building resilient infra & elegant apps." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ishthumber.vercel.app/" />
        <meta property="og:image" content="/profile.ico" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ish Thumber Portfolio" />
        <meta name="twitter:description" content="Cloud-native engineer building resilient infra & elegant apps." />
        <meta name="twitter:image" content="/profile.ico" />
      </Helmet>
      <div className="min-h-screen transition-all duration-500">
        <div className="fixed z-50 w-full">
          <Navbar />
        </div>
        <div className="h-36 md:h-32"></div>
        <div className="max-h-screen bg-transparent">
          <HeroMain />
        </div>
        {/* <Footer /> */}


        <FooterV2 />
      </div>
    </>
  );
};

export default Wrapper;