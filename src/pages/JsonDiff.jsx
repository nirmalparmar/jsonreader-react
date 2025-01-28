import React, { useState, useRef } from 'react';
import { Typography, Row, Col, Button } from 'antd';
import { DiffEditor as MonacoDiffEditor } from '@monaco-editor/react';
import JsonEditorComponent from '../components/MonacoEditor';
import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet-async';
import './JsonDiff.css';

const { Title } = Typography;

const JsonDiff = () => {
  const [leftEditor, setLeftEditor] = useState("");
  const [rightEditor, setRightEditor] = useState("");
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
    <div className="json-diff-container">
      {/* Helmet for SEO */}
      <Helmet>
        <title>JSON Diff Checker - Compare JSON Files Online</title>
        <meta
          name="description"
          content="Use our JSON Diff Checker tool to easily compare two JSON files or strings and identify differences. Perfect for debugging JSON data."
        />
        <meta
          name="keywords"
          content="JSON Diff, JSON Compare, JSON Validator, JSON Editor, Compare JSON Files"
        />
        <meta name="author" content="JsonReader" />
        <link rel="canonical" href="https://www.jsonreader.com/json-diff" />
      </Helmet>

      <Title level={1}>JSON Diff Checker</Title>
      <p>
        Use our <strong>JSON Diff Checker</strong> to compare two JSON files or strings and
        identify differences easily. Perfect for debugging and analyzing JSON
        data.
      </p>

      <Row gutter={16}>
        <Col span={11}>
          <JsonEditorComponent
            value={leftEditor}
            onChange={(value) => setLeftEditor(value)}
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
            value={rightEditor}
            onChange={(value) => setRightEditor(value)}
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
          original={leftEditor}
          modified={rightEditor}
          language="json"
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

export default JsonDiff;
