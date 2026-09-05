JOEY'S SHOE REPAIR — Static Website

This repository contains a simple static website for JOEY'S SHOE REPAIR. The site lists common shoe repair services and displays prices in ZAR (South African Rand).

Files updated/added:
- index.html — improved markup with accessibility, SEO (Open Graph, meta, JSON-LD), contact form and price calculator
- styles.css — updated styling for logo, form, calculator, images
- app.js — handles currency formatting (ZAR), price calculator, and form-send feedback
- images/logo.svg — simple SVG logo (placeholder)
- images/shoe.svg — placeholder illustration

Contact form / Formspree
- The contact form in index.html points to a Formspree placeholder endpoint: https://formspree.io/f/your-form-id
- To enable email form submissions:
  1. Create a free form at https://formspree.io/ and get your form ID (e.g., /f/mayoid).
  2. Replace the action attribute in the form (index.html) with your Formspree endpoint.
  3. Test the form in production — Formspree may require you to confirm your email before sending.

Custom domain & HTTPS (GitHub Pages)
- To publish to GitHub Pages:
  1. In the repository Settings → Pages, choose the main branch and the root folder (/).
  2. Save. After a few minutes the site will be available at https://<username>.github.io/<repo>/
- To use a custom domain (yourdomain.com):
  1. Create a DNS A record pointing your apex domain to GitHub's IP addresses (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153) or a CNAME for subdomain to <username>.github.io.
  2. In the Pages settings, add your custom domain.
  3. Optionally add a CNAME file in the repository root containing your domain (only add this when you're ready):
     CNAME
yourdomain.com
  4. GitHub will provision HTTPS automatically once the DNS is correct.

SEO & Accessibility improvements included
- Meta description, keywords, Open Graph, Twitter card
- JSON-LD LocalBusiness schema in the head
- Alt text for images, aria labels and roles where applicable
- Better heading structure and sr-only text for price readout

Next steps / how I can help further
- Replace placeholder images with a real logo or photos — upload them and I'll update the site.
- Add server-side contact handling or integrate a different provider (Mailgun, SendGrid, Netlify Forms).
- Wire up a custom domain and create the CNAME file if you give me the domain name.
- Add more services, pricing tiers, or a booking widget.

To update any contact details, prices, or the Formspree ID, edit index.html and push to the repo.
