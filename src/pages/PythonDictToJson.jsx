import React, { useState } from 'react';
import { Typography, Row, Col, Button } from 'antd';
import JsonEditorComponent from '../components/MonacoEditor'; // Make sure your editor supports language prop
import { Helmet } from 'react-helmet-async';

const { Title, Paragraph } = Typography;

const PythonDictToJson = () => {
  const [pythonDict, setPythonDict] = useState('');
  const [jsonOutput, setJsonOutput] = useState('');

  const handleConvert = () => {
    try {
      // Parse Python dict-like input into JSON format
      const formattedInput = pythonDict
        .replace(/'/g, '"') // Replace single quotes with double quotes
        .replace(/True/g, 'true') // Convert True to true
        .replace(/False/g, 'false') // Convert False to false
        .replace(/None/g, 'null'); // Convert None to null
      const parsedJson = JSON.parse(formattedInput);
      setJsonOutput(JSON.stringify(parsedJson, null, 2));
    } catch (error) {
      setJsonOutput('Invalid Python dictionary: Please check your input.');
    }
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Convert Python Dict to JSON - JSONReader</title>
        <meta
          name="description"
          content="Easily convert Python dictionaries to JSON format with JSONReader's user-friendly tool. Supports syntax highlighting and real-time conversion."
        />
        <meta
          name="keywords"
          content="Python dict to JSON, convert Python to JSON, Python dictionary, online JSON tools"
        />
        <meta name="author" content="JSONReader Team" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.jsonreader.com/python-dict-to-json" />
        <meta property="og:title" content="Convert Python Dict to JSON - JSONReader" />
        <meta
          property="og:description"
          content="Quickly and easily convert Python dictionaries to JSON format using JSONReader's online tool."
        />
        <meta property="og:url" content="https://www.jsonreader.com/python-dict-to-json" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.jsonreader.com/python-dict-to-json-preview.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Convert Python Dict to JSON - JSONReader" />
        <meta
          name="twitter:description"
          content="Easily convert Python dictionaries to JSON format with JSONReader's intuitive online tool."
        />
        <meta name="twitter:image" content="https://www.jsonreader.com/python-dict-to-json-preview.png" />
      </Helmet>

      <main style={{ padding: '20px', textAlign: 'center' }}>
        <header>
          <Title level={1}>Convert Python Dictionary to JSON</Title>
          <Paragraph>
            Use this tool to seamlessly convert Python dictionaries into JSON format. Perfect for developers working
            across Python and JavaScript ecosystems.
          </Paragraph>
        </header>

        <section aria-labelledby="conversion-section" style={{ marginTop: '30px' }}>
          <Title level={2} id="conversion-section">Conversion Tool</Title>
          <Paragraph>
            Paste your Python dictionary in the left editor and click "Convert to JSON" to see the result in the right
            editor.
          </Paragraph>
          <Row gutter={[16, 16]}>
            <Col span={10}>
              <Title level={3}>Python Dictionary</Title>
              <JsonEditorComponent
                value={pythonDict}
                onChange={(value) => setPythonDict(value)}
                language="python"
              />
            </Col>
            <Col span={4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Button type="primary" onClick={handleConvert}>
                Convert to JSON
              </Button>
            </Col>
            <Col span={10}>
              <Title level={3}>JSON Output</Title>
              <JsonEditorComponent value={jsonOutput} language="json" readOnly />
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
                  Our tool handles Python-specific syntax seamlessly, ensuring your JSON output is always accurate.
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <div>
                <Title level={4}>Easy to Use</Title>
                <Paragraph>
                  With a user-friendly interface and syntax highlighting, converting Python dictionaries is a breeze.
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

export default PythonDictToJson;
