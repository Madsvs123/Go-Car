import React, { useState } from 'react';
import { Row, Col, Card, Typography, Space, Tag, Button, Avatar } from 'antd';
import { CalendarOutlined, UserOutlined, EyeOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { categoriesData, articlesData } from '../../data/blogData';

const { Title, Text, Paragraph } = Typography;

const BlogSection = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredArticles = selectedCategory === 'all' 
    ? articlesData 
    : articlesData.filter(article => article.category === selectedCategory);

  return (
    <div className="section-background-light light-section">
      <div className="main-container" style={{ padding: '80px 0' }}>
        <Title className="section-title">
          {t('latestFromBlog')}
        </Title>

        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <Paragraph style={{ fontSize: '18px', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
            Stay updated with the latest travel tips, car guides, and destination insights from our expert team.
          </Paragraph>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <Space wrap>
            {categoriesData.map(category => (
              <Button
                key={category.key}
                type={selectedCategory === category.key ? 'primary' : 'default'}
                onClick={() => setSelectedCategory(category.key)}
                style={{
                  background: selectedCategory === category.key ? '#4F46E5' : 'transparent',
                  color: selectedCategory === category.key ? 'white' : '#4F46E5',
                  border: '2px solid #4F46E5',
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

                  <Space style={{ width: '100%', justifyContent: 'space-space-between' }}>
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
                      Read More →
                    </Button>
                  </Space>
                </Space>
              </Card>
            </Col>
          ))}
        </Row>

        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <Button 
            type="primary" 
            size="large"
            className="gradient-button"
            style={{
              padding: '12px 32px',
              height: 'auto'
            }}
          >
            View All Articles
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;