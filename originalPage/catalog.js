const catalogItems = [
  {
    image: "./asset/catalog/example.jpg",
    alt: "Hasselblad X1D II medium-format mirrorless camera",
    name: "seaside",
    description: "A photo shot by our camera",
    priceDay: "0 €/d",
    priceWeek: "0 €/wk",
    video: "https://www.youtube.com/watch?v=Y1nYpPzqykA",
  },
  {
    image: "./asset/catalog/a9m3.webp",
    alt: "Sony Alpha 9 III full-frame mirrorless camera body",
    name: "Sony A9 III",
    description:
      "Sony’s flagship stacked CMOS sensor camera built for high-speed photography. Perfect for sports, wildlife, and professional action capture.",
    priceDay: "69 €/d",
    priceWeek: "349 €/wk",
    video: "https://www.youtube.com/watch?v=IIe7SP3WkJI",
  },
  {
    image: "./asset/catalog/eosr5mark2.webp",
    alt: "Canon EOS R5 Mark II mirrorless camera body",
    name: "Canon EOS R5 Mark II",
    description:
      "Next-gen 45MP high-resolution hybrid camera with advanced autofocus and excellent 8K video performance. Ideal for pro photo & video.",
    priceDay: "59 €/d",
    priceWeek: "299 €/wk",
    video: "https://www.youtube.com/watch?v=tH_peHTCqSM",
  },
  {
    image: "./asset/catalog/eosr6kit.webp",
    alt: "Canon EOS R6 Mark III with RF lens kit",
    name: "Canon EOS R6 Mark III",
    description:
      "Fast, reliable and excellent in low light. A versatile hybrid choice for travel, events, and semi-pro filmmaking.",
    priceDay: "49 €/d",
    priceWeek: "249 €/wk",
    video: "https://www.youtube.com/watch?v=0z2mPOEo1BM",
  },
  {
    image: "./asset/catalog/fujixt5.webp",
    alt: "Fujifilm X-T5 APS-C mirrorless camera",
    name: "Fujifilm X-T5",
    description:
      "40MP retro-style APS-C camera with Fujifilm’s signature color science. Compact, sharp, and perfect for travel photography.",
    priceDay: "39 €/d",
    priceWeek: "199 €/wk",
    video: "https://www.youtube.com/watch?v=_0Lc0G-tJlc",
  },
  {
    image: "./asset/catalog/hasselblad-x2d-ii-100c.webp",
    alt: "Hasselblad X2D II 100C medium-format camera body",
    name: "Hasselblad X2D II 100C",
    description:
      "100MP medium-format system delivering unmatched dynamic range and color depth. Best for studio, portrait, and fine-art photography.",
    priceDay: "129 €/d",
    priceWeek: "599 €/wk",
    video: "https://www.youtube.com/watch?v=CnoSgX_2gYc",
  },
  {
    image: "./asset/catalog/m11d.webp",
    alt: "Leica M11-D digital rangefinder camera",
    name: "Leica M11-D",
    description:
      "A pure photography experience with minimal digital distractions. Legendary Leica build with premium manual-focus craftsmanship.",
    priceDay: "119 €/d",
    priceWeek: "569 €/wk",
    video: "https://www.youtube.com/watch?v=7u7m0-sr07E",
  },
  {
    image: "./asset/catalog/nikonz62.webp",
    alt: "Nikon Z6 II full-frame mirrorless camera with zoom lens",
    name: "Nikon Z6 II",
    description:
      "Balanced full-frame hybrid camera with strong low-light performance and fast AF. A great all-rounder for creators.",
    priceDay: "39 €/d",
    priceWeek: "199 €/wk",
    video: "https://www.youtube.com/watch?v=79j5h1ZbyzA",
  },
  {
    image: "./asset/catalog/q3.webp",
    alt: "Leica Q3 premium compact full-frame camera",
    name: "Leica Q3",
    description:
      "Premium compact full-frame system with a fast Summilux lens. Clean design, superb color, and ideal for everyday carry.",
    priceDay: "79 €/d",
    priceWeek: "389 €/wk",
    video: "https://www.youtube.com/watch?v=O8Cnus3ZxTQ",
  },
  {
    image: "./asset/catalog/sonya74.webp",
    alt: "Sony Alpha 7 IV full-frame hybrid camera",
    name: "Sony A7 IV",
    description:
      "Strong hybrid performance with excellent 4K video and sharp 33MP stills. A modern and dependable all-purpose camera.",
    priceDay: "49 €/d",
    priceWeek: "249 €/wk",
    video: "https://www.youtube.com/watch?v=gUWa7uY-M0w",
  },
  {
    image: "./asset/catalog/x1d2.webp",
    alt: "Hasselblad X1D II medium-format mirrorless camera",
    name: "Hasselblad X1D II",
    description:
      "Compact medium-format system with beautiful color science and a minimalistic Scandinavian design aesthetic.",
    priceDay: "99 €/d",
    priceWeek: "499 €/wk",
    video: "https://www.youtube.com/watch?v=Y1nYpPzqykA",
  },
];

const grid = document.getElementById("gridContent");

grid.innerHTML = catalogItems
  .map((p) => {
    return `
      <article class="product-card">
        <img src="${p.image}" alt="${p.name}">
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.description}</div>
        <div class="product-price">
          ${p.priceDay} ·&nbsp;
          ${p.priceWeek} 
        </div>
        <div class="product-video">
        <video></video>
        </div>
      </article>
    `;
  })
  .join("");
