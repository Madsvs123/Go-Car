
import React from 'react';
import { Row, Col, Typography, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import BookingForm from './BookingForm';

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div className="hero-gradient">
      <div className="hero-content" style={{ padding: '0', width: '100%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 50px' }}>
          <Row gutter={[32, 32]} align="middle">
          <Col xs={24} md={12}>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <Title level={1} style={{ color: 'white', fontSize: '3.5rem', margin: 0, lineHeight: '1.2' }}>
                {t('heroTitle')}
              </Title>
              <Title level={2} style={{ color: 'white', fontSize: '2.5rem', margin: 0, fontWeight: 400 }}>
                {t('heroSubtitle')}
              </Title>
              <Paragraph style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '18px', margin: 0 }}>
                {t('heroDescription')}
              </Paragraph>
            </Space>
          </Col>
          
          <Col xs={24} md={12}>
            <BookingForm />
          </Col>
        </Row>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
