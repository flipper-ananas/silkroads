# Architecture

## Stack

| Couche | Technologie | Version |
|--------|-------------|---------|
| Framework | Next.js | 16.2.4 |
| Langage | TypeScript | 5.x |
| UI | React | 19.x |
| Styles | Tailwind CSS | 4.x |
| Fonts | Geist Sans / Geist Mono | via `next/font/google` |

## Structure des dossiers

```
silkroads/
├── src/
│   ├── app/                    # App Router Next.js
│   │   ├── layout.tsx          # Layout racine (fonts, metadata globale)
│   │   ├── page.tsx            # Page d'accueil (/)
│   │   └── globals.css         # CSS global + variables Tailwind v4
│   └── components/
│       ├── ui/                 # Design system — composants atomiques
│       │   ├── Button.tsx
│       │   ├── Card.tsx
│       │   ├── Container.tsx
│       │   ├── Typography.tsx
│       │   └── index.ts        # Barrel export
│       └── Feature-*.tsx       # Composants de features (un par ticket)
├── docs/                       # Documentation projet
├── .github/
│   └── workflows/
│       ├── ai-code-generator.yml   # Génération de code via Claude (label ai-generate)
│       └── ai-design-generator.yml # Génération de prompt v0.dev (label ai-generate)
├── tailwind.config.ts          # Tokens du design system
├── next.config.ts
└── package.json
```

## Choix techniques

### App Router
Toutes les pages utilisent l'App Router (`src/app/`). Pas de `pages/` directory.  
Les layouts sont imbriqués via `layout.tsx`. Les métadonnées sont exportées via `export const metadata`.

### Tailwind CSS v4
La version 4 change la façon dont Tailwind est importé :
- `globals.css` utilise `@import "tailwindcss"` (pas `@tailwind base/components/utilities`)
- Les tokens custom (couleurs, fonts, shadows) sont définis dans `tailwind.config.ts` sous `theme.extend`
- Le plugin PostCSS est `@tailwindcss/postcss`

### Design system centralisé
Les couleurs brand, la typographie, les rayons et les ombres sont tous définis dans `tailwind.config.ts`.  
Les composants UI dans `src/components/ui/` consomment ces tokens — jamais de valeurs hardcodées.

### Génération IA
Deux workflows GitHub Actions se déclenchent quand une issue reçoit le label `ai-generate` :
- **ai-code-generator** : génère un composant `Feature-{N}.tsx` + met à jour `page.tsx` via l'API Claude
- **ai-design-generator** : génère un prompt v0.dev et le poste en commentaire de l'issue

### Alias d'import
L'alias `@/` pointe vers `src/`. Ex : `import { Button } from '@/components/ui'`.
