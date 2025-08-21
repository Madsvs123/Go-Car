
import React from 'react';
import { Row, Col, Card, Typography, Space, Button, Rate, Tag } from 'antd';
import { UserOutlined, CarOutlined, SettingOutlined, SafetyOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Title, Text, Paragraph } = Typography;
const { Meta } = Card;

const FleetSection = () => {
  const { t } = useTranslation();

  const cars = [
    {
      id: 1,
      name: 'Economy Sedan',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 29,
      passengers: 4,
      rating: 4.5,
      reviews: 128,
      features: ['AC', 'Bluetooth', 'GPS'],
      description: 'Perfect for city driving and short trips. Fuel-efficient and comfortable.',
      transmission: 'Automatic',
      fuel: 'Petrol'
    },
    {
      id: 2,
      name: 'Luxury SUV',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 89,
      passengers: 7,
      rating: 4.8,
      reviews: 89,
      features: ['Leather Seats', '4WD', 'Premium Sound'],
      description: 'Spacious luxury vehicle ideal for family trips and business travel.',
      transmission: 'Automatic',
      fuel: 'Hybrid'
    },
    {
      id: 3,
      name: 'Sports Convertible',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 129,
      passengers: 2,
      rating: 4.7,
      reviews: 45,
      features: ['Convertible', 'Sport Mode', 'Premium Audio'],
      description: 'Experience the thrill of open-top driving with our premium sports car.',
      transmission: 'Manual',
      fuel: 'Petrol'
    },
    {
      id: 4,
      name: 'Electric Compact',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bac6861d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 45,
      passengers: 4,
      rating: 4.6,
      reviews: 72,
      features: ['Zero Emissions', 'Fast Charging', 'Smart Tech'],
      description: 'Eco-friendly electric vehicle with cutting-edge technology.',
      transmission: 'Automatic',
      fuel: 'Electric'
    },
    {
      id: 5,
      name: 'Family Van',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 65,
      passengers: 8,
      rating: 4.4,
      reviews: 156,
      features: ['Extra Space', 'Child Seats', 'Entertainment System'],
      description: 'Spacious van perfect for large families and group adventures.',
      transmission: 'Automatic',
      fuel: 'Diesel'
    },
    {
      id: 6,
      name: 'Business Sedan',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 55,
      passengers: 4,
      rating: 4.9,
      reviews: 234,
      features: ['Executive Interior', 'Wi-Fi', 'Chauffeur Available'],
      description: 'Professional vehicle for business meetings and corporate travel.',
      transmission: 'Automatic',
      fuel: 'Hybrid'
    }
  ];

  return (
    <div className="section-background-light" style={{ padding: '80px 50px' }}>
      <Title className="section-title">{t('ourFleet')}</Title>
      
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <Paragraph style={{ fontSize: '18px', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
          Choose from our diverse fleet of premium vehicles. Each car is maintained to the highest standards 
          and equipped with modern amenities for your comfort and safety.
        </Paragraph>
      </div>

      <Row gutter={[24, 32]}>
        {cars.map((car) => (
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
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      comment: "Excellent service and beautiful cars. The booking process was smooth and the staff was very helpful.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b789?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 2,
      name: "Mike Chen",
      rating: 5,
      comment: "Great experience! The luxury SUV was perfect for our family vacation. Highly recommended.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 3,
      name: "Emma Wilson",
      rating: 4,
      comment: "Good value for money and reliable service. The electric car was a joy to drive.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    }
  ];

  return (
    <div className="section-background-primary" style={{ padding: '80px 50px' }}>
      <Title className="section-title" style={{ color: 'white' }}>Customer Testimonials</Title>
      
      <Row gutter={[24, 32]}>
        {testimonials.map((testimonial) => (
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
  );
};

const PricingSection = () => {
  const pricingPlans = [
    {
      title: "Basic",
      price: "29",
      period: "per day",
      features: ["Economy Cars", "Basic Insurance", "24/7 Support", "Free Cancellation"],
      popular: false
    },
    {
      title: "Premium",
      price: "59",
      period: "per day", 
      features: ["Luxury Cars", "Full Insurance", "GPS Navigation", "Free Cancellation", "Priority Support"],
      popular: true
    },
    {
      title: "Executive",
      price: "99",
      period: "per day",
      features: ["Executive Cars", "Comprehensive Insurance", "Chauffeur Available", "Concierge Service", "Premium Support"],
      popular: false
    }
  ];

  return (
    <div className="section-background-gray" style={{ padding: '80px 50px' }}>
      <Title className="section-title">Flexible Pricing Plans</Title>
      
      <Row gutter={[24, 32]} justify="center">
        {pricingPlans.map((plan, index) => (
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
