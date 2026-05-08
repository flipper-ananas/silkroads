# Contributing

## Branches Git

### Nommage

| Type | Pattern | Exemple |
|------|---------|---------|
| Feature Linear | `feature/SLK-[NUMERO]` | `feature/SLK-42` |
| Bugfix | `fix/SLK-[NUMERO]` | `fix/SLK-17` |
| Hotfix prod | `hotfix/[description]` | `hotfix/auth-redirect` |

```bash
git checkout -b feature/SLK-42
```

### Branches permanentes

| Branche | Rôle |
|---------|------|
| `main` | Production — merge uniquement depuis `staging` |
| `staging` | Pré-production — cible des Pull Requests |

---

## Commits

### Format

```
type: description courte (SLK-[NUMERO])
```

### Types autorisés

| Type | Usage |
|------|-------|
| `feat` | Nouvelle fonctionnalité |
| `fix` | Correction de bug |
| `docs` | Documentation uniquement |
| `style` | Formatage, pas de changement logique |
| `refactor` | Refactoring sans ajout de feature ni fix |
| `chore` | Maintenance, mise à jour de dépendances |

### Exemples

```bash
git commit -m "feat: page d'accueil hero section (SLK-42)"
git commit -m "fix: alignement mobile du header (SLK-17)"
git commit -m "docs: ajout documentation design system"
git commit -m "refactor: extraction composant PricingCard (SLK-55)"
```

---

## Workflow par ticket Linear

```bash
# 1. Créer la branche depuis staging à jour
git checkout staging && git pull origin staging
git checkout -b feature/SLK-[NUMERO]

# 2. Développer et committer
git add src/components/MonComposant.tsx
git commit -m "feat: [titre du ticket] (SLK-[NUMERO])"

# 3. Pousser et ouvrir une PR vers staging
git push origin feature/SLK-[NUMERO]
gh pr create --base staging --title "feat: [titre du ticket] (SLK-[NUMERO])"
```

---

## Conventions de code

### TypeScript

- Interfaces pour les props de composants (pas de `type` pour les props)
- Pas de `any` — utiliser des types précis ou `unknown`
- Props optionnelles avec valeur par défaut dans la signature

```tsx
// Correct
interface CardProps {
  title: string
  description?: string
  hover?: boolean
}

export default function Card({ title, description = '', hover = false }: CardProps) { ... }
```

### Composants React

- Un composant par fichier
- Nom du fichier = nom du composant (PascalCase)
- `export default` pour les composants de page et de feature
- Export nommé pour les composants UI réutilisables

```
src/components/ui/Button.tsx        → export default function Button
src/components/Feature-42.tsx       → export default function Feature42
src/app/page.tsx                    → export default function Home
```

### Styles Tailwind

- Classes dans l'ordre : layout → spacing → colors → typography → effects
- Toujours mobile-first : classes de base pour mobile, préfixes `sm:` `md:` `lg:` pour les breakpoints supérieurs
- Extraire dans un composant si les classes se répètent 3 fois ou plus

```tsx
// Correct — mobile-first
<div className="flex flex-col gap-4 md:flex-row md:gap-8">

// Incorrect — pas de couleurs Tailwind génériques
<div className="text-gray-900 bg-blue-50">

// Correct — couleurs brand uniquement
<div className="text-brand-dark bg-brand-light">
```

### Imports

```tsx
// 1. React / Next.js
import { useState } from 'react'
import Link from 'next/link'

// 2. Composants internes
import { Button, Card, Container, H2, Body } from '@/components/ui'

// 3. Types
import type { Metadata } from 'next'
```

---

## Structure d'un composant de feature

Chaque ticket produit un fichier `src/components/Feature-[N].tsx` :

```tsx
// Pas de metadata ici — uniquement dans les fichiers src/app/**/page.tsx
interface FeatureProps {
  // props si nécessaire
}

export default function Feature42({ }: FeatureProps) {
  return (
    <section className="py-24 bg-white">
      <Container>
        {/* contenu */}
      </Container>
    </section>
  )
}
```

---

## Pull Requests

- Titre : même format que le commit (`feat: ... (SLK-N)`)
- Base : toujours `staging`
- Description : lien vers le ticket Linear + résumé des changements
- Au moins une review avant merge (sauf hotfix critique)

---

## CI / Génération IA

Deux workflows s'exécutent automatiquement quand une issue GitHub reçoit le label `ai-generate` :

- **ai-code-generator** : génère `Feature-{N}.tsx` + met à jour `page.tsx`, ouvre une PR vers `staging`
- **ai-design-generator** : génère un prompt v0.dev posté en commentaire de l'issue

Secret requis : `ANTHROPIC_API_KEY` dans les settings GitHub du repo.
