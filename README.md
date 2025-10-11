# DevToolBuddy

DevToolBuddy is a comprehensive software package designed to assist developers with a collection of handy tools. This all-in-one development companion provides a range of features and utilities to streamline the coding process and enhance productivity.

## 🚀 Tech Stack

- **Framework**: [Tauri](https://tauri.app/) - Build smaller, faster, and more secure desktop applications
- **Frontend**: [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **UI Library**: [Mantine v8](https://mantine.dev/) - Modern React component library
- **Build Tool**: [Vite](https://vitejs.dev/) - Next generation frontend tooling
- **Backend**: [Rust](https://www.rust-lang.org/) - Blazingly fast and memory-efficient

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Rust](https://www.rust-lang.org/) (v1.82 or higher)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/DevToolBuddy.git
cd DevToolBuddy
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run tauri dev
```

## 📦 Available Scripts

- `npm run dev` - Start Vite development server
- `npm run build` - Build the frontend for production
- `npm run tauri dev` - Start Tauri application in development mode
- `npm run tauri build` - Build the Tauri application for production

## 🔧 Development

### Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/)
- Extensions:
  - [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode)
  - [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Project Structure

```
DevToolBuddy/
├── src/                  # React frontend source
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Entry point with Mantine provider
│   └── App.css          # Custom styles
├── src-tauri/           # Rust backend source
│   ├── src/             # Rust source files
│   └── tauri.conf.json  # Tauri configuration
├── public/              # Static assets
└── package.json         # Node dependencies
```

## 🎨 Code Formatting

This project uses [Prettier](https://prettier.io/) for code formatting. Configuration is available in `.prettierrc`.

## 📝 License

This project is licensed under the MIT License.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🐛 Issues

If you encounter any issues or have suggestions, please [open an issue](https://github.com/yourusername/DevToolBuddy/issues).
