import React from 'react';
import { Layout, Row, Col, Typography, Divider } from 'antd';
// import './About.css'; // Assuming you have a separate CSS file for additional styling

const { Content } = Layout;
const { Title, Text } = Typography;

const AboutPage = () => {
  return (
    <Layout>
      <Content style={{ padding: '50px', backgroundColor: '#f0f2f5' }}>
        <div className="about-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Title level={2} style={{ textAlign: 'center' }}>About JSONReader</Title>
          <Divider />
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Text style={{ fontSize: 16 }}>
                JSONReader is a comprehensive tool designed for formatting, validating, and editing JSON data online. Our mission is to provide developers and data enthusiasts with a reliable and efficient platform to manage their JSON data effortlessly.
              </Text>
            </Col>
            <Col span={24}>
              <Title level={4}>Our Features</Title>
              <ul>
                <li>JSON Diff Checker: Compare JSON data to identify differences.</li>
                <li>JSON Formatter: Beautify and format JSON data for better readability.</li>
                <li>JSON to Table: Convert JSON data into tabular format.</li>
                <li>JSON Minify: Compress JSON data to reduce size.</li>
                <li>Text Compare: Compare text files for differences.</li>
              </ul>
            </Col>
            <Col span={24}>
              <Title level={4}>Our Vision</Title>
              <Text style={{ fontSize: 16 }}>
                We aim to be the go-to platform for JSON data management, offering a suite of tools that cater to the needs of developers and data analysts worldwide.
              </Text>
            </Col>
            <Col span={24}>
              <Title level={4}>Contact Us</Title>
              <Text style={{ fontSize: 16 }}>
                For any inquiries, please contact us at <a href="mailto:admin@jsonreader.com">admin@jsonreader.com</a>.
              </Text>
            </Col>
          </Row>
          <Divider />
          <Row justify="center">
            <Col>
              <Text style={{ fontSize: 14, color: '#888' }}>
                © 2025 JSONReader™. All Rights Reserved.
              </Text>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default AboutPage;
