import React, { useState } from 'react';
import { Typography, Row, Col, Button } from 'antd';
import JsonEditorComponent from '../components/MonacoEditor'; // Ensure your editor supports language prop
import { Helmet } from 'react-helmet-async';
import { XMLParser, XMLBuilder, XMLValidator} from "fast-xml-parser"; // You might need to install this library

const { Title, Paragraph } = Typography;

const JsonToXml = () => {
  const [jsonInput, setJsonInput] = useState('');
  const [xmlOutput, setXmlOutput] = useState('');

  const handleConvert = () => {
    try {
      const parsedJson = JSON.parse(jsonInput);
      const parser = new XMLBuilder({format: true, cdataPropName: true, commentPropName: true});
      const xml =  parser.build(parsedJson)
      setXmlOutput(xml);
    } catch (error) {
      console.log(error)
      setXmlOutput('Invalid JSON: Please check your input.');
    }
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Convert JSON to XML - JSONReader</title>
        <meta
          name="description"
          content="Easily convert JSON data to XML format with JSONReader's user-friendly tool. Supports syntax highlighting and real-time conversion."
        />
        <meta
          name="keywords"
          content="JSON to XML, convert JSON to XML, JSON data, online JSON tools"
        />
        <meta name="author" content="JSONReader Team" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.jsonreader.com/json-to-xml" />
        <meta property="og:title" content="Convert JSON to XML - JSONReader" />
        <meta
          property="og:description"
          content="Quickly and easily convert JSON data to XML format using JSONReader's online tool."
        />
        <meta property="og:url" content="https://www.jsonreader.com/json-to-xml" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.jsonreader.com/json-to-xml-preview.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Convert JSON to XML - JSONReader" />
        <meta
          name="twitter:description"
          content="Easily convert JSON data to XML format with JSONReader's intuitive online tool."
        />
        <meta name="twitter:image" content="https://www.jsonreader.com/json-to-xml-preview.png" />
      </Helmet>

      <main style={{ padding: '20px', textAlign: 'center' }}>
        <header>
          <Title level={1}>Convert JSON to XML</Title>
          <Paragraph>
            Use this tool to seamlessly convert JSON data into XML format. Perfect for developers working across different data formats.
          </Paragraph>
        </header>

        <section aria-labelledby="conversion-section" style={{ marginTop: '30px' }}>
          <Title level={2} id="conversion-section">Conversion Tool</Title>
          <Paragraph>
            Paste your JSON data in the left editor and click "Convert to XML" to see the result in the right editor.
          </Paragraph>
          <Row gutter={[16, 16]}>
            <Col span={10}>
              <Title level={3}>JSON Input</Title>
              <JsonEditorComponent
                value={jsonInput}
                onChange={(value) => setJsonInput(value)}
                language="json"
              />
            </Col>
            <Col span={4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Button type="primary" onClick={handleConvert}>
                Convert to XML
              </Button>
            </Col>
            <Col span={10}>
              <Title level={3}>XML Output</Title>
              <JsonEditorComponent value={xmlOutput} language="xml" readOnly />
            </Col>
          </Row>
        </section>

        <section aria-labelledby="features-section" style={{ marginTop: '40px' }}>
          <Title level={2} id="features-section">Why Choose JSONReader?</Title>
          <Row gutter={[16, 16]} justify="center">
            <Col xs={24} sm={12} md={8}>
              <div>
                <Title level={4}>Accurate Conversion</Title>
                <Paragraph>
                  Our tool handles JSON-specific syntax seamlessly, ensuring your XML output is always accurate.
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <div>
                <Title level={4}>Easy to Use</Title>
                <Paragraph>
                  With a user-friendly interface and syntax highlighting, converting JSON data is a breeze.
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <div>
                <Title level={4}>Free and Online</Title>
                <Paragraph>
                  Access this tool for free and convert your data online without any installation required.
                </Paragraph>
              </div>
            </Col>
          </Row>
        </section>
      </main>
    </>
  );
};

export default JsonToXml;
