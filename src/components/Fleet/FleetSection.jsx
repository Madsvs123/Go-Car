
import React from 'react';
import { Row, Col, Card, Typography, Space, Button, Rate, Tag } from 'antd';
import { UserOutlined, CarOutlined, SettingOutlined, SafetyOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { carsData } from '../../data/carsData.jsx';

const { Title, Text, Paragraph } = Typography;

const FleetSection = () => {
  const { t } = useTranslation();

  return (
    <div className="section-background-light" style={{ padding: '80px 0' }}>
      <div className="app-container">
        <Title className="section-title">{t('ourFleet')}</Title>
      
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <Paragraph style={{ fontSize: '18px', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
            {t('fleetDescription')}
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
                styles={{
                  body: { 
                    flex: 1, 
                    display: 'flex', 
                    flexDirection: 'column',
                    padding: '20px'
                  }
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ marginBottom: '16px' }}>
                    <Title level={4} style={{ margin: 0, color: '#1a202c', marginBottom: '8px' }}>
                      {car.name}
                    </Title>
                    
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                      <Rate disabled defaultValue={car.rating} style={{ fontSize: '14px' }} />
                      <Text type="secondary" style={{ marginLeft: '8px' }}>
                        {car.rating} ({car.reviews} {t('reviews')})
                      </Text>
                    </div>
                  </div>

                  <Paragraph type="secondary" style={{ marginBottom: '16px', fontSize: '14px', minHeight: '40px' }}>
                    {car.description}
                  </Paragraph>

                  <Space direction="vertical" size="small" style={{ width: '100%' }}>
                    <Space>
                      <UserOutlined style={{ color: '#4F46E5' }} />
                      <Text>{car.passengers} {t('passengers')}</Text>
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
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <Title level={3} style={{ marginBottom: '20px' }}>{t('whyChooseFleet')}</Title>
          <Row gutter={[32, 24]}>
            <Col xs={24} md={8}>
              <Space direction="vertical" align="center">
                <SafetyOutlined style={{ fontSize: '48px', color: '#4F46E5' }} />
                <Title level={4}>{t('safetyFirst')}</Title>
                <Text type="secondary" style={{ textAlign: 'center' }}>
                  {t('safetyDescription')}
                </Text>
              </Space>
            </Col>
            <Col xs={24} md={8}>
              <Space direction="vertical" align="center">
                <CarOutlined style={{ fontSize: '48px', color: '#10B981' }} />
                <Title level={4}>{t('premiumQuality')}</Title>
                <Text type="secondary" style={{ textAlign: 'center' }}>
                  {t('qualityDescription')}
                </Text>
              </Space>
            </Col>
            <Col xs={24} md={8}>
              <Space direction="vertical" align="center">
                <SettingOutlined style={{ fontSize: '48px', color: '#F59E0B' }} />
                <Title level={4}>{t('support247')}</Title>
                <Text type="secondary" style={{ textAlign: 'center' }}>
                  {t('supportDescription')}
                </Text>
              </Space>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default FleetSection;
