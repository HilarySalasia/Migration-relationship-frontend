# Migration-relationship-frontend

An interactive React + TypeScript frontend for visualizing **package and function relationships** as a hierarchical tree.  
It renders a D3-powered diagram showing how procedures/functions relate to each other across packages, with basic controls and a legend to help you explore the structure.

## Features

- **Interactive hierarchy chart**: Displays a tree of packages and their internal/external functions.
- **D3-based visualization**: Smooth layout, curved links, grid background, and zoom/pan support.
- **Legend**: Color-coded node types:
  - Package (root/parent nodes)
  - Internal functions
  - External functions
- **UI shell**:
  - Header with title and description.
  - Controls bar with icons for zoom in, zoom out, and reset (via `lucide-react` icons).
  - Large scrollable area for the chart.

## Tech Stack

- **Build tool**: Vite
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Visualization**: D3 v7
- **Icons**: `lucide-react`
- **Linting**: ESLint (TypeScript + React hooks)

## Getting Started

### Prerequisites

- **Node.js**: v18+ recommended
- **npm**, **pnpm**, or **yarn** (examples below use `npm`)

### Installation

From the project root:

```bash
npm install
```

If you prefer pnpm:

```bash
pnpm install
```

### Running the development server

```bash
npm run dev
```

Then open the URL that Vite prints in the terminal (by default `http://localhost:5173`).

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Available Scripts (from `package.json`)

- **`npm run dev`**: Start the Vite development server.
- **`npm run build`**: Build the app for production.
- **`npm run preview`**: Preview the production build locally.
- **`npm run lint`**: Run ESLint on the project.

## Project Structure

Key files and directories:

- `index.html` – Root HTML template for Vite.
- `src/main.tsx` – React entry point mounting the app.
- `src/App.tsx` – Main application component and layout (header, controls, chart container).
- `src/components/HierarchyChart.tsx` – D3-powered tree chart component.
- `src/types.ts` – TypeScript interfaces describing the hierarchy data model.
- `src/index.css` – Tailwind CSS entry (base, components, utilities).
- `tailwind.config.js` / `postcss.config.js` – Tailwind/PostCSS configuration.
- `vite.config.ts` – Vite configuration.

## Data Model

The application visualizes an array of `HierarchyData` items, defined in `src/types.ts`:

```ts
export interface ExternalFunction {
  calledPackageName: string;
  calledFunctionName: string;
  packagesProcedureId: number | null;
  externalHierarchy?: ExternalHierarchy;
}

export interface ExternalHierarchy {
  packageName: string;
  procedureFunctionName: string;
  owner: string;
  externalFunctionsDtos?: ExternalFunction[];
}

export interface InternalFunction {
  calledFunctionName: string | null;
}

export interface HierarchyData {
  packageName: string;
  procedureFunctionName: string;
  internalFunctionsDtos?: InternalFunction[];
  externalFunctionsDtos?: ExternalFunction[];
  externalUnknownFunctionsDtos?: ExternalFunction[];
}
```

- Each **`HierarchyData`** entry represents a procedure/function within a package.
- **Internal functions** (`internalFunctionsDtos`) denote relationships to other functions within the same package.
- **External functions** (`externalFunctionsDtos` and `externalUnknownFunctionsDtos`) denote calls into other packages or unknown targets.

In the current implementation, sample data is initialized directly in `src/App.tsx` via React state. The `HierarchyChart` component converts this array into a D3 hierarchy and renders:

- A root node (`"Root"`)
- One child per `procedureFunctionName`
- Grandchildren for internal and external functions, color-coded by type

## Using and Customizing the Chart

Once the dev server is running:

- **Pan & zoom**: Use your mouse or trackpad (D3 zoom behavior is attached to the SVG).
- **Inspect nodes**:
  - Hover over a node to see a subtle size change.
  - Labels show the function/procedure name, and when available, the package name.
- **Legend**: Use the legend panel to understand the meaning of each node color.

To plug in real backend data, you can:

1. Replace the hard-coded `useState<HierarchyData[]>` initialization in `src/App.tsx` with data fetched from your API.
2. Ensure the API returns an array matching the `HierarchyData` structure shown above.

## Notes

- This README describes the **frontend** only; any backend or data source is expected to be provided separately.
- If you change the data structure, update `src/types.ts` and adjust `HierarchyChart.tsx` accordingly.
