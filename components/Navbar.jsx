"use client";
import "@styles/components/navbar.scss";
import Link from "next/link";
import { useState, useEffect } from "react";
import Mode from "./Mode";
import ModeMob from "./ModeMob";
// Fix Gradient bar for light mode
const Navbar = () => {
  // get dark mode toggle state from local storage

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("About");
  const pages = [
    { name: "About", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];
  const handleClick = (e, page) => {
    // e.preventDefault();
    setIsMenuOpen(false);
    setActivePage(page);
  };

  //   find active page from the pages array
  useEffect(() => {
    const activePage = pages.find(
      (page) => page.path === window.location.pathname
    );
    setActivePage(activePage);
  }, []);

  const toggleHamburger = () => {
    setIsMenuOpen((prevState) => !prevState);
    const hamburger = document.getElementById("hamburger");
    hamburger.classList.toggle("open");
  };
  // close hamburger menu when page is changed
  useEffect(() => {
    setIsMenuOpen(false);
    const hamburger = document.getElementById("hamburger");
    hamburger.classList.remove("open");
  }, [activePage]);

  return (
    <nav>
      <div className="nav-wrapper">
        {/* Left Logo */}
        {activePage.name === "About" ? (
          <span className="span-nav">
            <span className="half-bold">Shahreen</span>
          </span>
        ) : (
          <span className="page-title span-nav">
            {activePage.name}
          </span>
        )}
        {/* Right Links Desktop */}
        <span className="links span-nav">
          {pages.map((page) => {
            return (
              <li key={page.name}>
                <Link
                  onClick={(e) => handleClick(e, page)}
                  href={page.path}
                  className={`${page.name} nav-links`}
                >
                  {page.name}
                </Link>
              </li>
            );
          })}
          {/* Dark mode toggle */}
          <Mode />
        </span>
        {/* Links mobile */}
        {/* Hamburger menu */}
        <div className="hmb-container">
          <div id="hamburger" onClick={toggleHamburger}>
            <svg width="40" height="40" viewBox="0 0 100 100">
              <path
                className="line line1"
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path className="line line2" d="M 20,50 H 80" />
              <path
                className="line line3"
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              />
            </svg>
          </div>
          {/* Circle Menu for Mobile */}

          <div className={`circle-menu ${isMenuOpen ? "open" : ""}`}>
            {isMenuOpen && (
              <ul>
                {pages.map((page) => (
                  <li key={page.name} onClick={(e) => handleClick(e, page)}>
                    <Link href={page.path} className={`${page.name} nav-links`}>
                      {page.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <ModeMob />
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="gradient-bar"></div>
    </nav>
  );
};

export default Navbar;
