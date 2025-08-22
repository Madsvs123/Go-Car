import React from 'react';
import { Row, Col, Card, Typography, Space, Button, Statistic, Divider } from 'antd';
import { 
  HeartOutlined,
  CarOutlined,
  GlobalOutlined,
  StarOutlined,
  ArrowRightOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
  TrophyOutlined
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Title, Text, Paragraph } = Typography;

const AboutSection = ({ compact = false }) => {
  const { t } = useTranslation();

  const companyStats = [
    { number: '10,000+', label: t('about_happyCustomers'), icon: <HeartOutlined /> },
    { number: '500+', label: t('about_vehicles'), icon: <CarOutlined /> },
    { number: '50+', label: t('about_locations'), icon: <GlobalOutlined /> },
    { number: '98%', label: t('about_satisfactionRate'), icon: <StarOutlined /> }
  ];

  const values = [
    {
      icon: <SafetyCertificateOutlined />,
      title: t('about_safetyFirst'),
      description: t('about_safetyDesc')
    },
    {
      icon: <TeamOutlined />,
      title: t('about_customerCentric'),
      description: t('about_customerDesc')
    },
    {
      icon: <TrophyOutlined />,
      title: t('about_excellence'),
      description: t('about_excellenceDesc')
    }
  ];

  if (compact) {
    return (
      <div style={{ padding: '30px 0'}}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <Row gutter={[48, 32]} align="middle">
            <Col xs={24} lg={12}>
              <Title level={2} style={{ color: '#1a202c', marginBottom: '16px' }}>
                {t('about_aboutUs')}
              </Title>
              <Paragraph style={{ fontSize: '16px', color: '#64748b', lineHeight: 1.6, marginBottom: '24px' }}>
                {t('about_compactDesc')}
              </Paragraph>
              <Button 
                type="primary" 
                size="large"
                onClick={() => window.location.hash = 'about'}
                style={{
                  background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
                  border: "none",
                  fontWeight: 600,
                  boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)'
                }}
              >
                {t('about_learnMore')}
                <ArrowRightOutlined style={{ marginLeft: '8px' }} />
              </Button>
            </Col>
            <Col xs={24} lg={12}>
              <Row gutter={[16, 16]}>
                {companyStats.map((stat, index) => (
                  <Col xs={12} key={index}>
                    <Card 
                      style={{ 
                        textAlign: 'center', 
                        border: 'none', 
                        background: 'rgba(255, 255, 255, 0.8)', 
                        height: '100%',
                        borderRadius: '12px',
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
                      }}
                    >
                      <div style={{ fontSize: '24px', color: '#4F46E5', marginBottom: '8px' }}>
                        {stat.icon}
                      </div>
                      <Statistic
                        value={stat.number}
                        valueStyle={{ fontSize: '20px', fontWeight: 'bold', color: '#1a202c' }}
                      />
                      <Text type="secondary" style={{ fontSize: '12px' }}>{stat.label}</Text>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    );
  }

  return (
    <div id="about">
      {/* Hero Section with Gradient */}
      <div style={{ 
        padding: '80px 0', 
        background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80") center/cover',
          opacity: 0.2
        }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative' }}>
          <Title level={1} style={{ color: 'white', marginBottom: '16px', fontSize: '3rem' }}>
            {t('about_aboutUs')}
          </Title>
          <Paragraph style={{ 
            fontSize: '18px', 
            color: '#e2e8f0', 
            maxWidth: '800px', 
            margin: '0 auto', 
            lineHeight: 1.6 
          }}>
            {t('about_heroDesc')}
          </Paragraph>
        </div>
      </div>

      {/* Stats Section with Pattern */}
      <div style={{ 
        padding: '60px 0', 
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(79, 70, 229, 0.05) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <Row gutter={[32, 32]}>
            {companyStats.map((stat, index) => (
              <Col xs={12} md={6} key={index}>
                <Card 
                  style={{ 
                    textAlign: 'center', 
                    border: 'none', 
                    background: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '16px',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    backdropFilter: 'blur(10px)',
                    height: '100%'
                  }}
                >
                  <div style={{ fontSize: '48px', color: '#4F46E5', marginBottom: '16px' }}>
                    {stat.icon}
                  </div>
                  <Statistic
                    value={stat.number}
                    valueStyle={{ fontSize: '32px', fontWeight: 'bold', color: '#1a202c' }}
                  />
                  <Text style={{ fontSize: '14px', color: '#64748b', textAlign: 'center' }}>{stat.label}</Text>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Story Section with Diagonal Background */}
      <div style={{ 
        padding: '80px 0', 
        background: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-10%',
          width: '60%',
          height: '200%',
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
          transform: 'rotate(15deg)',
          zIndex: 0
        }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <Row gutter={[48, 32]} align="middle">
            <Col xs={24} lg={12}>
              <Title level={2} style={{ color: '#1a202c', marginBottom: '24px' }}>
                {t('about_ourStory')}
              </Title>
              <Paragraph style={{ fontSize: '16px', color: '#64748b', lineHeight: 1.6, marginBottom: '16px' }}>
                {t('about_storyDesc1')}
              </Paragraph>
              <Paragraph style={{ fontSize: '16px', color: '#64748b', lineHeight: 1.6, marginBottom: '32px' }}>
                {t('about_storyDesc2')}
              </Paragraph>
              <Button 
                type="primary" 
                size="large"
                style={{
                  background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
                  border: "none",
                  fontWeight: 600,
                  boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)'
                }}
              >
                {t('about_readFullStory')}
              </Button>
            </Col>
            <Col xs={24} lg={12}>
              <div style={{
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                transform: 'perspective(1000px) rotateY(-5deg)',
                transition: 'transform 0.3s ease'
              }}>
                <img
                  src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt={t('about_storyImageAlt', 'Our company story')}
                  style={{ width: '100%', display: 'block' }}
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* Values Section with Grid Pattern */}
      <div style={{ 
        padding: '80px 0', 
        background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
        color: 'white',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%234F46E5\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.3
        }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: '60px', color: 'white' }}>
            {t('about_ourValues')}
          </Title>
          <Row gutter={[32, 32]}>
            {values.map((value, index) => (
              <Col xs={24} md={8} key={index}>
                <Card 
                  style={{ 
                    height: '100%', 
                    border: 'none', 
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '16px',
                    backdropFilter: 'blur(10px)',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease, background 0.3s ease'
                  }}
                  hoverable
                  bodyStyle={{ padding: '32px 24px' }}
                >
                  <Space direction="vertical" style={{ width: '100%' }} size="middle">
                    <div style={{ fontSize: '48px', color: '#4F46E5' }}>
                      {value.icon}
                    </div>
                    <Title level={4} style={{ margin: 0, color: 'white' }}>
                      {value.title}
                    </Title>
                    <Paragraph style={{ color: '#e2e8f0', margin: 0, lineHeight: 1.6 }}>
                      {value.description}
                    </Paragraph>
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* CTA Section with Floating Elements */}
      <div style={{ 
        padding: '80px 0', 
        background: 'white',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '100px',
          height: '100px',
          background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
          borderRadius: '50%',
          opacity: 0.1,
          filter: 'blur(20px)'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '30%',
          right: '15%',
          width: '150px',
          height: '150px',
          background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
          borderRadius: '50%',
          opacity: 0.1,
          filter: 'blur(25px)'
        }} />
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <Title level={2} style={{ marginBottom: '24px', color: '#1a202c' }}>
            {t('about_joinUs')}
          </Title>
          <Paragraph style={{ fontSize: '18px', color: '#64748b', marginBottom: '40px', lineHeight: 1.6 }}>
            {t('about_ctaDesc')}
          </Paragraph>
          <Button 
            type="primary" 
            size="large"
            style={{
              background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
              border: "none",
              fontWeight: 600,
              height: "56px",
              padding: "0 40px",
              fontSize: '16px',
              boxShadow: '0 8px 25px rgba(79, 70, 229, 0.4)'
            }}
          >
            {t('about_bookYourVehicle')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;