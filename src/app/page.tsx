"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DonateModal = ({ onClose }: { onClose: () => void }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Entrance animations
    gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "power2.out" });
    gsap.fromTo(contentRef.current, { scale: 0.8, opacity: 0, y: 30 }, { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.5)" });
  }, []);

  const handleClose = () => {
    // Exit animations
    gsap.to(contentRef.current, { scale: 0.9, opacity: 0, y: 20, duration: 0.3, ease: "power2.in" });
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.3, ease: "power2.in", onComplete: onClose });
  };

  return (
    <div 
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md opacity-0" 
      onClick={handleClose}
    >
      <div 
        ref={contentRef}
        className="relative w-full h-full max-w-7xl flex flex-col bg-white rounded-3xl p-6 md:p-8 shadow-2xl opacity-0" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 p-3 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-full transition-colors z-10 shadow-sm"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <div className="flex flex-col h-full text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex-shrink-0 mt-2">Support Our Cause</h3>
          <div className="relative flex-grow w-full rounded-2xl overflow-hidden mb-6 bg-gray-50 border border-gray-100 shadow-inner">
            <Image 
              src="/kindheartfoundation_donation_pic.jpg" 
              alt="Scan to Donate" 
              fill
              className="object-contain"
            />
          </div>
          <p className="text-gray-600 md:text-lg flex-shrink-0 font-medium">Scan the QR code to make a donation and help us make a difference. Proofs of our work are always shared on social media.</p>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const impactRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  const [isDonateOpen, setIsDonateOpen] = useState(false);

  useEffect(() => {
    // Global event listener for navbar
    const handleOpenDonate = () => setIsDonateOpen(true);
    window.addEventListener('openDonateModal', handleOpenDonate);

    const ctx = gsap.context(() => {
      // Hero Text Reveal
      gsap.fromTo(".hero-reveal", 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.1,
        }
      );

      // Utility function for text reveals on scroll
      const setupReveal = (sectionRef: React.RefObject<HTMLDivElement | null>, selector: string) => {
        gsap.fromTo(gsap.utils.toArray(selector), 
          { y: 40, opacity: 0 },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
          }
        );
      };

      setupReveal(aboutRef, ".about-reveal");
      setupReveal(servicesRef, ".service-card");
      setupReveal(servicesRef, ".services-header");
      setupReveal(impactRef, ".impact-reveal");
      setupReveal(ctaRef, ".cta-reveal");
    });

    return () => {
      ctx.revert();
      window.removeEventListener('openDonateModal', handleOpenDonate);
    };
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className="relative min-h-[85vh] flex flex-col justify-center items-center text-center px-6 bg-white overflow-hidden"
      >
        <div 
          className="absolute inset-0 z-0 opacity-10 bg-center bg-contain bg-no-repeat pointer-events-none" 
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        />
        
        <div className="relative z-10 max-w-4xl mx-auto mt-10">
          <div className="overflow-hidden mb-6">
            <h1 className="hero-reveal text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-tight">
              Transforming Lives Through <br />
              <span className="text-orange-500">Care and Compassion.</span>
            </h1>
          </div>
          <div className="overflow-hidden mb-10">
            <p className="hero-reveal text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              From free medical diagnostics to supporting children, the elderly, and the unsheltered, the Kind Heart Foundation is dedicated to bringing hope to those in need.
            </p>
          </div>
          <div className="hero-reveal flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => setIsDonateOpen(true)}
              className="px-8 py-4 bg-orange-600 text-white rounded-full font-medium hover:bg-orange-700 transition-all transform hover:-translate-y-1 w-full sm:w-auto shadow-lg shadow-orange-600/20"
            >
              Donate Now
            </button>
            <a href="#about" className="px-8 py-4 bg-orange-50 text-orange-700 rounded-full font-medium hover:bg-orange-100 transition-all w-full sm:w-auto text-center inline-block">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-24 bg-gray-50 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="overflow-hidden mb-6">
                <h2 className="about-reveal text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Our Journey & Mission</h2>
              </div>
              <div className="overflow-hidden mb-6">
                <p className="about-reveal text-gray-600 text-lg leading-relaxed">
                  What started as a free medical diagnostics center 1.5 years ago blossomed into the Kind Heart Foundation. Witnessing the profound need in our community inspired us to expand our reach and officially form this NGO to help children, the elderly, and those facing hunger and homelessness.
                </p>
              </div>
              <div className="overflow-hidden">
                <p className="about-reveal text-gray-600 text-lg leading-relaxed">
                  Our core belief is that compassion in action can transform communities. We are deeply committed to <strong>100% transparency</strong>. Every donation is documented, with visual proofs and stories regularly uploaded to our social media so you know exactly how your money is creating smiles.
                </p>
              </div>
            </div>
            <div className="about-reveal aspect-square bg-orange-50 rounded-3xl flex items-center justify-center border border-orange-100 shadow-sm overflow-hidden p-8">
              <Image 
                src="/kindheartfoundation.jpg" 
                alt="Kind Heart Foundation About" 
                width={500} 
                height={500} 
                className="w-full h-full object-contain rounded-xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" ref={servicesRef} className="py-24 bg-white px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 overflow-hidden">
            <h2 className="services-header text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">What We Do</h2>
            <p className="services-header text-gray-500 max-w-2xl mx-auto text-lg">Comprehensive support systems designed to uplift every vulnerable member of our community.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Medical Diagnostics & Camps", desc: "We run a free medical diagnostics center and host camps every 2nd Sunday of the month offering free blood, sugar, cholesterol tests, scans, and medicines." },
              { title: "Child Welfare & Education", desc: "Providing essential educational support, tutoring, food, and accessories like blankets to ensure children have the environment they need to thrive." },
              { title: "Elderly & Shelter Support", desc: "Delivering dedicated medical help for senior citizens, alongside food and critical support for the unsheltered and hungry." }
            ].map((service, index) => (
              <div key={index} className="service-card p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-orange-100 transition-all duration-300 group">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-6 text-xl font-bold group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Impact Section */}
      <section ref={impactRef} className="py-24 bg-gray-50 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white rounded-[2.5rem] p-10 md:p-16 border border-gray-100 shadow-xl shadow-gray-200/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
            <div className="relative z-10">
              <div className="overflow-hidden mb-6">
                <span className="impact-reveal inline-block px-4 py-1.5 bg-orange-100 text-orange-700 font-semibold text-sm rounded-full">Recent Highlight</span>
              </div>
              <div className="overflow-hidden mb-6">
                <h2 className="impact-reveal text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Mega Medical Camp at Thali Cheru Gramam</h2>
              </div>
              <div className="overflow-hidden mb-6">
                <p className="impact-reveal text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl">
                  On August 9th, we hosted a highly successful mega medical camp. We are deeply grateful to <strong>Dr. Ramaiya from SR Hospital</strong> who personally attended to oversee the camp. 
                </p>
              </div>
              <div className="overflow-hidden">
                <p className="impact-reveal text-gray-600 text-lg leading-relaxed max-w-3xl">
                  Hundreds of community members received free, comprehensive care—including blood tests, sugar tests, cholesterol level checks, and scans. Full reports and necessary medicines were provided completely free of charge. This is the power of community in action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" ref={ctaRef} className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center bg-orange-600 rounded-[2.5rem] p-12 md:p-20 text-white shadow-xl shadow-orange-600/20">
          <div className="overflow-hidden mb-6">
            <h2 className="cta-reveal text-3xl md:text-5xl font-bold tracking-tight">Be a Part of Our Journey</h2>
          </div>
          <div className="overflow-hidden mb-10">
            <p className="cta-reveal text-orange-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Your support is the heartbeat of our foundation. Every contribution directly impacts lives and creates documented smiles. We invite you to use our facilities or help us sustain them.
            </p>
          </div>
          <div className="overflow-hidden">
            <button 
              onClick={() => setIsDonateOpen(true)}
              className="cta-reveal px-10 py-4 bg-white text-orange-600 rounded-full font-semibold text-lg hover:bg-orange-50 transition-all transform hover:scale-105 active:scale-95 shadow-sm inline-block"
            >
              Donate Today
            </button>
          </div>
        </div>
      </section>

      {/* Donate Modal Component */}
      {isDonateOpen && <DonateModal onClose={() => setIsDonateOpen(false)} />}
    </div>
  );
}
