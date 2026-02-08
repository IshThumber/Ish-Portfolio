import { motion } from "motion/react";
import { FiAward, FiExternalLink, FiCalendar, FiShield } from "react-icons/fi";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import CustomHeadings from "../components/CustomHeadings";
import { certifications } from "../utils/General";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const CertificationCard = ({ certification }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative p-6 rounded-2xl bg-gray-800/30 backdrop-blur-md border border-gray-700/50 hover:border-mantle-400/50 hover:shadow-lg hover:shadow-mantle-400/10 hover:-translate-y-1 hover:bg-gray-800/50 transition-all duration-300 shadow-xl overflow-hidden min-h-[200px]"
    >
      {/* Badge Image with Gradient Fade */}
      {certification.badge && (
        <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-end pointer-events-none">
          <img
            src={certification.badge}
            alt={`${certification.name} badge`}
            className="w-36 h-36 md:w-44 md:h-44 object-contain opacity-30 group-hover:opacity-50 transition-opacity duration-500 mr-2"
            style={{
              maskImage: "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%)",
            }}
          />
        </div>
      )}

      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-mantle-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 max-w-[70%]">
        {/* Header with Date */}
        <div className="flex items-center gap-1.5 text-sm text-gray-400 bg-gray-900/50 px-3 py-1.5 rounded-full border border-gray-700 w-fit mb-4">
          <FiCalendar size={14} />
          <span>{certification.date}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-100 font-urbanist mb-2 group-hover:text-mantle-300 transition-colors duration-300">{certification.name}</h3>

        {/* Issuer */}
        <p className="text-sm font-medium mb-3" style={{ color: "var(--color-mantle-400)" }}>
          {certification.issuer}
        </p>

        {/* Description */}
        {certification.description && <p className="text-gray-400 text-sm leading-relaxed mb-4">{certification.description}</p>}

        {/* Action Link */}
        {certification.verifyUrl && (
          <a
            href={certification.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group/link"
            style={{ color: "var(--color-mantle-300)" }}
          >
            <FiShield size={16} />
            <span className="border-b border-transparent group-hover/link:border-current">Verify Credential</span>
            <FiExternalLink size={14} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

const CertificationsPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 selection:bg-mantle-500/30 selection:text-mantle-200">
      <title>Certifications | Ish Thumber</title>
      <meta name="description" content="Professional certifications and credentials of Ish Thumber, Cloud Engineer and Developer." />

      <Navbar />

      <PageTransition>
        {/* Background Texture */}
        <div
          className="fixed inset-0 z-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: "radial-gradient(#4b5563 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        ></div>

        <div className="h-24 lg:h-32" />

        <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-20 mt-4">
          {/* Header Section */}
          <CustomHeadings
            heading="Certify"
            subHeading="Credentials"
            description="Industry-recognized certifications that validate my expertise in cloud technologies and development."
            gradientType="certifications"
          />

          {/* Certifications Grid */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8" variants={containerVariants} initial="hidden" animate="visible">
            {certifications.map((cert) => (
              <CertificationCard key={cert.id} certification={cert} />
            ))}
          </motion.div>
        </main>
      </PageTransition>

      <Footer />
    </div>
  );
};

export default CertificationsPage;
