# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Testing with Vitest

This project uses **Vitest** for unit/component testing and **React Testing Library** for DOM assertions.

### Why the project config matters

- `vite.config.js` includes a `test` block because Vitest reads Vite config directly.
- `environment: 'jsdom'` is required so React component tests can run in a browser-like DOM.
- `setupFiles: './src/tests/setup.js'` ensures global test setup runs before each test file.
- `globals: true` enables `describe`, `it`, and `expect` globally.

### Test commands

- `npm run test` runs Vitest in interactive mode.
- `npm run test:watch` runs tests in watch mode.
- `npm run test:run` runs tests once (good for CI).

### Test process used in this repo

1. Put shared setup in `src/tests/setup.js` (for example, jest-dom matchers and cleanup).
2. Create test files next to components, for example `src/components/Trainer.test.jsx`.
3. Follow Arrange -> Act -> Assert style and validate user-visible behavior.
