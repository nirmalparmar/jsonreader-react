import React from 'react';
import { Typography, Form, Input, Button } from 'antd';

const { Title } = Typography;

const Contact = () => {
  return (
    <div>
      <Title level={2}>Contact Us</Title>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScD2be0nwaE2Xxnr5lvnynTrTBMMlmxbCi5SK8U5k522HnOjQ/viewform?embedded=true" width="640" height="1126" frameborder="0" marginheight="0" marginwidth="0">
            Loading…
      </iframe>
    </div>
  );
};

export default Contact;
