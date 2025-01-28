import React, { useState } from 'react';
import { Typography, Row, Col, Card } from 'antd';
import JsonEditorComponent from '../components/MonacoEditor';
import { Helmet } from 'react-helmet-async';

const { Title, Paragraph } = Typography;

const Homepage = () => {
  const [value1, setValue1] = useState('');

  const features = [
    { title: "JSON Formatter", description: "Beautify your JSON data for better readability.", href: "/json-formatter" },
    { title: "JSON Validator", description: "Validate your JSON to ensure it's error-free.", href: "/json-validator" },
    { title: "JSON Editor", description: "Compare json online.", href: "/json-editor" },
    { title: "JSON Minifier", description: "Minify json online", href: "/json-minify" },
    { title: "JSON To Table", description: "View json in tabular form", href: "/json-to-table" },
    { title: "Python Dict To JSON", description: "Transform python dict to json online.", href: "/python-dict-to-json" },
  ];

  return (
    <>
      <Helmet>
        <title>JSONReader - Online JSON Formatter, Parser, Validator and Editor</title>
        <meta
          name="description"
          content="JSONReader is your go-to tool for formatting, validating, and editing JSON data online. Simplify your workflow with powerful JSON tools and easy-to-use features."
        />
        <meta
          name="keywords"
          content="json formatter, python dict to json, compare json online, json compare online, json reader, jsonreader online, json parser online, json parser, json to table"
        />
        <meta name="author" content="JSONReader Team" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.jsonreader.com/" />
      </Helmet>

      <main style={{ padding: '20px', textAlign: 'center' }}>
        <header>
          <Title level={1}>Welcome to JSONReader</Title>
          <Paragraph>
            Discover powerful tools to manipulate, format, validate, and beautify your JSON data. 
            Designed for developers, JSONReader offers seamless usability with VS Code key bindings for efficient workflows.
          </Paragraph>
        </header>

        <section aria-labelledby="json-editor-section">
          <Title level={2} id="json-editor-section">Try the JSON Editor</Title>
          <Paragraph>
            Paste or write your JSON below and start editing. Your changes will automatically be validated and formatted in real-time.
          </Paragraph>
          <JsonEditorComponent
            value={value1}
            onChange={(value) => setValue1(value)}
          />
        </section>

        <section aria-labelledby="features-section" style={{ marginTop: '40px' }}>
          <Title level={2} id="features-section">Features of JSONReader</Title>
          <Row gutter={[16, 16]} justify="center">
            {features.map((feature, index) => (
              <Col xs={24} sm={12} md={8} key={index}>
                <a href={feature.href} target="_blank" rel="noopener noreferrer">
                  <Card hoverable style={{height: "100%"}}>
                    <Title level={3}>{feature.title}</Title>
                    <Paragraph>{feature.description}</Paragraph>
                  </Card>
                </a>
              </Col>
            ))}
          </Row>
        </section>

        <section aria-labelledby="cta-section" style={{ marginTop: '40px' }}>
          <Title level={2} id="cta-section">Get Started Now</Title>
          <Paragraph>
            Whether you're a developer or a data enthusiast, JSONReader is your ultimate companion for JSON manipulation.
          </Paragraph>
        </section>
      </main>
    </>
  );
};

export default Homepage;
