import React, { useEffect, useRef } from 'react';
import HeroSection from './components/HeroSection';
import FeaturesGrid from './components/FeaturesGrid';
import InfoSection from './components/InfoSection';
import HomeFAQs from './components/HomeFAQ';
import ContactForm from './components/ContactForm';
import MainFooter from './components/MainFooter';

// NEW components you'll create
import SocialProofSection from './components/SocialProofSection';
import CallToActionBanner from './components/CallToActionBanner';

const Home: React.FC = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
	if (ref.current) {
	  ref.current.scrollIntoView({ behavior: 'smooth' });
	}
  };
  


  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const hcf = document.querySelector('.hcf-profile');
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollTop > lastScrollTop) {
        if (hcf) hcf.classList.add('hcf-profile-fixed');
      } else if (scrollTop < lastScrollTop) {
        if (hcf) hcf.classList.remove('hcf-profile-fixed');
      }

      lastScrollTop = scrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="flex flex-col items-center justify-center w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-blue-50 via-white to-white">
        <HeroSection
          scrollToSection={scrollToSection}
          featuresRef={faqRef}
          contactRef={contactRef}
          aboutRef={aboutRef}
        />
      </section>

      {/* Features */}
      <section className="w-full bg-[#eff6ff] py-16">
        <div className="container mx-auto px-6 md:px-12">
          <FeaturesGrid />
        </div>
      </section>

      {/* Social Proof (NEW) */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-6 md:px-12">
          <SocialProofSection />
        </div>
      </section>

      {/* About Info */}
      <section className="w-full bg-white py-16" ref={aboutRef}>
        <div className="container mx-auto px-6 md:px-12">
          <InfoSection />
        </div>
      </section>

      {/* FAQs */}
      <section className="w-full bg-gray-50 py-16" ref={faqRef}>
        <div className="container mx-auto px-6 md:px-12">
          <HomeFAQs />
        </div>
      </section>

      {/* CTA Banner (NEW) */}
      <section className="w-full bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-6 md:px-12">
          <CallToActionBanner scrollToSection={() => scrollToSection(contactRef)} />
        </div>
      </section>

      {/* Contact Form */}
      <section className="w-full bg-white py-16" ref={contactRef}>
        <div className="container mx-auto px-6 md:px-12">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-100">
        <MainFooter />
      </footer>
    </main>
  );
};

export default Home;
