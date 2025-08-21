
import React from 'react';
import { Row, Col, Typography, Card, Button, Space } from 'antd';
import { CalendarOutlined, UserOutlined, ReadOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Title, Text, Paragraph } = Typography;
const { Meta } = Card;

const BlogSection = () => {
  const { t } = useTranslation();

  const articles = [
    {
      id: 1,
      title: 'Top 10 Road Trip Destinations for 2024',
      excerpt: 'Discover the most scenic and exciting road trip destinations that will make your journey unforgettable.',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Car Rental Safety Tips for International Travelers',
      excerpt: 'Essential safety guidelines and tips for renting cars when traveling abroad.',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      author: 'Mike Chen',
      date: '2024-01-10',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Electric vs Gas Cars: Which is Better for Long Trips?',
      excerpt: 'A comprehensive comparison of electric and gas vehicles for long-distance travel.',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bac6861d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      author: 'Emma Wilson',
      date: '2024-01-08',
      readTime: '6 min read'
    }
  ];

  return (
    <div style={{ padding: '80px 50px', backgroundColor: '#f8fafc' }}>
      <Title className="section-title">{t('latestNews')}</Title>
      
      <Row gutter={[24, 32]}>
        {articles.map(article => (
          <Col xs={24} sm={12} lg={8} key={article.id}>
            <Card
              className="car-card"
              cover={
                <img
                  alt={article.title}
                  src={article.image}
                  style={{ height: 200, objectFit: 'cover' }}
                />
              }
              actions={[
                <Button type="link" icon={<ReadOutlined />} style={{ color: '#4F46E5' }}>
                  {t('readMore')}
                </Button>
              ]}
            >
              <Meta
                title={
                  <div style={{ marginBottom: '12px' }}>
                    <Title level={4} style={{ margin: 0, fontSize: '16px', lineHeight: '1.4' }}>
                      {article.title}
                    </Title>
                  </div>
                }
                description={
                  <Space direction="vertical" size="medium" style={{ width: '100%' }}>
                    <Paragraph style={{ margin: 0, color: '#6b7280' }}>
                      {article.excerpt}
                    </Paragraph>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Space size="small">
                        <UserOutlined style={{ color: '#9ca3af' }} />
                        <Text type="secondary" style={{ fontSize: '12px' }}>
                          {article.author}
                        </Text>
                      </Space>
                      <Space size="small">
                        <CalendarOutlined style={{ color: '#9ca3af' }} />
                        <Text type="secondary" style={{ fontSize: '12px' }}>
                          {new Date(article.date).toLocaleDateString()}
                        </Text>
                      </Space>
                    </div>
                    
                    <Text type="secondary" style={{ fontSize: '12px' }}>
                      {article.readTime}
                    </Text>
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

export default BlogSection;
