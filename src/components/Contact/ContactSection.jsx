
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
      title: 'Phone',
      info: '+1 (555) 123-4567',
      subtitle: 'Available 24/7'
    },
    {
      icon: <MailOutlined style={{ fontSize: '24px', color: '#10B981' }} />,
      title: 'Email',
      info: 'info@gocar.com',
      subtitle: 'We reply within 24 hours'
    },
    {
      icon: <EnvironmentOutlined style={{ fontSize: '24px', color: '#F59E0B' }} />,
      title: 'Address',
      info: '123 Main Street, City',
      subtitle: 'Visit our office'
    }
  ];

  return (
    <div style={{ padding: '80px 50px', backgroundColor: 'white' }}>
      <Title className="section-title">{t('getInTouch')}</Title>
      
      <Row gutter={[48, 32]} align="top">
        <Col xs={24} lg={8}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <div>
              <Title level={3} style={{ color: '#1a202c', marginBottom: '16px' }}>
                Contact Information
              </Title>
              <Text type="secondary" style={{ fontSize: '16px' }}>
                Get in touch with us for any questions about our car rental services.
              </Text>
            </div>
            
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              {contactInfo.map((item, index) => (
                <Card key={index} size="small" style={{ border: 'none', background: '#f8fafc' }}>
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
              border: '1px solid #e2e8f0',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)'
            }}
          >
            <Form
              form={form}
              layout="vertical"
              onFinish={handleSubmit}
              size="large"
            >
              <Row gutter={16}>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="name"
                    label={t('name')}
                    rules={[{ required: true, message: 'Please enter your name' }]}
                  >
                    <Input placeholder={t('name')} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="email"
                    label={t('email')}
                    rules={[
                      { required: true, message: 'Please enter your email' },
                      { type: 'email', message: 'Please enter a valid email' }
                    ]}
                  >
                    <Input placeholder={t('email')} />
                  </Form.Item>
                </Col>
              </Row>
              
              <Form.Item
                name="phone"
                label={t('phone')}
                rules={[{ required: true, message: 'Please enter your phone number' }]}
              >
                <Input placeholder={t('phone')} />
              </Form.Item>
              
              <Form.Item
                name="message"
                label={t('message')}
                rules={[{ required: true, message: 'Please enter your message' }]}
              >
                <TextArea 
                  rows={6} 
                  placeholder={t('message')}
                  style={{ resize: 'vertical' }}
                />
              </Form.Item>
              
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  icon={<SendOutlined />}
                  className="gradient-button"
                  style={{ width: '100%', height: '48px' }}
                >
                  {t('sendMessage')}
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ContactSection;
