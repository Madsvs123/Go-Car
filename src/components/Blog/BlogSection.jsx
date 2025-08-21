import React, { useState } from 'react';
import { Row, Col, Card, Typography, Space, Tag, Button, Avatar } from 'antd';
import { CalendarOutlined, UserOutlined, EyeOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Title, Text, Paragraph } = Typography;
const { Meta } = Card;

const BlogSection = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { key: 'all', label: t('allArticles') },
    { key: 'travel-tips', label: t('travelTips') },
    { key: 'car-guides', label: t('carGuides') },
    { key: 'destinations', label: t('destinations') },
    { key: 'safety', label: t('safety') }
  ];

  const articles = [
    {
      id: 1,
      title: 'Top 10 Road Trip Destinations for 2024',
      excerpt: 'Discover the most scenic and exciting road trip destinations that will make your journey unforgettable. From coastal highways to mountain passes.',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      views: 2340,
      category: 'destinations',
      tags: ['Road Trip', 'Travel', 'Adventure']
    },
    {
      id: 2,
      title: 'Car Rental Safety Tips for International Travelers',
      excerpt: 'Essential safety guidelines and tips for renting cars when traveling abroad. Learn about insurance, local laws, and emergency procedures.',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      author: 'Mike Chen',
      date: '2024-01-10',
      readTime: '7 min read',
      views: 1890,
      category: 'safety',
      tags: ['Safety', 'International', 'Insurance']
    },
    {
      id: 3,
      title: 'Electric vs Gas Cars: Which is Better for Long Trips?',
      excerpt: 'A comprehensive comparison of electric and gas vehicles for long-distance travel. Explore charging networks, range, and cost considerations.',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bac6861d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      author: 'Emma Wilson',
      date: '2024-01-08',
      readTime: '6 min read',
      views: 3120,
      category: 'car-guides',
      tags: ['Electric Cars', 'Comparison', 'Environment']
    },
    {
      id: 4,
      title: 'How to Choose the Right Car for Your Family Vacation',
      excerpt: 'Selecting the perfect vehicle for your family trip. Consider space, safety features, entertainment options, and budget.',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      author: 'David Rodriguez',
      date: '2024-01-05',
      readTime: '4 min read',
      views: 1560,
      category: 'travel-tips',
      tags: ['Family', 'Vacation', 'Car Selection']
    },
    {
      id: 5,
      title: 'Winter Driving: Essential Tips for Cold Weather Travel',
      excerpt: 'Stay safe on winter roads with these essential driving tips. Learn about tire preparation, emergency kits, and weather planning.',
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      author: 'Lisa Park',
      date: '2024-01-03',
      readTime: '8 min read',
      views: 2780,
      category: 'safety',
      tags: ['Winter', 'Safety', 'Weather']
    },
    {
      id: 6,
      title: 'Hidden Gems: Off-the-Beaten-Path Destinations',
      excerpt: 'Explore lesser-known destinations that offer incredible experiences. From secret beaches to mountain hideaways.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      author: 'Alex Turner',
      date: '2024-01-01',
      readTime: '6 min read',
      views: 1920,
      category: 'destinations',
      tags: ['Hidden Gems', 'Adventure', 'Nature']
    }
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="section-background-secondary" style={{ padding: '80px 0' }}>
      <div className="app-container">
        <Title className="section-title section-title-white" style={{ color: 'white' }}>
          {t('latestNews')}
        </Title>

      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <Paragraph style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.9)', maxWidth: '600px', margin: '0 auto' }}>
          Stay updated with the latest travel tips, car guides, and destination insights from our expert team.
        </Paragraph>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <Space wrap>
          {categories.map(category => (
            <Button
              key={category.key}
              type={selectedCategory === category.key ? 'primary' : 'default'}
              onClick={() => setSelectedCategory(category.key)}
              style={{
                background: selectedCategory === category.key ? 'white' : 'transparent',
                color: selectedCategory === category.key ? '#4F46E5' : 'white',
                border: '2px solid white',
                borderRadius: '20px'
              }}
            >
              {category.label}
            </Button>
          ))}
        </Space>
      </div>

      <Row gutter={[24, 32]}>
        {filteredArticles.map((article) => (
          <Col xs={24} md={12} lg={8} key={article.id}>
            <Card
              hoverable
              cover={
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                  <img
                    alt={article.title}
                    src={article.image}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover' 
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: 'rgba(255, 255, 255, 0.9)',
                    padding: '4px 8px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}>
                    {article.readTime}
                  </div>
                </div>
              }
              style={{ background: 'white', borderRadius: '12px' }}
            >
              <Space direction="vertical" style={{ width: '100%' }}>
                <div>
                  <Space wrap style={{ marginBottom: '8px' }}>
                    {article.tags.map(tag => (
                      <Tag key={tag} color="blue" size="small">
                        {tag}
                      </Tag>
                    ))}
                  </Space>
                </div>

                <Title level={4} style={{ margin: 0, lineHeight: '1.3' }}>
                  {article.title}
                </Title>

                <Paragraph 
                  type="secondary" 
                  style={{ margin: '12px 0', fontSize: '14px', lineHeight: '1.5' }}
                  ellipsis={{ rows: 3 }}
                >
                  {article.excerpt}
                </Paragraph>

                <Space style={{ width: '100%', justifyContent: 'space-between' }}>
                  <Space>
                    <Avatar size="small" icon={<UserOutlined />} />
                    <Text style={{ fontSize: '13px' }}>{article.author}</Text>
                  </Space>
                  <Space>
                    <CalendarOutlined style={{ color: '#64748b' }} />
                    <Text type="secondary" style={{ fontSize: '13px' }}>
                      {new Date(article.date).toLocaleDateString()}
                    </Text>
                  </Space>
                </Space>

                <Space style={{ width: '100%', justifyContent: 'space-between', marginTop: '12px' }}>
                  <Space>
                    <EyeOutlined style={{ color: '#64748b' }} />
                    <Text type="secondary" style={{ fontSize: '13px' }}>
                      {article.views.toLocaleString()} views
                    </Text>
                  </Space>
                  <Button type="link" style={{ padding: 0, height: 'auto', fontSize: '13px' }}>
                    {t('readMore')} →
                  </Button>
                </Space>
              </Space>
            </Card>
          </Col>
        ))}
      </Row>

      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <Button 
          type="default" 
          size="large"
          style={{
            background: 'white',
            color: '#4F46E5',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 600,
            padding: '12px 32px',
            height: 'auto'
          }}
        >
          {t('viewAllArticles')}
        </Button>
      </div>
      </div>
    </div>
  );
};

export default BlogSection;