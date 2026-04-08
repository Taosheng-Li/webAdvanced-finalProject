import { Link } from "react-router-dom";
import "./CatalogPage.css";

import example from "../../assets/catalog/example.jpg";
import a9m3 from "../../assets/catalog/a9m3.webp";
import eosr5mark2 from "../../assets/catalog/eosr5mark2.webp";
import eosr6kit from "../../assets/catalog/eosr6kit.webp";
import fujixt5 from "../../assets/catalog/fujixt5.webp";
import hasselbladX2d from "../../assets/catalog/hasselblad-x2d-ii-100c.webp";
import m11d from "../../assets/catalog/m11d.webp";
import nikonz62 from "../../assets/catalog/nikonz62.webp";
import q3 from "../../assets/catalog/q3.webp";
import sonya74 from "../../assets/catalog/sonya74.webp";
import x1d2 from "../../assets/catalog/x1d2.webp";
import cannonVideo from "../../assets/catalog/cannon.mp4";

interface CatalogItem {
  image: string;
  alt: string;
  name: string;
  description: string;
  priceDay: string;
  priceWeek: string;
  video: string;
}

const catalogItems: CatalogItem[] = [
  {
    image: example,
    alt: "Hasselblad X1D II medium-format mirrorless camera",
    name: "seaside",
    description: "A photo shot by our camera",
    priceDay: "0 €/d",
    priceWeek: "0 €/wk",
    video: "https://www.youtube.com/watch?v=Y1nYpPzqykA",
  },
  {
    image: a9m3,
    alt: "Sony Alpha 9 III full-frame mirrorless camera body",
    name: "Sony A9 III",
    description:
      "Sony's flagship stacked CMOS sensor camera built for high-speed photography. Perfect for sports, wildlife, and professional action capture.",
    priceDay: "69 €/d",
    priceWeek: "349 €/wk",
    video: "https://www.youtube.com/watch?v=IIe7SP3WkJI",
  },
  {
    image: eosr5mark2,
    alt: "Canon EOS R5 Mark II mirrorless camera body",
    name: "Canon EOS R5 Mark II",
    description:
      "Next-gen 45MP high-resolution hybrid camera with advanced autofocus and excellent 8K video performance. Ideal for pro photo & video.",
    priceDay: "59 €/d",
    priceWeek: "299 €/wk",
    video: "https://www.youtube.com/watch?v=tH_peHTCqSM",
  },
  {
    image: eosr6kit,
    alt: "Canon EOS R6 Mark III with RF lens kit",
    name: "Canon EOS R6 Mark III",
    description:
      "Fast, reliable and excellent in low light. A versatile hybrid choice for travel, events, and semi-pro filmmaking.",
    priceDay: "49 €/d",
    priceWeek: "249 €/wk",
    video: "https://www.youtube.com/watch?v=0z2mPOEo1BM",
  },
  {
    image: fujixt5,
    alt: "Fujifilm X-T5 APS-C mirrorless camera",
    name: "Fujifilm X-T5",
    description:
      "40MP retro-style APS-C camera with Fujifilm's signature color science. Compact, sharp, and perfect for travel photography.",
    priceDay: "39 €/d",
    priceWeek: "199 €/wk",
    video: "https://www.youtube.com/watch?v=_0Lc0G-tJlc",
  },
  {
    image: hasselbladX2d,
    alt: "Hasselblad X2D II 100C medium-format camera body",
    name: "Hasselblad X2D II 100C",
    description:
      "100MP medium-format system delivering unmatched dynamic range and color depth. Best for studio, portrait, and fine-art photography.",
    priceDay: "129 €/d",
    priceWeek: "599 €/wk",
    video: "https://www.youtube.com/watch?v=CnoSgX_2gYc",
  },
  {
    image: m11d,
    alt: "Leica M11-D digital rangefinder camera",
    name: "Leica M11-D",
    description:
      "A pure photography experience with minimal digital distractions. Legendary Leica build with premium manual-focus craftsmanship.",
    priceDay: "119 €/d",
    priceWeek: "569 €/wk",
    video: "https://www.youtube.com/watch?v=7u7m0-sr07E",
  },
  {
    image: nikonz62,
    alt: "Nikon Z6 II full-frame mirrorless camera with zoom lens",
    name: "Nikon Z6 II",
    description:
      "Balanced full-frame hybrid camera with strong low-light performance and fast AF. A great all-rounder for creators.",
    priceDay: "39 €/d",
    priceWeek: "199 €/wk",
    video: "https://www.youtube.com/watch?v=79j5h1ZbyzA",
  },
  {
    image: q3,
    alt: "Leica Q3 premium compact full-frame camera",
    name: "Leica Q3",
    description:
      "Premium compact full-frame system with a fast Summilux lens. Clean design, superb color, and ideal for everyday carry.",
    priceDay: "79 €/d",
    priceWeek: "389 €/wk",
    video: "https://www.youtube.com/watch?v=O8Cnus3ZxTQ",
  },
  {
    image: sonya74,
    alt: "Sony Alpha 7 IV full-frame hybrid camera",
    name: "Sony A7 IV",
    description:
      "Strong hybrid performance with excellent 4K video and sharp 33MP stills. A modern and dependable all-purpose camera.",
    priceDay: "49 €/d",
    priceWeek: "249 €/wk",
    video: "https://www.youtube.com/watch?v=gUWa7uY-M0w",
  },
  {
    image: x1d2,
    alt: "Hasselblad X1D II medium-format mirrorless camera",
    name: "Hasselblad X1D II",
    description:
      "Compact medium-format system with beautiful color science and a minimalistic Scandinavian design aesthetic.",
    priceDay: "99 €/d",
    priceWeek: "499 €/wk",
    video: "https://www.youtube.com/watch?v=Y1nYpPzqykA",
  },
];

function CatalogPage() {
  return (
    <>
      <Link to="/">
        <div id="back">Back to homepage</div>
      </Link>

      <div className="catalog-product-grid">
        {catalogItems.map((p, index) => (
          <article className="catalog-product-card" key={index}>
            <img src={p.image} alt={p.name} />
            <div className="product-name">{p.name}</div>
            <div className="product-desc">{p.description}</div>
            <div className="product-price">
              {p.priceDay} ·&nbsp;
              {p.priceWeek}
            </div>
            <div className="product-video">
              <video></video>
            </div>
          </article>
        ))}
      </div>

      <section id="catalog-video" className="video-section">
        <div className="container">
          <h2>Video tour</h2>
          <p>
            See how our camera rental works and get quick tips for using the
            gear.
          </p>

          <video
            id="catalogVideo"
            controls
            preload="metadata"
            width="100%"
          >
            <source src={cannonVideo} type="video/mp4" />
            <track kind="subtitles" srcLang="en" label="English" default />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </>
  );
}

export default CatalogPage;
