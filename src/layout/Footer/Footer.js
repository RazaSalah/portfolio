import React from "react";
import Css from "./footer.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-6 col-xs-12">
                <p className="copyright-text">
                  Copyright © 2022 All Rights Reserved
                </p>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <ul className="social-icons">
                  <li>
                    <a className="facebook" href="https://github.com/RazaSalah">
                      <FaGithub />
                    </a>
                  </li>
                  <li>
                    <a className="twitter" href="#">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a className="linkedin" href="https://www.linkedin.com/in/razan-alabdullah-55bba9204/">
                      <FaLinkedin />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
