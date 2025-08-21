
import React from 'react';
import { Row, Col, Card, Typography, Space, Button, Tag } from 'antd';
import { EnvironmentOutlined, ClockCircleOutlined, CarOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Title, Text, Paragraph } = Typography;

const DestinationsSection = () => {
  const { t } = useTranslation();

  const popularRoutes = [
    {
      id: 1,
      from: 'New York',
      to: 'Boston',
      duration: '4 hours',
      distance: '215 miles',
      price: 45,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Scenic drive through beautiful New England landscapes',
      highlights: ['Historic Sites', 'Coastal Views', 'Fall Foliage']
    },
    {
      id: 2,
      from: 'Los Angeles',
      to: 'San Francisco',
      duration: '6 hours',
      distance: '380 miles',
      price: 65,
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Iconic Pacific Coast Highway drive with stunning ocean views',
      highlights: ['Pacific Coast', 'Wine Country', 'Golden Gate Bridge']
    },
    {
      id: 3,
      from: 'Miami',
      to: 'Key West',
      duration: '3.5 hours',
      distance: '160 miles',
      price: 55,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Tropical paradise drive through the Florida Keys',
      highlights: ['Ocean Views', 'Island Hopping', 'Sunset Point']
    },
    {
      id: 4,
      from: 'Chicago',
      to: 'Milwaukee',
      duration: '1.5 hours',
      distance: '90 miles',
      price: 35,
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Quick trip to the beer capital with lakefront scenery',
      highlights: ['Lake Michigan', 'Breweries', 'Historic Downtown']
    },
    {
      id: 5,
      from: 'Denver',
      to: 'Aspen',
      duration: '3 hours',
      distance: '160 miles',
      price: 75,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Mountain adventure through the Colorado Rockies',
      highlights: ['Mountain Views', 'Ski Resorts', 'Alpine Lakes']
    },
    {
      id: 6,
      from: 'Seattle',
      to: 'Portland',
      duration: '3 hours',
      distance: '173 miles',
      price: 50,
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Pacific Northwest journey through forests and cities',
      highlights: ['Mount Rainier', 'Columbia River', 'Food Scene']
    }
  ];

  const cityDestinations = [
    { name: 'New York City', trips: 1250, image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Los Angeles', trips: 980, image: 'https://images.unsplash.com/photo-1544827847-83bfe7de49da?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Chicago', trips: 756, image: 'https://images.unsplash.com/photo-1494522358652-f30e61a5cd44?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Miami', trips: 645, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' }
  ];

  return (
    <div className="section-background-gray" style={{ padding: '80px 50px' }}>
      <Title className="section-title">{t('popularDestinations')}</Title>
      
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <Paragraph style={{ fontSize: '18px', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
          Discover amazing destinations with our convenient car rental service. 
          Explore scenic routes and popular city-to-city connections.
        </Paragraph>
      </div>

      <Title level={3} style={{ marginBottom: '40px', textAlign: 'center' }}>
        Popular Routes
      </Title>

      <Row gutter={[24, 32]} style={{ marginBottom: '80px' }}>
        {popularRoutes.map((route) => (
          <Col xs={24} sm={12} lg={8} key={route.id}>
            <Card
              className="destination-card"
              cover={
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                  <img
                    alt={`${route.from} to ${route.to}`}
                    src={route.image}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover' 
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'rgba(79, 70, 229, 0.9)',
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    fontSize: '14px',
                    fontWeight: 'bold'
                  }}>
                    From ${route.price}
                  </div>
                </div>
              }
            >
              <Space direction="vertical" style={{ width: '100%' }}>
                <Title level={4} style={{ margin: 0 }}>
                  {route.from} → {route.to}
                </Title>
                
                <Space>
                  <ClockCircleOutlined style={{ color: '#4F46E5' }} />
                  <Text>{route.duration}</Text>
                  <CarOutlined style={{ color: '#10B981', marginLeft: '12px' }} />
                  <Text>{route.distance}</Text>
                </Space>

                <Paragraph type="secondary" style={{ margin: '12px 0' }}>
                  {route.description}
                </Paragraph>

                <div>
                  <Space wrap>
                    {route.highlights.map((highlight, index) => (
                      <Tag key={index} color="geekblue">
                        {highlight}
                      </Tag>
                    ))}
                  </Space>
                </div>

                <Button type="primary" block className="gradient-button">
                  Book This Route
                </Button>
              </Space>
            </Card>
          </Col>
        ))}
      </Row>

      <Title level={3} style={{ marginBottom: '40px', textAlign: 'center' }}>
        Top Destinations
      </Title>

      <Row gutter={[24, 24]}>
        {cityDestinations.map((city, index) => (
          <Col xs={12} sm={6} key={index}>
            <Card
              hoverable
              cover={
                <img
                  alt={city.name}
                  src={city.image}
                  style={{ height: '120px', objectFit: 'cover' }}
                />
              }
              bodyStyle={{ padding: '16px' }}
            >
              <Space direction="vertical" align="center" style={{ width: '100%' }}>
                <Title level={5} style={{ margin: 0 }}>{city.name}</Title>
                <Text type="secondary">{city.trips} trips</Text>
              </Space>
            </Card>
          </Col>
        ))}
      </Row>

      <div style={{ textAlign: 'center', marginTop: '60px', padding: '40px', background: 'white', borderRadius: '16px' }}>
        <Title level={3}>Plan Your Perfect Trip</Title>
        <Paragraph style={{ fontSize: '16px', color: '#64748b', marginBottom: '24px' }}>
          Can't find your destination? Contact us for custom route planning and special requests.
        </Paragraph>
        <Button type="primary" size="large" className="gradient-button">
          Request Custom Route
        </Button>
      </div>
    </div>
  );
};

export default DestinationsSection;
