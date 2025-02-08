import React, { useState } from "react";
import { Menu, Drawer, Button } from "antd";
import { Link, useLocation } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import "./Navbar.css"; // For custom styles if needed

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "JSON DIFF", href: "/json-diff" },
    { name: "JSON Minifier", href: "/json-minifier" },
    { name: "Python Dict to JSON", href: "/python-dict-to-json" },
    { name: "JSON to Table", href: "/json-to-table" },
    { name: "JSON FORMATTER", href: "/json-formatter" },
    { name: "JSON VALIDATOR", href: "/json-validator" },
    // { name: "Contact", href: "/contact" }
  ];

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/">
            <img
              src="/assets/logo1.svg"
              alt="JSON Reader Logo"
              className="navbar-logo-img"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-menu-desktop">
          <Menu
            
            mode="horizontal"
            selectedKeys={[location.pathname]}
            theme="dark"
            className="navbar-menu"
          >
            {navigation.map((item) => (
              <Menu.Item key={item.href} className="navbar-menu-item">
                <Link to={item.href}>{item.name}</Link>
              </Menu.Item>
            ))}
            {/* <Menu.Item className="navbar-menu-item">
              <a
                href="https://www.coderblox.com/p/about-me.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                About Me!
              </a>
            </Menu.Item> */}
          </Menu>
        </div>

        {/* Mobile Navigation */}
        <Button
          type="text"
          className="navbar-menu-button"
          icon={<MenuOutlined />}
          onClick={toggleDrawer}
        />

        <Drawer
          title="Navigation"
          placement="right"
          onClose={toggleDrawer}
          open={isDrawerOpen}
          width={250}
          className="navbar-drawer"
        >
          <Menu
            mode="vertical"
            selectedKeys={[location.pathname]}
            theme="light"
            onClick={toggleDrawer}
            className="navbar-menu"
          >
            {navigation.map((item) => (
              <Menu.Item key={item.href} className="navbar-menu-item">
                <Link to={item.href}>{item.name}</Link>
              </Menu.Item>
            ))}
            {/* <Menu.Item className="navbar-menu-item">
              <a
                href="https://www.coderblox.com/p/about-me.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                About Me!
              </a>
            </Menu.Item> */}
          </Menu>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
