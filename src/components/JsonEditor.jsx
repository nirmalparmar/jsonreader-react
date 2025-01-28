// import React, { useEffect, useRef, useState } from "react";
// import { Button, Tooltip } from "antd";
// import { MoonFilled, SunFilled, FullscreenOutlined, FullscreenExitOutlined } from '@ant-design/icons';
// import JSONEditor from "jsoneditor";
// import "jsoneditor/dist/jsoneditor.css";
// import './JsonEditor.css'
// import 'brace/theme/github'
// import 'brace/theme/cobalt'
// // import ace from "brace";
// const JsonEditorComponent = ({
//   value = {},
//   onChange = () => {},
//   readOnly = false,
//   darkMode = true,
//   mode = "code",
//   modes = ["code", "tree", "text", "form"]
// }) => {
//   const editorRef = useRef(null);
//   const jsonEditorRef = useRef(null);
//   const [isDark, setIsDark] = useState(darkMode);
//   const [currentMode, setCurrentMode] = useState(mode);
//   const [fullscreen, setFullscreen] = useState(false)

//   useEffect(() => {
//     // Initialize the JSON editor
//     const options = {
//       mode: currentMode,
//       modes,
//       onChange: handleChange,
//       onModeChange: handleModeChange,
//       theme: isDark ? "ace/theme/cobalt" : "ace/theme/github",
//       onCreateMenu: handleRenderMenu
//     };

//     jsonEditorRef.current = new JSONEditor(editorRef.current, options);
//     jsonEditorRef.current.set(value);
//     jsonEditorRef.current.aceEditor.setOptions({
//       copyWithEmptySelection: true,
//     })
//     jsonEditorRef.current.aceEditor.on("contextmenu", function(e) {
//       var menu = e.getMenu();
//       // Create a new custom menu item
//       var customItem = new jsonEditorRef.current.aceEditor.menuItem({
//         "command": "customCommand",
//         "name": "Custom Action",
//         "icon": "fa fa-cogs", // Optional: You can use an icon (from FontAwesome or any other source)
//         "disabled": false,
//         "exec": function() {
//           alert('Custom Action Executed!');
//         },
//         "key": 1
//       });

//       // Add the custom item to the menu
//       menu.addItem(customItem);
//     });
//     console.log(jsonEditorRef.current)

//     // Cleanup on unmount
//     return () => {
//       if (jsonEditorRef.current) {
//         jsonEditorRef.current.destroy();
//         jsonEditorRef.current = null;
//       }
//     };
//   }, []);

//   useEffect(() => {
//     // Update theme dynamically
//     if (jsonEditorRef.current) {
//       const theme = isDark ? "ace/theme/cobalt" : "ace/theme/github";
//       jsonEditorRef.current.aceEditor.setTheme(theme);
//     }
//   }, [isDark]);

//   useEffect(() => {
//     // Update value dynamically
//     if (jsonEditorRef.current) {
//       jsonEditorRef.current.set(value);
//     }
//   }, [value]);

//   const handleRenderMenu = (items, node) => {
//     console.log(items)
//   }
//   const handleChange = () => {
//     try {
//       const updatedJson = jsonEditorRef.current.get();
//       onChange(updatedJson);
//     } catch (error) {
//       console.error("Invalid JSON:", error);
//     }
//   };

//   const handleModeChange = (newMode) => {
//     setCurrentMode(newMode);
//   };

//   const formatJson = () => {
//     if (jsonEditorRef.current) {
//       jsonEditorRef.current.format();
//     }
//   };

//   const toggleTheme = () => {
//     setIsDark((prev) => !prev);
//   };
//   const toggleFullscreen = () => {
//     setFullscreen((prev) => !prev);
//   };
//   return (
//     <div className="json-editor-container">
//       <div className={fullscreen ? "main-cont fullscreen" : "main-cont"}>
//         {/* Editor Toolbar */}
//         <div className="editor-toolbar">
//           {/* <button className="btn text-btn" onClick={formatJson} title="Format JSON">
//             Format
//           </button>
//           <button
//             className="btn icon-btn"
//             onClick={toggleTheme}
//             title="Switch Theme"
//             dangerouslySetInnerHTML={{
//               __html: '<?xml version="1.0" ?><svg fill="#94a3b8" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8V16Z" fill="currentColor"/><path clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4V8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16V20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z" fill="currentColor" fill-rule="evenodd"/></svg>',
//             }}
//           /> */}
//           <Tooltip title="Format JSON">
//             <Button color="primary" variant="solid" onClick={formatJson} size="small" style={{color: "#fff"}}>
//               Format
//             </Button>
//           </Tooltip>
//           <Tooltip title="Switch Theme">
//             <Button type="text" onClick={toggleTheme} size="large" style={{color: "#fff"}} shape="circle" icon={
//             isDark ? <SunFilled /> : <MoonFilled />} />
//           </Tooltip>
//           <div className="full-screen">
//               <Button
//                 type="text"
//                 style={{color: "#fff"}}
//                 onClick={toggleFullscreen}
//                 icon={fullscreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
//               />
//           </div>
//         </div>

//         {/* JSON Editor */}
//         <div className="jsoneditor" ref={editorRef}></div>
//       </div>
//     </div>
//   );
// };

// export default JsonEditorComponent;
