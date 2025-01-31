import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  const [showNotification, setShowNotification] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const programsDropdown = [
    {
      title: "Technology",
      links: ["Data Science", "AI & ML", "Cloud Computing", "Cyber Security"],
    },
    {
      title: "Management",
      links: [
        "MBA",
        "Digital Marketing",
        "Product Management",
        "Business Analytics",
      ],
    },
    {
      title: "Certifications",
      links: ["Google Cloud", "AWS", "Microsoft Azure", "PMI"],
    },
  ];

  return (
    <>
      {/* Level 1: Notification Header */}
      {showNotification && (
        <div className="header-notification">
          <span>🎉 New courses launched! Explore our latest programs.</span>
          <button
            className="notification-close"
            onClick={() => setShowNotification(false)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      )}

      {/* Level 2: Main Header */}
      <header className="main-header">
        <div className="logo">EDU Platform</div>

        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search courses, programs..."
          />
        </div>

        <div className="auth-buttons">
          <button className="auth-btn">Sign Up</button>
          <button className="auth-btn">Login</button>
          <select className="language-select">
            <option>English</option>
            <option>हिन्दी</option>
            <option>Español</option>
          </select>
        </div>
      </header>

      {/* Level 3: Mega Menu */}
      <nav className="mega-menu">
        <div className="menu-container">
          <div
            className="menu-item"
            onMouseEnter={() => setActiveDropdown("programs")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            Programs
            {activeDropdown === "programs" && (
              <div className="dropdown mega-dropdown">
                {programsDropdown.map((section, index) => (
                  <div key={index} className="dropdown-section">
                    <h4>{section.title}</h4>
                    {section.links.map((link, idx) => (
                      <a key={idx} href="#">
                        {link}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div
            className="menu-item"
            onMouseEnter={() => setActiveDropdown("universities")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            Universities
            {activeDropdown === "universities" && (
              <div className="dropdown">
                <a href="#">Partner Universities</a>
                <a href="#">Accreditations</a>
                <a href="#">Faculty</a>
              </div>
            )}
          </div>

          <div
            className="menu-item"
            onMouseEnter={() => setActiveDropdown("resources")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            Resources
            {activeDropdown === "resources" && (
              <div className="dropdown">
                <a href="#">Blog</a>
                <a href="#">Webinars</a>
                <a href="#">Career Services</a>
              </div>
            )}
          </div>

          <div className="menu-item">About Us</div>
          <div className="menu-item">Contact</div>
        </div>
      </nav>
    </>
  );
};

export default Header;
