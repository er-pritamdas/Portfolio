# Pritam Das - Personal Portfolio

A premium, modern, and interactive personal portfolio website built with React, Vite, Tailwind CSS, and Three.js.

## Features
- **Modern UI/UX**: Glassmorphism, dark theme, and smooth animations.
- **3D Interactions**: Interactive particle background using Three.js.
- **Responsive Design**: Fully responsive for all devices.
- **Performance**: Optimized with Vite and lazy loading.

## Preview : [Portfolio](https://portfolio-puce-phi-a8189zd8da.vercel.app/)

![Full Website Preview](public/portfolio_SS/FUllWebPage_SS.png)

### Section Highlights

| | |
|:-------------------------:|:-------------------------:|
| ![Screenshot 1](public/portfolio_SS/Screenshot%20from%202025-11-29%2008-54-57.png) | ![Screenshot 2](public/portfolio_SS/Screenshot%20from%202025-11-29%2011-11-48.png) |
| ![Screenshot 3](public/portfolio_SS/Screenshot%20from%202025-11-29%2011-12-12.png) | ![Screenshot 4](public/portfolio_SS/Screenshot%20from%202025-11-29%2011-12-18.png) |
| ![Screenshot 5](public/portfolio_SS/Screenshot%20from%202025-11-29%2011-12-31.png) | ![Screenshot 6](public/portfolio_SS/Screenshot%20from%202025-11-29%2011-12-44.png) |
| ![Screenshot 7](public/portfolio_SS/Screenshot%20from%202025-11-29%2011-12-59.png) | ![Screenshot 8](public/portfolio_SS/Screenshot%20from%202025-11-29%2011-13-05.png) |
| ![Screenshot 9](public/portfolio_SS/Screenshot%20from%202025-11-29%2011-13-18.png) | ![Screenshot 10](public/portfolio_SS/Screenshot%20from%202025-11-29%2011-13-23.png) |
| ![Screenshot 11](public/portfolio_SS/Screenshot%20from%202025-11-29%2011-13-34.png) | ![Screenshot 12](public/portfolio_SS/Screenshot%20from%202025-11-29%2011-13-38.png) |
| ![Screenshot 13](public/portfolio_SS/Screenshot%20from%202025-11-29%2011-13-48.png) | ![Screenshot 14](public/portfolio_SS/Screenshot%20from%202025-11-29%2011-13-53.png) |

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
