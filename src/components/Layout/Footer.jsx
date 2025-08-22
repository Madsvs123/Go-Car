import React from 'react';
import { Layout, Row, Col, Space, Divider } from 'antd';
import { 
  FacebookOutlined, 
  TwitterOutlined, 
  InstagramOutlined, 
  LinkedinOutlined,
  CarOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Footer: AntFooter } = Layout;

const Footer = () => {
  const { t } = useTranslation();

  return (
    <AntFooter style={{ 
      padding: '60px 24px 20px', 
      background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
      color: 'white'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Row gutter={[48, 32]}>
          <Col xs={24} sm={12} md={6}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <CarOutlined style={{ fontSize: '28px', color: '#4F46E5', marginRight: '12px' }} />
              <span style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>
                GoCar
              </span>
            </div>
            <p style={{ color: '#cbd5e0', marginBottom: '24px', lineHeight: 1.6 }}>
              {t('footer_description', 'Your premium car rental service for unforgettable journeys. Experience the freedom of the open road with our exceptional fleet.')}
            </p>
            <Space size="large">
              <FacebookOutlined style={{ fontSize: '22px', color: '#cbd5e0', cursor: 'pointer' }} className="social-icon" />
              <TwitterOutlined style={{ fontSize: '22px', color: '#cbd5e0', cursor: 'pointer' }} className="social-icon" />
              <InstagramOutlined style={{ fontSize: '22px', color: '#cbd5e0', cursor: 'pointer' }} className="social-icon" />
              <LinkedinOutlined style={{ fontSize: '22px', color: '#cbd5e0', cursor: 'pointer' }} className="social-icon" />
            </Space>
          </Col>
          
          <Col xs={24} sm={12} md={6}>
            <h4 style={{ color: 'white', marginBottom: '20px', fontSize: '18px', fontWeight: 600 }}>
              {t('footer_company', 'Company')}
            </h4>
            <div style={{ color: '#cbd5e0' }}>
              <div style={{ marginBottom: '12px', cursor: 'pointer' }} className="footer-link">
                {t('nav_about', 'About Us')}
              </div>
              <div style={{ marginBottom: '12px', cursor: 'pointer' }} className="footer-link">
                {t('footer_ourFleet', 'Our Fleet')}
              </div>
              <div style={{ marginBottom: '12px', cursor: 'pointer' }} className="footer-link">
                {t('footer_destinations', 'Destinations')}
              </div>
              <div style={{ marginBottom: '12px', cursor: 'pointer' }} className="footer-link">
                {t('footer_testimonials', 'Testimonials')}
              </div>
              <div style={{ marginBottom: '12px', cursor: 'pointer' }} className="footer-link">
                {t('footer_careers', 'Careers')}
              </div>
            </div>
          </Col>
          
          <Col xs={24} sm={12} md={6}>
            <h4 style={{ color: 'white', marginBottom: '20px', fontSize: '18px', fontWeight: 600 }}>
              {t('footer_support', 'Support')}
            </h4>
            <div style={{ color: '#cbd5e0' }}>
              <div style={{ marginBottom: '12px', cursor: 'pointer' }} className="footer-link">
                {t('footer_faq', 'FAQ')}
              </div>
              <div style={{ marginBottom: '12px', cursor: 'pointer' }} className="footer-link">
                {t('footer_helpCenter', 'Help Center')}
              </div>
              <div style={{ marginBottom: '12px', cursor: 'pointer' }} className="footer-link">
                {t('footer_contactSupport', 'Contact Support')}
              </div>
              <div style={{ marginBottom: '12px', cursor: 'pointer' }} className="footer-link">
                {t('footer_roadsideAssistance', 'Roadside Assistance')}
              </div>
            </div>
          </Col>
          
          <Col xs={24} sm={12} md={6}>
            <h4 style={{ color: 'white', marginBottom: '20px', fontSize: '18px', fontWeight: 600 }}>
              {t('footer_contact', 'Contact')}
            </h4>
            <div style={{ color: '#cbd5e0' }}>
              <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
                <PhoneOutlined style={{ color: '#4F46E5', marginRight: '12px', fontSize: '16px' }} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
                <MailOutlined style={{ color: '#4F46E5', marginRight: '12px', fontSize: '16px' }} />
                <span>info@gocar.com</span>
              </div>
              <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'flex-start' }}>
                <EnvironmentOutlined style={{ color: '#4F46E5', marginRight: '12px', fontSize: '16px', marginTop: '2px' }} />
                <span>123 Main Street<br />City, State 12345</span>
              </div>
            </div>
          </Col>
        </Row>
        
        <Divider style={{ borderColor: '#4a5568', margin: '40px 0 24px' }} />
        
        <Row justify="space-between" align="middle">
          <Col xs={24} md={12}>
            <p style={{ color: '#cbd5e0', margin: 0, fontSize: '14px' }}>
              © 2024 GoCar. {t('footer_allRightsReserved', 'All rights reserved')}
            </p>
          </Col>
          <Col xs={24} md={12}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '24px', flexWrap: 'wrap' }}>
              <span style={{ color: '#cbd5e0', cursor: 'pointer', fontSize: '14px' }} className="footer-link">
                {t('footer_privacyPolicy', 'Privacy Policy')}
              </span>
              <span style={{ color: '#cbd5e0', cursor: 'pointer', fontSize: '14px' }} className="footer-link">
                {t('footer_termsOfService', 'Terms of Service')}
              </span>
              <span style={{ color: '#cbd5e0', cursor: 'pointer', fontSize: '14px' }} className="footer-link">
                {t('footer_cookiePolicy', 'Cookie Policy')}
              </span>
            </div>
          </Col>
        </Row>
      </div>

      <style jsx>{`
        .social-icon {
          transition: color 0.3s ease;
        }
        .social-icon:hover {
          color: #4F46E5 !important;
        }
        .footer-link {
          transition: color 0.3s ease;
        }
        .footer-link:hover {
          color: #ffffff !important;
        }
      `}</style>
    </AntFooter>
  );
};

export default Footer;