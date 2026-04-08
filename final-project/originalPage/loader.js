//header
fetch("./header.html")
  .then((r) => r.text())
  .then((html) => {
    const el = document.getElementById("navbar");
    if (el) el.innerHTML = html;
  });

// footer
fetch("./footer.html")
  .then((r) => r.text())
  .then((html) => {
    const el = document.getElementById("contact");
    if (el) el.innerHTML = html;
  });
