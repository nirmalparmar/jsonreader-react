import React, { useState, useRef } from 'react';
import { Table, Typography, Row, Col, Button } from 'antd';
import JsonEditorComponent from '../components/MonacoEditor'; // Replace with your actual editor component
import { Helmet } from 'react-helmet-async';

const { Title, Paragraph } = Typography;

const JsonTableViewer = () => {
  const [jsonData, setJsonData] = useState([]);
  const [editorContent, setEditorContent] = useState('[{"name":"John Doe","age":28,"email":"john.doe@example.com"},{"name":"Jane Smith","age":32,"email":"jane.smith@example.com"}]');
  const [error, setError] = useState(null);
  const tableRef = useRef(null); // Reference to scroll to table

  const handleConvertToTable = () => {
    try {
      const parsedData = JSON.parse(editorContent);

      if (!Array.isArray(parsedData)) {
        throw new Error('JSON data must be an array of objects.');
      }

      setJsonData(parsedData);
      setError(null);

      // Scroll into view for the table
      if (tableRef.current) {
        const offset = 80; // Adjust this for your navbar height
        const topPosition = tableRef.current.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: topPosition, behavior: 'smooth' });
      }
    } catch (err) {
      setError(err.message);
      setJsonData([]);
    }
  };

  // Generate columns dynamically based on keys
  const columns = jsonData.length
    ? Object.keys(jsonData[0]).map((key) => ({
        title: key.charAt(0).toUpperCase() + key.slice(1),
        dataIndex: key,
        key,
      }))
    : [];

  return (
    <>
      <Helmet>
        <title>JSON to Table Viewer - JsonReader.com</title>
        <meta
          name="description"
          content="Easily convert your JSON data into a tabular format with our intuitive JSON to Table tool. Edit and visualize your data instantly!"
        />
        <meta
          name="keywords"
          content="JSON to table, JSON viewer, JSON editor, convert JSON, JSON tools online"
        />
        <meta name="author" content="JSONReader Team" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.jsonreader.com/json-to-table" />
      </Helmet>

      <main style={{ padding: '20px' }}>
        <header style={{ textAlign: 'center', marginBottom: '20px' }}>
          <Title level={1}>JSON to Table Viewer</Title>
          <Paragraph>
            Paste your JSON data below to visualize it in a tabular format. This tool makes it easy to explore and analyze JSON arrays.
          </Paragraph>
        </header>

        <section>
          <Row>
            <Col span={24} style={{ textAlign: 'center', marginBottom: '20px' }}>
              <Button type="primary" onClick={handleConvertToTable}>
                Convert to Table
              </Button>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Title level={3}>JSON Editor</Title>
              <Paragraph>
                Paste or edit your JSON data below. Ensure it's an array of objects to render the table.
              </Paragraph>
              <JsonEditorComponent
                value={editorContent}
                onChange={(value) => setEditorContent(value)}
                language="json"
                height="300px"
              />
              {error && <p style={{ color: 'red' }}>{error}</p>}
            </Col>
          </Row>

          <Row ref={tableRef} style={{ marginTop: '40px' }}>
            <Col span={24}>
              <Title level={3}>Table Viewer</Title>
              <Paragraph>
                View your JSON data in a structured tabular format. Modify the data in the editor to update the table.
              </Paragraph>
              <Table
                dataSource={jsonData.map((item, index) => ({ ...item, key: index }))}
                columns={columns}
                bordered
                pagination={{ pageSize: 5 }}
              />
            </Col>
          </Row>
        </section>
      </main>
    </>
  );
};

export default JsonTableViewer;
