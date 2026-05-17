import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CustomHeadings = ({ heading, subHeading, description, gradientType }) => {
  const containerRef = useRef(null);
  const ghostRef = useRef(null);
  const signatureRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);

  const getGradientClass = () => {
    const types = ["about", "projects", "contact", "experiences", "resume", "certifications"];
    if (types.includes(gradientType)) return `gradient-${gradientType}`;
    return "gradient-about";
  };

  useGSAP(() => {
    // 1. Ghost text: opacity 0 -> 0.05, y 30 -> 0, duration 1.4s, ease expo.out
    gsap.fromTo(
      ghostRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 0.05,
        y: 0,
        duration: 1.4,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
      }
    );

    // 2. Signature span: y 40 -> 0, opacity 0 -> 1, duration 1.0s, delay 0.15s
    gsap.fromTo(
      signatureRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.0,
        delay: 0.15,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
      }
    );

    // 3. Main h2 words (split): each word masked, yPercent 110 -> 0
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current.querySelectorAll('.word-wrap .word'),
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 1.0,
          stagger: 0.07,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
          },
        }
      );
    }

    // 4. Description fade up
    if (descRef.current) {
      gsap.fromTo(
        descRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          delay: 0.3,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
          },
        }
      );
    }
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full mb-12 md:mb-16 text-center lg:text-left">
      {/* Ghost layer */}
      <div className="absolute inset-0 z-0 flex items-center justify-center lg:justify-start overflow-hidden pointer-events-none select-none">
        <span
          ref={ghostRef}
          aria-hidden="true"
          className="font-heading text-7xl md:text-8xl lg:text-9xl font-black text-white uppercase whitespace-nowrap"
        >
          {heading}
        </span>
      </div>

      {/* Foreground layer */}
      <div className="relative z-10 pt-8 md:pt-12 lg:pt-16">
        <span
          ref={signatureRef}
          className={`block font-signature text-3xl md:text-4xl gradient-text mb-2 ${getGradientClass()}`}
        >
          {subHeading}
        </span>
        
        <h2 ref={headingRef} className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight flex flex-wrap justify-center lg:justify-start gap-x-3">
          {heading.split(' ').map((word, i) => (
            <span key={i} className="word-wrap overflow-hidden inline-block">
              <span className="word inline-block">{word}</span>
            </span>
          ))}
        </h2>
        
        {description && (
          <p ref={descRef} className="mt-6 text-gray-400 max-w-2xl text-lg md:text-xl font-primary leading-relaxed mx-auto lg:mx-0">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default CustomHeadings;
