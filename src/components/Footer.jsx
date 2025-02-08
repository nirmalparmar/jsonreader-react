import React from 'react';
import { Layout, Row, Col, Typography, Divider, Collapse, theme } from 'antd';
import { GithubOutlined, LinkedinOutlined, CaretRightOutlined } from '@ant-design/icons';
// import type { CollapseProps } from 'antd';
import './Footer.css'; // Assuming you have a separate CSS file for additional styling

const { Footer } = Layout;
const { Title, Text } = Typography;
const { Panel } = Collapse;

const getItems = (panelStyle) => [
  {
    key: '1',
    label: 'What is JSONReader?',
    children: <p>JSONReader is a tool for formatting, validating, and editing JSON data online.</p>,
    style: panelStyle,
  },
  {
    key: '2',
    label: 'How do I use the JSON Diff Checker?',
    children: <p>Paste your JSON data into the provided fields and click 'Compare' to see the differences.</p>,
    style: panelStyle,
  },
  {
    key: '3',
    label: 'Is JSONReader free to use?',
    children: <p>Yes, JSONReader is completely free to use for all users.</p>,
    style: panelStyle,
  },
];

const MyFooter = () => {
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: 'none',
  };

  return (
    <div>
      <section title='FAQ' className='faq-section'>
        <Title level={5} style={{ color: '#fff', textAlign: 'center' }}>Frequently Asked Questions</Title>
        <Collapse
          bordered={false}
          defaultActiveKey={['1']}
          expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
          style={{
            background: token.colorBgContainer,
          }}
          items={getItems(panelStyle)}
        />
      </section>
      <Footer className="footer" style={{ backgroundColor: '#1a1a1a', color: '#fff' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Row gutter={[16, 16]} justify="space-between" align="top">
            {/* Logo and Brand Section */}
            <Col xs={24} sm={8} md={6} className="footer-logo" style={{ display: 'flex', alignItems: 'center' }}>
              <a href="https://www.jsonreader.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
                <img src="/assets/logo1.svg" alt="JsonReader Logo" className="footer-logo-image" />
                <Title level={3} style={{ margin: 0, color: '#fff' }}>JSONReader</Title>
              </a>
            </Col>

            {/* Resources Links */}
            <Col xs={24} sm={8} md={6} className="footer-column" style={{ display: 'flex', flexDirection: 'column' }}>
              <Title level={5} className="footer-column-title" style={{ color: '#fff' }}>Resources</Title>
              <ul className="footer-column-list" style={{ paddingLeft: 0 }}>
                <li><a href="https://www.jsonreader.com/json-diff" target="_blank" rel="noopener noreferrer">JSON Diff Checker</a></li>
                <li><a href="https://www.jsonreader.com/jsonformatter" target="_blank" rel="noopener noreferrer">JSON Formatter</a></li>
                <li><a href="https://www.jsonreader.com/json-to-tabler" target="_blank" rel="noopener noreferrer">JSON To Table</a></li>
                <li><a href="https://www.jsonreader.com/json-minify" target="_blank" rel="noopener noreferrer">JSON Minify</a></li>
                <li><a href="https://www.jsonreader.com/text-compare" target="_blank" rel="noopener noreferrer">Compare Text</a></li>
                <li><a href="https://www.jsonreader.com/blogs" target="_blank" rel="noopener noreferrer">Blogs</a></li>
              </ul>
            </Col>

            {/* Social Links */}
            <Col xs={24} sm={8} md={6} className="footer-column" style={{ display: 'flex', flexDirection: 'column' }}>
              <Title level={5} className="footer-column-title" style={{ color: '#fff' }}>Follow Us</Title>
              <ul className="footer-column-list" style={{ paddingLeft: 0 }}>
                <li><a href="https://github.com/nirmalparmar" target="_blank" rel="noopener noreferrer"><GithubOutlined /> Github</a></li>
                <li><a href="https://www.linkedin.com/in/nirmalparmar-/" target="_blank" rel="noopener noreferrer"><LinkedinOutlined /> LinkedIn</a></li>
              </ul>
            </Col>

            {/* Legal Links */}
            <Col xs={24} sm={8} md={6} className="footer-column" style={{ display: 'flex', flexDirection: 'column' }}>
              <Title level={5} className="footer-column-title" style={{ color: '#fff' }}>Legal</Title>
              <ul className="footer-column-list" style={{ paddingLeft: 0 }}>
                <li><a href="https://www.jsonreader.com/p/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
                <li><a href="https://www.jsonreader.com/p/contact" target="_blank" rel="noopener noreferrer">Contact</a></li>
                <li><a href="https://www.jsonreader.com/p/about" target="_blank" rel="noopener noreferrer">About</a></li>
                <li><a href="https://www.jsonreader.com/p/disclaimer" target="_blank" rel="noopener noreferrer">Disclaimer</a></li>
              </ul>
            </Col>
          </Row>
          <Row gutter={[16, 16]} justify="space-between" align="top">
            <Col xs={24} sm={8} md={6} className="footer-column" style={{ display: 'flex', flexDirection: 'column' }}>
              <Title level={5} className="footer-column-title" style={{ color: '#fff' }}>Convertors</Title>
              <ul className="footer-column-list" style={{ paddingLeft: 0 }}>
                <li><a href="https://www.jsonreader.com/json-to-xml" target="_blank" rel="noopener noreferrer">JSON to XML</a></li>
                <li><a href="https://www.jsonreader.com/python-dict-to-json" target="_blank" rel="noopener noreferrer">Python Dict to JSON</a></li>
              </ul>
            </Col>
          </Row>

          {/* Divider */}
          <Divider style={{ borderColor: '#333' }} />

          {/* Footer Bottom */}
          <Row justify="space-between" align="middle">
            <Col xs={24} sm={12} md={12} className="footer-bottom">
              <Text style={{ fontSize: 14, color: '#bbb' }}>
                © 2025 <a href="https://www.jsonreader.com/" target="_blank" rel="noopener noreferrer" className="footer-link">JsonReader™</a>. All Rights Reserved.{' '}
                <a href="https://www.jsonreader.com/sitemap.xml" target="_blank" rel="noopener noreferrer" className="footer-link">Sitemap</a>{'  '}
                <a href="https://www.jsonreader.com/p/contact" target="_blank" rel="noopener noreferrer" className="footer-link">Contact</a>
              </Text>
            </Col>
          </Row>
        </div>
      </Footer>
    </div>
  );
};

export default MyFooter;
