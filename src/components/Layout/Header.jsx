import React, { useEffect, useState } from "react";
import { Layout, Menu, Button, Select, Row, Col, Drawer, Space } from "antd";
import {
  CarOutlined,
  UserOutlined,
  GlobalOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const { Header: AntHeader } = Layout;
const { Option } = Select;

const Header = ({ activeSection, setActiveSection }) => {
  const { t, i18n } = useTranslation();
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    document.body.setAttribute("dir", i18n.language === "ar" ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", i18n.language);
  }, [i18n.language]);

  // Check screen size for responsive behavior
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 992); // lg breakpoint
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

const menuItems = [
  { key: "home", label: t("nav_home") },
  { key: "destinations", label: t("nav_destinations") },
  { key: "fleet", label: t("nav_fleet") },
  { key: "blog", label: t("nav_blog") },
  // REMOVED: { key: "testimonials", label: t("nav_testimonials") },
  { key: "about", label: t("nav_about") },
  { key: "contact", label: t("nav_contact") },
];
  const handleMenuClick = (e) => {
    setActiveSection(e.key);
    setDrawerVisible(false);
  };

  return (
    <AntHeader
      style={{
        padding: 0,
        background: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        height: "80px",
        lineHeight: "80px",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          height: "100%",
        }}
      >
        <Row
          justify="space-between"
          align="middle"
          style={{
            height: "100%",
            flexWrap: "nowrap",
          }}
        >
          {/* Logo */}
          <Col flex="none">
            <div 
              style={{ 
                display: "flex", 
                alignItems: "center",
                cursor: "pointer"
              }}
              onClick={() => setActiveSection("home")}
            >
              <CarOutlined
                style={{
                  fontSize: "28px",
                  color: "#4F46E5",
                  marginRight: "10px",
                }}
              />
              <span
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  color: "#4F46E5",
                }}
              >
                GoCar
              </span>
            </div>
          </Col>

          {/* Desktop Navigation - Only shows on larger screens */}
          {!isMobile ? (
            <>
              <Col flex="auto" style={{ height: "100%" }}>
                <Menu
                  mode="horizontal"
                  selectedKeys={[activeSection]}
                  onClick={handleMenuClick}
                  items={menuItems}
                  style={{
                    border: "none",
                    background: "transparent",
                    height: "100%",
                    lineHeight: "80px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                />
              </Col>

              <Col flex="none">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <Select
                    value={i18n.language}
                    onChange={handleLanguageChange}
                    style={{ width: 80 }}
                    variant="borderless"
                    suffixIcon={<GlobalOutlined style={{ color: "#4F46E5" }} />}
                  >
                    <Option value="en">EN</Option>
                    <Option value="ar">AR</Option>
                  </Select>

                  <Button 
                    type="primary" 
                    icon={<UserOutlined />}
                    style={{
                      background: "#4F46E5",
                      borderColor: "#4F46E5",
                    }}
                  >
                    {t("nav_login")}
                  </Button>
                </div>
              </Col>
            </>
          ) : (
            /* Mobile Menu Button - Only shows on small screens */
            <Col flex="none">
              <Space>
                <Select
                  value={i18n.language}
                  onChange={handleLanguageChange}
                  style={{ width: 60 }}
                  variant="borderless"
                  size="small"
                  suffixIcon={<GlobalOutlined style={{ color: "#4F46E5" }} />}
                >
                  <Option value="en">EN</Option>
                  <Option value="ar">AR</Option>
                </Select>
                <Button
                  type="text"
                  icon={drawerVisible ? <CloseOutlined /> : <MenuOutlined />}
                  onClick={() => setDrawerVisible(!drawerVisible)}
                  style={{ 
                    color: "#4F46E5",
                    fontSize: "18px"
                  }}
                />
              </Space>
            </Col>
          )}
        </Row>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title={
          <div style={{ display: "flex", alignItems: "center" }}>
            <CarOutlined
              style={{ fontSize: "20px", color: "#4F46E5", marginRight: "8px" }}
            />
            <span
              style={{ fontSize: "18px", fontWeight: "bold", color: "#4F46E5" }}
            >
              GoCar
            </span>
          </div>
        }
        placement={i18n.language === "ar" ? "left" : "right"}
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        styles={{
          body: { padding: 0 }
        }}
        width={280}
        closable={false}
        extra={
          <Button
            type="text"
            icon={<CloseOutlined />}
            onClick={() => setDrawerVisible(false)}
          />
        }
      >
        <Menu
          mode="vertical"
          selectedKeys={[activeSection]}
          onClick={handleMenuClick}
          items={menuItems}
          style={{ border: "none", padding: "16px 0" }}
        />
        <div style={{ padding: "20px", borderTop: "1px solid #f0f0f0" }}>
          <Button type="primary" icon={<UserOutlined />} block size="large">
            {t("nav_login")}
          </Button>
        </div>
      </Drawer>
    </AntHeader>
  );
};

export default Header;