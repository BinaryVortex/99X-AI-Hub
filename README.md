![Your Image](https://drive.google.com/uc?export=view&id=1bQbsGnsEQhjvxv8HuHHw0VWiW0wfuhzu)

# 99X Agent Studio - Next.js Dashboard

A modern, responsive dashboard application for agent management built with Next.js, featuring a beautiful blue-themed UI design. This project provides a comprehensive interface for managing agents, monitoring metrics, and team collaboration.

## 🚀 Features

- **Agent Management**: View and manage AI agents with detailed information
- **Metrics Dashboard**: Real-time monitoring and analytics
- **Team Collaboration**: User management and team insights
- **Responsive Design**: Modern UI with consistent blue theme (`rgba(13, 144, 178)`)
- **TypeScript Support**: Full type safety throughout the application
- **Component Library**: Built with Radix UI and Tailwind CSS

## 🛠️ Tech Stack

- **Framework**: Next.js 15.1.6 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Charts**: Recharts
- **Icons**: Lucide React

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.0 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

You can check your Node.js version with:
```bash
node --version
npm --version
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/DisanduP/99X-Agent-Studio-NextJS.git
cd 99x-Agent-Studio-Mint-Theme-master
```

### 2. Install Dependencies

```bash
npm install
```

This will install all the required dependencies including Next.js, React, TypeScript, Tailwind CSS, and other UI libraries.

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### 4. Build for Production

```bash
npm run build
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## 📁 Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router directory
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   ├── globals.css        # Global styles
│   │   ├── components/        # Reusable UI components
│   │   │   ├── ui/           # Base UI components (buttons, inputs, etc.)
│   │   │   ├── Sidebar.tsx    # Navigation sidebar
│   │   │   └── ...
│   │   ├── pages/            # Page components
│   │   │   ├── Dashboard.tsx  # Main dashboard
│   │   │   ├── Agents.tsx     # Agents management
│   │   │   ├── Team.tsx       # Team management
│   │   │   ├── Metrics.tsx    # Metrics and analytics
│   │   │   └── AgentDetail.tsx # Agent details
│   │   └── data/             # Mock data and types
│   │       ├── mockData.ts    # Sample data
│   │       └── types.ts       # TypeScript type definitions
│   └── styles/               # Styling files
│       ├── index.css         # Main CSS file
│       ├── tailwind.css      # Tailwind CSS imports
│       ├── theme.css         # Theme variables
│       └── fonts.css         # Font definitions
├── public/                   # Static assets
├── package.json              # Dependencies and scripts
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── next.config.mjs           # Next.js configuration
└── postcss.config.mjs        # PostCSS configuration
```

## 🎨 Customization

### Color Theme

The application uses a consistent blue color scheme defined as `rgba(13, 144, 178)`. You can customize the theme by modifying the CSS variables in `src/styles/theme.css`.

### Adding New Pages

1. Create a new page component in `src/app/pages/`
2. Add the route in the appropriate location (if using App Router)
3. Update the sidebar navigation in `src/app/components/Sidebar.tsx`

### UI Components

The project uses Radix UI primitives with Tailwind CSS. All components are located in `src/app/components/ui/` and can be customized or extended as needed.

## 📱 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is based on the original Figma design available at: https://www.figma.com/design/HrFcOfHssLG0RwpJT7W0IQ/Design-99x-Agent-Studio

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/DisanduP/99X-Agent-Studio-NextJS/issues) page
2. Create a new issue with detailed information about your problem
3. Include your Node.js version, npm version, and any error messages

---

**Happy coding! 🚀**
  
