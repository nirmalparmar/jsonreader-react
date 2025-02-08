import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout, Typography, Divider } from 'antd';
import './BlogOnJsonDesign.css'; // Assuming you have a separate CSS file for styling

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const BlogOnJsonDesign = () => {
  return (
    <Layout>
      <Helmet>
        <title>Designing JSON Structures in React</title>
        <meta name="description" content="Learn best practices and patterns for designing JSON structures in React applications." />
        <meta name="keywords" content="JSON, React, JSON structures, web development, best practices" />
      </Helmet>
      <Content style={{ padding: '50px', backgroundColor: '#f0f2f5' }}>
        <div className="blog-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Title level={1} style={{ textAlign: 'center' }}>Designing JSON Structures in React</Title>
          <Divider />
          <img src="/assets/jsonblog.webp" alt="JSON in Web Development" style={{ width: '100%', borderRadius: '8px', marginBottom: '20px' }} />
          <Paragraph>
            JSON (JavaScript Object Notation) is a widely used format for data interchange. Designing effective JSON structures is crucial for ensuring data is easy to understand, efficient to process, and scalable for future needs.
          </Paragraph>
          <Title level={2}>Key Considerations</Title>
          <Paragraph>
            Keep JSON structures simple and human-readable. Use meaningful key names that clearly describe the data they hold. Maintain consistent naming conventions and ensure uniform data types for similar fields across different JSON objects.
          </Paragraph>
          <Title level={2}>Common Patterns</Title>
          <Paragraph>
            Use flat structures for simple data and nested structures for complex data with hierarchical relationships. Use arrays for collections of similar items to allow for easy expansion.
          </Paragraph>
          <pre>
            <code>
              {`{
                "user": {
                  "id": 1,
                  "name": "Alice",
                  "contact": {
                    "email": "alice@example.com",
                    "phone": "123-456-7890"
                  }
                }
              }`}
            </code>
          </pre>
          <Title level={2}>Best Practices</Title>
          <Paragraph>
            Always validate JSON data to ensure it meets expected formats and constraints. Use tools like JSON Schema for validation. Document JSON structures to provide context and usage guidelines.
          </Paragraph>
        </div>
      </Content>
    </Layout>
  );
};

export default BlogOnJsonDesign;
