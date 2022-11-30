import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <footer>
      <nav>
        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("about-us")}>About Us</li>
          <li onClick={() => navigate("agencies-and-links")}>
            Agencies & Links
          </li>
          <li onClick={() => navigate("community-events")}>Community Events</li>
          <li onClick={() => navigate("job-posting-and-recruitment")}>
            Job Posting & Recruitment
          </li>
          <li onClick={() => navigate("next-generation-911")}>
            Next Generation 911
          </li>
          <li onClick={() => navigate("contact-us")}>Contact Us</li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
