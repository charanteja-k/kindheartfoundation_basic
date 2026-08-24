document.addEventListener("DOMContentLoaded", () => {
    // Current Year for footer
    document.getElementById("year").textContent = new Date().getFullYear();

    // GSAP Setup
    gsap.registerPlugin(ScrollTrigger);

    // Hero Background Slow Rotation
    gsap.to(".hero-bg-spin", {
        rotationY: -360,
        duration: 30,
        repeat: -1,
        ease: "linear",
        transformOrigin: "center center"
    });

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
    const setupReveal = (sectionId, selector) => {
        gsap.fromTo(gsap.utils.toArray(selector), 
            { y: 40, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: sectionId,
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

    setupReveal("#about", ".about-reveal");
    setupReveal("#services", ".service-card");
    setupReveal("#services", ".services-header");
    setupReveal("#impact", ".impact-reveal");
    setupReveal("#contact", ".contact-reveal");
    setupReveal("#cta", ".cta-reveal");

    // Donate Modal Logic
    const donateModal = document.getElementById("donate-modal");
    const donateContent = document.getElementById("donate-content");
    const openDonateBtns = ["open-donate-nav", "open-donate-hero", "open-donate-cta"];
    const closeDonateBtn = document.getElementById("close-donate");

    const openModal = () => {
        donateModal.classList.remove("pointer-events-none");
        gsap.fromTo(donateModal, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "power2.out" });
        gsap.fromTo(donateContent, { scale: 0.8, opacity: 0, y: 30 }, { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.5)" });
    };

    const closeModal = () => {
        gsap.to(donateContent, { scale: 0.9, opacity: 0, y: 20, duration: 0.3, ease: "power2.in" });
        gsap.to(donateModal, { opacity: 0, duration: 0.3, ease: "power2.in", onComplete: () => {
            donateModal.classList.add("pointer-events-none");
        }});
    };

    openDonateBtns.forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.addEventListener("click", openModal);
    });
    
    closeDonateBtn.addEventListener("click", closeModal);
    donateModal.addEventListener("click", closeModal);
    donateContent.addEventListener("click", (e) => e.stopPropagation());

    // Contact Form Logic
    const contactForm = document.getElementById("contact-form");
    const contactSuccess = document.getElementById("contact-success");
    const contactReset = document.getElementById("contact-reset");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            contactForm.classList.add("hidden");
            contactSuccess.classList.remove("hidden");
            contactSuccess.classList.add("flex");
        });
    }

    if (contactReset) {
        contactReset.addEventListener("click", () => {
            contactSuccess.classList.add("hidden");
            contactSuccess.classList.remove("flex");
            contactForm.classList.remove("hidden");
            contactForm.reset();
        });
    }

    // Instagram Reels Carousel
    const reels = [
        { id: 'DbcaFfozPqX', type: 'reels', image: './assets/images/insta-thumbnail.png' },
        { id: 'DUSS7uoj-R8', type: 'p', image: './assets/images/insta-thumbnail-2.png' }
    ];
    let activeReel = 0;
    
    const dotsContainer = document.getElementById("carousel-dots");
    const carouselContainer = document.getElementById("carousel-container");
    const prevBtn = document.getElementById("carousel-prev");
    const nextBtn = document.getElementById("carousel-next");

    const renderCarousel = () => {
        // Render dots
        dotsContainer.innerHTML = reels.map((_, idx) => `
            <button class="carousel-dot w-2 h-2 rounded-full transition-colors ${activeReel === idx ? 'bg-orange-600' : 'bg-gray-200 hover:bg-gray-300'}" data-index="${idx}" aria-label="Go to slide ${idx + 1}"></button>
        `).join('');

        // Render reels
        carouselContainer.innerHTML = reels.map((reel, idx) => `
            <a href="https://www.instagram.com/${reel.type}/${reel.id}/" target="_blank" rel="noopener noreferrer" 
               class="absolute inset-0 transition-opacity duration-1000 ${activeReel === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'} flex items-center justify-center group/reel">
                <img src="${reel.image}" alt="Instagram Reel ${idx + 1}" class="absolute inset-0 w-full h-full object-cover group-hover/reel:scale-105 transition-transform duration-700" />
                <div class="absolute inset-0 bg-black/40 group-hover/reel:bg-black/30 transition-colors duration-300"></div>
                <div class="relative z-10 flex flex-col items-center text-white text-center px-4 transform group-hover/reel:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mb-3 drop-shadow-md"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16.11 7.66v.01"/><path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/></svg>
                    <span class="font-semibold text-lg drop-shadow-md">Watch Reel</span>
                </div>
            </a>
        `).join('');

        // Attach dot listeners
        document.querySelectorAll(".carousel-dot").forEach(dot => {
            dot.addEventListener("click", (e) => {
                activeReel = parseInt(e.target.dataset.index);
                renderCarousel();
            });
        });
    };

    if (carouselContainer) {
        renderCarousel();

        prevBtn.addEventListener("click", () => {
            activeReel = activeReel === 0 ? reels.length - 1 : activeReel - 1;
            renderCarousel();
        });

        nextBtn.addEventListener("click", () => {
            activeReel = (activeReel + 1) % reels.length;
            renderCarousel();
        });

        // Auto-advance
        setInterval(() => {
            activeReel = (activeReel + 1) % reels.length;
            renderCarousel();
        }, 5000);
    }
});
