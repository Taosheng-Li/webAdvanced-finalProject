import "./Footer.css";

function Footer() {
  return (
    <footer id="contact">
      <div className="container footer-content">
        <div className="footer-column">
          <h4>Lumina Rentals</h4>
          <p>
            123 Photography Lane
            <br />
            Creative District, FI 10010
          </p>
        </div>
        <div className="footer-column">
          <h4>Contact</h4>
          <p>hello@luminarentals.com</p>
          <p>+358 123-4567</p>
        </div>
        <div className="footer-column">
          <h4>Social</h4>
          <p>Instagram / Twitter / Facebook</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Lumina Rentals. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
