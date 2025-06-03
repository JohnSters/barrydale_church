# Barrydale Christian Fellowship

Welcome to the official website of Barrydale Christian Fellowship. This website serves as a digital home for our church community, providing information about our services, beliefs, and ministries.

## Features

- **Home Page**: Welcome message, service times, and core beliefs
- **Church History**: Learn about our rich heritage and journey as a church
- **Statement of Faith**: Explore what we believe as a Christian community
- **Contact Information**: Get in touch with our church leadership

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm (v7 or later) or Yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/JohnSters/barrydale-church.git
   cd barrydale-church
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start the development server with hot module replacement:

```bash
npm run dev
```

### Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
├── public/           # Static files (images, documents, etc.)
├── src/
│   ├── components/   # Reusable UI components
│   ├── routes/       # Page components and routing
│   ├── entry.*.tsx   # Entry points for different environments
│   ├── root.tsx      # Root component
│   └── global.css    # Global styles
├── .gitignore
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Deployment

This website is built with Qwik and can be deployed to various platforms:

- **Vercel**: For edge deployment
- **Netlify**: For edge functions
- **Cloudflare Pages**: For edge deployment
- **Static hosting**: Generate static files with `npm run generate`

## Contributing

If you'd like to contribute to the website, please fork the repository and create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or support, please contact the church administration.

## Development

Development mode uses [Vite's development server](https://vitejs.dev/). The `dev` command will server-side render (SSR) the output during development.

```shell
npm start # or `yarn start`
```

> Note: during dev mode, Vite may request a significant number of `.js` files. This does not represent a Qwik production build.

## Preview

The preview command will create a production build of the client modules, a production build of `src/entry.preview.tsx`, and run a local server. The preview server is only for convenience to preview a production build locally and should not be used as a production server.

```shell
npm run preview # or `yarn preview`
```

## Production

The production build will generate client and server modules by running both client and server build commands. The build command will use Typescript to run a type check on the source code.

```shell
npm run build # or `yarn build`
```
