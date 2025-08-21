import React, { useEffect, useState } from 'react';
import { Layout, Menu, Button, Select, Row, Col, Drawer } from 'antd';
import { CarOutlined, UserOutlined, GlobalOutlined, MenuOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Header: AntHeader } = Layout;
const { Option } = Select;

const Header = ({ activeSection, setActiveSection }) => {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'ar' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  const handleMenuClick = (e) => {
    setActiveSection(e.key);
    setMobileMenuOpen(false);
  };

  const menuItems = [
    { key: 'home', label: t('home') },
    { key: 'destinations', label: t('destinations') },
    { key: 'fleet', label: t('fleet') },
    { key: 'blog', label: t('blog') },
    { key: 'contact', label: t('contact') },
  ];

  return (
    <AntHeader className="header-container" style={{ padding: 0 }}>
      <div className="app-container">
        <Row justify="space-between" align="middle" style={{ height: '64px' }}>
          <Col>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <CarOutlined style={{ fontSize: '24px', color: '#4F46E5', marginRight: '8px' }} />
              <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#4F46E5' }}>
                GoCar
              </span>
            </div>
          </Col>

          {!isMobile ? (
            <>
              <Col flex="auto" style={{ display: 'flex', justifyContent: 'center' }}>
                <Menu
                  mode="horizontal"
                  selectedKeys={[activeSection]}
                  onClick={handleMenuClick}
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
            </>
          ) : (
            <Col>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Select
                  value={i18n.language}
                  onChange={handleLanguageChange}
                  style={{ width: 60 }}
                  variant="borderless"
                  suffixIcon={<GlobalOutlined />}
                >
                  <Option value="en">EN</Option>
                  <Option value="ar">AR</Option>
                </Select>

                <Button
                  type="text"
                  icon={<MenuOutlined />}
                  onClick={() => setMobileMenuOpen(true)}
                  style={{ color: '#4F46E5' }}
                />
              </div>
            </Col>
          )}
        </Row>
      </div>

      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
        width={280}
      >
        <Menu
          mode="vertical"
          selectedKeys={[activeSection]}
          onClick={handleMenuClick}
          items={menuItems}
          style={{ border: 'none' }}
        />

        <div style={{ padding: '20px 0', borderTop: '1px solid #f0f0f0', marginTop: '20px' }}>
          <Button type="primary" icon={<UserOutlined />} block>
            {t('login')}
          </Button>
        </div>
      </Drawer>
    </AntHeader>
  );
};

export default Header;