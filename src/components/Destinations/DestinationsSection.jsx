import React from 'react';
import { Row, Col, Card, Typography, Space, Button, Tag, Statistic } from 'antd';
import { EnvironmentOutlined, ClockCircleOutlined, CarOutlined, StarOutlined, UserOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Title, Text, Paragraph } = Typography;

const DestinationsSection = ({ showAll = true }) => {
  const { t } = useTranslation();

  const popularRoutes = [
    {
      id: 1,
      from: t('destinations_route1_from', 'New York'),
      to: t('destinations_route1_to', 'Boston'),
      duration: t('destinations_route1_duration', '4 hours'),
      distance: t('destinations_route1_distance', '215 miles'),
      price: 45,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: t('destinations_route1_desc', 'Scenic drive through beautiful New England landscapes'),
      highlights: [
        t('destinations_route1_highlight1', 'Historic Sites'),
        t('destinations_route1_highlight2', 'Coastal Views'),
        t('destinations_route1_highlight3', 'Fall Foliage')
      ],
      rating: 4.8,
      reviews: 234
    },
    {
      id: 2,
      from: t('destinations_route2_from', 'Los Angeles'),
      to: t('destinations_route2_to', 'San Francisco'),
      duration: t('destinations_route2_duration', '6 hours'),
      distance: t('destinations_route2_distance', '380 miles'),
      price: 65,
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: t('destinations_route2_desc', 'Iconic Pacific Coast Highway drive with stunning ocean views'),
      highlights: [
        t('destinations_route2_highlight1', 'Pacific Coast'),
        t('destinations_route2_highlight2', 'Wine Country'),
        t('destinations_route2_highlight3', 'Golden Gate Bridge')
      ],
      rating: 4.9,
      reviews: 312
    },
    {
      id: 3,
      from: t('destinations_route3_from', 'Miami'),
      to: t('destinations_route3_to', 'Key West'),
      duration: t('destinations_route3_duration', '3.5 hours'),
      distance: t('destinations_route3_distance', '160 miles'),
      price: 55,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: t('destinations_route3_desc', 'Tropical paradise drive through the Florida Keys'),
      highlights: [
        t('destinations_route3_highlight1', 'Ocean Views'),
        t('destinations_route3_highlight2', 'Island Hopping'),
        t('destinations_route3_highlight3', 'Sunset Point')
      ],
      rating: 4.7,
      reviews: 189
    },
    {
      id: 4,
      from: t('destinations_route4_from', 'Chicago'),
      to: t('destinations_route4_to', 'Milwaukee'),
      duration: t('destinations_route4_duration', '1.5 hours'),
      distance: t('destinations_route4_distance', '90 miles'),
      price: 35,
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: t('destinations_route4_desc', 'Quick trip to the beer capital with lakefront scenery'),
      highlights: [
        t('destinations_route4_highlight1', 'Lake Michigan'),
        t('destinations_route4_highlight2', 'Breweries'),
        t('destinations_route4_highlight3', 'Historic Downtown')
      ],
      rating: 4.5,
      reviews: 156
    },
    {
      id: 5,
      from: t('destinations_route5_from', 'Denver'),
      to: t('destinations_route5_to', 'Aspen'),
      duration: t('destinations_route5_duration', '3 hours'),
      distance: t('destinations_route5_distance', '160 miles'),
      price: 75,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: t('destinations_route5_desc', 'Mountain adventure through the Colorado Rockies'),
      highlights: [
        t('destinations_route5_highlight1', 'Mountain Views'),
        t('destinations_route5_highlight2', 'Ski Resorts'),
        t('destinations_route5_highlight3', 'Alpine Lakes')
      ],
      rating: 4.6,
      reviews: 201
    },
    {
      id: 6,
      from: t('destinations_route6_from', 'Seattle'),
      to: t('destinations_route6_to', 'Portland'),
      duration: t('destinations_route6_duration', '3 hours'),
      distance: t('destinations_route6_distance', '173 miles'),
      price: 50,
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: t('destinations_route6_desc', 'Pacific Northwest journey through forests and cities'),
      highlights: [
        t('destinations_route6_highlight1', 'Mount Rainier'),
        t('destinations_route6_highlight2', 'Columbia River'),
        t('destinations_route6_highlight3', 'Food Scene')
      ],
      rating: 4.8,
      reviews: 278
    }
  ];

  const destinationStats = [
    { number: '1000+', label: t('destinations_routesAvailable'), icon: <EnvironmentOutlined /> },
    { number: '98%', label: t('destinations_onTimeArrival'), icon: <ClockCircleOutlined /> },
    { number: '4.8/5', label: t('destinations_customerRating'), icon: <StarOutlined /> },
    { number: '24/7', label: t('destinations_roadsideAssistance'), icon: <CarOutlined /> }
  ];

  const seasonalDestinations = [
    {
      season: t('destinations_season_spring', 'Spring'),
      destinations: [
        t('destinations_spring_dest1', 'Washington DC (Cherry Blossoms)'),
        t('destinations_spring_dest2', 'California Coast'),
        t('destinations_spring_dest3', 'Great Smoky Mountains')
      ],
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      season: t('destinations_season_summer', 'Summer'),
      destinations: [
        t('destinations_summer_dest1', 'Florida Keys'),
        t('destinations_summer_dest2', 'Pacific Northwest'),
        t('destinations_summer_dest3', 'New England Coast')
      ],
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      season: t('destinations_season_fall', 'Fall'),
      destinations: [
        t('destinations_fall_dest1', 'New England (Foliage)'),
        t('destinations_fall_dest2', 'Blue Ridge Parkway'),
        t('destinations_fall_dest3', 'Aspen Colorado')
      ],
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      season: t('destinations_season_winter', 'Winter'),
      destinations: [
        t('destinations_winter_dest1', 'Rocky Mountains'),
        t('destinations_winter_dest2', 'Lake Tahoe'),
        t('destinations_winter_dest3', 'Vermont Ski Resorts')
      ],
      image: 'https://images.unsplash.com/photo-1418985227304-f32df7d84e39?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  if (!showAll) {
    return (
      <div style={{ padding: "60px 0", background: "#f8fafc" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <Title level={2} style={{ textAlign: "center", marginBottom: "48px", color: "#1a202c" }}>
            {t('destinations_popularDestinations')}
          </Title>

          <Row gutter={[24, 32]}>
            {popularRoutes.slice(0, 3).map((route) => (
              <Col xs={24} sm={12} lg={8} key={route.id}>
                <Card
                  hoverable
                  style={{
                    height: "100%",
                    border: "1px solid #e2e8f0",
                    borderRadius: "12px"
                  }}
                  cover={
                    <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                      <img
                        alt={`${route.from} to ${route.to}`}
                        src={route.image}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                      <div style={{
                        position: "absolute",
                        top: "16px",
                        left: "16px",
                        background: "rgba(79, 70, 229, 0.9)",
                        color: "white",
                        padding: "6px 12px",
                        borderRadius: "6px",
                        fontSize: "14px",
                        fontWeight: "bold"
                      }}>
                        ${route.price}
                      </div>
                    </div>
                  }
                  styles={{ body: { padding: "20px" } }}
                >
                  <Space direction="vertical" style={{ width: "100%" }}>
                    <Title level={4} style={{ margin: 0, color: "#1a202c" }}>
                      {route.from} → {route.to}
                    </Title>
                    
                    <Space>
                      <ClockCircleOutlined style={{ color: '#4F46E5' }} />
                      <Text style={{ color: "#64748b" }}>{route.duration}</Text>
                      <CarOutlined style={{ color: '#4F46E5', marginLeft: '12px' }} />
                      <Text style={{ color: "#64748b" }}>{route.distance}</Text>
                    </Space>

                    <Paragraph style={{ margin: "12px 0", color: "#64748b" }}>
                      {route.description}
                    </Paragraph>

                    <div style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
                      <StarOutlined style={{ color: "#F59E0B", fontSize: "14px", marginRight: "4px" }} />
                      <Text style={{ fontSize: "14px", color: "#64748b" }}>
                        {route.rating} ({route.reviews} {t('destinations_reviews', 'reviews')})
                      </Text>
                    </div>

                    <Button type="primary" block style={{
                      background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
                      border: "none"
                    }}>
                      {t('destinations_bookThisRoute')}
                    </Button>
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Button 
              type="primary" 
              size="large"
              onClick={() => window.location.hash = 'destinations'}
              style={{
                background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
                border: "none",
                fontWeight: 600
              }}
            >
              {t('destinations_viewAllDestinations')}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
            <div style={{ 
        padding: "120px 0", 
        background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
        color: "white",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{ 
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80') center/cover",
          opacity: 0.2
        }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", position: "relative" }}>
          <Row gutter={[48, 32]} align="middle">
            <Col xs={24} lg={12}>
              <Title level={1} style={{ color: "white", marginBottom: "24px", fontWeight: 700 }}>
                {t('destinations_popularDestinations')}
              </Title>
              <Paragraph style={{ fontSize: "18px", color: "#e2e8f0", marginBottom: "32px", lineHeight: 1.6 }}>
                {t('destinations_heroDescription')}
              </Paragraph>
              <Space>
                <Button type="primary" size="large" style={{ 
                  background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
                  border: "none",
                  fontWeight: 600,
                  height: "48px",
                  padding: "0 32px"
                }}>
                  {t('destinations_exploreRoutes')}
                </Button>
                <Button size="large" style={{ 
                  background: "rgba(255,255,255,0.1)", 
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.2)",
                  height: "48px",
                  padding: "0 24px"
                }}>
                  {t('destinations_seasonalDeals')}
                </Button>
              </Space>
            </Col>
            <Col xs={24} lg={12}>
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt={t('destinations_heroImageAlt', 'Scenic Road Trip')} 
                style={{ 
                  width: "100%", 
                  borderRadius: "12px",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)" 
                }}
              />
            </Col>
          </Row>
        </div>
      </div>

      {/* Destination Statistics */}
      <div style={{ 
        padding: "80px 0", 
        background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        position: "relative"
      }}>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at 80% 20%, rgba(79, 70, 229, 0.08) 0%, transparent 50%)",
          pointerEvents: "none"
        }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", position: "relative" }}>
          <Row gutter={[32, 32]}>
            {destinationStats.map((stat, index) => (
              <Col xs={12} md={6} key={index}>
                  <Card 
                    style={{ 
                      textAlign: "center", 
                      border: "none", 
                      background: "rgba(255, 255, 255, 0.9)",
                      borderRadius: "16px",
                      backdropFilter: "blur(10px)",
                      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
                    }}
                  >
                    <Title level={2} style={{ color: "#4F46E5", margin: 0, fontWeight: 700 }}>{stat.number}</Title>
                    <Text style={{ 
                      textAlign: "center", 
                      color: "#64748b",
                      fontSize: "16px",
                      fontWeight: 500 
                    }}>
                      {stat.label}
                    </Text>
                  </Card>
                </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Popular Routes Section */}
      <div style={{ 
        padding: "80px 0", 
        background: "white",
        borderBottom: "1px solid #e2e8f0" 
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <Title level={2} style={{ 
            textAlign: "center", 
            marginBottom: "16px",
            color: "#1a202c",
            fontWeight: 700 
          }}>
            {t('destinations_popularRoutes')}
          </Title>

          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <Text style={{
              fontSize: "18px",
              color: "#64748b",
              maxWidth: "600px",
              margin: "0 auto",
              display: "block",
              lineHeight: 1.6
            }}>
              {t('destinations_routesDescription')}
            </Text>
          </div>

          <Row gutter={[24, 32]}>
            {popularRoutes.map((route) => (
              <Col xs={24} sm={12} lg={8} key={route.id}>
                <Card
                  hoverable
                  style={{
                    height: "500px",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    border: "1px solid #e2e8f0",
                    borderRadius: "12px"
                  }}
                  styles={{
                    body: {
                      display: "flex",
                      flexDirection: "column",
                      flexGrow: 1,
                      padding: "20px",
                    }
                  }}
                  cover={
                    <div style={{
                      position: "relative",
                      height: "200px",
                      overflow: "hidden",
                    }}>
                      <img
                        alt={`${route.from} to ${route.to}`}
                        src={route.image}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                      <div style={{
                        position: "absolute",
                        top: "16px",
                        left: "16px",
                        background: "rgba(79, 70, 229, 0.95)",
                        color: "white",
                        padding: "8px 16px",
                        borderRadius: "8px",
                        fontSize: "14px",
                        fontWeight: "bold",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
                      }}>
                        ${route.price}
                      </div>
                      <div style={{
                        position: "absolute",
                        bottom: "16px",
                        right: "16px",
                        background: "rgba(255, 255, 255, 0.95)",
                        padding: "4px 8px",
                        borderRadius: "6px",
                        fontSize: "12px",
                        fontWeight: "500",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px"
                      }}>
                        <StarOutlined style={{ color: "#F59E0B", fontSize: "12px" }} />
                        {route.rating} ({route.reviews})
                      </div>
                    </div>
                  }
                >
                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}>
                    <div style={{ marginBottom: "12px" }}>
                      <Title level={4} style={{ 
                        margin: 0, 
                        color: "#1a202c", 
                        fontSize: "18px",
                        fontWeight: 600 
                      }}>
                        {route.from} → {route.to}
                      </Title>
                    </div>

                    <Space style={{ marginBottom: "12px" }}>
                      <ClockCircleOutlined style={{ 
                        color: "#4F46E5", 
                        fontSize: "16px" 
                      }} />
                      <Text style={{ fontSize: "14px", color: "#64748b" }}>
                        {route.duration}
                      </Text>
                      <CarOutlined style={{
                        color: "#4F46E5",
                        marginLeft: "16px",
                        fontSize: "16px",
                      }} />
                      <Text style={{ fontSize: "14px", color: "#64748b" }}>
                        {route.distance}
                      </Text>
                    </Space>

                    <Paragraph style={{ 
                      margin: "12px 0", 
                      color: "#64748b",
                      lineHeight: 1.6,
                      flexGrow: 1 
                    }}>
                      {route.description}
                    </Paragraph>

                    <div style={{ marginBottom: "16px" }}>
                      <Space wrap>
                        {route.highlights.slice(0, 3).map((highlight, index) => (
                          <Tag
                            key={index}
                            style={{ 
                              margin: "2px", 
                              fontSize: "12px",
                              background: "#eff6ff",
                              borderColor: "#bfdbfe",
                              color: "#1e40af",
                              borderRadius: "6px"
                            }}
                          >
                            {highlight}
                          </Tag>
                        ))}
                      </Space>
                    </div>

                    <div style={{ marginTop: "auto" }}>
                      <Button type="primary" block style={{
                        background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
                        border: "none",
                        height: "44px",
                        fontWeight: 600,
                        borderRadius: "8px"
                      }}>
                        {t('destinations_bookThisRoute')}
                      </Button>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Seasonal Destinations */}
      <div style={{ 
        padding: "80px 0", 
        background: "#f8fafc",
        borderBottom: "1px solid #e2e8f0" 
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <Title level={2} style={{ 
            textAlign: "center", 
            marginBottom: "60px",
            color: "#1a202c",
            fontWeight: 700 
          }}>
            {t('destinations_seasonalDestinations')}
          </Title>
          
          <Row gutter={[32, 32]}>
            {seasonalDestinations.map((season, index) => (
              <Col xs={24} md={6} key={index}>
                <Card
                  hoverable
                  cover={
                    <div style={{ height: "120px", overflow: "hidden" }}>
                      <img
                        alt={season.season}
                        src={season.image}
                        style={{ 
                          width: "100%", 
                          height: "100%", 
                          objectFit: "cover" 
                        }}
                      />
                    </div>
                  }
                  styles={{
                    body: { padding: "20px" }
                  }}
                >
                  <Space direction="vertical" style={{ width: "100%" }}>
                    <Title level={4} style={{ 
                      margin: 0, 
                      color: "#4F46E5",
                      textAlign: "center" 
                    }}>
                      {season.season}
                    </Title>
                    <div>
                      {season.destinations.map((destination, idx) => (
                        <div key={idx} style={{ 
                          padding: "8px 0",
                          borderBottom: idx < season.destinations.length - 1 ? "1px solid #f1f5f9" : "none"
                        }}>
                          <Text style={{ fontSize: "14px", color: "#64748b" }}>
                            • {destination}
                          </Text>
                        </div>
                      ))}
                    </div>
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Why Road Trip Section */}
      <div style={{ 
        padding: "80px 0", 
        background: "white" 
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <Title level={2} style={{ 
            textAlign: "center", 
            marginBottom: "60px",
            color: "#1a202c",
            fontWeight: 700 
          }}>
            {t('destinations_whyRoadTrip')}
          </Title>
          
          <Row gutter={[48, 32]}>
            <Col xs={24} md={8}>
              <Space direction="vertical" align="center" style={{ width: "100%" }}>
                <div style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px"
                }}>
                  <EnvironmentOutlined style={{ fontSize: "36px", color: "white" }} />
                </div>
                <Title level={4} style={{ 
                  margin: 0, 
                  textAlign: "center",
                  color: "#1a202c" 
                }}>
                  {t('destinations_flexibility')}
                </Title>
                <Text style={{ 
                  textAlign: "center", 
                  color: "#64748b",
                  fontSize: "16px",
                  lineHeight: 1.6 
                }}>
                  {t('destinations_flexibilityDesc')}
                </Text>
              </Space>
            </Col>
            
            <Col xs={24} md={8}>
              <Space direction="vertical" align="center" style={{ width: "100%" }}>
                <div style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px"
                }}>
                  <CarOutlined style={{ fontSize: "36px", color: "white" }} />
                </div>
                <Title level={4} style={{ 
                  margin: 0, 
                  textAlign: "center",
                  color: "#1a202c" 
                }}>
                  {t('destinations_comfort')}
                </Title>
                <Text style={{ 
                  textAlign: "center", 
                  color: "#64748b",
                  fontSize: "16px",
                  lineHeight: 1.6 
                }}>
                  {t('destinations_comfortDesc')}
                </Text>
              </Space>
            </Col>
            
            <Col xs={24} md={8}>
              <Space direction="vertical" align="center" style={{ width: "100%" }}>
                <div style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px"
                }}>
                  <UserOutlined style={{ fontSize: "36px", color: "white" }} />
                </div>
                <Title level={4} style={{ 
                  margin: 0, 
                  textAlign: "center",
                  color: "#1a202c" 
                }}>
                  {t('destinations_memories')}
                </Title>
                <Text style={{ 
                  textAlign: "center", 
                  color: "#64748b",
                  fontSize: "16px",
                  lineHeight: 1.6 
                }}>
                  {t('destinations_memoriesDesc')}
                </Text>
              </Space>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default DestinationsSection;