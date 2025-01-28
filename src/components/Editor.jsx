// import React, { useEffect, useRef } from "react";
// import PropTypes from "prop-types";
// import "brace";
// import "brace/mode/text";
// import "brace/theme/pastel_on_dark";
// import "brace/ext/statusbar";
// import "brace/ext/settings_menu"
// // import { Card } from "antd";
// import ace from 'ace-builds/src-noconflict/ace'
// import './Editor.css'

// const Editor = ({
//   modelValue,
//   mode = "code",
//   type = "text",
//   readOnly = false,
//   showGutter = true,
//   onChange,
//   onError
// }) => {
//   const editorRef = useRef(null);
//   const statusbarRef = useRef(null);
//   const menuBarRef = useRef(null);
//   const editorInstance = useRef(null);

//   useEffect(() => {
//     // const ace = require("brace");
//     const editor = ace.edit(editorRef.current);

//     editor.getSession().setMode(`ace/mode/${type}`);
//     editor.renderer.setShowGutter(showGutter);
//     editor.setReadOnly(readOnly);
//     editor.setTheme("ace/theme/pastel_on_dark");
//     editor.container.style.lineHeight = 1.7;
//     editor.renderer.updateFontSize();
//     editor.getSession().setUseWrapMode(true);
//     editor.setValue(modelValue || "", 1);

//     const StatusBar = ace.require("ace/ext/statusbar").StatusBar;
//     new StatusBar(editor, statusbarRef.current);
//     const MenuBar = ace.require('brace/ext/settings_menu').
//     editor.getSession().on("change", () => {
//       try {
//         const value = editor.getValue();
//         if (onChange) onChange(value);
//       } catch (err) {
//         if (onError) onError(err);
//       }
//     });

//     editorInstance.current = editor;

//     return () => {
//       editor.destroy();
//     };
//   }, [type, showGutter, readOnly, modelValue, onChange, onError]);

//   useEffect(() => {
//     if (editorInstance.current && editorInstance.current.getValue() !== modelValue) {
//       editorInstance.current.setValue(modelValue || "", 1);
//     }
//   }, [modelValue]);

//   return (
//     <div className="editor-container">
//       <div
//         ref={menuBarRef}
//         className="menubar"
//       >
//       </div>
//       <div
//         ref={editorRef}
//         className="jsoneditor"
//         style={{
//           width: "100%",
//           height: "calc(100% - 26px)",
//           minHeight: "calc(100% - 26px)",
//           color: "#E6E1DC",
//         }}
//       />
//       <div
//         ref={statusbarRef}
//         id="statusbar"
//       />
//     </div>
//   );
// };

// Editor.propTypes = {
//   modelValue: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.object,
//     PropTypes.array,
//     PropTypes.number,
//   ]),
//   mode: PropTypes.string,
//   type: PropTypes.string,
//   readOnly: PropTypes.bool,
//   showGutter: PropTypes.bool,
//   onChange: PropTypes.func,
//   onError: PropTypes.func,
// };

// export default Editor;