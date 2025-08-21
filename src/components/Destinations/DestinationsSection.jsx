import React from 'react';
import { Row, Col, Card, Typography, Space, Button, Tag } from 'ant-design-react';
import { EnvironmentOutlined, ClockCircleOutlined, CarOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { popularRoutesData, cityDestinationsData } from '../../data/destinationsData';

const { Title, Text, Paragraph } = Typography;

const DestinationsSection = () => {
  const { t } = useTranslation();

  return (
    <div className="section-background-secondary dark-section">
      <div className="main-container" style={{ padding: '80px 0' }}>
        <Title className="section-title">
          {t('popularDestinations')}
        </Title>

        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <Paragraph style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.9)', maxWidth: '600px', margin: '0 auto' }}>
            Discover amazing destinations and plan your perfect road trip with our premium rental cars.
          </Paragraph>
        </div>

        <Title level={3} style={{ marginBottom: '40px', textAlign: 'center', color: 'white' }}>
          Popular Routes
        </Title>

        <Row gutter={[24, 32]} style={{ marginBottom: '80px' }}>
          {popularRoutesData.map((route) => (
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

        <Title level={3} style={{ marginBottom: '40px', textAlign: 'center', color: 'white' }}>
          Top Destinations
        </Title>

        <Row gutter={[24, 24]} justify="center">
          {cityDestinationsData.map((city, index) => (
            <Col xs={12} sm={8} key={index}>
              <Card
                hoverable
                cover={
                  <img
                    alt={city.name}
                    src={city.image}
                    style={{ height: '120px', objectFit: 'cover' }}
                  />
                }
                styles={{ body: { padding: '16px' } }}
              >
                <Space direction="vertical" align="center" style={{ width: '100%' }}>
                  <Title level={5} style={{ margin: 0 }}>{city.name}</Title>
                  <Text type="secondary">{city.trips} trips</Text>
                </Space>
              </Card>
            </Col>
          ))}
        </Row>

        <div style={{ textAlign: 'center', marginTop: '60px', padding: '40px', background: 'rgba(255, 255, 255, 0.95)', borderRadius: '16px' }}>
          <Title level={3}>Plan Your Perfect Trip</Title>
          <Paragraph style={{ fontSize: '16px', color: '#64748b', marginBottom: '24px' }}>
            Can't find your destination? Contact us for custom route planning and special requests.
          </Paragraph>
          <Button type="primary" size="large" className="gradient-button">
            Request Custom Route
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DestinationsSection;