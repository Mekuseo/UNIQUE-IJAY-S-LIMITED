import "./FooterStyles.css";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="top">
          <div>
            <h1>UNIQUE IJAY'S LIMITED</h1>
            <p>Your partner in energy production and exploration.</p>
          </div>
          <div>
            <a href="https://web.facebook.com/uniqueijay75?mibextid=ZbWKwL&_rdc=1&_rdr">
              <i className="fa-brands fa-facebook-square"></i>
            </a>
            <a href="https://www.instagram.com/uniqueijays_limited/?igshid=ZDdkNTZiNTM%3D">
              <i className="fa-brands fa-instagram-square"></i>
            </a>
          </div>
        </div>

        <div className="bottom">
          <div>
            <h4>Project</h4>
            <Link to="/service">Services</Link>
            <Link to="/about">About</Link>
          </div>
          <div>
            <h4>Contact Us</h4>
            <Link to="/contact">About</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
