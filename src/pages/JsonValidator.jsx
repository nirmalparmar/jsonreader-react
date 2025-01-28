import React, { useState } from 'react';
import { Typography, Row, Col } from 'antd';
import JsonEditorComponent from '../components/MonacoEditor';
import { Helmet } from 'react-helmet-async';

const { Title, Paragraph } = Typography;

const JsonValidator = () => {
  const [value1, setValue1] = useState('');

  return (
    <>
      {/* SEO meta tags using Helmet */}
      <Helmet>
        <title>JSON Validator Online - Beautify, Validate, and Edit JSON</title>
        <meta
          name="description"
          content="Use JSON Validator by JSONReader to easily format, beautify, and validate JSON data online. A powerful tool for developers and data enthusiasts."
        />
        <meta
          name="keywords"
          content="JSON validator online, JSON beautifier, JSON validator, edit JSON, format JSON, online JSON editor"
        />
        <meta name="author" content="JSONReader Team" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.jsonreader.com/json-validator" />
        <meta
          property="og:title"
          content="JSON Validator Online - Beautify, Validate, and Edit JSON"
        />
        <meta
          property="og:description"
          content="Easily format and validate JSON data with JSONReader's online JSON validator. Simple, fast, and effective for developers."
        />
        <meta
          property="og:url"
          content="https://www.jsonreader.com/json-validator"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.jsonreader.com/json-validator-preview.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="JSON Validator Online - Beautify, Validate, and Edit JSON" />
        <meta name="twitter:description" content="Easily format and validate JSON data with JSONReader's online JSON validator." />
        <meta name="twitter:image" content="https://www.jsonreader.com/json-validator-preview.png" />
      </Helmet>

      <main style={{ padding: '20px', textAlign: 'center' }}>
        <header>
          <Title level={1}>JSON Validator Online</Title>
          <Paragraph>
            Welcome to the ultimate JSON Validator tool! Paste your JSON data below, 
            and our tool will beautify, validate, and edit it instantly. Ideal for developers, 
            analysts, and anyone working with JSON data.
          </Paragraph>
        </header>

        <section aria-labelledby="json-editor-section" style={{ marginTop: '30px' }}>
          <Title level={2} id="json-editor-section">Edit and Format JSON</Title>
          <Paragraph>
            Use our powerful editor with real-time validation and formatting to edit your JSON. 
            Enjoy a seamless experience with VS Code-like key bindings and intuitive design.
          </Paragraph>
          <JsonEditorComponent
            value={value1}
            onChange={(value) => setValue1(value)}
          />
        </section>

        <section aria-labelledby="features-section" style={{ marginTop: '50px' }}>
          <Title level={2} id="features-section">Why Use JSONReader?</Title>
          <Row gutter={[16, 16]} justify="center">
            <Col xs={24} sm={12} md={8}>
              <div>
                <Title level={4}>JSON Beautifier</Title>
                <Paragraph>
                  Beautify your JSON with just one click. Make it readable and organized effortlessly.
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <div>
                <Title level={4}>Real-Time Validation</Title>
                <Paragraph>
                  Instantly validate your JSON for errors and fix issues on the go with helpful prompts.
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <div>
                <Title level={4}>VS Code Key Bindings</Title>
                <Paragraph>
                  Work efficiently with familiar VS Code shortcuts, making editing faster and more intuitive.
                </Paragraph>
              </div>
            </Col>
          </Row>
        </section>

        <section aria-labelledby="cta-section" style={{ marginTop: '40px' }}>
          <Title level={2} id="cta-section">Get Started Now</Title>
          <Paragraph>
            Whether you're debugging, formatting, or analyzing JSON data, JSONReader is your ultimate tool. 
            Try it now and experience the simplicity of managing JSON online.
          </Paragraph>
        </section>
      </main>
    </>
  );
};

export default JsonValidator;
