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
  const contactRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [isContactSubmitted, setIsContactSubmitted] = useState(false);

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
      setupReveal(contactRef, ".contact-reveal");
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

      {/* Recent Impact Section with Media */}
      <section ref={impactRef} className="py-24 bg-gray-50 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Box 1: Recent Highlight Text */}
            <div className="impact-reveal md:col-span-2 lg:col-span-4 bg-white rounded-[2.5rem] p-10 md:p-16 border border-gray-100 shadow-lg shadow-gray-200/40 relative overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
              <div className="relative z-10 max-w-4xl">
                <div className="overflow-hidden mb-6">
                  <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 font-semibold text-sm rounded-full">Recent Highlight</span>
                </div>
                <div className="overflow-hidden mb-6">
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Mega Medical Camp at Thali Cheru Gramam</h2>
                </div>
                <div className="overflow-hidden mb-6">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    On August 9th, we hosted a highly successful mega medical camp. We are deeply grateful to <strong>Dr. Ramaiya from SR Hospital</strong> who personally attended to oversee the camp. 
                  </p>
                </div>
                <div className="overflow-hidden">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Hundreds of community members received free, comprehensive care—including blood tests, sugar tests, cholesterol level checks, and scans. Full reports and necessary medicines were provided completely free of charge. This is the power of community in action.
                  </p>
                </div>
              </div>
            </div>

            {/* Box 2: YouTube Video */}
            <div className="impact-reveal md:col-span-2 lg:col-span-2 bg-white rounded-[2.5rem] p-4 sm:p-6 border border-gray-100 shadow-lg shadow-gray-200/40 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-4 px-2">Watch Our Latest Work</h3>
              <div className="w-full flex-grow aspect-video rounded-2xl overflow-hidden bg-gray-900 relative">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/GXsVTKwGoy8" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>

            {/* Box 3: Instagram Reel 1 */}
            <div className="impact-reveal md:col-span-1 lg:col-span-1 bg-white rounded-[2.5rem] p-4 sm:p-6 border border-gray-100 shadow-lg shadow-gray-200/40 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col">
              <a href="https://www.instagram.com/reels/DbcaFfozPqX/" target="_blank" rel="noopener noreferrer" className="w-full flex-grow min-h-[300px] lg:min-h-0 rounded-2xl overflow-hidden relative flex items-center justify-center group">
                <Image src="/insta-thumbnail.png" alt="Instagram Reel 1" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="relative z-10 flex flex-col items-center text-white text-center px-4 transform group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2 drop-shadow-md"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16.11 7.66v.01"/><path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/></svg>
                  <span className="font-semibold text-sm drop-shadow-md">Watch Reel</span>
                </div>
              </a>
            </div>

            {/* Box 4: Instagram Reel 2 */}
            <div className="impact-reveal md:col-span-1 lg:col-span-1 bg-white rounded-[2.5rem] p-4 sm:p-6 border border-gray-100 shadow-lg shadow-gray-200/40 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col">
              <a href="https://www.instagram.com/p/DUSS7uoj-R8/" target="_blank" rel="noopener noreferrer" className="w-full flex-grow min-h-[300px] lg:min-h-0 rounded-2xl overflow-hidden relative flex items-center justify-center group">
                <Image src="/insta-thumbnail-2.png" alt="Instagram Reel 2" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="relative z-10 flex flex-col items-center text-white text-center px-4 transform group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2 drop-shadow-md"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16.11 7.66v.01"/><path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/></svg>
                  <span className="font-semibold text-sm drop-shadow-md">Watch Reel</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section Placeholder */}
      <section id="contact" ref={contactRef} className="py-24 px-6 bg-white border-t border-gray-100">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 overflow-hidden">
            <h2 className="contact-reveal text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">Get In Touch</h2>
            <p className="contact-reveal text-gray-500 text-lg">Have questions or want to volunteer? Send us a message.</p>
          </div>
          
          <div className="contact-reveal bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden">
            {isContactSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center animate-in zoom-in duration-500">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600">Thank you for reaching out. We will get back to you shortly.</p>
                <button 
                  onClick={() => setIsContactSubmitted(false)}
                  className="mt-8 px-6 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-300 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form 
                onSubmit={(e) => { e.preventDefault(); setIsContactSubmitted(true); }}
                className="animate-in fade-in duration-500"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input type="text" required placeholder="e.g. Jane" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input type="text" required placeholder="e.g. Doe" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all" />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" required placeholder="jane@example.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all" />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea required rows={4} placeholder="How can we help?" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all resize-none"></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-orange-600 text-white rounded-xl font-medium hover:bg-orange-700 transition-all transform hover:-translate-y-1 hover:shadow-lg active:scale-95">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-24 px-6 bg-gray-50">
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
