import React, { useState, useRef } from "react";
import { Button, Tooltip, Upload } from "antd";
import { MoonFilled, SunFilled, FullscreenOutlined, FullscreenExitOutlined, UploadOutlined } from '@ant-design/icons';
import Editor from "@monaco-editor/react";
import monacoThemes from 'monaco-themes/themes/themelist';
import 'monaco-themes/themes/Tomorrow-Night.json';
import './MonacoEditor.css';

const { Dragger } = Upload;

const MonacoEditor = ({
  value = "",
  language = "json",
  onChange = () => {},
  readOnly = false,
  darkMode = true
}) => {
  const [isDark, setIsDark] = useState(darkMode);
  const [fullscreen, setFullscreen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  const handleEditorChange = (value) => {
    try {
      onChange(value);
    } catch (error) {
      console.error("Invalid JSON:", error);
    }
  };

  const formatJson = () => {
    let currentValue = editorRef.current.getValue();
    try {
      currentValue = JSON.parse(currentValue);
      onChange(JSON.stringify(currentValue, null, '\t'));
    } catch (error) {
      alert(error);
    }
  };

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const toggleFullscreen = () => {
    setFullscreen((prev) => !prev);
  };

  const handleFileUpload = (file) => {
    if (!readOnly){
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        onChange(content);
      };
      reader.readAsText(file);
      return false; // Prevent default upload behavior
    }
  };

  const handleDragEnter = (e) => {
    if (!readOnly){
      e.preventDefault();
      setIsDragging(true);
    }
  };

  const handleDragLeave = (e) => {
    if (!readOnly){
      e.preventDefault();
      setIsDragging(false);
    }
  };

  const handleDrop = (e) => {
    if (!readOnly){
      e.preventDefault();
      setIsDragging(false);
      const files = e.dataTransfer.files;
      if (files.length > 0) {
        handleFileUpload(files[0]);
      }
    }
  };

  return (
    <div
      className={fullscreen ? "json-editor-container fullscreen" : "json-editor-container"}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="editor-toolbar">
        {!readOnly && (language === 'json' || language === 'text') && (
          <>
            <Tooltip title="Format JSON">
              <Button color="primary" variant="solid" onClick={formatJson} size="small" style={{color: "#fff"}}>
                Format
              </Button>
            </Tooltip>
            <Upload beforeUpload={handleFileUpload} showUploadList={false}>
              <Tooltip title="Upload File">
                <Button color="primary" variant="solid" size="small" icon={<UploadOutlined />} style={{color: "#fff"}} >
                  Upload
                </Button>
              </Tooltip>
            </Upload>
          </>
        )}
        <Tooltip title="Switch Theme">
          <Button type="text" onClick={toggleTheme} size="large" style={{color: "#fff"}} shape="circle" icon={
            isDark ? <SunFilled /> : <MoonFilled />} />
        </Tooltip>
        <div className="full-screen">
          <Button
            type="text"
            style={{color: "#fff"}}
            onClick={toggleFullscreen}
            icon={fullscreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
          />
        </div>
      </div>

      {!readOnly && isDragging && (
        <div
          style={{
            position: 'fixed',
            top: 50,
            left: 50,
            zIndex: 10,
            border: '2px dashed #d9d9d9',
            backgroundColor: 'rgba(250, 250, 250, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // margin: '50px',
            height: '100%',
            width: '100%'
          }}
        >
          <p className="ant-upload-drag-icon">
            <UploadOutlined />
          </p>
          <p className="ant-upload-text">Drop the file here to upload</p>
        </div>
      )}

      <Editor
        height="calc(100% - 40px)"
        language={language}
        value={value}
        theme={isDark ? "vs-dark" : "light"}
        options={{
          readOnly: readOnly,
          minimap: { enabled: true },
          autoIndent: true,
          scrollbar: {
            alwaysConsumeMouseWheel: false
          },
          smoothScrolling: true,
        }}
        onChange={handleEditorChange}
        onMount={handleEditorDidMount}
      />
    </div>
  );
};

export default MonacoEditor;
