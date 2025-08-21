
import React, { useEffect } from 'react';
import { Layout, Menu, Button, Select, Row, Col } from 'antd';
import { CarOutlined, UserOutlined, GlobalOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Header: AntHeader } = Layout;
const { Option } = Select;

const Header = ({ activeSection, setActiveSection }) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'ar' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  const menuItems = [
    { key: 'home', label: t('home') },
    { key: 'destinations', label: t('destinations') },
    { key: 'fleet', label: t('fleet') },
    { key: 'blog', label: t('blog') },
    { key: 'contact', label: t('contact') },
  ];

  return (
    <AntHeader style={{ padding: '0 50px' }}>
      <Row justify="space-between" align="middle" style={{ height: '100%' }}>
        <Col>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <CarOutlined style={{ fontSize: '24px', color: '#4F46E5', marginRight: '8px' }} />
            <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#4F46E5' }}>
              GoCar
            </span>
          </div>
        </Col>
        
        <Col flex="auto" style={{ display: 'flex', justifyContent: 'center' }}>
          <Menu
            mode="horizontal"
            selectedKeys={[activeSection]}
            onClick={(e) => setActiveSection(e.key)}
            items={menuItems}
            style={{ border: 'none', background: 'transparent' }}
          />
        </Col>
        
        <Col>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Select
              value={i18n.language}
              onChange={handleLanguageChange}
              style={{ width: 80 }}
              bordered={false}
              suffixIcon={<GlobalOutlined />}
            >
              <Option value="en">EN</Option>
              <Option value="ar">AR</Option>
            </Select>
            
            <Button type="primary" icon={<UserOutlined />} style={{ marginLeft: '8px' }}>
              {t('login')}
            </Button>
          </div>
        </Col>
      </Row>
    </AntHeader>
  );
};

export default Header;
