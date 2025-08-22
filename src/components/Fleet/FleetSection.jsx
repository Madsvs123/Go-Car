import React from "react";
import { 
  Row, 
  Col, 
  Card, 
  Typography, 
  Space, 
  Button, 
  Rate, 
  Tag, 
  Statistic
} from "antd";
import {
  UserOutlined,
  CarOutlined,
  SettingOutlined,
  SafetyOutlined,
  StarOutlined,
  EnvironmentOutlined
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const { Title, Text, Paragraph } = Typography;

const FleetSection = ({ showAll = true }) => {
  const { t } = useTranslation();
  
  const cars = [
    {
      id: 1,
      name: t("fleet_car1_name", "Economy Sedan"),
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      price: 29,
      passengers: 4,
      rating: 4.5,
      reviews: 128,
      features: [t("fleet_feature_ac", "AC"), t("fleet_feature_bluetooth", "Bluetooth"), t("fleet_feature_gps", "GPS")],
      transmission: t("fleet_transmission_auto", "Automatic"),
      fuel: t("fleet_fuel_petrol", "Petrol"),
      category: "economy"
    },
    {
      id: 2,
      name: t("fleet_car2_name", "Luxury SUV"),
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      price: 89,
      passengers: 7,
      rating: 4.8,
      reviews: 89,
      features: [t("fleet_feature_leather", "Leather Seats"), t("fleet_feature_4wd", "4WD"), t("fleet_feature_premium_sound", "Premium Sound")],
      transmission: t("fleet_transmission_auto", "Automatic"),
      fuel: t("fleet_fuel_hybrid", "Hybrid"),
      category: "luxury"
    },
    {
      id: 3,
      name: t("fleet_car3_name", "Electric Compact"),
      image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      price: 45,
      passengers: 4,
      rating: 4.6,
      reviews: 72,
      features: [t("fleet_feature_zero_emissions", "Zero Emissions"), t("fleet_feature_fast_charging", "Fast Charging"), t("fleet_feature_smart_tech", "Smart Tech")],
      transmission: t("fleet_transmission_auto", "Automatic"),
      fuel: t("fleet_fuel_electric", "Electric"),
      category: "electric"
    },
    {
      id: 4,
      name: t("fleet_car4_name", "Family Minivan"),
      image: "https://images.unsplash.com/photo-1594507448144-9b75ecb7533c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      price: 65,
      passengers: 8,
      rating: 4.7,
      reviews: 156,
      features: [t("fleet_feature_dvd", "DVD System"), t("fleet_feature_cupholders", "8 Cupholders"), t("fleet_feature_storage", "Extra Storage")],
      transmission: t("fleet_transmission_auto", "Automatic"),
      fuel: t("fleet_fuel_petrol", "Petrol"),
      category: "family"
    },
    {
      id: 5,
      name: t("fleet_car5_name", "Sports Coupe"),
      image: "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      price: 120,
      passengers: 2,
      rating: 4.9,
      reviews: 203,
      features: [t("fleet_feature_turbo", "Turbo Engine"), t("fleet_feature_sport_seats", "Sport Seats"), t("fleet_feature_premium", "Premium Package")],
      transmission: t("fleet_transmission_manual", "Manual"),
      fuel: t("fleet_fuel_petrol", "Petrol"),
      category: "sports"
    },
    {
      id: 6,
      name: t("fleet_car6_name", "Business Sedan"),
      image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      price: 75,
      passengers: 5,
      rating: 4.8,
      reviews: 178,
      features: [t("fleet_feature_wifi", "WiFi Hotspot"), t("fleet_feature_navigation", "Navigation"), t("fleet_feature_concierge", "Concierge Service")],
      transmission: t("fleet_transmission_auto", "Automatic"),
      fuel: t("fleet_fuel_hybrid", "Hybrid"),
      category: "business"
    },
    {
      id: 7,
      name: t("fleet_car7_name", "Adventure 4x4"),
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      price: 95,
      passengers: 5,
      rating: 4.7,
      reviews: 142,
      features: [t("fleet_feature_4x4", "4x4 Drive"), t("fleet_feature_roof_rack", "Roof Rack"), t("fleet_feature_all_terrain", "All-Terrain Tires")],
      transmission: t("fleet_transmission_auto", "Automatic"),
      fuel: t("fleet_fuel_diesel", "Diesel"),
      category: "adventure"
    },
    {
      id: 8,
      name: t("fleet_car8_name", "Luxury Convertible"),
      image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      price: 150,
      passengers: 4,
      rating: 4.9,
      reviews: 267,
      features: [t("fleet_feature_convertible", "Convertible Top"), t("fleet_feature_premium_sound", "Premium Sound"), t("fleet_feature_heated_seats", "Heated Seats")],
      transmission: t("fleet_transmission_auto", "Automatic"),
      fuel: t("fleet_fuel_petrol", "Petrol"),
      category: "luxury"
    }
  ];

  const fleetStats = [
    { number: '500+', label: t('fleet_vehiclesInFleet') },
    { number: '98%', label: t('fleet_customerSatisfaction') },
    { number: '24/7', label: t('fleet_supportAvailability') },
    { number: '50+', label: t('fleet_locations') }
  ];

  if (!showAll) {
    return (
      <div style={{ padding: "60px 0", background: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <Title level={2} style={{ textAlign: "center", marginBottom: "48px", color: "#1a202c" }}>
            {t('fleet_ourFleet')}
          </Title>

          <Row gutter={[24, 32]}>
            {cars.slice(0, 3).map((car) => (
              <Col xs={24} sm={12} lg={8} key={car.id}>
                <Card
                  hoverable
                  style={{
                    height: "440px",
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
                      padding: "16px",
                    }
                  }}
                  cover={
                    <div style={{ position: "relative", height: "180px", overflow: "hidden" }}>
                      <img
                        alt={car.name}
                        src={car.image}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                      <div style={{
                        position: "absolute",
                        top: "12px",
                        right: "12px",
                        background: "rgba(255, 255, 255, 0.9)",
                        padding: "4px 8px",
                        borderRadius: "6px",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}>
                        ${car.price}/day
                      </div>
                    </div>
                  }
                >
                  <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
                    <Title level={4} style={{ margin: 0, fontSize: "18px", color: "#1a202c" }}>
                      {car.name}
                    </Title>

                    <div style={{ display: "flex", alignItems: "center", margin: "12px 0" }}>
                      <Rate disabled defaultValue={car.rating} style={{ fontSize: "14px" }} />
                      <Text style={{ marginLeft: "8px", fontSize: "12px", color: "#64748b" }}>
                        {car.rating} ({car.reviews})
                      </Text>
                    </div>

                    <Space style={{ marginBottom: "12px" }}>
                      <UserOutlined style={{ color: "#4F46E5", fontSize: "14px" }} />
                      <Text style={{ fontSize: "13px", color: "#64748b" }}>{car.passengers} {t('fleet_passengers', 'passengers')}</Text>
                      <CarOutlined style={{ color: "#4F46E5", marginLeft: "12px", fontSize: "14px" }} />
                      <Text style={{ fontSize: "13px", color: "#64748b" }}>{car.transmission}</Text>
                    </Space>

                    <div style={{ marginTop: "auto" }}>
                      <Button type="primary" block style={{
                        background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
                        border: "none",
                        fontWeight: 600
                      }}>
                        {t('fleet_bookNow')}
                      </Button>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Button 
              type="primary" 
              size="large"
              onClick={() => window.location.hash = 'fleet'}
              style={{
                background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
                border: "none",
                fontWeight: 600
              }}
            >
              {t('fleet_viewAllFleet')}
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
          background: "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80') center/cover",
          opacity: 0.2
        }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", position: "relative" }}>
          <Row gutter={[48, 32]} align="middle">
            <Col xs={24} lg={12}>
              <Title level={1} style={{ color: "white", marginBottom: "24px", fontWeight: 700, fontSize: "3rem" }}>
                {t("fleet_premiumFleet")}
              </Title>
              <Paragraph style={{ fontSize: "18px", color: "#e2e8f0", marginBottom: "32px", lineHeight: 1.6 }}>
                {t("fleet_heroDescription")}
              </Paragraph>
              <Space>
                <Button type="primary" size="large" style={{ 
                  background: "rgba(255, 255, 255, 0.2)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  color: "white",
                  fontWeight: 600,
                  height: "48px",
                  padding: "0 32px",
                  backdropFilter: "blur(10px)"
                }}>
                  {t("fleet_exploreFleet")}
                </Button>
                <Button size="large" style={{ 
                  background: "rgba(255,255,255,0.1)", 
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.2)",
                  height: "48px",
                  padding: "0 24px",
                  backdropFilter: "blur(10px)"
                }}>
                  {t("fleet_specialOffers")}
                </Button>
              </Space>
            </Col>
            <Col xs={24} lg={12}>
              <div style={{
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                transform: "perspective(1000px) rotateY(-5deg)",
                transition: "transform 0.3s ease"
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt={t("fleet_heroImageAlt", "Premium Fleet")} 
                  style={{ 
                    width: "100%", 
                    display: "block"
                  }}
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* Fleet Statistics with Pattern */}
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
            {fleetStats.map((stat, index) => (
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

      {/* Main Fleet Section with Diagonal Background */}
      <div style={{ 
        padding: "80px 0", 
        background: "white",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{
          position: "absolute",
          top: "-50%",
          right: "-10%",
          width: "60%",
          height: "200%",
          background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
          transform: "rotate(15deg)",
          zIndex: 0
        }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <Title style={{ 
            textAlign: "center", 
            marginBottom: "16px",
            color: "#1a202c",
            fontWeight: 700 
          }}>
            {t("fleet_ourFleet")}
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
              {t("fleet_description")}
            </Text>
          </div>

          <Row gutter={[24, 32]}>
            {cars.map((car) => (
              <Col xs={24} sm={12} lg={8} key={car.id}>
                <Card
                  hoverable
                  style={{
                    height: "460px",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    border: "none",
                    borderRadius: "16px",
                    background: "rgba(255, 255, 255, 0.9)",
                    backdropFilter: "blur(10px)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease"
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
                        alt={car.name}
                        src={car.image}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                      <div style={{
                        position: "absolute",
                        top: "16px",
                        right: "16px",
                        background: "rgba(255, 255, 255, 0.95)",
                        padding: "6px 12px",
                        borderRadius: "8px",
                        fontSize: "14px",
                        fontWeight: "bold",
                        color: "#4F46E5",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                      }}>
                        ${car.price}/day
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
                        {car.name}
                      </Title>
                    </div>

                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "16px",
                    }}>
                      <Rate
                        disabled
                        defaultValue={car.rating}
                        style={{ fontSize: "14px", color: "#F59E0B" }}
                      />
                      <Text style={{ 
                        marginLeft: "8px", 
                        fontSize: "14px",
                        color: "#64748b" 
                      }}>
                        {car.rating} ({car.reviews} {t('fleet_reviews', 'reviews')})
                      </Text>
                    </div>

                    <Space style={{ marginBottom: "12px" }}>
                      <UserOutlined style={{ 
                        color: "#4F46E5", 
                        fontSize: "16px" 
                      }} />
                      <Text style={{ fontSize: "14px", color: "#64748b" }}>
                        {car.passengers} {t('fleet_passengers', 'passengers')}
                      </Text>
                      <CarOutlined style={{
                        color: "#4F46E5",
                        marginLeft: "16px",
                        fontSize: "16px",
                      }} />
                      <Text style={{ fontSize: "14px", color: "#64748b" }}>
                        {car.transmission}
                      </Text>
                    </Space>

                    <Space style={{ marginBottom: "16px" }}>
                      <SettingOutlined style={{ 
                        color: "#4F46E5", 
                        fontSize: "16px" 
                      }} />
                      <Text style={{ fontSize: "14px", color: "#64748b" }}>
                        {car.fuel}
                      </Text>
                    </Space>

                    <div style={{ marginBottom: "16px" }}>
                      <Space wrap>
                        {car.features.slice(0, 3).map((feature, index) => (
                          <Tag
                            key={index}
                            style={{ 
                              margin: "2px", 
                              fontSize: "12px",
                              background: "rgba(79, 70, 229, 0.1)",
                              borderColor: "rgba(79, 70, 229, 0.2)",
                              color: "#4F46E5",
                              borderRadius: "6px"
                            }}
                          >
                            {feature}
                          </Tag>
                        ))}
                        {car.features.length > 3 && (
                          <Tag style={{ 
                            fontSize: "12px",
                            background: "#f8fafc",
                            borderColor: "#e2e8f0",
                            color: "#64748b"
                          }}>
                            +{car.features.length - 3} {t('fleet_more', 'more')}
                          </Tag>
                        )}
                      </Space>
                    </div>

                    <div style={{ marginTop: "auto" }}>
                      <Button type="primary" block style={{
                        background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
                        border: "none",
                        height: "44px",
                        fontWeight: 600,
                        borderRadius: "8px",
                        boxShadow: "0 4px 12px rgba(79, 70, 229, 0.3)"
                      }}>
                        {t("fleet_bookNow")}
                      </Button>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div style={{ 
        padding: "80px 0", 
        background: "#f8fafc" 
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <Title level={2} style={{ 
            textAlign: "center", 
            marginBottom: "60px",
            color: "#1a202c",
            fontWeight: 700 
          }}>
            {t("fleet_whyChooseOurFleet")}
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
                  <SafetyOutlined style={{ fontSize: "36px", color: "white" }} />
                </div>
                <Title level={4} style={{ 
                  margin: 0, 
                  textAlign: "center",
                  color: "#1a202c" 
                }}>
                  {t("fleet_safetyFirst")}
                </Title>
                <Text style={{ 
                  textAlign: "center", 
                  color: "#64748b",
                  fontSize: "16px",
                  lineHeight: 1.6 
                }}>
                  {t("fleet_safetyDescription")}
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
                  {t("fleet_premiumQuality")}
                </Title>
                <Text style={{ 
                  textAlign: "center", 
                  color: "#64748b",
                  fontSize: "16px",
                  lineHeight: 1.6 
                }}>
                  {t("fleet_qualityDescription")}
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
                  <SettingOutlined style={{ fontSize: "36px", color: "white" }} />
                </div>
                <Title level={4} style={{ 
                  margin: 0, 
                  textAlign: "center",
                  color: "#1a202c" 
                }}>
                  {t("fleet_support247")}
                </Title>
                <Text style={{ 
                  textAlign: "center", 
                  color: "#64748b",
                  fontSize: "16px",
                  lineHeight: 1.6 
                }}>
                  {t("fleet_supportDescription")}
                </Text>
              </Space>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default FleetSection;






































































