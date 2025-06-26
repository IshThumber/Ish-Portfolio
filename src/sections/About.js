import { motion } from 'framer-motion';
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import profile from "../assets/Profile.png";
import FooterConcept2 from "../components/Footer";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import TechList from "../components/TechList";

const ProfileSection = () => (
  <motion.article
    className="flex flex-col-reverse xl:flex-row justify-between items-center gap-12 bg-blue-gray-700/40 backdrop-blur-sm rounded-2xl shadow-xl p-6 lg:p-10 border border-blue-gray-600/30"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.6, ease: "easeOut" }}>
    <section className="flex flex-col justify-center w-full gap-8 text-base md:text-lg xl:w-[60%] p-2 text-wild-sand-200">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-semibold">
          Hey 👋🏻, I'm{" "}
          <strong className="text-yellow-300 underline decoration-purple-400 underline-offset-4">
            Ish Thumber
          </strong>
        </h2>

        <h3 className="text-lg font-black text-wild-sand-300 flex gap-x-2 flex-wrap">
          <span>Cloud Engineer</span>
          <span className="text-gray-500 text-xl">•</span>
          <span>Developer</span>
          <span className="text-gray-500 text-xl">•</span>
          <span>Curious Mind</span>
        </h3>
      </div>

      <div className="gap-4 flex flex-col">
        <p className="text-gray-200 leading-relaxed">
          As an{" "}
          <strong className="font-semibold text-wild-sand-100">
            AWS Community Builder
          </strong>
          , I work across{" "}
          <strong className="font-semibold text-yellow-200">AWS {" "}</strong>
          — designing cloud architectures and automating infrastructure
          with tools like{" "}
          <strong className="font-semibold text-yellow-200">
            Terraform
          </strong>{" "}
          and{" "}
          <strong className="font-semibold text-yellow-200">
            Kubernetes
          </strong>
          . I also build{" "}
          <strong className="font-semibold text-yellow-200">
            full-stack
          </strong>{" "}
          applications using{" "}
          <strong className="font-semibold text-yellow-200">
            React
          </strong>
          , Vite,{" "}
          <strong className="font-semibold text-yellow-200">
            Node.js
          </strong>
          , and{" "}
          <strong className="font-semibold text-yellow-200">
            Python
          </strong>
          , bridging cloud and code to deliver end-to-end solutions.
        </p>

        <p className="text-xl font-semibold text-genoa-400">
          Join me on this journey of innovation!
        </p>
      </div>

      <div className="flex flex-col gap-4 text-base font-bold sm:flex-row items-center sm:justify-between lg:justify-start md:gap-6 mt-4">
        <Link
          to="mailto:ishthumber343@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-5 py-3 rounded-xl bg-purple-400 hover:bg-gradient-to-r from-purple-400 to-purple-700 text-black font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-blue-gray-700">
            <span className="flex items-center gap-2">
              Say Hello 👋🏻
            </span>
          </button>
        </Link>

        <Link
          to="https://ishthumber.notion.site/ishthumber/Ish-Thumber-66ae5352f54b4e5695d285fca4644542"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-5 py-3 rounded-xl text-black bg-genoa-400 hover:bg-gradient-to-r from-genoa-400 to-genoa-700 font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-genoa-400 focus:ring-offset-2 focus:ring-offset-blue-gray-700 items-center">
            <span className="flex flex-row items-center gap-2">
              <span>Web Resume</span>
              <FiArrowUpRight className="text-lg" />
            </span>
          </button>
        </Link>
      </div>
    </section>

    <figure className="xl:w-[40%] flex justify-center items-center p-4">
      <div className="relative inline-block rounded-md group transform transition-all duration-500 hover:scale-105">
        <div className="absolute -inset-4 sm:-inset- bg-gradient-to-tr from-purple-500/40 to-genoa-400/30 rounded-3xl transform rotate-3 group-hover:rotate-0 transition-all duration-500 ease-out blur-sm group-hover:blur-md"></div>
        <div className="absolute -inset-4 sm:-inset-6 border-4 border-purple-400/50 rounded-3xl transform -rotate-2 group-hover:rotate-0 transition-all duration-500 ease-out"></div>

        <img
          src={profile}
          alt="Ish Thumber"
          className="relative h-64 w-64 sm:h-80 sm:w-80 object-cover rounded-2xl shadow-2xl border-4 border-blue-gray-800/80 transition-all duration-500 group-hover:shadow-purple-500/20"
        />
      </div>
    </figure>
  </motion.article>
);

const AboutPage = () => {
  return (
    <div className="min-h-screen transition-all duration-500">
      <header className="fixed z-50 w-full">
        <Navbar />
      </header>

      <PageTransition>
        <div className="h-32" />
        <main className="relative w-[97%] md:w-5/6 p-2 lg:p-6 font-gtReg text-wild-sand-200 mx-auto">
          <section className="w-full m-auto mb-10 xl:w-full text-center md:text-left">
            <h1 className="font-black tracking-tight font-urbanist text-[4rem] lg:text-9xl bg-gradient-to-r from-purple-300 to-genoa-300 inline-block text-transparent bg-clip-text xl:w-fit w-full">
              About Myself
            </h1>
          </section>

          <ProfileSection />

          <section className="p-4 mt-12 bg-blue-gray-700/30 backdrop-blur-sm rounded-xl shadow-lg border border-blue-gray-600/20">
            <TechList />
          </section>
        </main>
      </PageTransition>
      <FooterConcept2 />
    </div>
  );
};

export default AboutPage;
