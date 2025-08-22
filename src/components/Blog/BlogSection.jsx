import React, { useState } from 'react';
import { Row, Col, Card, Typography, Space, Tag, Button, Avatar, Divider } from 'antd';
import { CalendarOutlined, UserOutlined, EyeOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Title, Text, Paragraph } = Typography;

const BlogSection = ({ showAll = false }) => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { 
      key: 'all', 
      label: t('blog_allArticles', 'All Articles'), 
      count: 12
    },
    { 
      key: 'travel-tips', 
      label: t('blog_travelTips', 'Travel Tips'), 
      count: 4
    },
    { 
      key: 'car-guides', 
      label: t('blog_carGuides', 'Car Guides'), 
      count: 3
    },
    { 
      key: 'destinations', 
      label: t('blog_destinations', 'Destinations'), 
      count: 3
    },
    { 
      key: 'safety', 
      label: t('blog_safety', 'Safety'), 
      count: 2
    }
  ];

  const featuredArticle = {
    id: 0,
    title: t('blog_featuredTitle', 'The Ultimate Road Trip Planning Guide for 2024'),
    excerpt: t('blog_featuredExcerpt', 'Everything you need to know to plan the perfect road trip adventure. From route planning to packing essentials, we cover all the tips and tricks for an unforgettable journey.'),
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    author: t('blog_author1', 'Emily Carter'),
    date: '2024-01-20',
    readTime: t('blog_readTime1', '10 min read'),
    views: 5420,
    category: 'travel-tips',
    tags: [t('blog_tag1', 'Road Trip'), t('blog_tag2', 'Planning'), t('blog_tag3', 'Adventure'), t('blog_tag4', 'Guide')]
  };

  const articles = [
    {
      id: 1,
      title: t('blog_article1_title', 'Top 10 Road Trip Destinations for 2024'),
      excerpt: t('blog_article1_excerpt', 'Discover the most scenic and exciting road trip destinations that will make your journey unforgettable. From coastal highways to mountain passes.'),
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      author: t('blog_author2', 'Sarah Johnson'),
      date: '2024-01-15',
      readTime: t('blog_readTime2', '5 min read'),
      views: 2340,
      category: 'destinations',
      tags: [t('blog_tag1', 'Road Trip'), t('blog_tag5', 'Travel'), t('blog_tag3', 'Adventure')]
    },
    {
      id: 2,
      title: t('blog_article2_title', 'Car Rental Safety Tips for International Travelers'),
      excerpt: t('blog_article2_excerpt', 'Essential safety guidelines and tips for renting cars when traveling abroad. Learn about insurance, local laws, and emergency procedures.'),
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      author: t('blog_author3', 'Mike Chen'),
      date: '2024-01-10',
      readTime: t('blog_readTime3', '7 min read'),
      views: 1890,
      category: 'safety',
      tags: [t('blog_tag6', 'Safety'), t('blog_tag7', 'International'), t('blog_tag8', 'Insurance')]
    },
    {
      id: 3,
      title: t('blog_article3_title', 'Electric vs Gas Cars: Which is Better for Long Trips?'),
      excerpt: t('blog_article3_excerpt', 'A comprehensive comparison of electric and gas vehicles for long-distance travel. Explore charging networks, range, and cost considerations.'),
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      author: t('blog_author4', 'Emma Wilson'),
      date: '2024-01-08',
      readTime: t('blog_readTime4', '6 min read'),
      views: 3120,
      category: 'car-guides',
      tags: [t('blog_tag9', 'Electric Cars'), t('blog_tag10', 'Comparison'), t('blog_tag11', 'Environment')]
    },
    {
      id: 4,
      title: t('blog_article4_title', 'How to Choose the Right Car for Your Family Vacation'),
      excerpt: t('blog_article4_excerpt', 'Selecting the perfect vehicle for your family trip. Consider space, safety features, entertainment options, and budget.'),
      image: 'https://plus.unsplash.com/premium_photo-1663054560572-071844793d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      author: t('blog_author5', 'David Rodriguez'),
      date: '2024-01-05',
      readTime: t('blog_readTime5', '4 min read'),
      views: 1560,
      category: 'travel-tips',
      tags: [t('blog_tag12', 'Family'), t('blog_tag13', 'Vacation'), t('blog_tag14', 'Car Selection')]
    },
    {
      id: 5,
      title: t('blog_article5_title', 'Winter Driving: Essential Tips for Cold Weather Travel'),
      excerpt: t('blog_article5_excerpt', 'Stay safe on winter roads with these essential driving tips. Learn about tire preparation, emergency kits, and weather planning.'),
      image: 'https://images.unsplash.com/photo-1418985227304-f32df7d84e39?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      author: t('blog_author6', 'Lisa Park'),
      date: '2024-01-03',
      readTime: t('blog_readTime6', '8 min read'),
      views: 2780,
      category: 'safety',
      tags: [t('blog_tag15', 'Winter'), t('blog_tag6', 'Safety'), t('blog_tag16', 'Weather')]
    },
    {
      id: 6,
      title: t('blog_article6_title', 'Road Trip Packing Essentials: Never Forget These Items'),
      excerpt: t('blog_article6_excerpt', 'The ultimate packing checklist for your next road trip adventure. From emergency kits to comfort items.'),
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      author: t('blog_author7', 'Alex Thompson'),
      date: '2024-01-01',
      readTime: t('blog_readTime7', '7 min read'),
      views: 1895,
      category: 'travel-tips',
      tags: [t('blog_tag17', 'Packing'), t('blog_tag18', 'Essentials'), t('blog_tag19', 'Checklist')]
    }
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const displayedArticles = showAll ? filteredArticles : articles.slice(0, 3);

  if (!showAll) {
    // Preview mode for main layout
    return (
      <div style={{ padding: '60px 0', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <Title level={2} style={{ color: '#1a202c', marginBottom: '16px' }}>
              {t('blog_latestFromBlog', 'Latest From Our Blog')}
            </Title>
            <Paragraph style={{ 
              fontSize: '16px', 
              color: '#64748b', 
              maxWidth: '600px', 
              margin: '0 auto',
              lineHeight: 1.6 
            }}>
              {t('blog_description', 'Expert insights, travel tips, and destination guides to help you plan your perfect journey.')}
            </Paragraph>
          </div>

          <Row gutter={[32, 32]}>
            {displayedArticles.map((article) => (
              <Col xs={24} md={12} lg={8} key={article.id}>
                <Card
                  hoverable
                  style={{
                    height: '100%',
                    border: '1px solid #e5e7eb',
                    borderRadius: '12px',
                    overflow: 'hidden'
                  }}
                  styles={{
                    body: { padding: '20px' }
                  }}
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
                    </div>
                  }
                >
                  <Space direction="vertical" style={{ width: '100%' }} size="middle">
                    <div>
                      <Tag color="blue" style={{ 
                        fontSize: '11px',
                        fontWeight: 600,
                        marginBottom: '12px'
                      }}>
                        {article.category.replace('-', ' ').toUpperCase()}
                      </Tag>
                      <Title level={4} style={{ 
                        margin: 0, 
                        lineHeight: 1.4,
                        fontSize: '18px',
                        fontWeight: 600 
                      }}>
                        {article.title}
                      </Title>
                    </div>

                    <Paragraph style={{ 
                      margin: 0, 
                      color: '#64748b',
                      lineHeight: 1.6,
                      fontSize: '14px'
                    }}>
                      {article.excerpt}
                    </Paragraph>

                    <Space style={{ width: '100%', justifyContent: 'space-between' }}>
                      <Space>
                        <Avatar size="small" icon={<UserOutlined />} />
                        <Text style={{ fontSize: '14px', fontWeight: 500 }}>{article.author}</Text>
                      </Space>
                      <Space>
                        <CalendarOutlined style={{ color: '#64748b', fontSize: '14px' }} />
                        <Text style={{ fontSize: '14px', color: '#64748b' }}>
                          {new Date(article.date).toLocaleDateString()}
                        </Text>
                      </Space>
                    </Space>

                    <Divider style={{ margin: '16px 0' }} />

                    <Button 
                      type="link" 
                      style={{ 
                        padding: 0, 
                        height: 'auto', 
                        fontSize: '14px',
                        fontWeight: 600,
                        color: '#4F46E5'
                      }}
                      onClick={() => window.location.hash = 'blog'}
                    >
                      {t('blog_readMore', 'Read More')} <ArrowRightOutlined />
                    </Button>
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Button 
              type="primary" 
              size="large"
              onClick={() => window.location.hash = 'blog'}
              style={{
                background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
                border: "none",
                height: "48px",
                padding: "0 40px",
                fontWeight: 600,
                borderRadius: "8px"
              }}
            >
              {t('blog_viewAllArticles', 'View All Articles')}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Full blog page
  return (
    <div id="blog">
      {/* Blog Hero Section with Gradient */}
      <div style={{ 
        padding: '100px 0', 
        background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80") center/cover',
          opacity: 0.1
        }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative' }}>
          <Title level={1} style={{ color: 'white', marginBottom: '16px', fontWeight: 700, fontSize: '3rem' }}>
            {t('blog_title', 'Travel Blog')}
          </Title>
          <Paragraph style={{ 
            fontSize: '18px', 
            color: '#e2e8f0', 
            maxWidth: '600px', 
            margin: '0 auto',
            lineHeight: 1.6 
          }}>
            {t('blog_description', 'Expert insights, travel tips, and destination guides to help you plan your perfect journey.')}
          </Paragraph>
        </div>
      </div>

      {/* Featured Article with Glassmorphism */}
      <div style={{ 
        padding: '80px 0', 
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 80% 20%, rgba(79, 70, 229, 0.08) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <Title level={2} style={{ 
            textAlign: 'center', 
            marginBottom: '48px',
            color: '#1a202c',
            fontWeight: 700 
          }}>
            {t('blog_featuredArticle', 'Featured Article')}
          </Title>
          
          <Card
            style={{
              border: 'none',
              borderRadius: '20px',
              overflow: 'hidden',
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
            }}
            styles={{ body: { padding: 0 } }}
          >
            <Row gutter={0}>
              <Col xs={24} lg={12}>
                <div style={{ position: 'relative', height: '400px' }}>
                  <img
                    alt={featuredArticle.title}
                    src={featuredArticle.image}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              </Col>
              <Col xs={24} lg={12}>
                <div style={{ padding: '40px' }}>
                  <Space direction="vertical" style={{ width: '100%' }} size="large">
                    <div>
                      <Tag color="blue" style={{ 
                        marginBottom: '16px',
                        fontSize: '12px',
                        fontWeight: 600,
                        background: 'rgba(79, 70, 229, 0.1)',
                        border: 'none',
                        color: '#4F46E5'
                      }}>
                        {featuredArticle.category.replace('-', ' ').toUpperCase()}
                      </Tag>
                      <Title level={3} style={{ margin: 0, lineHeight: 1.3 }}>
                        {featuredArticle.title}
                      </Title>
                    </div>
                    
                    <Paragraph style={{ 
                      color: '#64748b',
                      fontSize: '16px',
                      lineHeight: 1.6,
                      margin: 0
                    }}>
                      {featuredArticle.excerpt}
                    </Paragraph>

                    <Space style={{ width: '100%', justifyContent: 'space-between' }}>
                      <Space>
                        <Avatar size="small" icon={<UserOutlined />} />
                        <Text strong style={{ color: '#1a202c' }}>{featuredArticle.author}</Text>
                      </Space>
                      <Space>
                        <CalendarOutlined style={{ color: '#64748b' }} />
                        <Text style={{ color: '#64748b' }}>
                          {new Date(featuredArticle.date).toLocaleDateString()}
                        </Text>
                      </Space>
                    </Space>

                    <Space style={{ width: '100%', justifyContent: 'space-between' }}>
                      <Space>
                        <EyeOutlined style={{ color: '#64748b' }} />
                        <Text style={{ color: '#64748b' }}>
                          {featuredArticle.views.toLocaleString()} {t('blog_views', 'views')}
                        </Text>
                        <Text style={{ color: '#64748b' }}>•</Text>
                        <Text style={{ color: '#64748b' }}>{featuredArticle.readTime}</Text>
                      </Space>
                      <Button type="primary" style={{
                        background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
                        border: "none",
                        fontWeight: 600,
                        boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)'
                      }}>
                        {t('blog_readFullArticle', 'Read Full Article')}
                      </Button>
                    </Space>
                  </Space>
                </div>
              </Col>
            </Row>
          </Card>
        </div>
      </div>

      {/* Main Blog Content with Category Tabs */}
      <div style={{ padding: '80px 0', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <Title level={2} style={{ 
            textAlign: 'center', 
            marginBottom: '48px',
            color: '#1a202c',
            fontWeight: 700 
          }}>
            {t('blog_latestArticles', 'Latest Articles')}
          </Title>

          {/* Simple Category Tabs */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            marginBottom: '48px',
            flexWrap: 'wrap',
            gap: '8px'
          }}>
            {categories.map((category) => (
              <Button
                key={category.key}
                type={selectedCategory === category.key ? 'primary' : 'default'}
                onClick={() => setSelectedCategory(category.key)}
                style={{
                  borderRadius: '20px',
                  height: '40px',
                  padding: '0 20px',
                  border: selectedCategory === category.key ? 'none' : '1px solid #d1d5db',
                  background: selectedCategory === category.key 
                    ? "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)" 
                    : 'white',
                  fontWeight: 500
                }}
              >
                {category.label} ({category.count})
              </Button>
            ))}
          </div>

          <Row gutter={[32, 32]}>
            {filteredArticles.map((article) => (
              <Col xs={24} md={12} lg={8} key={article.id}>
                <Card
                  hoverable
                  style={{
                    height: '100%',
                    border: '1px solid #e5e7eb',
                    borderRadius: '12px',
                    overflow: 'hidden'
                  }}
                  styles={{
                    body: { padding: '20px' }
                  }}
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
                        top: '16px',
                        right: '16px',
                        background: 'rgba(255, 255, 255, 0.95)',
                        padding: '6px 12px',
                        borderRadius: '6px',
                        fontSize: '12px',
                        fontWeight: '600',
                        color: '#4F46E5'
                      }}>
                        {article.readTime}
                      </div>
                    </div>
                  }
                >
                  <Space direction="vertical" style={{ width: '100%' }} size="middle">
                    <div>
                      <Tag color="blue" style={{ 
                        fontSize: '11px',
                        fontWeight: 600,
                        marginBottom: '12px'
                      }}>
                        {article.category.replace('-', ' ').toUpperCase()}
                      </Tag>
                      <Title level={4} style={{ 
                        margin: 0, 
                        lineHeight: 1.4,
                        fontSize: '18px',
                        fontWeight: 600 
                      }}>
                        {article.title}
                      </Title>
                    </div>

                    <Paragraph style={{ 
                      margin: 0, 
                      color: '#64748b',
                      lineHeight: 1.6,
                      fontSize: '14px'
                    }}>
                      {article.excerpt}
                    </Paragraph>

                    <Space style={{ width: '100%', justifyContent: 'space-between' }}>
                      <Space>
                        <Avatar size="small" icon={<UserOutlined />} />
                        <Text style={{ fontSize: '14px', fontWeight: 500 }}>{article.author}</Text>
                      </Space>
                      <Space>
                        <CalendarOutlined style={{ color: '#64748b', fontSize: '14px' }} />
                        <Text style={{ fontSize: '14px', color: '#64748b' }}>
                          {new Date(article.date).toLocaleDateString()}
                        </Text>
                      </Space>
                    </Space>

                    <Divider style={{ margin: '16px 0' }} />

                    <Space style={{ width: '100%', justifyContent: 'space-between' }}>
                      <Space>
                        <EyeOutlined style={{ color: '#64748b', fontSize: '14px' }} />
                        <Text style={{ fontSize: '14px', color: '#64748b' }}>
                          {article.views.toLocaleString()} {t('blog_views', 'views')}
                        </Text>
                      </Space>
                      <Button 
                        type="link" 
                        style={{ 
                          padding: 0, 
                          height: 'auto', 
                          fontSize: '14px',
                          fontWeight: 600,
                          color: '#4F46E5'
                        }}
                      >
                        {t('blog_readMore', 'Read More')} <ArrowRightOutlined />
                      </Button>
                    </Space>
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>

          {filteredArticles.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <Title level={4} style={{ color: '#64748b' }}>
                {t('blog_noResults', 'No articles found in this category.')}
              </Title>
              <Button 
                type="primary"
                onClick={() => setSelectedCategory('all')}
                style={{
                  background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
                  border: "none",
                  fontWeight: 600
                }}
              >
                {t('blog_viewAll', 'View All Articles')}
              </Button>
            </div>
          )}

          {filteredArticles.length > 0 && (
            <div style={{ textAlign: 'center', marginTop: '60px' }}>
              <Button 
                type="primary" 
                size="large"
                style={{
                  background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
                  border: "none",
                  fontWeight: 600,
                  padding: '12px 32px',
                  height: 'auto',
                  borderRadius: '8px'
                }}
              >
                {t('blog_loadMoreArticles', 'Load More Articles')}
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Newsletter Section */}
      <div style={{ 
        padding: '80px 0', 
        background: '#f8fafc',
        borderTop: '1px solid #e5e7eb'
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <Title level={3} style={{ marginBottom: '16px', color: '#1a202c' }}>
            {t('blog_stayUpdated', 'Stay Updated')}
          </Title>
          <Paragraph style={{ 
            color: '#64748b',
            fontSize: '16px',
            marginBottom: '32px'
          }}>
            {t('blog_newsletterDescription', 'Get the latest travel tips and exclusive offers delivered to your inbox.')}
          </Paragraph>
          <div style={{ 
            display: 'flex', 
            gap: '8px', 
            maxWidth: '400px', 
            margin: '0 auto' 
          }}>
            <input 
              placeholder={t('blog_emailPlaceholder', 'Enter your email')}
              style={{ 
                flex: 1, 
                padding: '12px 16px', 
                border: '1px solid #d1d5db', 
                borderRadius: '6px',
                fontSize: '16px'
              }}
            />
            <Button 
              type="primary"
              style={{
                background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
                border: "none",
                fontWeight: 600
              }}
            >
              {t('blog_subscribe', 'Subscribe')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;















