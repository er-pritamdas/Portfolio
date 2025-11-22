# Pritam Das - Personal Portfolio

A premium, modern, and interactive personal portfolio website built with React, Vite, Tailwind CSS, and Three.js.

## Features
- **Modern UI/UX**: Glassmorphism, dark theme, and smooth animations.
- **3D Interactions**: Interactive particle background using Three.js.
- **Responsive Design**: Fully responsive for all devices.
- **Performance**: Optimized with Vite and lazy loading.

## Tech Stack
- **Frontend**: React, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, Three.js (@react-three/fiber, @react-three/drei)
- **Icons**: Lucide React

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/er-pritamdas/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Deployment

### GitHub Pages
1. Update `vite.config.js` with your base URL:
   ```js
   export default defineConfig({
     base: '/portfolio/', // Replace with your repo name
     plugins: [react()],
   })
   ```
2. Run `npm run build`.
3. Deploy the `dist` folder.

### Vercel
1. Install Vercel CLI or connect your GitHub repo to Vercel.
2. It should automatically detect Vite and deploy.

## Customization
- Update `src/data/index.js` to change the content (Experience, Skills, Projects, etc.).
- Modify `src/components/3d/Background.jsx` to change the 3D effect.
