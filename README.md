# Studio Dance Class Tickets 💃🕺

A modern, responsive website for a dance studio featuring class schedules, ticket purchasing, instructor profiles, and studio information. Built with React, TypeScript, and Tailwind CSS with a stunning neon-themed dark UI.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.17-38B2AC?logo=tailwind-css)

## 🌐 Live Demo

**[View Live Demo →](https://studio-dance-class-tickets.vercel.app/)**

Experience the full website with all interactive features, animations, and responsive design.


## ✨ Features

### 🎯 Core Sections
- **Hero Section**: Eye-catching landing page with dynamic text effects and background imagery
- **About Us**: Studio information with statistics and mission statement
- **Dancers**: Showcase of professional instructors with hover effects and specialty tags
- **Schedule**: Interactive weekly class timetable with day-by-day navigation
- **Tickets**: Class package purchasing options with ticket-style design
- **Payment Methods**: Information about accepted payment options
- **General Rules**: Expandable accordion with studio policies and guidelines
- **Contact**: Contact form with studio location, phone, email, and social media links

### 🎨 Design Features
- **Neon Aesthetic**: Dark background with vibrant neon green (#ccff00) and neon red (#ff0033) accents
- **Smooth Animations**: Powered by Framer Motion for scroll-triggered and hover animations
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Hamburger Menu**: Mobile-friendly navigation that activates on screens < 1024px
- **Smooth Scrolling**: Anchor-based navigation with smooth scroll behavior

### 🛠️ Technical Highlights
- **Type-Safe**: Built with TypeScript for enhanced developer experience
- **Modern React**: Uses React 19.2.0 with functional components and hooks
- **Performance Optimized**: Vite for lightning-fast development and optimized builds
- **Accessible**: Semantic HTML and proper ARIA labels
- **SEO Ready**: Proper meta tags and heading structure

## 🚀 Technologies

### Frontend Framework
- **React** 19.2.0 - UI library
- **TypeScript** 5.9.3 - Type safety
- **Vite** 7.2.4 - Build tool and dev server

### Styling
- **Tailwind CSS** 4.1.17 - Utility-first CSS framework
- **PostCSS** 8.5.6 - CSS processing
- **Autoprefixer** 10.4.22 - CSS vendor prefixing

### Animation & UI
- **Framer Motion** 12.23.24 - Animation library
- **Lucide React** 0.554.0 - Icon library
- **clsx** 2.1.1 - Conditional className utility
- **tailwind-merge** 3.4.0 - Tailwind class merging

### Development Tools
- **ESLint** 9.39.1 - Code linting
- **TypeScript ESLint** 8.46.4 - TypeScript-specific linting rules

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/mutlukurt/studio-dance-class-tickets.git
   cd studio-dance-class-tickets
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🏗️ Build

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Lint Code
```bash
npm run lint
```

## 📁 Project Structure

```
studio-dance-class-tickets/
├── public/
│   ├── about/
│   │   └── studio.png
│   └── dancers/
│       ├── dancer1.png
│       ├── dancer2.png
│       ├── dancer3.png
│       └── dancer4.png
├── src/
│   ├── assets/
│   │   ├── dancer_portrait.png
│   │   └── hero_bg.png
│   ├── components/
│   │   ├── AboutUsSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── DancersSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── PaymentMethods.tsx
│   │   ├── RulesSection.tsx
│   │   ├── ScheduleSection.tsx
│   │   └── TicketSection.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Design System

### Color Palette
- **Neon Green**: `#ccff00` - Primary accent, highlights
- **Neon Red**: `#ff0033` - Secondary accent, CTAs
- **Dark Background**: `#0a0a0a` - Main background
- **Card Background**: `#1a1a1a` - Component backgrounds

### Typography
- **Display Font**: Oswald - Headers and titles
- **Body Font**: Inter - Body text and descriptions

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is licensed under the MIT License.

© 2025 Mutlu Kurt. Licensed under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

**Mutlu Kurt**
- GitHub: [@mutlukurt](https://github.com/mutlukurt)

## 🙏 Acknowledgments

- Design inspiration from modern dance studio websites
- Icons by [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
