import { Link } from "react-router-dom";
import "./Mainpage.css";
import eosR5 from "../../assets/eos-r5-mark-ii.png";
import leica from "../../assets/leica.png.webp";
import hasselbladImg from "../../assets/hasselblad-x2d-ii-100c.webp";

function MainPage() {
  return (
    <main>
      <section id="hero">
        <div className="hero-overlay">
          <div className="hero-text">
            <h1>Capture Perfection.</h1>
            <p className="tagline">
              Experience the world's finest imaging technology. For every vision.
            </p>
            <div className="hero-actions">
              <Link to="/catalog" className="btn-primary">
                Browse Catalog
              </Link>
              <Link to="/order" className="btn-secondary btn-light">
                Request a Rental
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <h2>Our Philosophy</h2>
          <p className="lead-text">
            At Lumina, we believe that the best stories deserve the best tools.
            Inspired by the legacy of medium format photography, we curate a
            selection of high-end cameras for professionals and enthusiasts
            alike.
          </p>
        </div>
      </section>

      <section id="products">
        <div className="container">
          <h2>Selected Gear</h2>
          <div className="product-grid">
            <article className="product-card">
              <figure>
                <img
                  src={eosR5}
                  alt="Professional DSLR Camera"
                  id="canon"
                />
                <figcaption>Canon EOS Series</figcaption>
              </figure>
              <div className="card-details">
                <h3>The Workhorse</h3>
                <p>
                  Reliable, fast, and precise. Perfect for sports and events.
                </p>
                <a href="#" className="btn-text">
                  View Details &rarr;
                </a>
              </div>
            </article>

            <article className="product-card">
              <figure>
                <img
                  src={leica}
                  alt="Vintage Style Mirrorless Camera"
                />
                <figcaption>Leica M System</figcaption>
              </figure>
              <div className="card-details">
                <h3>The Street Master</h3>
                <p>
                  Discreet luxury design for the ultimate street photography
                  experience.
                </p>
                <a href="#" className="btn-text">
                  View Details &rarr;
                </a>
              </div>
            </article>

            <article className="product-card">
              <figure>
                <img
                  src={hasselbladImg}
                  alt="Medium Format Camera"
                  id="hasselblad"
                />
                <figcaption>Hasselblad X2D II</figcaption>
              </figure>
              <div className="card-details">
                <h3>Medium Format</h3>
                <p>Uncompromising image quality with stunning color depth.</p>
                <a href="#" className="btn-text">
                  View Details &rarr;
                </a>
              </div>
            </article>
          </div>
          <div className="center-btn">
            <Link to="/catalog" className="btn-secondary">
              Browse Full Catalog
            </Link>
          </div>
        </div>
      </section>

      <section id="features">
        <div className="container">
          <h2>Why Choose Lumina</h2>
          <div className="features-grid">
            <div className="feature-item">
              <h3>01. Quality Check</h3>
              <p>
                Every sensor is cleaned and every lens calibrated before rental.
              </p>
            </div>
            <div className="feature-item">
              <h3>02. Flexible Terms</h3>
              <p>Rent for a day, a week, or a month. Extensions are easy.</p>
            </div>
            <div className="feature-item">
              <h3>03. Expert Support</h3>
              <p>24/7 technical assistance from professional photographers.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="cta">
        <div className="container">
          <h2>Ready to Create?</h2>
          <p>Reserve your gear today and bring your vision to life.</p>
          <Link to="/order" className="btn-primary btn-inverted">
            Place Rental Order
          </Link>
        </div>
      </section>
    </main>
  );
}

export default MainPage;
