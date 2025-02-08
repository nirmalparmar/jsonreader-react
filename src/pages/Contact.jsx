import React, { useState } from 'react';
import { Layout, Row, Col, Typography, Form, Input, Button, Modal } from 'antd';
import './Contact.css'; // Assuming you have a separate CSS file for additional styling

const { Content } = Layout;
const { Title, Text } = Typography;

const ContactPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    // Show the modal on form submission
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    // Reset the form fields
    form.resetFields();
  };

  return (
    <Layout>
      <Content style={{ padding: '50px', backgroundColor: '#f0f2f5' }}>
        <div className="contact-container" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <Title level={2} style={{ textAlign: 'center' }}>Contact Us</Title>
          <Text style={{ display: 'block', textAlign: 'center', marginBottom: '20px' }}>
            For inquiries related to advertising or other questions, please fill out the form below or contact us at <a href="mailto:admin@jsonreader.com">admin@jsonreader.com</a>.
          </Text>
          <Form
            form={form}
            name="contact"
            layout="vertical"
            onFinish={onFinish}
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: 'Please enter your name' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, type: 'email', message: 'Please enter a valid email address' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="message"
              label="Message"
              rules={[{ required: true, message: 'Please enter your message' }]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                Submit
              </Button>
            </Form.Item>
          </Form>
          <Modal
            title="Submission Successful"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={() => setIsModalVisible(false)}
          >
            <p>Your message has been submitted successfully!</p>
          </Modal>
        </div>
      </Content>
    </Layout>
  );
};

export default ContactPage;
