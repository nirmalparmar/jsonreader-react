import React from 'react';
import { Layout, Typography, Divider } from 'antd';
// import './Disclaimer.css'; // Assuming you have a separate CSS file for additional styling

const { Content } = Layout;
const { Title, Text } = Typography;

const DisclaimerPage = () => {
  return (
    <Layout>
      <Content style={{ padding: '50px', backgroundColor: '#f0f2f5' }}>
        <div className="disclaimer-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Title level={2} style={{ textAlign: 'center' }}>Disclaimer</Title>
          <Divider />
          <Text style={{ fontSize: 16 }}>
            The information provided on jsonreader.com is for general informational and educational purposes only. All information is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information provided on our website.
          </Text>
          <Divider />
          <Text style={{ fontSize: 16 }}>
            Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of our website or reliance on any information provided on our site. Your use of jsonreader.com and your reliance on any information provided on our website is solely at your own risk.
          </Text>
          <Divider />
          <Text style={{ fontSize: 16 }}>
            All site content is provided “as is” without warranty of any kind. We hereby disclaim all warranties and conditions about the content, including but not limited to all implied warranties and conditions of merchantability, fitness for a particular purpose, title, and non-infringement.
          </Text>
          <Divider />
          <Text style={{ fontSize: 16 }}>
            In no event shall jsonreader.com or its affiliates be liable for any indirect, punitive, incidental, special, consequential damages or any damages whatsoever including, without limitation, damages for loss of use, data, or profits, arising out of or in any way connected with the use or performance of our website, delays or interruptions in service, viruses or other disabling features that affect your access to our site, any websites linked to it and any materials or content contained on any of these sites.
          </Text>
          <Divider />
          <Text style={{ fontSize: 16 }}>
            The contents of our website should not be construed as professional advice. You should seek your own professional advice before relying on any information provided on our website.
          </Text>
          <Divider />
          <Text style={{ fontSize: 16 }}>
            We reserve the right to modify this disclaimer at any time. Your continued use of jsonreader.com after changes to the disclaimer are posted signifies your acceptance of those changes. Please check this page periodically for updates.
          </Text>
        </div>
      </Content>
    </Layout>
  );
};

export default DisclaimerPage;
