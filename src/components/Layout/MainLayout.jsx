import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import Header from "./Header";
import Footer from "./Footer";
import HeroSection from "../Home/HeroSection";
import FleetSection from "../Fleet/FleetSection";
import DestinationsSection from "../Destinations/DestinationsSection";
import BlogSection from "../Blog/BlogSection";
import ContactSection from "../Contact/ContactSection";
import AboutSection from "../About/AboutSection";
import TestimonialsSection from "../Testimonials/TestimonialsSection";

const { Content } = Layout;

const MainLayout = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case "fleet":
        return <FleetSection showAll={true} />;
      case "destinations":
        return <DestinationsSection showAll={true} />;
      case "blog":
        return <BlogSection showAll={true} />;
      case "contact":
        return <ContactSection />;
      case "about":
        return <AboutSection />;
      case "testimonials":
        return <TestimonialsSection />;
      default:
        return (
          <>
            <HeroSection 
              onExploreFleet={() => scrollToSection('fleet-preview')}
              onExploreDestinations={() => scrollToSection('destinations-preview')}
            />
            
            <div id="fleet-preview" className="home-preview-section">
              <FleetSection showAll={false} />
            </div>

            <div id="destinations-preview" className="home-preview-section alt-bg">
              <DestinationsSection showAll={false} />
            </div>

            <div className="home-preview-section">
              <TestimonialsSection />
            </div>

            <div className="home-preview-section alt-bg">
              <BlogSection showAll={false} />
            </div>

            <div className="home-preview-section">
              <AboutSection compact={true} />
            </div>
          </>
        );
    }
  };

  const handleNavigation = (section) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        activeSection={activeSection}
        setActiveSection={handleNavigation}
        isScrolled={isScrolled}
      />
      
      <Content>
        {renderContent()}
      </Content>

      <Footer 
        activeSection={activeSection}
        setActiveSection={handleNavigation}
      />

     
    </Layout>
  );
};

export default MainLayout;