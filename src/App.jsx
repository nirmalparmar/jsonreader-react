import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from 'antd';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import JsonDiff from './pages/JsonDiff';
import JsonFormatter from './pages/JsonFormatter';
import JsonMinifier from './pages/JsonMinifier';
import PythonDictToJson from './pages/PythonDictToJson';
import JsonTableViewer from './pages/JsonTableViewer';
import JsonValidator from './pages/JsonValidator';
import TextCompare from './pages/StringDiff';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/Privacy';
import './App.css';
import JsonToXml from './pages/JsonToXml';
import AboutPage from './pages/About';
import Disclaimer from './pages/Disclaimer';
import BlogOnJson from './pages/blogs/BlogOnJson';
import BlogOnJsonDesign from './pages/blogs/BlogOnJsonDesign';
import BlogHomePage from './pages/blogs/BlogHomepage';
import BlogOnJsonWebDevelopment from './pages/blogs/BlogJsonInweb';

const { Content } = Layout;

const App = () => {
  return (
    <Router>
      <Layout>
        {/* Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <Content className='main-content'>
          <div className="site-layout-content">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/json-diff" element={<JsonDiff />} />
              <Route path="/json-formatter" element={<JsonFormatter />} />
              <Route path="/json-minifier" element={<JsonMinifier />} />
              <Route path="/json-minify" element={<JsonMinifier />} />
              <Route path="/json-validator" element={<JsonValidator />} />
              <Route path="/python-dict-to-json" element={<PythonDictToJson />} />
              <Route path="/json-to-table" element={<JsonTableViewer />} />
              <Route path="/text-compare" element={<TextCompare />} />
              <Route path="/p/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/p/contact" element={<Contact />} />
              <Route path='/json-to-xml' element={<JsonToXml />} />
              <Route path='/search' element={<Homepage />} />
              <Route path='/p/about' element={<AboutPage />} />
              <Route path='/p/disclaimer' element={<Disclaimer />} />
              <Route path='/b/json-data-guide' element={<BlogOnJson />} />
              <Route path='/b/design-json-structure' element={<BlogOnJsonDesign />} />
              <Route path='/b/json-in-web-development' element={<BlogOnJsonWebDevelopment />} />
              <Route path='/blogs' element={<BlogHomePage />} />
              {/* Redirect any other route to the homepage */}
              <Route path="*" element={<Navigate to='/' />} />
            </Routes>
          </div>
        </Content>

        {/* Footer */}
        <Footer />
      </Layout>
    </Router>
  );
};

export default App;
