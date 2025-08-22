import React from 'react';
import { Row, Col, Card, Typography, Space, Avatar, Rate, Statistic } from 'antd';
import { StarFilled } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Title, Text, Paragraph } = Typography;

const TestimonialsSection = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: t('testimonials_businessTraveler', 'Business Traveler'),
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      rating: 5,
      content: t('testimonials_content1', 'The luxury SUV I rented was in perfect condition. The entire process was smooth and the staff was incredibly helpful. Will definitely use again for all my business trips!'),
    },
    {
      id: 2,
      name: 'Mike Chen',
      role: t('testimonials_familyVacation', 'Family Vacation'),
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      rating: 5,
      content: t('testimonials_content2', 'Perfect family van for our road trip! Plenty of space, comfortable, and great fuel efficiency. The booking process was quick and easy. Highly recommended for families!'),
    },
    {
      id: 3,
      name: 'Emma Wilson',
      role: t('testimonials_adventureTraveler', 'Adventure Traveler'),
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      rating: 5,
      content: t('testimonials_content3', 'The electric car was perfect for my coastal road trip. Charging was convenient and the car handled beautifully. Excellent customer service throughout the journey.'),
    }
  ];

  const testimonialStats = [
    { number: '4.9/5', label: t('testimonials_averageRating', 'Average Rating') },
    { number: '2,500+', label: t('testimonials_fiveStarReviews', '5-Star Reviews') },
    { number: '98%', label: t('testimonials_wouldRecommend', 'Would Recommend') },
  ];

  return (
    <div style={{ padding: '60px 0'}}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <Title level={2} style={{ color: '#1a202c', marginBottom: '16px' }}>
            {t('testimonials_title', 'What Our Customers Say')}
          </Title>
          <Paragraph style={{ 
            fontSize: '16px', 
            color: '#64748b', 
            maxWidth: '600px', 
            margin: '0 auto',
            lineHeight: 1.6 
          }}>
            {t('testimonials_description', 'Join thousands of satisfied customers who trust us for their travel needs')}
          </Paragraph>
        </div>

        {/* Stats Row - More compact */}
        <Row gutter={[24, 24]} style={{ marginBottom: '40px' }}>
          {testimonialStats.map((stat, index) => (
            <Col xs={8} md={8} key={index}>
              <div style={{ textAlign: 'center' }}>
                <Statistic
                  value={stat.number}
                  valueStyle={{ 
                    color: '#4F46E5', 
                    fontSize: '24px',
                    fontWeight: 'bold'
                  }}
                />
                <Text type="secondary" style={{ fontSize: '14px' }}>
                  {stat.label}
                </Text>
              </div>
            </Col>
          ))}
        </Row>

        {/* Testimonials Grid - Compact layout */}
        <Row gutter={[24, 24]}>
          {testimonials.map((testimonial) => (
            <Col xs={24} md={8} key={testimonial.id}>
              <Card
                style={{
                  height: '100%',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  background: 'white',
                }}
                styles={{ body: { padding: '20px' } }}
              >
                <Space direction="vertical" style={{ width: '100%' }} size="middle">
                  {/* Rating */}
                  <Rate 
                    disabled 
                    defaultValue={testimonial.rating} 
                    character={<StarFilled />}
                    style={{ color: '#F59E0B', fontSize: '14px' }}
                  />

                  {/* Testimonial Content */}
                  <Paragraph style={{ 
                    margin: 0, 
                    color: '#374151',
                    lineHeight: 1.5,
                    fontSize: '14px',
                    fontStyle: 'italic'
                  }}>
                    "{testimonial.content}"
                  </Paragraph>

                  {/* Customer Info */}
                  <Space>
                    <Avatar 
                      size={40} 
                      src={testimonial.image} 
                    />
                    <div>
                      <Text strong style={{ display: 'block', fontSize: '14px' }}>
                        {testimonial.name}
                      </Text>
                      <Text type="secondary" style={{ fontSize: '12px' }}>
                        {testimonial.role}
                      </Text>
                    </div>
                  </Space>
                </Space>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default TestimonialsSection;