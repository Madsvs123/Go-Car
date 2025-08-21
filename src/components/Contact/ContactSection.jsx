
import React, { useState } from 'react';
import { Row, Col, Typography, Form, Input, Button, Card, Space, message } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, SendOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Title, Text } = Typography;
const { TextArea } = Input;

const ContactSection = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      message.success('Message sent successfully!');
      form.resetFields();
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <PhoneOutlined style={{ fontSize: '24px', color: '#4F46E5' }} />,
      title: t('phone'),
      info: '+1 (555) 123-4567',
      subtitle: t('available247')
    },
    {
      icon: <MailOutlined style={{ fontSize: '24px', color: '#10B981' }} />,
      title: t('email'),
      info: 'info@gocar.com',
      subtitle: t('replyWithin24')
    },
    {
      icon: <EnvironmentOutlined style={{ fontSize: '24px', color: '#F59E0B' }} />,
      title: 'Address',
      info: '123 Main Street, City',
      subtitle: t('visitOffice')
    }
  ];

  return (
    <div className="section-background-tertiary" style={{ padding: '80px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 50px' }}>
        <Title className="section-title" style={{ color: 'white' }}>
          {t('getInTouch')}
        </Title>
      
      <Row gutter={[48, 32]} align="top">
        <Col xs={24} lg={8}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <div>
              <Title level={3} style={{ color: 'white', marginBottom: '16px' }}>
                {t('contactInformation')}
              </Title>
              <Text style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.9)' }}>
                {t('getInTouch')}
              </Text>
            </div>
            
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              {contactInfo.map((item, index) => (
                <Card key={index} size="small" style={{ 
                  border: 'none', 
                  background: 'rgba(255, 255, 255, 0.95)',
                  borderRadius: '12px'
                }}>
                  <Space>
                    {item.icon}
                    <div>
                      <div style={{ fontWeight: 600, marginBottom: '4px' }}>{item.title}</div>
                      <div style={{ color: '#4a5568', marginBottom: '2px' }}>{item.info}</div>
                      <Text type="secondary" style={{ fontSize: '12px' }}>{item.subtitle}</Text>
                    </div>
                  </Space>
                </Card>
              ))}
            </Space>
          </Space>
        </Col>
        
        <Col xs={24} lg={16}>
          <Card 
            style={{ 
              borderRadius: '16px',
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              border: 'none'
            }}
          >
            <Title level={3} style={{ marginBottom: '24px', textAlign: 'center' }}>
              {t('sendUsMessage')}
            </Title>
            
            <Form
              form={form}
              layout="vertical"
              onFinish={handleSubmit}
              size="large"
            >
              <Row gutter={[16, 0]}>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="name"
                    label={t('fullName')}
                    rules={[{ required: true, message: 'Please enter your name' }]}
                  >
                    <Input placeholder={t('fullName')} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="email"
                    label={t('emailAddress')}
                    rules={[
                      { required: true, message: 'Please enter your email' },
                      { type: 'email', message: 'Please enter a valid email' }
                    ]}
                  >
                    <Input placeholder={t('emailAddress')} />
                  </Form.Item>
                </Col>
              </Row>
              
              <Row gutter={[16, 0]}>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="phone"
                    label={t('phoneNumber')}
                    rules={[{ required: true, message: 'Please enter your phone number' }]}
                  >
                    <Input placeholder={t('phoneNumber')} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="subject"
                    label={t('subject')}
                    rules={[{ required: true, message: 'Please enter a subject' }]}
                  >
                    <Input placeholder={t('subject')} />
                  </Form.Item>
                </Col>
              </Row>
              
              <Form.Item
                name="message"
                label={t('message')}
                rules={[{ required: true, message: 'Please enter your message' }]}
              >
                <TextArea 
                  rows={4} 
                  placeholder={t('message')}
                />
              </Form.Item>
              
              <Form.Item style={{ marginBottom: 0, textAlign: 'center' }}>
                <Button 
                  type="primary" 
                  htmlType="submit" 
                  loading={loading}
                  icon={<SendOutlined />}
                  className="gradient-button"
                  style={{ padding: '12px 32px', height: 'auto' }}
                >
                  {t('sendMessage')}
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
      </div>
    </div>
  );
};

export default ContactSection;
