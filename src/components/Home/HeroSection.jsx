import React from 'react';
import { Row, Col, Typography, Space, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import BookingForm from './BookingForm';

const { Title, Paragraph } = Typography;

const HeroSection = ({ onExploreFleet, onExploreDestinations }) => {
  const { t } = useTranslation();

  return (
    <div style={{ 
      padding: "120px 0", 
      background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
      color: "white",
      position: "relative",
      overflow: "hidden",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center"
    }}>
      {/* Background image with overlay */}
      <div style={{ 
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "url('https://images.unsplash.com/photo-1703098916487-ab6668147d50?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80') center/cover",
        opacity: 0.2
      }} />
      
      <div style={{ 
        maxWidth: "1200px", 
        margin: "0 auto", 
        padding: "0 24px", 
        position: "relative",
        width: "100%"
      }}>
        <Row gutter={[48, 32]} align="middle">
          <Col xs={24} lg={12}>
            <Title level={1} style={{ 
              color: "white", 
              marginBottom: "24px", 
              fontWeight: 700, 
              fontSize: "3rem",
              textShadow: "0 4px 12px rgba(0, 0, 0, 0.3)"
            }}>
              {t("hero_title", "The fastest and most comfortable way")}
              <>{' '}</>
              {t("hero_subtitle", "to book your car")}
            </Title>
            <Paragraph style={{ 
              fontSize: "18px", 
              color: "#e2e8f0", 
              marginBottom: "32px", 
              lineHeight: 1.6,
              textShadow: "0 1px 4px rgba(0, 0, 0, 0.2)"
            }}>
              {t("hero_description", "Where are you traveling? Find the perfect car for your journey with our premium fleet.")}
            </Paragraph>
            <Space>
              <Button 
                type="primary" 
                size="large"
                onClick={onExploreFleet}
                style={{ 
                  background: "rgba(255, 255, 255, 0.2)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  color: "white",
                  fontWeight: 600,
                  height: "48px",
                  padding: "0 32px",
                  backdropFilter: "blur(10px)"
                }}
              >
                {t("hero_exploreFleet", "Explore Fleet")}
              </Button>
              <Button 
                size="large"
                onClick={onExploreDestinations}
                style={{ 
                  background: "rgba(255,255,255,0.1)", 
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.2)",
                  height: "48px",
                  padding: "0 24px",
                  backdropFilter: "blur(10px)"
                }}
              >
                {t("hero_exploreDestinations", "View Destinations")}
              </Button>
            </Space>
          </Col>
          
          <Col xs={24} lg={12}>
            <div style={{
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              padding: "32px"
            }}>
              <BookingForm />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HeroSection;