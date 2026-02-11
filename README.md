# FareHow

A comprehensive guide to understanding how to pay transit fares across different agencies. This website focuses on the practical aspects of fare payment - transfer policies, passback policies, payment methods, and more.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
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

Built with [Eleventy (11ty)](https://www.11ty.dev/) static site generator using front matter-driven content for structured transit fare data.

## Adding a New Transit Agency

Create a new markdown file in `src/agencies/` with front matter fields for payment methods and transfer policies. The agency list on the homepage is automatically generated from files in this directory.

## License

This project is licensed under the ISC License - see the LICENSE file for details.
