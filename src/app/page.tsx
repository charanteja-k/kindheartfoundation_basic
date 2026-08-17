"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Context is great for cleanup in React
    const ctx = gsap.context(() => {
      // Hero Text Reveal
      gsap.from(".hero-text", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.1,
      });

      // About Section Scroll Animation
      gsap.fromTo(".about-content", 
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        }
      );

      // Services Cards Stagger
      gsap.fromTo(".service-card", 
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 75%",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
        }
      );

      // CTA Animation
      gsap.fromTo(".cta-content", 
        { scale: 0.95, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
          },
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className="relative min-h-[85vh] flex flex-col justify-center items-center text-center px-6 bg-white overflow-hidden"
      >
        {/* Transparent Background Image */}
        <div 
          className="absolute inset-0 z-0 opacity-10 bg-center bg-contain bg-no-repeat pointer-events-none" 
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        />
        
        <div className="relative z-10 max-w-4xl mx-auto mt-10">
          <h1 className="hero-text text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
            Empowering Lives, <br />
            <span className="text-orange-500">Inspiring Hope.</span>
          </h1>
          <p className="hero-text text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            The Kind Heart Foundation provides essential services, education, and care to communities in need. Join us in building a better future.
          </p>
          <div className="hero-text flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-orange-600 text-white rounded-full font-medium hover:bg-orange-700 transition-all transform hover:-translate-y-1 w-full sm:w-auto shadow-lg shadow-orange-600/20">
              Get Involved
            </button>
            <button className="px-8 py-4 bg-orange-50 text-orange-700 rounded-full font-medium hover:bg-orange-100 transition-all w-full sm:w-auto">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-24 bg-gray-50 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="about-content grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">Who We Are</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Based in Indukurpet, the Kind Heart Foundation was established with a singular, unwavering mission: to extend a helping hand to those who need it most. We believe that compassion in action can transform entire communities.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Whether it's ensuring access to quality education for underprivileged children, facilitating vital healthcare services, or simply being there during times of crisis, our dedicated volunteers work tirelessly to create sustainable, positive change from the ground up.
              </p>
            </div>
            <div className="aspect-square bg-orange-50 rounded-3xl flex items-center justify-center border border-orange-100 shadow-sm overflow-hidden p-8">
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">We provide a range of support systems designed to uplift individuals and families.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Education Initiatives", desc: "We provide school supplies, tutoring, and scholarships to ensure every child in Indukurpet has the opportunity to learn and thrive." },
              { title: "Healthcare Access", desc: "Organizing free medical camps, health awareness drives, and providing critical support for families facing medical emergencies." },
              { title: "Community Relief", desc: "From food distribution drives to disaster relief, we stand by our community providing immediate aid when crisis strikes." }
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

      {/* CTA Section */}
      <section id="contact" ref={ctaRef} className="py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center cta-content bg-orange-600 rounded-[2.5rem] p-12 md:p-20 text-white shadow-xl shadow-orange-600/20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Be a Part of Our Journey</h2>
          <p className="text-orange-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Your support is the heartbeat of our foundation. Whether you volunteer your time or make a contribution, you are directly impacting lives in Indukurpet.
          </p>
          <button className="px-10 py-4 bg-white text-orange-600 rounded-full font-semibold text-lg hover:bg-orange-50 transition-all transform hover:scale-105 active:scale-95 shadow-sm">
            Donate Today
          </button>
        </div>
      </section>
    </div>
  );
}
