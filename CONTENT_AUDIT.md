# GRITTYFLINT COMPLETE CONTENT AUDIT
**For Migration to New Design System**

---

## 1. GLOBAL NAVIGATION MAP

### Header Navigation (Navbar)
| Menu Item | URL Path | Notes |
|-----------|----------|-------|
| Grittyflint (Logo) | `/` | Logo: `/grittyflint-logo.png` (40x40px) |
| Work | `/work` | Portfolio/Case Studies |
| Services | `/services` | All Services Overview |
| About | `/about` | Company & Team Information |
| Contact | `/contact` | Contact Form Page |
| Let's Work on the Next Big Idea | Modal Trigger | Opens ContactDropdown |

### Social Media Links (Header & Footer)
| Platform | URL | Location |
|----------|-----|----------|
| Twitter/X | https://x.com/grittyflint | Header & Footer |
| Instagram | https://www.instagram.com/grittyflint/ | Header & Footer |
| LinkedIn | https://www.linkedin.com/company/grittyflint/ | Header & Footer |

### Footer Navigation
| Section | Content | Action |
|---------|---------|--------|
| CTA Heading | "Let's Work on the Next Big Idea" | Opens ContactDropdown |
| Email Link | info@grittyflint.com | Opens ContactDropdown |
| Social Links | Instagram, Twitter, LinkedIn | External Links |
| Copyright | © 2026 Grittyflint | Text Only |

---

## 2. MEDIA ASSET REGISTRY

### Hero Section
| Asset | File Name | Type | Source | Location |
|-------|-----------|------|--------|----------|
| Hero Background Video | o7HUPX9Mi8k | YouTube Embed | https://www.youtube.com/embed/o7HUPX9Mi8k | Hero Video Background |

### Work/Portfolio Images
| Asset | File Name | Category | Year | Location |
|-------|-----------|----------|------|----------|
| Cultural Impact Film | `/work/cultural-impact-film.jpg` | Film | 2024 | Work Page Tile 01 |
| Launch Campaign System | `/work/launch-campaign-system.jpg` | Campaign | 2024 | Work Page Tile 02 |
| Brand Motion Toolkit | `/work/brand-motion-toolkit.jpg` | Motion | 2023 | Work Page Tile 03 |
| Product Reveal Film | `/work/product-reveal-film.jpg` | Film | 2023 | Work Page Tile 04 |
| Creative Banner System | `/work/creative-banner-system.jpg` | Design System | 2023 | Work Page Tile 05 |
| Strategic Animatic Series | `/work/strategic-animatic-series.jpg` | Concept | 2022 | Work Page Tile 06 |

### About/Team Images
| Asset | File Name | Type | Person | Location |
|-------|-----------|------|--------|----------|
| Creative Director Headshot | `/creative-director-headshot.png` | Headshot | Alex Chen | Team Grid Slot 1 |
| Designer Woman Headshot | `/professional-headshot-designer-woman.jpg` | Headshot | Sarah Miller | Team Grid Slot 2 |
| Developer Man Headshot | `/professional-headshot-developer-man.jpg` | Headshot | Marcus Johnson | Team Grid Slot 3 |
| Strategist Woman Headshot | `/professional-headshot-strategist-woman.jpg` | Headshot | Emma Wilson | Team Grid Slot 4 |

### Brand Assets
| Asset | File Name | Type | Usage |
|-------|-----------|------|-------|
| Logo | `/grittyflint-logo.png` | PNG | Navbar (40x40px) |
| Favicon SVG | `/icon.svg` | SVG | Browser Tab |
| Favicon Light | `/icon-light-32x32.png` | PNG | Light Theme Browser Tab |
| Favicon Dark | `/icon-dark-32x32.png` | PNG | Dark Theme Browser Tab |
| Apple Icon | `/apple-icon.png` | PNG | Apple Touch Icon |
| Placeholder | `/placeholder.svg` | SVG | Fallback Image |

---

## 3. PAGE-BY-PAGE CONTENT MANIFEST

### HOME PAGE (`/`)

#### HERO SECTION
| Element | Content | Location ID |
|---------|---------|-------------|
| Heading | "We create essence that scales through visual storytelling" | HOME_HERO_TITLE |
| Video Background | YouTube embed ID: o7HUPX9Mi8k | HOME_HERO_VIDEO |
| Video Overlay | Black/40% opacity | HOME_HERO_OVERLAY |

#### MARQUEE SECTION
| Line 1 | "STRATEGY • CREATIVE • BRAND •" | HOME_MARQUEE_LINE1 |
| Line 2 | "INNOVATION • PRODUCTION • EXECUTION •" | HOME_MARQUEE_LINE2 |

#### SERVICES SECTION (Component)
| Element | Content | Location ID |
|---------|---------|-------------|
| Heading | "Services" | HOME_SERVICES_TITLE |
| Service 1 Number | "01" | HOME_SERVICE_01_NUM |
| Service 1 Title | "Strategy & Consulting" | HOME_SERVICE_01_TITLE |
| Service 1 Tags | "Brand Strategy", "Market Analysis", "Consulting" | HOME_SERVICE_01_TAGS |
| Service 2 Number | "02" | HOME_SERVICE_02_NUM |
| Service 2 Title | "Creative Development" | HOME_SERVICE_02_TITLE |
| Service 2 Tags | "Concepting", "Art Direction", "Copywriting" | HOME_SERVICE_02_TAGS |
| Service 3 Number | "03" | HOME_SERVICE_03_NUM |
| Service 3 Title | "Production Services" | HOME_SERVICE_03_TITLE |
| Service 3 Tags | "Video", "Photography", "Motion Graphics" | HOME_SERVICE_03_TAGS |
| Service 4 Number | "04" | HOME_SERVICE_04_NUM |
| Service 4 Title | "Brand Experience" | HOME_SERVICE_04_TITLE |
| Service 4 Tags | "Activations", "Innovation", "Experience Design" | HOME_SERVICE_04_TAGS |
| Service 5 Number | "05" | HOME_SERVICE_05_NUM |
| Service 5 Title | "Digital & Marketing" | HOME_SERVICE_05_TITLE |
| Service 5 Tags | "Digital Strategy", "Marketing", "Analytics" | HOME_SERVICE_05_TAGS |

#### LATEST STORIES SECTION
| Element | Content | Location ID |
|---------|---------|-------------|
| Label | "Latest Updates" | HOME_BLOG_LABEL |
| Heading | "Stories & Insights" | HOME_BLOG_TITLE |
| Desktop CTA | "View All →" | HOME_BLOG_CTA_DESKTOP |
| Mobile CTA Button | "View All Stories" | HOME_BLOG_CTA_MOBILE |
| Links to | `/blog` | HOME_BLOG_LINK |

#### FOOTER SECTION
| Element | Content | Location ID |
|---------|---------|-------------|
| CTA Heading | "Let's Work on the Next Big Idea" | HOME_FOOTER_CTA_HEADING |
| CTA Email Button | "info@grittyflint.com" | HOME_FOOTER_EMAIL_CTA |
| Copyright | "© 2026 Grittyflint" | HOME_FOOTER_COPYRIGHT |
| Social Links | Instagram, Twitter, LinkedIn | HOME_FOOTER_SOCIALS |

---

### WORK PAGE (`/work`)

#### PAGE HEADER
| Element | Content | Location ID |
|---------|---------|-------------|
| Main Heading | "Selected" | WORK_HEADING_PT1 |
| Accent Word | "Work" | WORK_HEADING_PT2 |
| Description | "A curated body of work spanning film, motion, design systems, and culture-shaping campaigns. Each project reflects our commitment to bold storytelling and measurable impact." | WORK_DESCRIPTION |

#### PROJECT TILES (6 Total)
| Tile | Index | Title | Category | Year | Description | Image |
|------|-------|-------|----------|------|-------------|-------|
| 01 | 01 | Cultural Impact Film | Film | 2024 | High-impact brand storytelling crafted for broadcast, digital, and cultural relevance. | `/work/cultural-impact-film.jpg` |
| 02 | 02 | Launch Campaign System | Campaign | 2024 | A multi-platform campaign blending film, social-first content, and performance assets. | `/work/launch-campaign-system.jpg` |
| 03 | 03 | Brand Motion Toolkit | Motion | 2023 | A scalable motion system built for digital, broadcast, and branded experiences. | `/work/brand-motion-toolkit.jpg` |
| 04 | 04 | Product Reveal Film | Film | 2023 | Cinematic product storytelling engineered for attention and conversion. | `/work/product-reveal-film.jpg` |
| 05 | 05 | Creative Banner System | Design System | 2023 | High-performance visual assets optimized for omnichannel deployment. | `/work/creative-banner-system.jpg` |
| 06 | 06 | Strategic Animatic Series | Concept | 2022 | Pre-visual storytelling that shapes narrative direction before full-scale production. | `/work/strategic-animatic-series.jpg` |

---

### SERVICES PAGE (`/services`)

#### PAGE HEADER
| Element | Content | Location ID |
|---------|---------|-------------|
| Main Heading | "Our" | SERVICES_HEADING_PT1 |
| Accent Word | "Services" | SERVICES_HEADING_PT2 |
| Description | "Full-spectrum creative services designed to elevate your brand and drive meaningful results. We don't just design—we transform." | SERVICES_DESCRIPTION |

#### SERVICE CARDS (5 Total)
| Service | Number | Title | Description | Deliverables | Link |
|---------|--------|-------|-------------|---------------|----|
| Strategy | 01 | Strategy & Consulting | We craft comprehensive brand strategies and consulting services that define your market position, voice, and visual identity. From startups to enterprises, we build brands that resonate. | Brand Audit, Positioning, Messaging, Guidelines | `/services/strategy-consulting` |
| Creative | 02 | Creative Development | Bold, memorable creative solutions that capture attention and communicate your brand essence across every touchpoint and medium. | Concepting, Art Direction, Copywriting, Content Strategy | `/services/creative-development` |
| Production | 03 | Production Services | Full-spectrum production capabilities from concept to delivery, including photography, videography, and motion graphics. | Video Production, Photography, Motion Design, Post-Production | `/services/production-services` |
| Experience | 04 | Brand Experience & Innovation | Immersive brand experiences and innovative solutions that bring your brand to life and create unforgettable moments. | Experiential Design, Brand Activation, Innovation Strategy, User Experience | `/services/brand-experience` |
| Digital | 05 | Digital & Marketing Execution | Strategic digital marketing and execution that transforms brands into performant, accessible, and scalable digital products. | Digital Marketing, Social Media, Performance Marketing, Analytics | `/services/digital-marketing` |

#### BOTTOM CTA
| Element | Content | Location ID |
|---------|---------|-------------|
| Heading | "Ready to start?" | SERVICES_READY_HEADING |
| Description | "Let's discuss your project and see how we can help bring your vision to life." | SERVICES_READY_DESC |
| Button | "Get in Touch" | SERVICES_READY_CTA |
| Links to | `/contact` | SERVICES_READY_LINK |

---

### ABOUT PAGE (`/about`)

#### PAGE HEADER
| Element | Content | Location ID |
|---------|---------|-------------|
| Main Heading | "About" | ABOUT_HEADING_PT1 |
| Accent Word | "Us" | ABOUT_HEADING_PT2 |

#### INTRODUCTION SECTION
| Element | Content | Location ID |
|---------|---------|-------------|
| Main Copy (Left) | "Grittyflint is a next-gen brand experience agency that blends creative brilliance with cutting-edge tech." | ABOUT_INTRO_MAIN |
| Body Paragraph 1 (Right) | "We develop, design and craft marketing and advertising solutions through visual storytelling and bold brand communication. Helping brands carve out unique spaces in a constantly shifting marketplace. For almost a decade, we've been delivering hype-worthy, brand-aligned 360 campaigns, marketing strategy and video productions for global powerhouses like Dabur, Shalina Healthcare, Reckitt Benckiser, Netflix, MTN, Cadbury, and Hollandia." | ABOUT_BODY_P1 |
| Body Paragraph 2 (Right) | "Step into a space where creativity flows endlessly, and experience the journey with a team of forward-thinking, innovative and solution-driven minds." | ABOUT_BODY_P2 |

#### STATS SECTION
| Stat | Value | Label | Location ID |
|------|-------|-------|-------------|
| 1 | 150+ | Projects Completed | ABOUT_STAT_PROJECTS |
| 2 | 12 | Years Experience | ABOUT_STAT_YEARS |
| 3 | 40+ | Team Members | ABOUT_STAT_TEAM |
| 4 | 25 | Awards Won | ABOUT_STAT_AWARDS |

#### TEAM SECTION
| Heading | Content | Location ID |
|---------|---------|-------------|
| Section Title | "The Team" | ABOUT_TEAM_TITLE |

#### TEAM MEMBERS (4)
| Name | Role | Image | Location ID |
|------|------|-------|-------------|
| Alex Chen | Creative Director | `/creative-director-headshot.png` | ABOUT_TEAM_01 |
| Sarah Miller | Design Lead | `/professional-headshot-designer-woman.jpg` | ABOUT_TEAM_02 |
| Marcus Johnson | Tech Lead | `/professional-headshot-developer-man.jpg` | ABOUT_TEAM_03 |
| Emma Wilson | Strategy Director | `/professional-headshot-strategist-woman.jpg` | ABOUT_TEAM_04 |

#### VALUES SECTION
| Value | Title | Description | Location ID |
|-------|-------|-------------|-------------|
| 1 | Bold | We take risks and push boundaries. Safe design is forgettable design. | ABOUT_VALUE_BOLD |
| 2 | Honest | We tell it like it is. Transparency builds trust and better work. | ABOUT_VALUE_HONEST |
| 3 | Relentless | We don't stop until it's right. Good enough is never good enough. | ABOUT_VALUE_RELENTLESS |

---

### CONTACT PAGE (`/contact`)

#### PAGE HEADER
| Element | Content | Location ID |
|---------|---------|-------------|
| Main Heading | "Let's" | CONTACT_HEADING_PT1 |
| Accent Word | "Talk" | CONTACT_HEADING_PT2 |
| Description | "Have a project in mind? We'd love to hear about it. Fill out the form below and we'll get back to you within 24 hours." | CONTACT_DESCRIPTION |

#### CONTACT FORM
| Field | Label | Placeholder | Type | Required | Location ID |
|-------|-------|-------------|------|----------|-------------|
| 1 | "Name *" | "John Doe" | Text | Yes | CONTACT_FORM_NAME |
| 2 | "Email *" | "john@company.com" | Email | Yes | CONTACT_FORM_EMAIL |
| 3 | "Company" | "Company Inc." | Text | No | CONTACT_FORM_COMPANY |
| 4 | "Budget Range" | "Select budget" | Select | No | CONTACT_FORM_BUDGET |
| 5 | "Tell us about your project *" | "Describe your project, goals, and timeline..." | Textarea | Yes | CONTACT_FORM_MESSAGE |
| Button | "Send Message" | - | Button | - | CONTACT_FORM_SUBMIT |

#### BUDGET OPTIONS
- $10k - $25k
- $25k - $50k
- $50k - $100k
- $100k+

#### CONTACT INFO SECTION (Right Side)
| Element | Content | Icon | Location ID |
|---------|---------|------|-------------|
| Section Title | "Contact Info" | - | CONTACT_INFO_TITLE |
| Email Link | hello@superdesign.co | Mail Icon | CONTACT_EMAIL |
| Phone Link | +1 (234) 567-890 | Phone Icon | CONTACT_PHONE |
| Location | New York, NY | Map Pin Icon | CONTACT_LOCATION |

#### OFFICE SECTION
| Element | Content | Location ID |
|---------|---------|-------------|
| Section Title | "Office" | CONTACT_OFFICE_TITLE |
| Address Line 1 | "123 Design Street" | CONTACT_OFFICE_ADDR1 |
| Address Line 2 | "Suite 456" | CONTACT_OFFICE_ADDR2 |
| Address Line 3 | "New York, NY 10001" | CONTACT_OFFICE_ADDR3 |

#### QUICK RESPONSE BOX
| Element | Content | Location ID |
|---------|---------|-------------|
| Section Title | "Quick Response" | CONTACT_QUICK_TITLE |
| Message | "We typically respond within 24 hours. For urgent inquiries, feel free to call us directly." | CONTACT_QUICK_MSG |

---

### BLOG PAGE (`/blog`)

#### PAGE HEADER
| Element | Content | Location ID |
|---------|---------|-------------|
| Main Heading | "Stories" | BLOG_HEADING_PT1 |
| Accent Word | "& Insights" | BLOG_HEADING_PT2 |
| Description | "Thoughts on design, strategy, culture, and the work that moves brands forward." | BLOG_DESCRIPTION |

#### BLOG GRID
| Element | Content | Location ID |
|---------|---------|-------------|
| Layout | 3-column responsive grid | BLOG_GRID_LAYOUT |
| Data Source | Supabase `posts` table (dynamic) | BLOG_DATA_SOURCE |

---

### ADMIN PAGES

#### ADMIN DASHBOARD (`/admin`)
| Element | Content | Location ID |
|---------|---------|-------------|
| Page Title | "Admin Dashboard" | ADMIN_TITLE |
| Subtitle | "Manage your blog posts" | ADMIN_SUBTITLE |
| Button | "Logout" | ADMIN_LOGOUT |
| Create Button | "New Post" | ADMIN_NEW_POST |
| Loading Text | "Loading posts..." | ADMIN_LOADING |
| Empty State Text | "No posts yet" | ADMIN_EMPTY |
| Empty State CTA | "Create your first post" | ADMIN_EMPTY_CTA |
| Table Headers | Title, Category, Status, Date, Actions | ADMIN_TABLE_HEADERS |
| Status Draft | "Draft" | ADMIN_STATUS_DRAFT |
| Status Published | "Published" | ADMIN_STATUS_PUBLISHED |

#### ADMIN NEW POST (`/admin/new`)
| Element | Content | Location ID |
|---------|---------|-------------|
| Page Title | "Create New Post" | ADMIN_NEW_TITLE |
| Form Fields | (See blog schema in lib/blog.ts) | ADMIN_NEW_FORM |

---

## 4. FUNCTIONAL COMPONENTS

### Contact Dropdown Modal (Header/Footer CTA)

#### Modal Header
| Element | Content | Location ID |
|---------|---------|-------------|
| Heading | "Let's Work on the Next Big Idea" | MODAL_HEADING |
| Description | "Big ideas start with a conversation. Tell us what you're building — and let's shape what's next." | MODAL_DESCRIPTION |
| Close Button | X Icon | MODAL_CLOSE |

#### Contact Form Fields
| Field | Label | Placeholder | Type | Required | Location ID |
|-------|-------|-------------|------|----------|-------------|
| 1 | "Name *" | "Your name" | Text | Yes | MODAL_FORM_NAME |
| 2 | "Email *" | "your@email.com" | Email | Yes | MODAL_FORM_EMAIL |
| 3 | "Message *" | "Tell us about your project..." | Textarea | Yes | MODAL_FORM_MESSAGE |
| Button | "Send" | - | Button | - | MODAL_FORM_SUBMIT |
| Honeypot | (hidden) | - | Text | No | MODAL_HONEYPOT |

#### Success State
| Element | Content | Location ID |
|---------|---------|-------------|
| Icon | CheckCircle | MODAL_SUCCESS_ICON |
| Heading | "Thank You" | MODAL_SUCCESS_HEADING |
| Message | "Thank you. Our team will be in touch shortly." | MODAL_SUCCESS_MSG |
| Button | "Close" | MODAL_SUCCESS_CLOSE |

#### Error State
| Element | Content | Location ID |
|---------|---------|-------------|
| Icon | AlertCircle | MODAL_ERROR_ICON |
| Heading | "Something Went Wrong" | MODAL_ERROR_HEADING |
| Message | "Something went wrong. Please try again." | MODAL_ERROR_MSG |
| Button | "Try Again" | MODAL_ERROR_RETRY |

#### Validation Messages
| Field | Error Message | Location ID |
|-------|---------------|-------------|
| Name | "Name is required" | MODAL_VALID_NAME |
| Email (Empty) | "Email is required" | MODAL_VALID_EMAIL_EMPTY |
| Email (Invalid) | "Please enter a valid email" | MODAL_VALID_EMAIL_FORMAT |
| Message | "Message is required" | MODAL_VALID_MESSAGE |

---

## 5. EXTERNAL LINKS & REDIRECTS

| Link Text | URL | Context | Location |
|-----------|-----|---------|----------|
| Work | `/work` | Navigation |Header/Mobile Menu |
| Services | `/services` | Navigation | Header/Mobile Menu |
| About | `/about` | Navigation | Header/Mobile Menu |
| Contact | `/contact` | Navigation | Header/Mobile Menu |
| Twitter | https://x.com/grittyflint | Social | Header/Footer/Mobile |
| Instagram | https://www.instagram.com/grittyflint/ | Social | Header/Footer/Mobile |
| LinkedIn | https://www.linkedin.com/company/grittyflint/ | Social | Header/Footer/Mobile |
| Strategy Service | `/services/strategy-consulting` | Service Detail | Services Page |
| Creative Service | `/services/creative-development` | Service Detail | Services Page |
| Production Service | `/services/production-services` | Service Detail | Services Page |
| Brand Experience Service | `/services/brand-experience` | Service Detail | Services Page |
| Digital Marketing Service | `/services/digital-marketing` | Service Detail | Services Page |
| Blog Home | `/blog` | Blog | Homepage/Footer |

---

## 6. DATABASE SCHEMA (BLOG/ADMIN)

### Posts Table (Supabase)
| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary Key |
| title | Text | Post Title |
| slug | Text | URL-friendly slug (unique) |
| excerpt | Text | Short description |
| content | Text | HTML/Markdown content |
| featured_image | Text | Image URL |
| category | Text | Post category |
| author | Text | Author name |
| published_at | Timestamp | Publish date |
| created_at | Timestamp | Creation date |
| updated_at | Timestamp | Last update date |
| user_id | UUID | Foreign key to auth.users |
| is_published | Boolean | Publish status |

---

## 7. ENVIRONMENT VARIABLES REQUIRED

| Variable | Value | Purpose |
|----------|-------|---------|
| NEXT_PUBLIC_SUPABASE_URL | (Supabase Project URL) | Supabase Connection |
| NEXT_PUBLIC_SUPABASE_ANON_KEY | (Supabase Anon Key) | Supabase Auth |
| FORMSPREE_ENDPOINT | https://formspree.io/f/xwvreekr | Contact Form Email Delivery |

---

## 8. NAVIGATION HIERARCHY

```
HOME (/)
├── Work (/work)
├── Services (/services)
│   ├── Strategy & Consulting (/services/strategy-consulting)
│   ├── Creative Development (/services/creative-development)
│   ├── Production Services (/services/production-services)
│   ├── Brand Experience (/services/brand-experience)
│   └── Digital & Marketing (/services/digital-marketing)
├── About (/about)
├── Contact (/contact)
├── Blog (/blog)
│   └── [Post Slug] (/blog/[slug])
└── Admin (/admin)
    ├── New Post (/admin/new)
    ├── Edit Post (/admin/edit/[id])
    └── Auth
        ├── Login (/auth/login)
        ├── Sign Up (/auth/sign-up)
        └── Error (/auth/error)
```

---

## MIGRATION NOTES

1. **All copy is exact** - Use location IDs when referring to content updates
2. **Images are generated** - Work section images are AI-generated; replace if upgrading design
3. **Dynamic content** - Blog posts are Supabase-driven; existing data will transfer
4. **Contact handling** - Uses Formspree for email delivery; no backend changes needed
5. **Social URLs** - All hardcoded; update if company changes handles
6. **Admin access** - Requires Supabase auth setup for dashboard access

---

**Document Generated:** April 6, 2026
**Version:** 1.0
**Last Updated:** Latest v0 version
