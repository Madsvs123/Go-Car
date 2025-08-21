
import React, { useState } from 'react';
import { Layout } from 'antd';
import Header from './Header';
import Footer from './Footer';
import HeroSection from '../Home/HeroSection';
import FleetSection from '../Fleet/FleetSection';
import DestinationsSection from '../Destinations/DestinationsSection';
import BlogSection from '../Blog/BlogSection';
import ContactSection from '../Contact/ContactSection';

const { Content } = Layout;

const MainLayout = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderContent = () => {
    switch (activeSection) {
      case 'fleet':
        return <FleetSection />;
      case 'destinations':
        return <DestinationsSection />;
      case 'blog':
        return <BlogSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return (
          <>
            <HeroSection />
            <FleetSection />
            <DestinationsSection />
            <BlogSection />
          </>
        );
    }
  };

  return (
    <Layout>
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <Content>
        {renderContent()}
      </Content>
      <Footer />
    </Layout>
  );
};

export default MainLayout;
