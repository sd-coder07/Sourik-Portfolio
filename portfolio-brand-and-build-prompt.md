# Sourik Das — Freelance Portfolio: Brand + Full Build Prompt

A complete spec you can hand to any AI code tool (Claude, v0, Cursor) — or that I can build for you right now in Next.js + Tailwind.

---

## 1. Brand Direction

**Positioning:** You're not "a coder for hire" — you're the developer who bridges two worlds: fast, modern **Next.js builds** for startups/products, and reliable, high-volume **WordPress builds** (25+ sites shipped) for local businesses and agencies. That duality *is* your differentiator. Most freelancers pick one. You do both, well.

**Name/wordmark:** Keep it personal — `Sourik Das` as the wordmark, with a small monospace tag under it: `Full Stack Developer / dev.sourik` or `<SD/>` as a mark. Personal names build more long-term trust for freelance clients than an invented studio name.

**Tagline options** (pick one):
- "Next.js for products. WordPress for business. Shipped fast."
- "I build fast. Websites that actually launch on time."
- "Full-stack developer — 25+ WordPress builds, modern Next.js apps."

**Voice:** Direct, confident, zero fluff. Short sentences. No "passionate about crafting pixel-perfect experiences" — you talk like an engineer, not a marketer.

---

## 2. Design System (tokens)

Avoiding the generic "AI portfolio" look (cream+terracotta, or plain black+neon-green). Instead: a dark **ink-navy editor theme** with a warm **amber signal accent** (like a terminal cursor) and a cool **mint accent** to visually separate your two service lines — Next.js work reads mint/cyan, WordPress work reads amber. This mapping is real, not decorative: it's how visitors instantly tell your two skill tracks apart while scrolling.

**Color palette — Warm Graphite + Signal Orange:**
| Token | Hex | Use |
|---|---|---|
| `bg` | `#12110F` | Page background (warm graphite, not pure black) |
| `surface` | `#1B1A17` | Cards, panels |
| `border` | `#2A2823` | Hairlines, dividers |
| `accent` | `#F2603D` | Single accent — CTAs, links, highlights, active states |
| `text-primary` | `#F5F1EA` | Headlines, body |
| `text-muted` | `#A8A29B` | Secondary text, captions |

One accent only, used deliberately: since there's just one signal color, use it sparingly — CTA buttons, active nav state, link hovers, the browser-tab dot, and small highlight details. Everything else stays graphite/chalk. Restraint here is what makes it read "small studio" instead of "template."

**Typography:**
- Display/headings: **Space Grotesk** (geometric, technical, confident)
- Body: **Inter**
- Labels/eyebrows/tags/code snippets: **JetBrains Mono** (used functionally — for stack tags like `next.js`, `wordpress`, file-path-style section labels — not decoration)

**Layout concept:** Every project card is styled like a **browser tab / file window** — a small orange dot + monospace label (`hardylighting.com — wordpress`) sits above each screenshot, echoing an actual browser tab bar. This is the signature element: it makes the portfolio *feel* like a developer's workspace. Since there's only one accent color now, the two stacks (Next.js vs WordPress) are told apart by a small monospace **text tag** next to the dot, not by color — e.g. `[next.js]` in muted chalk, `[wordpress]` in muted chalk, both with the same orange dot. Keeps the single-accent discipline while still making the split scannable.

**Motion:** Restrained. Fade/slide-up on scroll for sections (staggered by ~80ms per card). Subtle hover-lift + orange border-glow on project cards on hover. No parallax gimmicks, no particle backgrounds — a technical audience will read those as noise, not polish.

---

## 3. Sitemap

Single-page scroll (best conversion for freelance portfolios) with anchored sections:

1. **Hero**
2. **Services** (Next.js Development / WordPress Development)
3. **Work** (project grid, filterable by stack)
4. **Process** (how you work with clients)
5. **About / Experience**
6. **Contact / CTA**

Optional future page: `/blog` or `/case-study/[slug]` for deeper write-ups per project.

---

## 4. Section-by-section content

### Hero
- Eyebrow (monospace): `available for freelance work`
- Headline: **"I build websites that ship — Next.js for products, WordPress for business."**
- Subhead: "Full-stack developer with 1+ year building 25+ WordPress sites and modern Next.js applications for global clients. Currently building at Dronahost."
- Two stat chips: `25+ WordPress sites` · `1+ year professional experience`
- Primary CTA: "See my work" (scrolls to Work) — Secondary CTA: "Get in touch"

### Services
Two cards, same graphite surface, differentiated by a monospace `[next.js]` / `[wordpress]` tag rather than color:

**Next.js Development**
- Custom web apps, dashboards, landing pages
- Server-side rendering & SEO optimization
- API integration, MongoDB/backend services
- AI-integrated features (Generative AI, chat, automation)

**WordPress Development**
- Business & agency websites, 25+ shipped
- Custom themes, page builders, WooCommerce
- Speed & SEO optimization
- Ongoing maintenance & support

### Work (portfolio grid)
Use your real links. Each card: browser-tab label + short outcome-focused blurb (fill in real details where I've guessed):

| Project | Stack | Suggested blurb |
|---|---|---|
| hardylighting.com | WordPress | Business website for a lighting brand — custom theme, product catalog, mobile-optimized. |
| advanced.net.in | WordPress | Corporate site with clean navigation and lead-gen forms. |
| ignitedclasses.in | WordPress | Coaching/education platform — course listings, enquiry funnel. |
| alwayedentalspeciality.com | WordPress | Dental clinic site — appointment booking flow, local SEO setup. |
| 3d-gen-ai-chi.vercel.app | Next.js | AI-powered generative 3D tool — Next.js app deployed on Vercel, showcasing AI integration skills. |
| + more | — | Add a "25+ WordPress projects" tile linking to a case-studies page or a simple list/lightbox if you don't want individual write-ups for every one. |

Add a stack filter toggle (`All / Next.js / WordPress`) — active filter uses the single orange accent; inactive filters stay muted chalk.

### Process
Short 4-step strip (only use numbering since this genuinely is a sequence):
1. Discover — understand goals, audience, content
2. Design — wireframe & visual direction
3. Build — develop in Next.js or WordPress, iterate with you
4. Launch & support — deploy, optimize, ongoing care

### About / Experience
Pull directly from your resume — real credibility signals:
- BTech CSE, Techno Engineering College Banipur (2022–2026)
- Full Stack Web Developer @ Dronahost (Mar 2026–present) — React/Next.js, REST APIs, MongoDB, SSR
- Generative AI Intern @ AI Wallah
- AI & Cloud Intern @ AICTE Edunet / IBM SkillsBuild
- Open-source contributor, GirlScript Summer of Code
- Certifications: AWS ML Foundations, AWS Cloud Foundations, MERN + GenAI (Udemy)

Skills strip (monospace tags): `React` `Next.js` `Node.js` `MongoDB` `WordPress` `Python` `AWS` `REST APIs`

### Contact
- Direct: "Have a project? Let's talk."
- Email + a simple contact form (name, email, project type dropdown: Next.js / WordPress / Not sure, message)
- Links: GitHub (github.com/sd-coder07), LinkedIn (linkedin.com/in/sourik-das)

---

## 5. Full build prompt (copy-paste this into Claude Code, v0, Cursor, etc.)

```
Build a single-page freelance developer portfolio using Next.js 14 (App Router) and Tailwind CSS.

BRAND:
- Developer name: Sourik Das, Full Stack Developer
- Positioning: builds Next.js apps for products AND WordPress sites for businesses (25+ shipped, 1+ year experience)
- Tone: confident, direct, technical — no marketing fluff

DESIGN SYSTEM — "Warm Graphite + Signal Orange":
- Colors: background #12110F, surface #1B1A17, border #2A2823,
  accent #F2603D (single accent — use ONLY for CTAs, links, hover states, active nav, the
  browser-tab dot, and small highlight details; everything else stays graphite/chalk),
  text-primary #F5F1EA, text-muted #A8A29B
- Fonts: Space Grotesk (headings), Inter (body), JetBrains Mono (labels/tags/eyebrows)
- Dark warm theme throughout, generous spacing, no light mode needed
- Signature UI motif: portfolio cards styled like browser tabs — a small orange dot + monospace
  URL-style label (e.g. "hardylighting.com") above each project screenshot. Since there is only
  one accent color, distinguish Next.js vs WordPress projects with a muted monospace text tag
  next to the dot (e.g. "[next.js]" / "[wordpress]" in text-muted), not with color.
- Motion: fade/slide-up on scroll, staggered ~80ms, subtle hover-lift + orange border-glow on
  cards on hover. Respect prefers-reduced-motion. Keep the accent color usage restrained —
  this is what makes it read as a considered small-studio brand rather than a template.

SECTIONS (in order):
1. Hero — eyebrow "available for freelance work", headline "I build websites that ship — Next.js for products, WordPress for business.", subhead mentioning 25+ WordPress sites and 1+ year experience, two stat chips, two CTAs (See my work / Get in touch) — primary CTA filled orange, secondary CTA outlined
2. Services — two cards on the graphite surface: Next.js Development and WordPress Development, each tagged with its monospace label, each with a short bullet list of what's included
3. Work — filterable grid (All / Next.js / WordPress) of project cards. Active filter pill uses the orange accent; inactive filters are muted chalk. Each card = browser-tab header (orange dot + site name + monospace stack tag) + screenshot placeholder + 1-2 line blurb + live link. Include these real projects:
   - hardylighting.com (WordPress)
   - advanced.net.in (WordPress)
   - ignitedclasses.in (WordPress)
   - alwayedentalspeciality.com (WordPress)
   - 3d-gen-ai-chi.vercel.app (Next.js, AI-powered generative 3D tool)
   Plus a closing "+20 more WordPress projects" tile
4. Process — 4-step numbered strip: Discover, Design, Build, Launch & support
5. About/Experience — BTech CSE (2022-2026), Full Stack Developer at Dronahost (current), past internships (AI Wallah, AICTE Edunet/IBM), certifications (AWS ML Foundations, AWS Cloud Foundations), skills tag list (React, Next.js, Node.js, MongoDB, WordPress, Python, AWS, REST APIs) — tags styled as small monospace chips on the graphite surface
6. Contact — direct CTA line, email, contact form (name, email, project type select, message) with an orange submit button, GitHub + LinkedIn links

TECHNICAL REQUIREMENTS:
- Next.js 14 App Router, Tailwind CSS, TypeScript
- Fully responsive, mobile-first
- Semantic HTML, accessible (visible focus states, proper contrast against #12110F, alt text)
- next/font for Space Grotesk, Inter, JetBrains Mono
- Reusable components: Navbar (sticky, smooth-scroll to sections), ProjectCard, ServiceCard, StatChip, Footer
- SEO: proper metadata, Open Graph tags, page title "Sourik Das — Full Stack Developer | Next.js & WordPress"
- Contact form should be functional-ready (client-side validation; note where to wire up a backend/email service like Resend or Formspree)
- Deployable to Vercel with no extra config
```

---

## 6. Next step

I can scaffold this entire site for you right now — Next.js + Tailwind, all sections coded, ready to deploy to Vercel — using the design system above. Want me to go ahead and build it?
