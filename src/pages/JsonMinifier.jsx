import React, { useState } from 'react';
import { Typography, Row, Col, Button } from 'antd';
import JsonEditorComponent from '../components/MonacoEditor';
import { Helmet } from 'react-helmet-async';

const { Title, Paragraph } = Typography;

const JsonMinifier = () => {
  const [inputJson, setInputJson] = useState('');
  const [minifiedJson, setMinifiedJson] = useState('');

  const handleMinify = () => {
    try {
      const parsedJson = JSON.parse(inputJson);
      const minified = JSON.stringify(parsedJson);
      setMinifiedJson(minified);
    } catch (error) {
      setMinifiedJson('Invalid JSON: Please check your input.');
    }
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>JSON Minifier - Minify Your JSON Instantly</title>
        <meta
          name="description"
          content="Use JSON Minifier by JSONReader to compress and reduce your JSON data size instantly. Perfect for developers handling large JSON files."
        />
        <meta
          name="keywords"
          content="JSON minifier, JSON compressor, minify JSON, compress JSON, online JSON tools"
        />
        <meta name="author" content="JSONReader Team" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.jsonreader.com/json-minifier" />
        <meta property="og:title" content="JSON Minifier - Minify Your JSON Instantly" />
        <meta
          property="og:description"
          content="Easily compress and reduce your JSON data size with JSONReader's online JSON Minifier tool. Perfect for developers and analysts."
        />
        <meta property="og:url" content="https://www.jsonreader.com/json-minifier" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.jsonreader.com/json-minifier-preview.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="JSON Minifier - Minify Your JSON Instantly" />
        <meta
          name="twitter:description"
          content="Compress and reduce your JSON data size with JSONReader's online JSON Minifier tool."
        />
        <meta name="twitter:image" content="https://www.jsonreader.com/json-minifier-preview.png" />
      </Helmet>

      <main style={{ padding: '20px', textAlign: 'center' }}>
        <header>
          <Title level={1}>JSON Minifier</Title>
          <Paragraph>
            Minify your JSON data instantly! Compress large JSON files to a compact format without losing any data.
            Ideal for developers working with APIs or large datasets.
          </Paragraph>
        </header>

        <section aria-labelledby="json-minifier-section" style={{ marginTop: '30px' }}>
          <Title level={2} id="json-minifier-section">Paste and Minify JSON</Title>
          <Paragraph>
            Use the left editor to input your JSON and click "Minify JSON" to see the compressed output in the right editor.
          </Paragraph>
          <Row gutter={[16, 16]}>
            <Col span={11}>
              <Title level={3}>Input JSON</Title>
              <JsonEditorComponent
                value={inputJson}
                onChange={(value) => setInputJson(value)}
              />
            </Col>
            <Col span={2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Button type="primary" onClick={handleMinify}>
                Minify JSON
              </Button>
            </Col>
            <Col span={11}>
              <Title level={3}>Minified JSON</Title>
              <JsonEditorComponent value={minifiedJson} readOnly />
            </Col>
          </Row>
        </section>

        <section aria-labelledby="features-section" style={{ marginTop: '40px' }}>
          <Title level={2} id="features-section">Why Use JSONReader's Minifier?</Title>
          <Row gutter={[16, 16]} justify="center">
            <Col xs={24} sm={12} md={8}>
              <div>
                <Title level={4}>Reduce Data Size</Title>
                <Paragraph>
                  Compress your JSON files without compromising on data integrity. Ideal for APIs and large datasets.
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <div>
                <Title level={4}>Simple and Fast</Title>
                <Paragraph>
                  Paste your JSON and get the minified output in seconds. No complex setup required.
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <div>
                <Title level={4}>Free and Secure</Title>
                <Paragraph>
                  Use our JSON Minifier for free without worrying about data security. Your data stays private.
                </Paragraph>
              </div>
            </Col>
          </Row>
        </section>
      </main>
    </>
  );
};

export default JsonMinifier;
