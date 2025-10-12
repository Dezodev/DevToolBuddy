# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DevToolBuddy is a Tauri-based desktop application that provides developer tools. The application is built with:
- **Frontend**: React + TypeScript + Mantine UI v8
- **Backend**: Rust with Tauri v2
- **Build Tool**: Vite
- **Icons**: Material Symbols (outlined variant)
- **Locale**: French (fr) for dates and UI

### Documentation

- **Mantine v8**: LLM-optimized documentation available at https://mantine.dev/llms.txt

## Development Commands

```bash
# Frontend development (Vite only)
npm run dev

# Full application development (Tauri + Vite)
npm run tauri dev

# Build frontend
npm run build

# Build full application
npm run tauri build

# Format code
npm run format
```

## Architecture

### Application Structure

The app uses a centralized routing and navigation configuration in `src/App.tsx`:

1. **Routes array**: Defines all application routes with their corresponding page components
2. **menuItems array**: Defines the sidebar navigation structure organized by tool categories
3. **AppShell layout**: Mantine's AppShell with header (60px) and collapsible navbar (250px)

### Adding New Tools

To add a new tool page, update `src/App.tsx`:

1. Import the new page component
2. Add a route entry to the `routes` array with path and element
3. Add a menu item to the appropriate section in `menuItems` array (or create a new section)
   - Each section has: `label`, `icon` (Material Symbol name), and `items` array
   - Each item has: `label`, `path`, and `icon`

**Important**: Tool categories should be ordered logically in the `menuItems` array (currently: Text tools first, then Date tools).

### Frontend Architecture

- **Entry point**: `src/main.tsx` sets up React with providers:
  - `MantineProvider` with auto color scheme
  - `DatesProvider` with French locale
  - `BrowserRouter` for routing

- **Layout components**: Located in `src/components/layout/`
  - `AppHeader`: Top header with theme toggle and menu burger
  - `AppNavbar`: Sidebar navigation that consumes `menuItems` prop

- **Shared components**: Located in `src/components/`
  - `MaterialIcon`: Wrapper for Material Symbols icons
  - `CopyButton`: Reusable copy-to-clipboard button with visual feedback

- **Pages**: Located in `src/pages/`
  - Each tool is a self-contained page component
  - Follow the pattern: Title + description, Paper with form inputs, real-time conversion results with CopyButton

### Styling

- Uses Mantine v8 CSS modules and component props
- Custom styles in `App.css`
- Prettier configuration in `.prettierrc`:
  - 4 spaces indentation
  - Single quotes
  - No semicolons
  - 100 character line width

### Backend

The Rust backend (`src-tauri/`) is minimal and uses the standard Tauri setup:
- `main.rs`: Entry point
- `lib.rs`: Tauri builder with plugins (currently only `tauri_plugin_opener`)

## Code Patterns

### Tool Page Pattern

Tool pages typically follow this structure:
- Use `@mantine/form` for form state management
- Use `useState` for results
- Implement conversion logic in dedicated functions
- Display results in a `Paper` component with `CopyButton`
- Use lodash for text manipulation utilities where appropriate

### Material Icons

Use Material Symbols with the `MaterialIcon` component:
```tsx
<MaterialIcon icon="icon_name" size={20} />
```

Icons should match the tool's purpose semantically.
