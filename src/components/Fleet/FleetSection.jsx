
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

export default FleetSection;
