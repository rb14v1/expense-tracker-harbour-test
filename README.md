# golden-spa

Harbour's scaffold for generated React single-page apps. Restored from the
`templates/react-minimal` template, which had to leave `templates/` because Harbour's own
`tsc --noEmit` was compiling its `.tsx` files. `tsconfig.json` excludes `blueprints`, so it lives
here instead.

Scaffolded into every `IDEA` submission before the generation agents run. The agents overwrite
`src/App.tsx` and `src/index.css`, add `dependencies` to `package.json` from a curated allowlist
(`lib/agents/dependency-allowlist.ts`), and add `src/types.ts`, `src/store.ts`, `src/data/seed.ts`,
`src/components/` and `src/pages/`.

There is deliberately no `src/hooks/`. All shared state lives in the generated `src/store.ts`; a
per-component hook holds its own `useState` copy that no other page can see, and both the generator
and the fixer delete any file created under `src/hooks/`, `src/store/`, `src/context/` or
`src/state/`.

## What this blueprint owns

| File | Why it must come from here |
|---|---|
| `src/main.tsx` | Entry point. The generator never writes it. |
| `vite.config.ts` | The generator's prompt assumes it already exists. |
| `tsconfig.json` | What `npx tsc --noEmit` reads in the wiring gate and the fixer loop. |

`tailwind.config.js` and `postcss.config.js` are here so a bare scaffold builds on its own; the
generator overwrites both with identical content.

## No Dockerfile, and no workflow

Both deliberate, and neither is in this directory. The BUILD stage generates the Dockerfile
(`worker/executors/build.ts`, setup phase) and the workflow (`lib/agents/workflow-agent.ts`), so
INGEST ships neither. An earlier version of this file claimed `.github/workflows/harbour-build.yml`
was kept here; it is not, and has not been for some time.

## Local use

```bash
npm install
npm run dev      # vite dev server on 5173
npm run build    # tsc --noEmit && vite build
```
