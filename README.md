1.  Raleway
2.  Inter
3.  Elm Sans
4.  IBm Plex Mono
5.  QuickSand

"postbuild": "npx prerender-cli --static-dir dist --index dist/index.html --routes /",

Inspiration

1. https://t3.tech/
2. https://lassco.ca/
3. https://bienes-temlis.webflow.io/home/home-1
4. https://tympanus.net/Tutorials/MarqueeMenu/

| Element              | Color                             |
| -------------------- | --------------------------------- |
| Primary CTAs / Icons | `bg-brand-lime`                   |
| Text Headings        | `text-brand-navy`                 |
| Paragraphs           | `text-brand-slate`                |
| Backgrounds          | `bg-brand-light-bg` or `bg-white` |
| Footer               | `bg-brand-midnight text-white`    |

navbar component design (sticky + responsive + color switch on scroll) in React + Tailwind v4.

⚙️ SEO Notes
For a single-page static site:
Make sure you include meta tags and Open Graph tags in your index.html
Add <title>, <meta name="description">, and <link rel="canonical">
Include structured data (JSON-LD) if it’s a business site (for Google rich results)

Website Layout Plan (Single Page)

1. Hero Section✔️
   Headline: Harness Your Home’s Natural Sunlight
   Subtext: Save money, add value to your home, and protect the planet.
   CTA: Get a Free Quote (lime green button)
   Background: Subtle gradient navy → light background, with solar panel hero image.
   Optional: GSAP fade-in + subtle sun flare animation.

2. About / Introduction✔️
   Title: You’re in Safe Hands
   Content:
   Short paragraph from brochure:
   No1 Home’s solar solutions help you save money while giving back to the planet. Our experts ensure top-quality installation and maximum energy savings for every home.
   Visuals:
   Photo of smiling technicians or solar installation.
   Icons for Nationwide service, Expert installation, Sustainable solutions.

3. How Solar Works❌
   Title: How Solar PV Systems Work
   Content Highlights:
   Animated 3-step visual or GSAP scroll reveal:
   Sunlight hits panels → electrons move → DC power created
   Inverter converts DC → AC power for home use
   Excess energy stored or sent to grid
   Style: Split section – text left, illustrated process right.

4. Benefits Section✔️
   Title: Why Choose Solar PV
   icons or cards for each benefit:
   Pay Less in Energy Bills
   Protect Against Rising Electricity Rates
   Increase Your Home’s Value
   Be Part of Clean Energy Efforts
   Background: bg-brand-light-bg, cards with soft shadows and lime highlights.

5. Trusted Brands✔️
   Title: Manufacturers You Can Trust
   Logos: SolarEdge, JA Solar, Growatt, Trina, etc.
   Layout: Grid of logos with a tagline:
   We only use the country’s leading solar brands for guaranteed performance.

6. Installation Process➡️
   Title: Our Seamless Installation Process
   Steps (icons or horizontal timeline):

Roof prep
Panel installation
Wiring
Battery setup
System activation
Training on your system dashboard
Add short text:
Most installations are completed in one day — quick, clean, and non-invasive.

7. Packages➡️

Title: Tried & Tested Solar Packages
Three cards (with guarantee badges):
Full Solar Edge System (Inc. Battery)
Mixed Full System (Inc. Battery)
Mixed Full System (No Battery)
Add Compare Packages button → modal or anchor to contact form.

8. Additional Extras✔️

Title: Energy-Saving Add-ons
3x2 grid with icons:
Battery Add-on
iBoost Water Heating
Inverter Upgrade
Voltage Optimiser
Panel Clean & Protect
Bird Nest Protection

9. ROI Section✔️

Title: Your Return on Investment
Content Summary:
With rising energy costs, now is the best time to invest in solar. Many homes see a full return in just 7 years.
A simple animated line chart or stat counter (e.g., “£527/year savings”)

10. Contact / CTA✔️

Title: Get Your Free Solar Consultation
Form fields: Name, Email, Postcode, Phone
CTA: Book My Free Quote
Include:
Nationwide Coverage | 10-Year Warranty | Sustainable Future


https://docs.google.com/spreadsheets/d/e/2PACX-1vS_ZYE9oD2ZmvGwzJhu-oNGXpH8kfAc37lV-D0ZbBIx8sE_ByeOO6KhPAw7XsV5X6GlVf63VkumdQCv/pubhtml


https://docs.google.com/spreadsheets/d/1qP1Gs32T4Ho1GKckvnFKVRI1R3PcGfQVYkPehRB0Ytc/edit?usp=sharing