import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout, Row, Col, Card, Typography } from 'antd';
import './BlogHomePage.css'; // Assuming you have a separate CSS file for styling

const { Content } = Layout;
const { Meta } = Card;
const { Title } = Typography;

const BlogHomePage = () => {
  const blogs = [
    {
      title: 'Understanding JSON',
      description: 'Learn about JSON, its syntax, use cases, and best practices.',
      image: '/assets/json.png',
      url: '/b/json-data-guide',
    },
    {
      title: 'Designing JSON Structures',
      description: 'Best practices and patterns for designing JSON structures.',
      image: '/assets/jsonblog.webp',
      url: '/b/design-json-structure',
    },
    {
      title: 'JSON in Web Development',
      description: 'Explore how JSON is used in modern web development.',
      image: '/assets/jsonblog.webp',
      url: '/b/json-in-web-development',
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Blog Homepage - JSON Reader</title>
        <meta name="description" content="Explore our blogs on JSON, covering syntax, structures, and web development." />
        <meta name="keywords" content="JSON, web development, blog, JSON structures" />
      </Helmet>
      <Content style={{ padding: '50px', backgroundColor: '#f0f2f5' }}>
        <div className="blog-home-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Title level={1} style={{ textAlign: 'center', marginBottom: '40px' }}>Blogs</Title>
          <Row gutter={[16, 16]}>
            {blogs.map((blog, index) => (
              <Col xs={24} sm={12} md={8} key={index}>
                <a href={blog.url} style={{ textDecoration: 'none' }}>
                  <Card
                    hoverable
                    cover={<img alt={blog.title} src={blog.image} />}
                  >
                    <Meta
                      title={blog.title}
                      description={blog.description}
                    />
                  </Card>
                </a>
              </Col>
            ))}
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default BlogHomePage;
