# Lumina Rentals

I’m building a camera rental experience that borrows a lot of cues from the official sites of Canon, Leica, Sony, and especially Hasselblad. After looking across those product pages I landed on replicating the spirit of https://www.hasselblad.com/ because the monochrome palette and bold contrast make their cameras feel premium right away.

I carried that same black-and-white treatment through the hero, product highlights, and footer so the whole site feels cohesive. Keeping the palette this simple lets the imagery do all of the storytelling while the layout stays calm and spacious.

To avoid repeating markup, I split the header and footer into their own HTML fragments and load them into every page via a lightweight JavaScript loader. Each page just calls `fetch` once and injects the shared markup, so updating navigation or contact info happens in one place.

The catalog itself is driven by a single data object. All product details live inside `catalog.js`, and I render the cards by calling `.map()` on that dataset. This keeps things organized, makes edits painless, and prevents copy‑pasting blocks of HTML whenever I add or tweak gear.
