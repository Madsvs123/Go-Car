import React from 'react';
import { Row, Col, Card, Typography, Space, Button, Rate, Tag } from 'antd';
import { UserOutlined, CarOutlined, SettingOutlined, SafetyOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { carsData, testimonialsData, pricingPlansData } from '../../data/carsData';

const { Title, Text, Paragraph } = Typography;

const FleetSection = () => {
  const { t } = useTranslation();

  return (
    <div className="section-background-light light-section">
      <div className="main-container" style={{ padding: '80px 0' }}>
        <Title className="section-title">{t('ourFleet')}</Title>

        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <Paragraph style={{ fontSize: '18px', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
            Choose from our diverse fleet of premium vehicles. Each car is maintained to the highest standards 
            and equipped with modern amenities for your comfort and safety.
          </Paragraph>
        </div>

        <Row gutter={[24, 32]}>
          {carsData.map((car) => (
            <Col xs={24} sm={12} lg={8} key={car.id}>
              <Card
                className="car-card"
                cover={
                  <div style={{ position: 'relative', overflow: 'hidden', height: '240px' }}>
                    <img
                      alt={car.name}
                      src={car.image}
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      background: 'rgba(255, 255, 255, 0.9)',
                      padding: '4px 8px',
                      borderRadius: '6px',
                      fontSize: '14px',
                      fontWeight: 'bold',
                      color: '#4F46E5'
                    }}>
                      ${car.price}/{t('perDay')}
                    </div>
                  </div>
                }
                actions={[
                  <Button type="primary" className="gradient-button" block>
                    {t('bookNow')}
                  </Button>
                ]}
              >
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <Title level={4} style={{ margin: 0, color: '#1a202c' }}>
                      {car.name}
                    </Title>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                    <Rate disabled defaultValue={car.rating} style={{ fontSize: '14px' }} />
                    <Text type="secondary" style={{ marginLeft: '8px' }}>
                      {car.rating} ({car.reviews} reviews)
                    </Text>
                  </div>
                </div>

                <Paragraph type="secondary" style={{ marginBottom: '16px', fontSize: '14px' }}>
                  {car.description}
                </Paragraph>

                <Space direction="vertical" size="small" style={{ width: '100%' }}>
                  <Space>
                    <UserOutlined style={{ color: '#4F46E5' }} />
                    <Text>{car.passengers} passengers</Text>
                    <CarOutlined style={{ color: '#10B981', marginLeft: '12px' }} />
                    <Text>{car.transmission}</Text>
                  </Space>

                  <Space>
                    <SettingOutlined style={{ color: '#F59E0B' }} />
                    <Text>{car.fuel}</Text>
                  </Space>

                  <div style={{ marginTop: '12px' }}>
                    <Space wrap>
                      {car.features.map((feature, index) => (
                        <Tag key={index} color="blue" style={{ margin: '2px' }}>
                          {feature}
                        </Tag>
                      ))}
                    </Space>
                  </div>
                </Space>
              </Card>
            </Col>
          ))}
        </Row>

        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <Title level={3} style={{ marginBottom: '20px' }}>Why Choose Our Fleet?</Title>
          <Row gutter={[32, 24]}>
            <Col xs={24} md={8}>
              <Space direction="vertical" align="center">
                <SafetyOutlined style={{ fontSize: '48px', color: '#4F46E5' }} />
                <Title level={4}>Safety First</Title>
                <Text type="secondary" style={{ textAlign: 'center' }}>
                  All vehicles undergo regular safety inspections and maintenance
                </Text>
              </Space>
            </Col>
            <Col xs={24} md={8}>
              <Space direction="vertical" align="center">
                <CarOutlined style={{ fontSize: '48px', color: '#10B981' }} />
                <Title level={4}>Premium Quality</Title>
                <Text type="secondary" style={{ textAlign: 'center' }}>
                  Modern vehicles with the latest features and amenities
                </Text>
              </Space>
            </Col>
            <Col xs={24} md={8}>
              <Space direction="vertical" align="center">
                <SettingOutlined style={{ fontSize: '48px', color: '#F59E0B' }} />
                <Title level={4}>24/7 Support</Title>
                <Text type="secondary" style={{ textAlign: 'center' }}>
                  Round-the-clock customer support and roadside assistance
                </Text>
              </Space>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <div className="section-background-primary dark-section">
      <div className="main-container" style={{ padding: '80px 0' }}>
        <Title className="section-title">Customer Testimonials</Title>

        <Row gutter={[24, 32]}>
          {testimonialsData.map((testimonial) => (
            <Col xs={24} md={8} key={testimonial.id}>
              <Card style={{ 
                background: 'rgba(255, 255, 255, 0.95)', 
                borderRadius: '12px', 
                height: '100%',
                border: 'none'
              }}>
                <Space direction="vertical" style={{ width: '100%', textAlign: 'center' }}>
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    style={{ 
                      width: '60px', 
                      height: '60px', 
                      borderRadius: '50%', 
                      objectFit: 'cover',
                      margin: '0 auto'
                    }} 
                  />
                  <Title level={4} style={{ margin: '8px 0' }}>{testimonial.name}</Title>
                  <Rate disabled defaultValue={testimonial.rating} style={{ fontSize: '16px' }} />
                  <Paragraph style={{ fontStyle: 'italic', margin: '16px 0' }}>
                    "{testimonial.comment}"
                  </Paragraph>
                </Space>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

const PricingSection = () => {
  return (
    <div className="section-background-gray light-section">
      <div className="main-container" style={{ padding: '80px 0' }}>
        <Title className="section-title">Flexible Pricing Plans</Title>

        <Row gutter={[24, 32]} justify="center">
          {pricingPlansData.map((plan, index) => (
            <Col xs={24} md={8} key={index}>
              <Card 
                style={{ 
                  height: '100%',
                  border: plan.popular ? '3px solid #4F46E5' : '1px solid #e2e8f0',
                  borderRadius: '16px',
                  position: 'relative'
                }}
              >
                {plan.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#4F46E5',
                    color: 'white',
                    padding: '6px 16px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: 600
                  }}>
                    Most Popular
                  </div>
                )}

                <Space direction="vertical" style={{ width: '100%', textAlign: 'center' }}>
                  <Title level={3} style={{ margin: '20px 0 8px 0' }}>{plan.title}</Title>
                  <div>
                    <Text style={{ fontSize: '48px', fontWeight: 700, color: '#4F46E5' }}>
                      ${plan.price}
                    </Text>
                    <Text type="secondary" style={{ fontSize: '16px', marginLeft: '8px' }}>
                      {plan.period}
                    </Text>
                  </div>

                  <div style={{ margin: '30px 0' }}>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} style={{ margin: '12px 0', textAlign: 'left' }}>
                        <Space>
                          <span style={{ color: '#10B981', fontSize: '16px' }}>✓</span>
                          <Text>{feature}</Text>
                        </Space>
                      </div>
                    ))}
                  </div>

                  <Button 
                    type={plan.popular ? "primary" : "default"}
                    className={plan.popular ? "gradient-button" : ""}
                    size="large"
                    block
                    style={{ marginTop: '20px' }}
                  >
                    Choose Plan
                  </Button>
                </Space>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

const FleetSectionWithExtras = () => {
  return (
    <>
      <FleetSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
};

export default FleetSectionWithExtras;