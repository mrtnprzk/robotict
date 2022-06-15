import React from "react";
import "./Header.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Header = () => {
  return (
    <header>
      <a href="https://www.linkedin.com/in/martin-parizek-b32ab4152">
        <LinkedInIcon fontSize="large" />
      </a>
      <a href="https://github.com/mrtnprzk?tab=repositories">
        <GitHubIcon fontSize="large" />
      </a>
      <a href="https://www.instagram.com/martinparizek">
        <InstagramIcon fontSize="large" />
      </a>
    </header>
  );
}

export default Header