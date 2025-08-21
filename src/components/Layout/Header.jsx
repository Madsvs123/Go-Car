
import React, { useEffect, useState } from 'react';
import { Layout, Menu, Button, Select, Row, Col, Drawer } from 'antd';
import { CarOutlined, UserOutlined, GlobalOutlined, MenuOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Header: AntHeader } = Layout;
const { Option } = Select;

const Header = ({ activeSection, setActiveSection }) => {
  const { t, i18n } = useTranslation();
  const [drawerVisible, setDrawerVisible] = useState(false);

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

  const handleMenuClick = (e) => {
    setActiveSection(e.key);
    setDrawerVisible(false);
  };

  return (
    <AntHeader style={{ padding: 0 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <Row justify="space-between" align="middle" style={{ height: '100%' }}>
          <Col>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <CarOutlined style={{ fontSize: '24px', color: '#4F46E5', marginRight: '8px' }} />
              <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#4F46E5' }}>
                GoCar
              </span>
            </div>
          </Col>
          
          <Col xs={0} lg={12} style={{ display: 'flex', justifyContent: 'center' }}>
            <Menu
              mode="horizontal"
              selectedKeys={[activeSection]}
              onClick={handleMenuClick}
              items={menuItems}
              style={{ border: 'none', background: 'transparent' }}
            />
          </Col>
          
          <Col xs={0} md={8} lg={6}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'flex-end' }}>
              <Select
                value={i18n.language}
                onChange={handleLanguageChange}
                style={{ width: 80 }}
                variant="borderless"
                suffixIcon={<GlobalOutlined />}
              >
                <Option value="en">EN</Option>
                <Option value="ar">AR</Option>
              </Select>
              
              <Button type="primary" icon={<UserOutlined />}>
                {t('login')}
              </Button>
            </div>
          </Col>

          <Col xs={6} md={0} lg={0}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'flex-end' }}>
              <Select
                value={i18n.language}
                onChange={handleLanguageChange}
                style={{ width: 60 }}
                variant="borderless"
                size="small"
              >
                <Option value="en">EN</Option>
                <Option value="ar">AR</Option>
              </Select>
              <Button 
                type="text" 
                icon={<MenuOutlined />} 
                onClick={() => setDrawerVisible(true)}
                style={{ color: '#4F46E5' }}
              />
            </div>
          </Col>
        </Row>
      </div>

      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        bodyStyle={{ padding: 0 }}
      >
        <Menu
          mode="vertical"
          selectedKeys={[activeSection]}
          onClick={handleMenuClick}
          items={menuItems}
          style={{ border: 'none' }}
        />
        <div style={{ padding: '20px', borderTop: '1px solid #f0f0f0' }}>
          <Button type="primary" icon={<UserOutlined />} block>
            {t('login')}
          </Button>
        </div>
      </Drawer>
    </AntHeader>
  );
};

export default Header;
