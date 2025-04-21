
# NextHero - React Application Starter

A modern React application starter inspired by Next.js, built with Vite, TypeScript, React Router, and Tailwind CSS.

## Features

- ⚡️ **Lightning Fast**: Built on Vite for incredibly fast development and optimized production builds
- 🔒 **Type Safe**: Full TypeScript support for better developer experience
- 📱 **Responsive**: Works perfectly on any device with a mobile-first approach
- 🌓 **Dark Mode**: Built-in dark mode with automatic detection of system preferences
- 🧩 **Component Library**: Pre-built UI components powered by shadcn-ui
- 🎨 **Styling**: Tailwind CSS for utility-first styling
- 📊 **Data Fetching**: Tanstack Query for efficient API handling
- 🧭 **Routing**: React Router for handling navigation
- 📁 **File Structure**: Organized file structure for better maintainability

## Getting Started

### Installation

```bash
# Clone the repository (or create a new repository based on this template)
git clone https://github.com/yourusername/nexthero.git
cd nexthero

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development

The development server will start on http://localhost:8080. The application will automatically reload if you make changes to the code.

### Build

To build the application for production:

```bash
npm run build
```

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
nexthero/
├── public/            # Static assets
├── src/
│   ├── components/    # Reusable UI components
│   │   ├── layout/    # Layout components (Navbar, Footer, etc.)
│   │   └── ui/        # UI components (Buttons, Cards, etc.)
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions and libraries
│   ├── pages/         # Page components
│   ├── App.tsx        # Main application component
│   ├── main.tsx       # Application entry point
│   └── index.css      # Global styles
├── index.html         # HTML template
└── ...                # Config files
```

## Technologies

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Tanstack Query](https://tanstack.com/query)
- [shadcn-ui](https://ui.shadcn.com/)
- [Lucide React](https://lucide.dev/) (Icons)

## License

This project is licensed under the MIT License.
