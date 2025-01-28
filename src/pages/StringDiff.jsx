import React, { useState, useRef } from 'react';
import { Typography, Row, Col, Button } from 'antd';
import { DiffEditor as MonacoDiffEditor } from '@monaco-editor/react';
import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet-async';
import JsonEditorComponent from '../components/MonacoEditor';
import './StringDiff.css';

const { Title } = Typography;

const TextDiff = () => {
  const [leftText, setLeftText] = useState("");
  const [rightText, setRightText] = useState("");
  const diffEditorRef = useRef(null);
  const [diffEditorFullscreen, setFullscreen] = useState(false);

  const handleCompare = () => {
    if (diffEditorRef.current) {
      const offset = 80; // Adjust this value to match your navbar height
      const topPosition =
        diffEditorRef.current.getBoundingClientRect().top +
        window.scrollY -
        offset;
      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
  };

  const toggleFullscreen = () => {
    setFullscreen(!diffEditorFullscreen);
  };

  return (
    <div className="string-diff-container">
      {/* Helmet for SEO */}
      <Helmet>
        <title>Text Diff Checker - Compare Texts Online</title>
        <meta
          name="description"
          content="Use our Text Diff Checker tool to easily compare two strings and identify differences. Perfect for debugging text data."
        />
        <meta
          name="keywords"
          content="Text Diff, Text Compare, Text Validator, Text Editor, Compare Texts, compare string online, online text compare"
        />
        <meta name="author" content="JsonReader" />
        <link rel="canonical" href="https://www.jsonreader.com/text-compare" />
      </Helmet>

      <Title level={1}>Text Diff Checker</Title>
      <p>
        Use our <strong>Text Diff Checker</strong> to compare two strings and
        identify differences easily. Perfect for debugging and analyzing text
        data.
      </p>

      <Row gutter={16}>
        <Col span={11}>
            <JsonEditorComponent
                language="text"
                value={leftText}
                onChange={(value) => setLeftText(value)}
            />
        </Col>
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          span={2}
        >
          <Button
            style={{ fontWeight: 600 }}
            type="primary"
            onClick={handleCompare}
          >
            Compare
          </Button>
        </Col>
        <Col span={11}>
            <JsonEditorComponent
                language="text"
                value={rightText}
                onChange={(value) => setRightText(value)}
            />
        </Col>
      </Row>

      <div
        className={
          diffEditorFullscreen ? "diff-cont diff-fullscreen" : "diff-cont"
        }
        ref={diffEditorRef}
      >
        <div className="editor-toolbar">
          <div className="full-screen">
            <Button
              type="text"
              style={{ color: "#fff" }}
              onClick={toggleFullscreen}
              icon={
                diffEditorFullscreen ? (
                  <FullscreenExitOutlined />
                ) : (
                  <FullscreenOutlined />
                )
              }
            />
          </div>
        </div>
        <MonacoDiffEditor
          height="100vh"
          theme="vs-dark"
          original={leftText}
          modified={rightText}
          language="text"
          options={{
            scrollbar: {
              alwaysConsumeMouseWheel: false
            },
            smoothScrolling: true,
          }}
        />
      </div>
    </div>
  );
};

export default TextDiff;
