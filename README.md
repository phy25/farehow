# FareHow

A comprehensive guide to understanding how to pay transit fares across different agencies. This website focuses on the practical aspects of fare payment - transfer policies, passback policies, payment methods, and more.

## Features

- Built with [Eleventy (11ty)](https://www.11ty.dev/) static site generator
- Front matter-driven content for structured transit fare data
- Responsive design with clean, modern UI
- Support for documenting:
  - Open loop payment support
  - QR code payment support
  - Cash payment support
  - Open loop passback policies
  - Transfer time limits

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm

### Installation

```bash
npm install
```

### Development

Start the development server with live reload:

```bash
npm start
```

The site will be available at `http://localhost:8080/`

### Build

Build the static site for production:

```bash
npm run build
```

The built site will be in the `_site/` directory.

## Project Structure

```
farehow/
├── src/
│   ├── _layouts/          # Layout templates
│   │   ├── base.njk       # Base HTML layout
│   │   └── agency.njk     # Agency page layout
│   ├── agencies/          # Transit agency pages
│   │   ├── mbta.md        # MBTA information
│   │   ├── mta-nyct.md    # MTA-NYCT information
│   │   └── mta-rr.md      # MTA-RR information
│   ├── css/               # Stylesheets
│   │   └── style.css
│   └── index.njk          # Homepage
├── _site/                 # Built site (generated)
├── .eleventy.js           # Eleventy configuration
└── package.json
```

## Adding a New Transit Agency

To add a new transit agency page:

1. Create a new markdown file in `src/agencies/` (e.g., `agency-name.md`)
2. Add front matter with the following fields:

```yaml
---
layout: agency.njk
title: Agency Name - Full Description
support_openloop: true/false
support_qrcode: true/false
support_cash: true/false
support_openloop_passback: true/false
transfer_limit_duration_min: number (use 0 for no transfer limit)
---
```

3. Add content about the agency in markdown format below the front matter
4. Update the navigation in `src/_layouts/base.njk` to include the new agency
5. Update the agency list in `src/index.njk`

## License

ISC