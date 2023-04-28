import "./FooterStyles.css";

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
            <a href="https://facebook.com/uniqueijayslimited">
              <i className="fa-brands fa-facebook-square"></i>
            </a>
            <a href="https://instagram.com/uniqueijayslimited">
              <i className="fa-brands fa-instagram-square"></i>
            </a>
          </div>
        </div>

        <div className="bottom">
          <div>
            <h4>Project</h4>
            <a href="https://uniqueijayslimited.com/service/">Services</a>
            <a href="https://uniqueijayslimited.com/service/">About</a>
          </div>
          <div>
            <h4>Contact Us</h4>
            <a href="https://https://uniqueijayslimited.com/about/">About</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
