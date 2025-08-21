
import React from 'react';
import { Layout, Row, Col, Space, Divider } from 'antd';
import { 
  FacebookOutlined, 
  TwitterOutlined, 
  InstagramOutlined, 
  LinkedinOutlined,
  CarOutlined 
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Footer: AntFooter } = Layout;

const Footer = () => {
  const { t } = useTranslation();

  return (
    <AntFooter className="footer-gradient" style={{ padding: '40px 50px 20px' }}>
      <Row gutter={[32, 32]}>
        <Col xs={24} sm={12} md={6}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
            <CarOutlined style={{ fontSize: '24px', color: 'white', marginRight: '8px' }} />
            <span style={{ fontSize: '20px', fontWeight: 'bold', color: 'white' }}>
              GoCar
            </span>
          </div>
          <p style={{ color: '#a0aec0', marginBottom: '16px' }}>
            {t('heroDescription')}
          </p>
          <Space size="large">
            <FacebookOutlined style={{ fontSize: '20px', color: '#a0aec0', cursor: 'pointer' }} />
            <TwitterOutlined style={{ fontSize: '20px', color: '#a0aec0', cursor: 'pointer' }} />
            <InstagramOutlined style={{ fontSize: '20px', color: '#a0aec0', cursor: 'pointer' }} />
            <LinkedinOutlined style={{ fontSize: '20px', color: '#a0aec0', cursor: 'pointer' }} />
          </Space>
        </Col>
        
        <Col xs={24} sm={12} md={6}>
          <h4 style={{ color: 'white', marginBottom: '16px' }}>{t('aboutUs')}</h4>
          <div style={{ color: '#a0aec0' }}>
            <div style={{ marginBottom: '8px', cursor: 'pointer' }}>{t('aboutUs')}</div>
            <div style={{ marginBottom: '8px', cursor: 'pointer' }}>{t('fleet')}</div>
            <div style={{ marginBottom: '8px', cursor: 'pointer' }}>{t('destinations')}</div>
            <div style={{ marginBottom: '8px', cursor: 'pointer' }}>{t('blog')}</div>
          </div>
        </Col>
        
        <Col xs={24} sm={12} md={6}>
          <h4 style={{ color: 'white', marginBottom: '16px' }}>{t('support')}</h4>
          <div style={{ color: '#a0aec0' }}>
            <div style={{ marginBottom: '8px', cursor: 'pointer' }}>{t('faq')}</div>
            <div style={{ marginBottom: '8px', cursor: 'pointer' }}>{t('support')}</div>
            <div style={{ marginBottom: '8px', cursor: 'pointer' }}>{t('contact')}</div>
            <div style={{ marginBottom: '8px', cursor: 'pointer' }}>{t('privacyPolicy')}</div>
          </div>
        </Col>
        
        <Col xs={24} sm={12} md={6}>
          <h4 style={{ color: 'white', marginBottom: '16px' }}>{t('contact')}</h4>
          <div style={{ color: '#a0aec0' }}>
            <div style={{ marginBottom: '8px' }}>📞 +1 (555) 123-4567</div>
            <div style={{ marginBottom: '8px' }}>📧 info@gocar.com</div>
            <div style={{ marginBottom: '8px' }}>📍 123 Main Street, City</div>
          </div>
        </Col>
      </Row>
      
      <Divider style={{ borderColor: '#4a5568', margin: '32px 0 16px' }} />
      
      <Row justify="center">
        <Col>
          <p style={{ color: '#a0aec0', textAlign: 'center', margin: 0 }}>
            © 2024 GoCar. {t('allRightsReserved')}
          </p>
        </Col>
      </Row>
    </AntFooter>
  );
};

export default Footer;
