import React, { useState } from "react";
import {
  Row,
  Col,
  Typography,
  Form,
  Input,
  Button,
  Card,
  Space,
  message,
} from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  SendOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;

const ContactSection = ({ preview = false }) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      message.success(t("contact_messageSuccess", "Message sent successfully!"));
      form.resetFields();
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <PhoneOutlined style={{ fontSize: "24px", color: "#4F46E5" }} />,
      title: t("contact_phone", "Phone"),
      info: "+1 (555) 123-4567",
      subtitle: t("contact_available247", "Available 24/7"),
    },
    {
      icon: <MailOutlined style={{ fontSize: "24px", color: "#4F46E5" }} />,
      title: t("contact_email", "Email"),
      info: "info@gocar.com",
      subtitle: t("contact_replyWithin24", "We reply within 24 hours"),
    },
    {
      icon: <EnvironmentOutlined style={{ fontSize: "24px", color: "#4F46E5" }} />,
      title: t("contact_address", "Address"),
      info: t("contact_addressInfo", "123 Main Street, City, State 12345"),
      subtitle: t("contact_visitOffice", "Visit our office"),
    },
    {
      icon: <ClockCircleOutlined style={{ fontSize: "24px", color: "#4F46E5" }} />,
      title: t("contact_hours", "Business Hours"),
      info: t("contact_hoursInfo", "Mon-Fri: 8AM-8PM, Sat-Sun: 9AM-6PM"),
      subtitle: t("contact_timezone", "Local Timezone"),
    },
  ];

  if (preview) {
    return (
      <div style={{ padding: "60px 0", background: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <Title level={2} style={{ color: "#1a202c", marginBottom: "16px" }}>
              {t("contact_getInTouch", "Get In Touch")}
            </Title>
            <Paragraph style={{ 
              fontSize: "16px", 
              color: "#64748b", 
              maxWidth: "600px", 
              margin: "0 auto",
              lineHeight: 1.6 
            }}>
              {t("contact_previewDescription", "Have questions or need assistance? Our team is here to help you with all your car rental needs.")}
            </Paragraph>
          </div>

          <Row gutter={[32, 32]}>
            {contactInfo.slice(0, 3).map((item, index) => (
              <Col xs={24} md={8} key={index}>
                <Card
                  style={{
                    border: "none",
                    background: "#f8fafc",
                    borderRadius: "12px",
                    textAlign: "center",
                    height: "100%",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.04)"
                  }}
                >
                  <Space direction="vertical" size="middle" style={{ width: "100%" }}>
                    <div style={{ fontSize: "32px", color: "#4F46E5" }}>
                      {item.icon}
                    </div>
                    <Title level={4} style={{ margin: 0, color: "#1a202c" }}>
                      {item.title}
                    </Title>
                    <Text style={{ color: "#4F46E5", fontSize: "16px", fontWeight: 600 }}>
                      {item.info}
                    </Text>
                    <Text style={{ color: "#64748b", fontSize: "14px" }}>
                      {item.subtitle}
                    </Text>
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Button 
              type="primary" 
              size="large"
              onClick={() => window.location.hash = 'contact'}
              style={{
                background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
                border: "none",
                height: "48px",
                padding: "0 40px",
                fontWeight: 600,
                borderRadius: "8px"
              }}
            >
              {t("contact_contactUs", "Contact Us")}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="contact" style={{ padding: "80px 0", background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <Title level={1} style={{ color: "#1a202c", marginBottom: "16px" }}>
            {t("contact_getInTouch", "Get In Touch")}
          </Title>
          <Paragraph style={{ 
            fontSize: "18px", 
            color: "#64748b", 
            maxWidth: "600px", 
            margin: "0 auto",
            lineHeight: 1.6 
          }}>
            {t("contact_fullDescription", "We'd love to hear from you! Whether you have questions about our services, need assistance with a booking, or want to provide feedback, our team is ready to help.")}
          </Paragraph>
        </div>

        <Row gutter={[48, 32]} align="top">
          <Col xs={24} lg={10}>
            <Space direction="vertical" size="large" style={{ width: "100%" }}>
              <div>
                <Title level={3} style={{ marginBottom: "16px", color: "#1a202c" }}>
                  {t("contact_contactInformation", "Contact Information")}
                </Title>
                <Text style={{ fontSize: "16px", color: "#64748b" }}>
                  {t("contact_infoDescription", "Reach out to us through any of these channels. We're always available to assist you.")}
                </Text>
              </div>

              <Space direction="vertical" size="large" style={{ width: "100%" }}>
                {contactInfo.map((item, index) => (
                  <Card
                    key={index}
                    size="small"
                    style={{
                      border: "none",
                      background: "white",
                      borderRadius: "12px",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.04)"
                    }}
                    styles={{
                      body: { padding: "20px" }
                    }}
                  >
                    <Space size="middle" align="start">
                      <div style={{ 
                        background: "rgba(79, 70, 229, 0.1)", 
                        padding: "12px", 
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}>
                        {item.icon}
                      </div>
                      <div>
                        <Text style={{ display: "block", marginBottom: "4px", color: "#1a202c", fontWeight: 600 }}>
                          {item.title}
                        </Text>
                        <Text style={{ display: "block", marginBottom: "2px", color: "#4F46E5", fontWeight: 500 }}>
                          {item.info}
                        </Text>
                        <Text style={{ fontSize: "14px", color: "#64748b" }}>
                          {item.subtitle}
                        </Text>
                      </div>
                    </Space>
                  </Card>
                ))}
              </Space>
            </Space>
          </Col>

          <Col xs={24} lg={14}>
            <Card
              style={{
                borderRadius: "16px",
                background: "white",
                border: "none",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
              }}
              styles={{
                body: { padding: "40px" }
              }}
            >
              <Title level={3} style={{ marginBottom: "32px", textAlign: "center", color: "#1a202c" }}>
                {t("contact_sendUsMessage", "Send us a Message")}
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
                      label={<Text style={{ color: "#1a202c", fontWeight: 500 }}>{t("contact_fullName", "Full Name")}</Text>}
                      rules={[
                        { required: true, message: t("contact_nameRequired", "Please enter your name") },
                      ]}
                    >
                      <Input placeholder={t("contact_fullName", "Full Name")} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="email"
                      label={<Text style={{ color: "#1a202c", fontWeight: 500 }}>{t("contact_emailAddress", "Email Address")}</Text>}
                      rules={[
                        { required: true, message: t("contact_emailRequired", "Please enter your email") },
                        {
                          type: "email",
                          message: t("contact_emailInvalid", "Please enter a valid email"),
                        },
                      ]}
                    >
                      <Input placeholder={t("contact_emailAddress", "Email Address")} />
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={[16, 0]}>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="phone"
                      label={<Text style={{ color: "#1a202c", fontWeight: 500 }}>{t("contact_phoneNumber", "Phone Number")}</Text>}
                      rules={[
                        {
                          required: true,
                          message: t("contact_phoneRequired", "Please enter your phone number"),
                        },
                      ]}
                    >
                      <Input placeholder={t("contact_phoneNumber", "Phone Number")} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="subject"
                      label={<Text style={{ color: "#1a202c", fontWeight: 500 }}>{t("contact_subject", "Subject")}</Text>}
                      rules={[
                        { required: true, message: t("contact_subjectRequired", "Please enter a subject") },
                      ]}
                    >
                      <Input placeholder={t("contact_subject", "Subject")} />
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item
                  name="message"
                  label={<Text style={{ color: "#1a202c", fontWeight: 500 }}>{t("contact_message", "Message")}</Text>}
                  rules={[
                    { required: true, message: t("contact_messageRequired", "Please enter your message") },
                  ]}
                >
                  <TextArea 
                    rows={5} 
                    placeholder={t("contact_messagePlaceholder", "Tell us how we can help you...")} 
                    style={{ resize: "vertical" }}
                  />
                </Form.Item>

                <Form.Item style={{ marginBottom: 0, textAlign: "center" }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    icon={<SendOutlined />}
                    style={{ 
                      background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
                      border: "none",
                      padding: "16px 48px",
                      height: "auto",
                      fontWeight: 600,
                      fontSize: "16px",
                      borderRadius: "8px"
                    }}
                  >
                    {t("contact_sendMessage", "Send Message")}
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