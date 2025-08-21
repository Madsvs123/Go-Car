
import React from 'react';
import { Row, Col, Typography, Card, Button } from 'antd';
import { EnvironmentOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Title, Text } = Typography;

const DestinationsSection = () => {
  const { t } = useTranslation();

  const destinations = [
    {
      id: 1,
      from: 'Cairo',
      to: 'Alexandria',
      distance: '225 km',
      duration: '2.5 hours',
      price: 45,
      image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      from: 'Dubai',
      to: 'Abu Dhabi',
      distance: '140 km',
      duration: '1.5 hours',
      price: 60,
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      from: 'Riyadh',
      to: 'Jeddah',
      distance: '950 km',
      duration: '9 hours',
      price: 180,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 4,
      from: 'Cairo',
      to: 'Hurghada',
      distance: '450 km',
      duration: '4.5 hours',
      price: 95,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <div style={{ padding: '80px 50px', backgroundColor: 'white' }}>
      <Title className="section-title">{t('popularDestinations')}</Title>
      
      <Row gutter={[24, 32]}>
        {destinations.map(destination => (
          <Col xs={24} sm={12} lg={6} key={destination.id}>
            <Card
              className="destination-card"
              cover={
                <img
                  alt={`${destination.from} to ${destination.to}`}
                  src={destination.image}
                  style={{ height: 180, objectFit: 'cover', borderRadius: '12px 12px 0 0' }}
                />
              }
              style={{ border: 'none' }}
            >
              <div style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                  <span style={{ fontSize: '16px', fontWeight: 'bold' }}>{destination.from}</span>
                  <ArrowRightOutlined style={{ margin: '0 8px', color: '#4F46E5' }} />
                  <span style={{ fontSize: '16px', fontWeight: 'bold' }}>{destination.to}</span>
                </div>
                
                <div style={{ marginBottom: '12px' }}>
                  <Text type="secondary">{destination.distance} • {destination.duration}</Text>
                </div>
                
                <div style={{ marginBottom: '16px' }}>
                  <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#4F46E5' }}>
                    ${destination.price}
                  </span>
                  <Text type="secondary"> per trip</Text>
                </div>
                
                <Button type="primary" className="gradient-button" style={{ width: '100%' }}>
                  {t('bookNow')}
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default DestinationsSection;
