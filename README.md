<div align="center">
    <h1>trash-kit</h1>
    <h2>Trash Kit: React components and libraries for Trash services</h2>
</div>

<div align="center">
  <img alt="Stargazers" src="https://img.shields.io/github/stars/budchirp/trash-kit?style=for-the-badge&colorA=0b1221&colorB=ff8e8e" />
  <img alt="Last commit" src="https://img.shields.io/github/last-commit/budchirp/trash-kit?style=for-the-badge&colorA=0b1221&colorB=BDB0E4" />
  <img alt="Issues" src="https://img.shields.io/github/issues/budchirp/trash-kit?style=for-the-badge&colorA=0b1221&colorB=FBC19D" />
</div>

## Packages

| Package                          | Description                     |
| -------------------------------- | ------------------------------- |
| [`@trash-kit/ui`](./packages/ui) | Tailwind-first React components |
| [`example`](./example)           | Single-page component showcase  |

## Development

Install dependencies at the repository root:

```bash
npm install
npm --prefix example install
```

| Command                 | Description                      |
| ----------------------- | -------------------------------- |
| `npm run dev`           | Watch and rebuild the UI package |
| `npm run dev:example`   | Run the Vite showcase            |
| `npm run build`         | Build the UI package             |
| `npm run build:example` | Build the showcase               |
| `npm run typecheck`     | Typecheck the UI package         |
| `npm run check`         | Run Biome across the repository  |

The showcase imports the built package. Rebuild `@trash-kit/ui` after changing library source, or keep `npm run dev` running.

## Structure

```text
packages/ui/
  src/
    components/<name>/
      <name>.tsx
      types.ts
      <name>.style.ts   # optional cva variants
      index.ts
    hooks/
    lib/
    style.css
    index.ts
example/
  src/
    app.tsx
    main.tsx
    index.css
  index.html
  vite.config.ts
```
