import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer__copyright">
      Copyright  &copy; 2019 by Vadim Saroka. Powered by
        <a
          href="http://food2fork.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          Food2Fork.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
