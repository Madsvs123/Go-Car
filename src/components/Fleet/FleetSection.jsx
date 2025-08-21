
import React from 'react';
import { Row, Col, Card, Button, Typography, Rate, Space } from 'antd';
import { CarOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Title, Text } = Typography;
const { Meta } = Card;

const FleetSection = () => {
  const { t } = useTranslation();

  const cars = [
    {
      id: 1,
      name: 'Toyota Camry',
      type: 'economy',
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 45,
      passengers: 4,
      features: ['AC', 'GPS', 'Bluetooth'],
      rating: 4.5
    },
    {
      id: 2,
      name: 'Honda CR-V',
      type: 'suv',
      image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 75,
      passengers: 5,
      features: ['AC', 'GPS', '4WD', 'Sunroof'],
      rating: 4.7
    },
    {
      id: 3,
      name: 'BMW 5 Series',
      type: 'luxury',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 120,
      passengers: 4,
      features: ['Leather', 'Premium Audio', 'Climate Control'],
      rating: 4.9
    },
    {
      id: 4,
      name: 'Ford Transit',
      type: 'van',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 90,
      passengers: 8,
      features: ['AC', 'GPS', 'Extra Space'],
      rating: 4.3
    },
    {
      id: 5,
      name: 'Nissan Altima',
      type: 'economy',
      image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 40,
      passengers: 4,
      features: ['AC', 'GPS', 'USB Charging'],
      rating: 4.4
    },
    {
      id: 6,
      name: 'Audi Q7',
      type: 'luxury',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 150,
      passengers: 7,
      features: ['Luxury Interior', 'Premium Sound', 'Panoramic Roof'],
      rating: 4.8
    }
  ];

  return (
    <div style={{ padding: '80px 50px', backgroundColor: '#f8fafc' }}>
      <Title className="section-title">{t('ourFleet')}</Title>
      
      <Row gutter={[24, 32]}>
        {cars.map(car => (
          <Col xs={24} sm={12} lg={8} key={car.id}>
            <Card
              className="car-card"
              cover={
                <img
                  alt={car.name}
                  src={car.image}
                  style={{ height: 200, objectFit: 'cover' }}
                />
              }
              actions={[
                <Button type="primary" size="large" className="gradient-button" style={{ width: '90%' }}>
                  {t('bookNow')}
                </Button>
              ]}
            >
              <Meta
                title={
                  <Space direction="vertical" size="small">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{car.name}</span>
                      <Rate disabled defaultValue={car.rating} style={{ fontSize: '14px' }} />
                    </div>
                    <Text type="secondary">{t(car.type)}</Text>
                  </Space>
                }
                description={
                  <Space direction="vertical" size="medium" style={{ width: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Space>
                        <UserOutlined />
                        <span>{car.passengers} passengers</span>
                      </Space>
                      <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#4F46E5' }}>
                        ${car.price} <Text type="secondary" style={{ fontSize: '14px' }}>/{t('perDay')}</Text>
                      </div>
                    </div>
                    
                    <div>
                      <Space wrap>
                        {car.features.map((feature, index) => (
                          <span key={index} style={{
                            background: '#f0f9ff',
                            color: '#0369a1',
                            padding: '4px 8px',
                            borderRadius: '6px',
                            fontSize: '12px'
                          }}>
                            {feature}
                          </span>
                        ))}
                      </Space>
                    </div>
                  </Space>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FleetSection;
