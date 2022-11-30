import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  function navigationHandler(e) {
    navigate(e.target.name);
  }
  return (
    <header>
      <nav>
        <ul>
          <li name="/home" onClick={e => navigationHandler(e)}>
            Home
          </li>
          <li name="/about-us" onClick={e => navigationHandler(e)}>
            About Us
          </li>
          <li name="/agencies-and-links" onClick={e => navigationHandler(e)}>
            Agencies & Links
          </li>
          <li name="/community-events" onClick={e => navigationHandler(e)}>
            Community Events
          </li>
          <li
            name="/job-posting-and-recruitment"
            onClick={e => navigationHandler(e)}
          >
            Job Posting & Recruitment
          </li>
          <li name="/next-generation-911" onClick={e => navigationHandler(e)}>
            Next Generation 911
          </li>
          <li name="/contact-us" onClick={e => navigationHandler(e)}>
            Contact Us
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
