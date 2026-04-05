import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHashClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string
  ) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      // Navigate to home first, then scroll after render
      navigate("/" + hash);
    } else {
      // Already on home page, just scroll
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header>
      <div className="container header-content">
        <div className="logo">
          <Link to="/">LUMINA RENTALS</Link>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#about" onClick={(e) => handleHashClick(e, "#about")}>
                About
              </a>
            </li>
            <li>
              <a
                href="#products"
                onClick={(e) => handleHashClick(e, "#products")}
              >
                Cameras
              </a>
            </li>
            <li>
              <a
                href="#features"
                onClick={(e) => handleHashClick(e, "#features")}
              >
                Why Us
              </a>
            </li>
            <li>
              <Link to="/catalog">Catalog</Link>
            </li>
            <li>
              <Link to="/order" className="nav-cta">
                Order
              </Link>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleHashClick(e, "#contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
